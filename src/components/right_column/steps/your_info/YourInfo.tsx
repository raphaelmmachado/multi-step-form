import { useFormik } from "formik";
import * as Yup from "yup";
import { StepProps } from "../../../../types/typings";
import Input from "./Input";

export default function YourInfo({ setSummary, setCurrentIndex }: StepProps) {
  const namePattern = /^[a-zA-ZÀ-ÿ\s]+$/;
  const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const phonePattern =
    /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;
  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "" },
    //schema
    validationSchema: Yup.object({
      //name
      name: Yup.string()
        .matches(namePattern, {
          message: "Name must have only space and letters",
          excludeEmptyString: true,
        })
        .max(60, "Name must have less than 60 characters.")
        .required("Name is required"),

      //email
      email: Yup.string()
        .matches(emailPattern, {
          message: "Email is not valid.",
          excludeEmptyString: true,
        })
        .email()
        .required("Email is required"),

      //phone
      phone: Yup.string()
        .matches(phonePattern, {
          message: "Phone Number should be only numbers",
          excludeEmptyString: true,
        })
        .required("Phone number is required.")
        .min(10, "Phone Number example: +1 234 567 890"),
    }),

    onSubmit: (values) => {
      setSummary((prev) => ({ ...prev, ...values }));
      setCurrentIndex((prev) => prev + 1);
    },
  });
  return (
    <>
      {" "}
      <header className="mb-8">
        <h1 className="font-bold text-2xl text-blue-marine">Personal info</h1>{" "}
        <p className="text-gray-cool">
          Please provide your name, email address and phone number
        </p>
      </header>
      <form className={`flex flex-col `} onSubmit={formik.handleSubmit}>
        <Input
          id="name"
          title="Name"
          type="text"
          placeholder="e.g Stephen King"
          required={true}
          value={formik.values.name}
          errors={formik.errors.name}
          touched={formik.touched.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        <Input
          title="Email Address"
          id="email"
          type="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="e.g stephenking@lorem.com"
          maxLength={60}
          required
          errors={formik.errors.email}
          touched={formik.touched.email}
        />
        <Input
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          errors={formik.errors.phone}
          touched={formik.touched.phone}
          required={true}
          title="Phone Number"
          type="tel"
          id="phone"
          placeholder="e.g +1 234 567 890"
        />

        <button
          type="submit"
          className="mt-8 p-3 bg-blue-marine  hover:bg-blue-purplish text-indigo-50 max-w-fit rounded-lg self-end"
        >
          Next Step
        </button>
      </form>
    </>
  );
}
