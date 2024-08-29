import { createBrowserRouter } from 'react-router-dom';

import { paths } from '@/editor/navigation/paths';
import { AbTests } from '@/editor/navigation/routes/ab-tests';
import { AbTest } from '@/editor/navigation/routes/ab-tests/ab-test';
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
import { Personalizations } from '@/editor/navigation/routes/personalizations';
import { Personalization } from '@/editor/navigation/routes/personalizations/personalization';
import { Projects } from '@/editor/navigation/routes/projects';
import { Project } from '@/editor/navigation/routes/projects/project';
import { Schemas } from '@/editor/navigation/routes/schemas';
import { Schema } from '@/editor/navigation/routes/schemas/schema';
import { Settings } from '@/editor/navigation/routes/settings';
import { Teams } from '@/editor/navigation/routes/teams';
import { Team } from '@/editor/navigation/routes/teams/team';

const router = createBrowserRouter([
    {
        path: paths.dashboard,
        Component: Dashboard,
    },
    {
        path: paths.settings,
        Component: Settings,
    },
    {
        path: paths.devices,
        Component: Devices,
    },
    {
        path: paths.account,
        Component: Account,
    },
    {
        path: paths.accountCreate,
        Component: CreateAccount,
    },
    {
        path: paths.accountForgot,
        Component: ForgotPassword,
    },
    {
        path: paths.accountLogin,
        Component: AccountLogin,
    },
    {
        path: paths.projects,
        Component: Projects,
    },
    {
        path: paths.project,
        Component: Project,
    },
    {
        path: paths.schemas,
        Component: Schemas,
    },
    {
        path: paths.schema,
        Component: Schema,
    },
    {
        path: paths.components,
        Component: Components,
    },
    {
        path: paths.component,
        Component: Component,
    },
    {
        path: paths.methods,
        Component: Methods,
    },
    {
        path: paths.method,
        Component: Method,
    },
    {
        path: paths.abTests,
        Component: AbTests,
    },
    {
        path: paths.abTest,
        Component: AbTest,
    },
    {
        path: paths.personalizations,
        Component: Personalizations,
    },
    {
        path: paths.personalization,
        Component: Personalization,
    },
    {
        path: paths.teams,
        Component: Teams,
    },
    {
        path: paths.team,
        Component: Team,
    },
]);

export { router };
