import { RouterProvider as CoreRouterProvider } from "react-router-dom";

import { router } from "@/editor/navigation/router";

const RouterProvider: React.FC = () => <CoreRouterProvider router={router} />;

export { RouterProvider };
