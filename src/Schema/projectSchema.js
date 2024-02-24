import * as Yup from "yup";
export const CreatProjectSchema = Yup.object().shape({
  projectName: Yup.string().required("Project Name is Required"),
  clientId: Yup.object()
    .shape({ label: Yup.string(), value: Yup.string() })
    .required("Please Select a Client"),
  startFrom: Yup.date()
    .required("Start Date is Required")
    .nullable()
    .default(undefined),
  endsOn: Yup.date().when("startFrom", (startDate, schema) => {
    return (
      startDate[0] &&
      schema.min(
        startDate[0],
        "End Date must later from or equal to Start Date"
      )
    );
  }),
});
