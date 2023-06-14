import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  status: yup.string().required(),
  chef_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
