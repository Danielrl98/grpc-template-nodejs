import { appModule } from "./module";

const grpc = require("@grpc/grpc-js");

async function main() {
  const PORT = "50051";
  const server = new grpc.Server();

  await appModule(server)

  server.bindAsync(
    `0.0.0.0:${PORT}`,
    grpc.ServerCredentials.createInsecure(),
    () => {
      console.log(`Servidor gRPC rodando em http://localhost:${PORT}`);
      server.start();
    }
  );
}

main();
