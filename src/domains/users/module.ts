import { MyMethod } from "./controller";

export interface IusersGrpc {
  MyMethod: Function;
  MyMethod2: Function;
}

export const user: IusersGrpc = {
  MyMethod: MyMethod,
  MyMethod2: MyMethod,
};
