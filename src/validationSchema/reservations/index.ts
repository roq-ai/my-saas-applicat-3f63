import * as yup from 'yup';

export const reservationValidationSchema = yup.object().shape({
  date_time: yup.date().required(),
  status: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
