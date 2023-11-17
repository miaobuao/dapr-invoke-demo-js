import { DaprClient, CommunicationProtocolEnum, HttpMethod } from "@dapr/dapr";

const appId = process.env.APP_ID;
console.log(`App ID: ${appId}`);

const daprHost = "127.0.0.1";
const daprPort = process.env.DAPR_GRPC_PORT;

console.log(`🌹 ${daprHost}:${daprPort}`);
const client = new DaprClient({
  daprHost,
  daprPort,
  communicationProtocol: CommunicationProtocolEnum.GRPC,
});

const msg = client.invoker.invoke("server", "say-hi", HttpMethod.POST);

msg.then((data) => {
  console.log(data);
});
