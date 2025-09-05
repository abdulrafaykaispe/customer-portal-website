"use client";

import PlusIcon from "/public/process/plus-icon.svg";
import MinusIcon from "/public/process/minus-icon.svg";
import ArrowIcon from "/public/process/arrow-icon.svg";

import { disposableEmails } from "@/data/emails";
import { formatNumberWithCommas } from "@/utils/helpers";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { loadStripe } from "@stripe/stripe-js";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import Image from "next/image";
import Link from "next/link";

const ProcessFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(
      /^[A-Za-z\s'-]+$/,
      "Name cannot contain numbers or special characters"
    ),
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .test("not-disposable", "Corporate emails only", (value) => {
      if (value) {
        const domain = value.split("@")[1];
        return !disposableEmails.has(domain);
      }
      return true;
    }),
  phone: Yup.string()
    .required("Phone number required")
    .test("is-valid-phone", "Invalid phone number", (value) =>
      isValidPhoneNumber(value)
    ),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/^\S+$/, "Password must not contain spaces"),
  companyName: Yup.string()
    .required("Company name is required")
    .matches(
      /^[A-Za-z0-9\s']+$/,
      "Company name cannot contain special characters"
    ),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions"
  ),
});

const paymentSchema = Yup.object().shape({
  paymentMethod: Yup.string().required("Payment method is required"),
});

export default function ProcessForm() {
  const [serverError, setServerError] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyExists, setCompanyExists] = useState(false);
  const [companyErrorMessage, setCompanyErrorMessage] = useState("");
  const [isCheckingCompanyName, setIsCheckingCompanyName] = useState(false);
  const [scrollToPaypal, setScrollToPaypal] = useState(false);
  const paypalButtonRef = useRef(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  const duration = searchParams.get("duration");
  const plan = searchParams.get("plan");
  const price = parseFloat(searchParams.get("price") || "0");
  const users = parseInt(searchParams.get("users") || "5");
  const [currentUsers, setCurrentUsers] = useState(users);

  const durationFactor = {
    Monthly: 1,
    "1 Year": 12,
    "2 Years": 24,
    "3 Years": 36,
  };

  const totalPrice = price * currentUsers * durationFactor[duration];

  useEffect(() => {
    const controller = new AbortController();
    const debounceTimeout = 750;
    let timeoutId;

    const checkCompanyName = async () => {
      setIsCheckingCompanyName(true);
      if (plan !== "free" && companyName) {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tenant/checkUniqueCompany`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                company_name: companyName,
                plan: plan === "advanced" ? "advance" : plan,
              }),
              signal: controller.signal,
            }
          );

          if (response.ok) {
            setCompanyExists(false);
            setCompanyErrorMessage("");
          } else if (response.status === 400) {
            setCompanyExists(true);
            setCompanyErrorMessage(
              "Company name already exists with this plan"
            );
          } else if (
            response.status === 400 ||
            response.status === 404 ||
            response.status === 500
          ) {
            setCompanyExists(true);
            setCompanyErrorMessage("Server error occured, try again");
          } else {
            setCompanyErrorMessage("Error checking company name, try again");
          }
        } catch (error) {
          if (error.name === "AbortError") {
            setCompanyErrorMessage("Request was aborted, try again");
          } else {
            setCompanyErrorMessage("Unexpected error occurred, try again");
          }
        } finally {
          setIsCheckingCompanyName(false);
        }
      } else {
        setIsCheckingCompanyName(false);
      }
    };

    const debouncedCheckCompanyName = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkCompanyName, debounceTimeout);
    };

    debouncedCheckCompanyName();

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [companyName, plan]);

  useEffect(() => {
    if (scrollToPaypal && paypalButtonRef.current) {
      window.scrollBy({ top: 300, behavior: "smooth" });
      setScrollToPaypal(false);
    }
  }, [scrollToPaypal]);

  const handleUserIncrease = () => {
    setCurrentUsers((prevUsers) => prevUsers + 1);
  };

  const handleUserDecrease = () => {
    setCurrentUsers((prevUsers) => Math.max(5, prevUsers - 1));
  };

  const handlePayment = (paidPlanPayload) => {
    if (paidPlanPayload.payment_method === "stripe") {
      createStripePayment(paidPlanPayload);
    } else if (paidPlanPayload.payment_method === "paypal") {
      createPaypalPayment(paidPlanPayload);
    }
  };

  const createStripePayment = async (paidPlanPayload) => {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

    if (!stripe) {
      throw new Error("Stripe failed to load");
    }

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/global/paymentGateway/stripe/create-payment-subscription`,
        paidPlanPayload
      );

      const session = response.data;

      if (!session.id) {
        throw new Error("Invalid Stripe session");
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        throw new Error("Stripe Checkout Error: " + error.message);
      } else {
        router.replace(`/success`);
      }
    } catch (error) {
      throw new Error("Stripe payment error:" + error.message);
    }
  };

  const createPaypalPayment = async (paidPlanPayload) => {
    try {
      const paypalButtons = paypal.Buttons({
        style: {
          layout: "vertical",
          color: "silver",
          shape: "rect",
          label: "paypal",
        },
        createOrder: async (data, actions) => {
          try {
            const response = await axios.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders`,
              paidPlanPayload
            );

            const orderId = response.data.id;
            if (!orderId) {
              throw new Error("Order ID not found in response");
            }

            return orderId;
          } catch (error) {
            throw new Error(
              "Error creating order: " +
                (error.response ? error.response.data : error.message)
            );
          }
        },
        onApprove: async (data, actions) => {
          try {
            await axios.post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/orders/${data.orderID}/capture`
            );

            router.push("/success");
          } catch (error) {
            throw new Error("Error capturing payment: " + error.message);
          }
        },
        onError: (error) => {
          throw new Error("Error creating PayPal payment: " + error.message);
        },
      });

      paypalButtons.render("#paypal-button");
      setScrollToPaypal(true);
    } catch (error) {
      throw new Error("Error creating PayPal payment: " + error.message);
    }
  };

  const validationSchema =
    plan !== "free"
      ? ProcessFormSchema.concat(paymentSchema)
      : ProcessFormSchema;

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        companyName: "",
        plan: plan,
        paymentMethod: "",
        termsAndConditions: false,
      }}
      context={{ plan: plan }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        const formatPlanDuration = (duration) => {
          switch (duration.toLowerCase()) {
            case "monthly":
              return "monthly";
            case "1 year":
              return "1-year";
            case "2 years":
              return "2-year";
            case "3 years":
              return "3-year";
            default:
              return duration.toLowerCase();
          }
        };

        const formatPlanName = (originalPlan) => {
          switch (originalPlan.toLowerCase()) {
            case "basic":
              return "basic";
            case "advanced":
              return "advance";
            case "free":
              return "free";
            default:
              return originalPlan.toLowerCase();
          }
        };

        if (companyErrorMessage || isCheckingCompanyName) {
          setSubmitting(false);
          return;
        }
        setSubmitting(true);

        const freePlanPayload = {
          name: values.name,
          company_name: values.companyName,
          phone_number: values.phone,
          email: values.email,
          password: values.password,
          plan: formatPlanName(plan),
        };

        const paidPlanPayload = {
          name: values.name,
          company_name: values.companyName,
          phone_number: values.phone,
          email: values.email,
          password: values.password,
          plan: formatPlanName(plan),
          plan_charging_duration: formatPlanDuration(duration),
          payment_method: values.paymentMethod.toLowerCase(),
          price: totalPrice,
          users: Number(currentUsers),
        };

        if (plan === "free") {
          setServerError("");
          axios
            .post(
              `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/tenant/createCompanyFreeVersion`,
              freePlanPayload
            )
            .then(() => {
              router.push("/success");
            })
            .catch((error) => {
              if (error.response && error.response.status === 409) {
                setServerError("Company name already exists with this plan");
              } else {
                console.error("Error sending data to backend:", error);
                setServerError(
                  "An unexpected error occurred. Please try again."
                );
              }
            })
            .finally(() => {
              setSubmitting(false);
            });
        } else {
          handlePayment(paidPlanPayload);
        }
      }}
    >
      {({ values, setFieldValue, isSubmitting, errors, touched }) => (
        <Form>
          <div className="lg:container-large md:container-medium sm:container-small md:text-left sm:text-center">
            <div className="bg-[#FAFAFA] grid lg:grid-cols-[2fr_1fr] sm:grid-cols-1 gap-8 border-[1.6px] -border-dawn-pink p-8 rounded-[14px] ">
              <div className="bg-white grid md:grid-cols-2 sm:grid-cols-1 gap-8 p-8 border-[1.6px] border-[#ECECEC] rounded-[13.35px]">
                <div className="md:col-span-2 sm:col-span-1">
                  <p className="md:text-2xl sm:text-xl -text-jungle-green font-semibold text-center">
                    Account Information
                  </p>
                </div>
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name*"
                    className={`input-fields ${
                      touched.name && errors.name ? "border-red-600" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    as={PhoneInput}
                    international
                    name="phone"
                    placeholder="Phone*"
                    className={`-bg-catskill-white rounded-[4px] text-[14px] -text-jungle-black outline-none placeholder:-text-jungle-black placeholder:opacity-100 overflow-hidden ${
                      touched.phone && errors.phone ? "border-red-600" : ""
                    }`}
                    value={values.phone}
                    onChange={(value) => setFieldValue("phone", value)}
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className={`input-fields ${
                      touched.email && errors.email ? "border-red-600" : ""
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password*"
                    autoComplete="current-password"
                    className={`input-fields ${
                      touched.password && errors.password
                        ? "border-red-600"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 text-sm mt-1"
                  />
                </div>

                <div>
                  <Field
                    type="text"
                    name="companyName"
                    placeholder="Company Name*"
                    value={companyName}
                    onChange={(e) => {
                      setCompanyName(e.target.value);
                      setFieldValue("companyName", e.target.value);
                      setCompanyExists(false);
                      setCompanyErrorMessage("");
                    }}
                    className={`input-fields ${
                      touched.companyName && errors.companyName
                        ? "border-red-600"
                        : ""
                    }`}
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="text-red-600 text-sm mt-1 -mb-4"
                  />
                  {companyExists && !errors.companyName && (
                    <div className="text-red-600 text-sm mt-1">
                      {companyErrorMessage}
                    </div>
                  )}
                  {serverError && (
                    <div className="text-red-600 text-sm mt-2 md:text-left sm:text-center">
                      {serverError}
                    </div>
                  )}
                  {isCheckingCompanyName && !errors.companyName && (
                    <div className="-text-purply-blue text-sm mt-1 flex items-center gap-2">
                      Checking company name
                      <div className="loader-small"></div>
                    </div>
                  )}
                </div>

                {plan !== "free" && (
                  <div>
                    <div className="relative">
                      <Field
                        as="select"
                        id="paymentMethod"
                        name="paymentMethod"
                        value={values.paymentMethod}
                        onChange={(e) =>
                          setFieldValue("paymentMethod", e.target.value)
                        }
                        className={`input-fields pr-10 ${
                          touched.paymentMethod && errors.paymentMethod
                            ? "border-red-600"
                            : ""
                        }`}
                      >
                        <option value="">Select Payment Type*</option>
                        <option value="stripe">Stripe</option>
                        <option value="paypal">PayPal</option>
                      </Field>

                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                          className="h-5 w-5 -text-jungle-green"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>

                    <ErrorMessage
                      name="paymentMethod"
                      component="div"
                      className="text-red-600 text-sm mt-1 -mb-4"
                    />
                  </div>
                )}

                <div className="flex flex-col gap-2 md:col-span-2 ml-0.5">
                  <div className="md:flex gap-2 items-center text-black">
                    <Field
                      type="checkbox"
                      name="termsAndConditions"
                      checked={values.termsAndConditions}
                      onChange={(e) =>
                        setFieldValue("termsAndConditions", e.target.checked)
                      }
                      className="size-4 md:mr-1 sm:mr-3"
                    />
                    <span className="text-[16px]">
                      I agree to the{" "}
                      <Link
                        href="/privacy-policy"
                        target="_blank"
                        className="-text-purply-blue underline cursor-pointer"
                      >
                        privacy policy
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/terms-and-conditions"
                        target="_blank"
                        className="-text-purply-blue underline cursor-pointer"
                      >
                        terms and conditions
                      </Link>
                      .
                    </span>
                  </div>
                  <ErrorMessage
                    name="termsAndConditions"
                    component="p"
                    className="text-red-600 text-sm"
                  />
                </div>
              </div>
              <div className="bg-white flex flex-col gap-5 -text-jungle-green p-8 border-[1.6px] border-[#ECECEC] rounded-[13.35px] text-xl">
                <p className="md:text-2xl sm:text-xl -text-jungle-green font-semibold text-center">
                  Plan Overview
                </p>
                <div className="flex flex-col gap-1.5">
                  <p className="text-[1rem] text-[#676767]">Selected Plan</p>
                  <span className="-bg-catskill-white py-2.5 -text-jungle-green text-center rounded-[10.2px] font-semibold">
                    {plan.charAt(0).toUpperCase() + plan.slice(1).toLowerCase()}
                  </span>
                </div>
                {plan !== "free" && (
                  <>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[1rem] text-[#676767]">Billing Term</p>
                      <span className="-bg-catskill-white py-2.5 -text-jungle-green text-center rounded-[10.2px] font-semibold">
                        {duration}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <p className="text-[1rem] text-[#676767]">Select Users</p>

                      <div className="-bg-catskill-white py-2.5 flex items-center justify-between px-4 text-center rounded-[10.2px] font-semibold">
                        <button
                          onClick={handleUserDecrease}
                          type="button"
                          className="size-7 -bg-red-orange text-white rounded-full flex items-center justify-center disabled:opacity-90"
                          disabled={currentUsers <= 5}
                        >
                          <Image src={MinusIcon} alt="plus icon" />
                        </button>
                        <span className="">{currentUsers}</span>
                        <button
                          onClick={handleUserIncrease}
                          type="button"
                          className="size-7 -bg-purply-blue text-white rounded-full flex items-center justify-center"
                        >
                          <Image src={PlusIcon} alt="plus icon" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
                <div className="flex flex-col gap-1.5">
                  <p className="text-[1rem] text-[#676767]">Total Amount</p>
                  <span className="-bg-catskill-white py-2.5 w-full -text-jungle-green text-center rounded-[10.2px] font-semibold">
                    <span className="text-[#ACACAC]">$</span>{" "}
                    {formatNumberWithCommas(totalPrice)}.00
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center">
              <button
                type="submit"
                className={`relative flex items-center justify-center bg-indigo-500 text-white rounded-full px-6 py-4 w-64 overflow-hidden group transition-all duration-300 ${
                  isSubmitting && plan !== "free" ? "hidden" : ""
                }`}
                disabled={isSubmitting}
              >
                <div className="absolute left-[2.5%] size-12 bg-white rounded-full transition-all duration-300 ease-in-out group-hover:w-[calc(100%-5%)] group-hover:left-[2.5%] flex items-center ">
                  <div className="relative w-full transition-all duration-300 ease-in-out group-hover:ml-48 ">
                    <div
                      className={`absolute ${
                        isSubmitting
                          ? "animate-fly-arrow"
                          : "top-[5%] -translate-y-1/2 left-[45%] -translate-x-1/2"
                      }`}
                    >
                      <Image
                        src={ArrowIcon}
                        alt="Submit"
                        className="text-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                <span className="relative text-center font-medium text-xl transition-all duration-300 group-hover:-text-purply-blue group-hover:z-10 ml-9 group-hover:-ml-9">
                  {isSubmitting ? "Submitting" : "Submit Now"}
                </span>
              </button>
            </div>

            <center className="text-center lg:mx-[27.75rem] md:mx-32">
              <div
                id="paypal-button"
                ref={paypalButtonRef}
                className="flex text-center justify-center w-auto mt-8"
              ></div>
            </center>
          </div>
        </Form>
      )}
    </Formik>
  );
}
