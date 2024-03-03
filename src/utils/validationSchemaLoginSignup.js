import * as Yup from "yup";
const validationSchemaLoginSignup = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(5).required("Password is required"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
  role: Yup.string().required("User Type is required"),
});
export default validationSchemaLoginSignup;
