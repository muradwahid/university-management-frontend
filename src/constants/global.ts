export const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Others", value: "others" },
];

export const departmentOptions = [
  { label: "HR", value: "hr manager" },
  { label: "Finance", value: "finance" },
  { label: "Management Department", value: "management department" },
];

export const bloodGroupOptions = [
  { label: "A+", value: "A+" },
  { label: "A-", value: "A-" },
  { label: "B+", value: "B+" },
  { label: "B-", value: "B-" },
  { label: "AB+", value: "AB+" },
  { label: "AB-", value: "AB-" },
  { label: "O+", value: "O+" },
  { label: "O-", value: "O-" },
];
export const facultyOptions = [
  { label: "Engineering", value: "Engineering" },
  {
    label: "Faculty of science and engineering",
    value: "Faculty of science and engineering",
  },
];
export const acDepartmentOptions = [
  { label: "CSE", value: "cse" },
  { label: "Software Engineering", value: "software engineering" },
];
export const acSemesterOptions = [
  { label: "Fall 2023", value: "fall 2023" },
  { label: "Autumn 2023", value: "autumn 2023" },
  { label: "Summer 2023", value: "summer 2023" },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthOptions = monthNames.map((month: string) => {
  return {
    label: month,
    value: month,
  };
});
