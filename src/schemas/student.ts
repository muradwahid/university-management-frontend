import * as yup from "yup";
export const studentSchema = yup.object().shape({
  password: yup.string().min(6).max(32).required(),
  student: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      middleName: yup.string().optional(),
      lastName: yup.string().required("Last name is required"),
    }),
    email: yup.string().email().required("Email is required"),
  }),
});