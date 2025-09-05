"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { disposableEmails } from "@/data/emails";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
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
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().optional(),
});

export default function ContactForm() {
  async function handleFormSubmission(
    values,
    { setSubmitting, setStatus, resetForm }
  ) {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/global/sendMail`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      resetForm();
      setStatus({ type: "success", message: "Message sent successfully!" });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.response?.data?.message || "Failed to send message",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={ContactFormSchema}
      onSubmit={handleFormSubmission}
    >
      {({ isSubmitting, errors, touched, status }) => (
        <Form>
          <div className="grid grid-cols-2 gap-4">
            <div className="md:col-span-1 sm:col-span-2">
              <Field
                type="text"
                name="name"
                placeholder="Name *"
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

            <div className="md:col-span-1 sm:col-span-2">
              <Field
                type="tel"
                name="phone"
                placeholder="Phone *"
                className={`input-fields ${
                  touched.phone && errors.phone ? "border-red-600" : ""
                }`}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>

            <div className="col-span-2">
              <Field
                type="email"
                name="email"
                placeholder="Email *"
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

            <div className="col-span-2">
              <Field
                as="textarea"
                name="message"
                placeholder="Message (Optional)"
                className={`input-fields ${
                  touched.message && errors.message ? "border-red-600" : ""
                }`}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-600 text-sm mt-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`col-span-2 w-full -bg-purply-blue text-white text-[16px] font-medium px-8 py-3 rounded-[30px] mt-4`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Now"}
          </button>

          {status && (
            <div
              className={`text-sm mt-1 text-center ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
