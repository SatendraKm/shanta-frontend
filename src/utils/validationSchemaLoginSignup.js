import * as Yup from "yup";
const validationSchemaLoginSignup = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(8).required("Password is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  userType: Yup.string().required("User Type is required"),
});
export default validationSchemaLoginSignup;
