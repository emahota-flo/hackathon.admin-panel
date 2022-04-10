import { HumanRequest } from '../../shared/interfaces/request';

export interface Review {
  id: string;
  title: string;
  text: string;
  cancelMessage?: string;
  requests: HumanRequest[];
}
