# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

![screenshot](./ss.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/raphaelmmachado/multi-step-form)
- Live Site URL: [netlify](https://multi-step-form-rm.netlify.app)

## My process

### Built with

- Typescript
- React
- Formik
- Yup
- Tailwindcss
- Flowbite
- Vite

### What I learned

Use formik and Yup to validate forms.

```
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
```

### Continued development

I still don't feel comfortable with regex.

### Useful resources

- [The Ultimate Guide To Forms In React Tutorial](https://www.youtube.com/watch?v=oPteQFUK42w) - by 'developedbyed'. This helped learn how to use formik and yup to validate form.

## Author

- Website - [Raphael Machado](https://raphaelmmachado.vercel.app/)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/rm0909)
- Twitter - [@yourusername](https://www.twitter.com/RaphaelmDev)
