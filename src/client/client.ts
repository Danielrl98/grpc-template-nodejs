const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const path = require("path");

async function handle() {
  const helloClient = getProProtoClient("hello", "HelloService");

  const userClient = getProProtoClient("user", "UserService");

  helloClient.SayHello({ name: "Daniel" }, (err: any, res: any) => {
    console.log("Hello ->", res.message);
  });

  userClient.MyMethod2({ name: true, teste: "1" }, (err: any, res: any) => {
    console.log("User ->", res.message);
  });
}

const PORT = 50051;

const getProProtoClient = (proName: string, protoService: string) => {
  const dirname = path.join(__dirname, "..", "..");

  const packageDefinition = protoLoader.loadSync(
    path.join(dirname, "proto", "hello.proto"),
    { includeDirs: [path.join(dirname, "proto")] }
  );

  const proto = grpc.loadPackageDefinition(packageDefinition);
  return new proto[`${proName}`][`${protoService}`](
    `localhost:${PORT}`,
    grpc.credentials.createInsecure()
  );
};

handle();
