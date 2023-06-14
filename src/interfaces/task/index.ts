import { UserInterface } from 'interfaces/user';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  status: string;
  chef_id: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  restaurant?: RestaurantInterface;
  _count?: {};
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  chef_id?: string;
  restaurant_id?: string;
}
