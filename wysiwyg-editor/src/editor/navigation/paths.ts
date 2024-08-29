import { Segments } from '@/editor/navigation/enum';

const { DEVICES, SETTINGS, PROJECTS, ACCOUNT, CREATE, FORGOT, LOGIN, SCHEMAS, COMPONENTS, METHODS, TEAMS, AB_TESTS, PERSONALIZATIONS } = Segments;

const paths = {
    dashboard: '/',
    settings: `/${SETTINGS}`,
    devices: `/${DEVICES}`,
    account: `/${ACCOUNT}/:accountId`,
    accountCreate: `/${ACCOUNT}/${CREATE}`,
    accountForgot: `/${ACCOUNT}/${FORGOT}`,
    accountLogin: `/${ACCOUNT}/${LOGIN}`,
    projects: `/${PROJECTS}`,
    project: `/${PROJECTS}/:projectId`,
    schemas: `/${SCHEMAS}`,
    schema: `/${SCHEMAS}/:schemaId`,
    components: `/${COMPONENTS}`,
    component: `/${COMPONENTS}/:componentId`,
    methods: `/${METHODS}`,
    method: `/${METHODS}/:methodId`,
    abTests: `/${AB_TESTS}`,
    abTest: `/${AB_TESTS}/:abTestId`,
    personalizations: `/${PERSONALIZATIONS}`,
    personalization: `/${PERSONALIZATIONS}/:personalizationId`,
    teams: `/${TEAMS}`,
    team: `/${TEAMS}/:teamId`,
};

export { paths };
