import * as yup from "yup";

export const schema = yup.object().shape({
  rideType: yup.string().required(),
  from: yup.string().required(),
  to: yup.string().required(),
  flightNumber: yup.string().required(),
  specialComment: yup.string().max(150),
  date: yup.string().required(),
});
