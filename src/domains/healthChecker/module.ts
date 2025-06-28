function helloWorld(call: any, callback: any) {
  const name = call.request.name;
  callback(null, { message: `Health checker ${name}` });
}

export interface IHealtchCheckGrpc {
  SayHello: Function;
}

export const healthCheck: IHealtchCheckGrpc = {
  SayHello: helloWorld,
};
