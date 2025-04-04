import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

// export default [index("pages/home.tsx")] satisfies RouteConfig;

export default [
  layout("./layout.tsx", [
    index("pages/home.tsx"),
    // route("about", "routes/about.tsx"),
  ]),
] satisfies RouteConfig;
