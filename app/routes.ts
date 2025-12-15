import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("font-test", "routes/font-test.tsx"),
    route("recipient-details", "routes/recipient-details.tsx"),
] satisfies RouteConfig;
