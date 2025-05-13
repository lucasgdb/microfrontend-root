import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@my-app/home",
  // @ts-expect-error ESM
  app: () => import("@my-app/home"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
