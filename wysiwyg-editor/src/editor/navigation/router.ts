import { createBrowserRouter } from "react-router-dom";

import { Segments } from "@/editor/navigation/enum";
import { Account } from "@/editor/navigation/routes/account";
import { CreateAccount } from "@/editor/navigation/routes/account/create";
import { ForgotPassword } from "@/editor/navigation/routes/account/forgot";
import { AccountLogin } from "@/editor/navigation/routes/account/login";
import { Dashboard } from "@/editor/navigation/routes/dashboard";
import { Projects } from "@/editor/navigation/routes/projects";
import { Project } from "@/editor/navigation/routes/projects/project";
import { Schemas } from "@/editor/navigation/routes/projects/project/schemas";
import { Schema } from "@/editor/navigation/routes/projects/project/schemas/schema";
import { Settings } from "@/editor/navigation/routes/settings";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Dashboard,
  },
  {
    path: `/${Segments.SETTINGS}`,
    Component: Settings,
  },
  {
    path: `/${Segments.ACCOUNT}/:accountId`,
    Component: Account,
  },
  {
    path: `/${Segments.ACCOUNT}/${Segments.CREATE}`,
    Component: CreateAccount,
  },
  {
    path: `/${Segments.ACCOUNT}/${Segments.FORGOT}`,
    Component: ForgotPassword,
  },
  {
    path: `/${Segments.ACCOUNT}/${Segments.LOGIN}`,
    Component: AccountLogin,
  },
  {
    path: `/${Segments.PROJECTS}`,
    Component: Projects,
  },
  {
    path: `/${Segments.PROJECTS}/:projectId`,
    Component: Project,
  },
  {
    path: `/${Segments.PROJECTS}/:projectId/${Segments.SCHEMAS}`,
    Component: Schemas,
  },
  {
    path: `/${Segments.PROJECTS}/:projectId/${Segments.SCHEMAS}/:schemaId`,
    Component: Schema,
  },
]);

export { router };
