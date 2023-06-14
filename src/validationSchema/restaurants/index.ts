import * as yup from 'yup';
import { menuItemValidationSchema } from 'validationSchema/menu-items';
import { reservationValidationSchema } from 'validationSchema/reservations';
import { taskValidationSchema } from 'validationSchema/tasks';

export const restaurantValidationSchema = yup.object().shape({
  description: yup.string(),
  image: yup.string(),
  name: yup.string().required(),
  user_id: yup.string().nullable().required(),
  menu_item: yup.array().of(menuItemValidationSchema),
  reservation: yup.array().of(reservationValidationSchema),
  task: yup.array().of(taskValidationSchema),
});
