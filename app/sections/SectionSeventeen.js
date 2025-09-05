"use client";

import SectionHeading from "../components/SectionHeading";

import { Formik, Form, Field } from "formik";
import TextareaAutosize from "react-textarea-autosize";
import * as Yup from "yup";
import axios from "axios";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    ),
  phoneNumber: Yup.string(),
  message: Yup.string(),
});

const fields = [
  { name: "name", type: "text", placeholder: "Name *" },
  { name: "phoneNumber", type: "tel", placeholder: "Phone" },
  { name: "email", type: "email", placeholder: "Email *" },
];

const handleFormSubmission = async (
  values,
  { setSubmitting, resetForm, setStatus }
) => {
  const formDataPayload = {
    name: values.name,
    email: values.email,
    phone: values.phoneNumber,
    message: values.message,
  };

  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/global/sendMail`,
      formDataPayload
    );
    resetForm();
    setStatus({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    setStatus({
      success: false,
      message: "Error sending message. Please try again.",
    });
  } finally {
    setSubmitting(false);
  }
};

export default function SectionSeventeen({ content }) {
  const {
    homePage: { sectionSeventeen },
  } = content;

  return (
    <section className="lg:container-large md:container-medium sm:container-small lg:margin-bottom-large sm:margin-bottom-small">
      <div className="bg-gradient-to-b -from-purply-blue/20 to-white grid lg:grid-cols-[1fr_1.5fr] sm:grid-cols-1 items-start gap-8 md:p-20 sm:p-6 rounded-[16.28px]">
        <div>
          <SectionHeading
            containerClass="lg:text-left"
            heading={sectionSeventeen.mainHeading}
            paragraph={sectionSeventeen.mainParagraph}
            paragraphClass="lg:px-0"
          />
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phoneNumber: "",
            message: "",
          }}
          validationSchema={ContactSchema}
          onSubmit={(values, { setSubmitting, resetForm, setStatus }) =>
            handleFormSubmission(values, {
              setSubmitting,
              resetForm,
              setStatus,
            })
          }
        >
          {({ isSubmitting, errors, touched, status }) => (
            <Form className="bg-[#ffffff0a] grid md:grid-cols-2 sm:grid-cols-1 gap-10">
              {fields.map((field, index, array) => (
                <div
                  key={index}
                  className={`${
                    index === array.length - 1 ? "md:col-span-2" : "col-span-1"
                  }`}
                >
                  <Field
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`bg-transparent w-full py-3 border-b-[1px] border-b-[#7B7B7B] border-opacity-75 text-black font-medium placeholder:text-black focus:outline-none ${
                      errors[field.name] && touched[field.name]
                        ? "border-b-red-500"
                        : ""
                    }`}
                  />
                  {errors[field.name] && touched[field.name] && (
                    <div className="text-red-500 text-sm mt-1.5">
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              ))}

              <div className="md:col-span-2">
                <Field name="message">
                  {({ field }) => (
                    <TextareaAutosize
                      {...field}
                      placeholder="Message"
                      minRows={1}
                      className={`bg-transparent w-full py-3 border-b-[1px] border-b-[#7B7B7B] border-opacity-75 text-black font-medium placeholder:text-black focus:outline-none resize-none overflow-hidden ${
                        errors.message && touched.message
                          ? "border-b-red-500"
                          : ""
                      }`}
                    />
                  )}
                </Field>
                {errors.message && touched.message && (
                  <div className="text-red-500 text-sm mt-1.5">
                    {errors.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col items-center md:col-span-2 sm:col-span-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`-bg-purply-blue text-white px-9 md:py-3 sm:py-2.5 md:text-[0.9rem] sm:text-[0.8rem] rounded-[28.19px] font-medium ${
                    isSubmitting ? "opacity-70" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {status && status.message && (
                  <div
                    className={`text-sm mt-1.5 ${
                      status.success ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
