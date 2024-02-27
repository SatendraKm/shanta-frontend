import * as Yup from "yup";

const validationSchemaForm = Yup.object().shape({
  customerName: Yup.string().required("Customer name is required"),
  address: Yup.string(),
  contactNumber: Yup.string()
    .matches(/^\d{10}$/, "Contact number must be exactly 10 digits")
    .required("Contact number is required"),
  contactNumber2: Yup.string().matches(
    /^\d{10}$/,
    "Contact number must be exactly 10 digits"
  ),
  email: Yup.string().email("Invalid email"),
  gstin: Yup.string().matches(/^([A-Z0-9]{15})$/, "Invalid GSTIN format"),
  panNumber: Yup.string().matches(
    /^([A-Z]{5}[0-9]{4}[A-Z]{1})$/,
    "Invalid PAN format"
  ),
  bankName: Yup.string().required("Bank name is required"),
  accountNumber: Yup.string()
    .matches(
      /^\d{9,12}$/,
      "Bank account number must be between 9 and 12 digits"
    )
    .required("Bank account number is required"),
  accountName: Yup.string().required("Bank account name is required"),
  ifscCode: Yup.string()
    .matches(/^[A-Za-z]{4}\d{7}$/, "Invalid IFSC code format")
    .required("IFSC code is required"),
  branchName: Yup.string().required("Branch name is required"),
  itemSummary: Yup.string().required("Item summary is required"),
  billNumber: Yup.string()
    .required("Bill number is required")
    .matches(/^[a-zA-Z0-9]+$/, "Bill number must be alphanumeric"),
  billDate: Yup.string()
    .required("Bill date is required")
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/,
      "Please enter a valid date in the format dd/mm/yyyy"
    ),
  billReceivingDate: Yup.string()
    .required("Bill receiving date is required")
    .matches(
      /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/,
      "Please enter a valid date in the format dd/mm/yyyy"
    ),
  documentEntryNumber: Yup.string().required(
    "Document entry number is required"
  ),
  totalBillAmount: Yup.string()
    .matches(/^[0-9]+$/, "Bill amount must be a number")
    .required("Bank account number is required"),
  remark: "",
});

export default validationSchemaForm;
