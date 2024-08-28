import { createBrowserRouter } from 'react-router-dom';

import { Segments } from '@/editor/navigation/enum';
import { Account } from '@/editor/navigation/routes/account';
import { CreateAccount } from '@/editor/navigation/routes/account/create';
import { ForgotPassword } from '@/editor/navigation/routes/account/forgot';
import { AccountLogin } from '@/editor/navigation/routes/account/login';
import { Components } from '@/editor/navigation/routes/components';
import { Component } from '@/editor/navigation/routes/components/component';
import { Dashboard } from '@/editor/navigation/routes/dashboard';
import { Devices } from '@/editor/navigation/routes/devices';
import { Methods } from '@/editor/navigation/routes/methods';
import { Method } from '@/editor/navigation/routes/methods/method';
import { Projects } from '@/editor/navigation/routes/projects';
import { Project } from '@/editor/navigation/routes/projects/project';
import { Schemas } from '@/editor/navigation/routes/schemas';
import { Schema } from '@/editor/navigation/routes/schemas/schema';
import { Settings } from '@/editor/navigation/routes/settings';
import { Team } from '@/editor/navigation/routes/team';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Dashboard,
    },
    {
        path: `/${Segments.SETTINGS}`,
        Component: Settings,
    },
    {
        path: `/${Segments.TEAM}`,
        Component: Team,
    },
    {
        path: `/${Segments.DEVICES}`,
        Component: Devices,
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
        path: `/${Segments.SCHEMAS}`,
        Component: Schemas,
    },
    {
        path: `/${Segments.SCHEMAS}/:schemaId`,
        Component: Schema,
    },
    {
        path: `/${Segments.COMPONENTS}`,
        Component: Components,
    },
    {
        path: `/${Segments.COMPONENTS}/:componentId`,
        Component: Component,
    },
    {
        path: `/${Segments.METHODS}`,
        Component: Methods,
    },
    {
        path: `/${Segments.METHODS}/:componentId`,
        Component: Method,
    },
]);

export { router };
