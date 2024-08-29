interface RouteParams {
    dashboard: {};
    settings: {};
    account: { accountId: string };
    accountCreate: {};
    accountForgot: {};
    accountLogin: {};
    projects: {};
    project: { projectId: string };
    schemas: {};
    schema: { schemaId: string };
    components: {};
    component: { componentId: string };
    methods: {};
    method: { methodId: string };
    abTests: {};
    abTest: { abTestId: string };
    personalizations: {};
    personalization: { personalizationId: string };
    teams: {};
    team: { teamId: string };
    devices: {};
}

export type { RouteParams };
