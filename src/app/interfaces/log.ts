import { Snail } from './snail';

export interface Log extends Snail {
  time: string;
  result: string;
}
