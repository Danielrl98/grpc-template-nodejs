const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
import path from "path";
import { user } from "../domains/users/module";
import { healthCheck } from "../domains/healthChecker/module";

export async function appModule(server: any) {
  const HelloProto = getProto("hello");
  const userProto = getProto("user");

  server.addService(HelloProto.HelloService.service, healthCheck);
  server.addService(userProto.UserService.service, user);
}

const getProto = (nameProto: string) => {
  const dirname = path.join(__dirname, "..", "..");
  const userProtoPath = path.join(dirname, "proto", `${nameProto}.proto`);
  const userDefinition = protoLoader.loadSync(userProtoPath);
  return grpc.loadPackageDefinition(userDefinition)[`${nameProto}`];
};
