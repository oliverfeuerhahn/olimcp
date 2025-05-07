# Authentication

Types:

- <code><a href="./src/resources/authentication.ts">AuthenticationGenerateJwtResponse</a></code>

Methods:

- <code title="get /authentication">client.authentication.<a href="./src/resources/authentication.ts">generateJwt</a>({ ...params }) -> unknown</code>

# Credentials

## Users

Types:

- <code><a href="./src/resources/credentials/users.ts">UserDeleteCredentialResponse</a></code>
- <code><a href="./src/resources/credentials/users.ts">UserRetrieveAllResponse</a></code>

Methods:

- <code title="delete /credentials/{credentialId}/users/{userId}">client.credentials.users.<a href="./src/resources/credentials/users.ts">deleteCredential</a>(userID, { ...params }) -> unknown</code>
- <code title="get /credentials/users/{userId}">client.credentials.users.<a href="./src/resources/credentials/users.ts">retrieveAll</a>(userID, { ...params }) -> unknown</code>

# Events

Types:

- <code><a href="./src/resources/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/events.ts">EventTriggerResponse</a></code>

Methods:

- <code title="get /events">client.events.<a href="./src/resources/events.ts">list</a>({ ...params }) -> unknown</code>
- <code title="post /events/run">client.events.<a href="./src/resources/events.ts">trigger</a>({ ...params }) -> unknown</code>

# Headless

Types:

- <code><a href="./src/resources/headless.ts">HeadlessCompleteInstallationResponse</a></code>
- <code><a href="./src/resources/headless.ts">HeadlessCreateCredentialResponse</a></code>
- <code><a href="./src/resources/headless.ts">HeadlessCreateOAuthLinkResponse</a></code>
- <code><a href="./src/resources/headless.ts">HeadlessEditInstallationResponse</a></code>
- <code><a href="./src/resources/headless.ts">HeadlessStartInstallationResponse</a></code>

Methods:

- <code title="post /headless/completeInstallation">client.headless.<a href="./src/resources/headless.ts">completeInstallation</a>({ ...params }) -> unknown</code>
- <code title="post /headless/credentials">client.headless.<a href="./src/resources/headless.ts">createCredential</a>({ ...params }) -> unknown</code>
- <code title="get /headless/oauthUrl">client.headless.<a href="./src/resources/headless.ts">createOAuthLink</a>({ ...params }) -> unknown</code>
- <code title="post /headless/editInstallation">client.headless.<a href="./src/resources/headless.ts">editInstallation</a>({ ...params }) -> unknown</code>
- <code title="post /headless/startInstallation">client.headless.<a href="./src/resources/headless.ts">startInstallation</a>({ ...params }) -> unknown</code>

# Integrations

Types:

- <code><a href="./src/resources/integrations.ts">IntegrationRetrieveResponse</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationCreateInstallLinkResponse</a></code>
- <code><a href="./src/resources/integrations.ts">IntegrationListAllResponse</a></code>

Methods:

- <code title="get /integrations/{integrationId}">client.integrations.<a href="./src/resources/integrations.ts">retrieve</a>(integrationID, { ...params }) -> unknown</code>
- <code title="get /integrations">client.integrations.<a href="./src/resources/integrations.ts">list</a>({ ...params }) -> unknown</code>
- <code title="get /integrations/{integrationId}/install-url">client.integrations.<a href="./src/resources/integrations.ts">createInstallLink</a>(integrationID, { ...params }) -> unknown</code>
- <code title="get /integrations/all">client.integrations.<a href="./src/resources/integrations.ts">listAll</a>({ ...params }) -> unknown</code>

# Installations

Types:

- <code><a href="./src/resources/installations.ts">InstallationRetrieveResponse</a></code>
- <code><a href="./src/resources/installations.ts">InstallationListResponse</a></code>
- <code><a href="./src/resources/installations.ts">InstallationDeleteResponse</a></code>
- <code><a href="./src/resources/installations.ts">InstallationActivateResponse</a></code>
- <code><a href="./src/resources/installations.ts">InstallationDeactivateResponse</a></code>
- <code><a href="./src/resources/installations.ts">InstallationUpgradeResponse</a></code>

Methods:

- <code title="get /installations/{installationId}">client.installations.<a href="./src/resources/installations.ts">retrieve</a>(installationID, { ...params }) -> unknown</code>
- <code title="get /installations">client.installations.<a href="./src/resources/installations.ts">list</a>({ ...params }) -> unknown</code>
- <code title="delete /installations/{installationId}/">client.installations.<a href="./src/resources/installations.ts">delete</a>(installationID, { ...params }) -> unknown</code>
- <code title="put /installations/{installationId}/activate">client.installations.<a href="./src/resources/installations.ts">activate</a>(installationID, { ...params }) -> unknown</code>
- <code title="put /installations/{installationId}/deactivate">client.installations.<a href="./src/resources/installations.ts">deactivate</a>(installationID, { ...params }) -> unknown</code>
- <code title="put /installations/{installationId}/upgrade">client.installations.<a href="./src/resources/installations.ts">upgrade</a>(installationID, { ...params }) -> unknown</code>

# Connectors

Types:

- <code><a href="./src/resources/connectors.ts">ConnectorSendPassthroughResponse</a></code>

Methods:

- <code title="post /connectors/passthrough">client.connectors.<a href="./src/resources/connectors.ts">sendPassthrough</a>({ ...params }) -> unknown</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowDeleteResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowActivateResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowDeactivateResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowInstallResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowListUsersResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowListVersionsResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRerunExecutionResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRetrieveAnalyticsResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowRetrieveErrorsResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowUpgradeResponse</a></code>

Methods:

- <code title="get /workflows/{workflowId}">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieve</a>(workflowID, { ...params }) -> unknown</code>
- <code title="get /workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">list</a>({ ...params }) -> unknown</code>
- <code title="delete /workflows/{workflowId}">client.workflows.<a href="./src/resources/workflows/workflows.ts">delete</a>(workflowID, { ...params }) -> unknown</code>
- <code title="put /workflows/activate">client.workflows.<a href="./src/resources/workflows/workflows.ts">activate</a>({ ...params }) -> unknown</code>
- <code title="put /workflows/deactivate">client.workflows.<a href="./src/resources/workflows/workflows.ts">deactivate</a>({ ...params }) -> unknown</code>
- <code title="post /workflows/install">client.workflows.<a href="./src/resources/workflows/workflows.ts">install</a>({ ...params }) -> unknown</code>
- <code title="get /workflows/{workflowId}/users">client.workflows.<a href="./src/resources/workflows/workflows.ts">listUsers</a>(workflowID, { ...params }) -> unknown</code>
- <code title="get /workflows/{workflowId}/versions">client.workflows.<a href="./src/resources/workflows/workflows.ts">listVersions</a>(workflowID, { ...params }) -> unknown</code>
- <code title="post /workflows/{workflowId}/rerun/{executionId}">client.workflows.<a href="./src/resources/workflows/workflows.ts">rerunExecution</a>(executionID, { ...params }) -> unknown</code>
- <code title="get /workflows/{workflowId}/analytics">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieveAnalytics</a>(workflowID, { ...params }) -> unknown</code>
- <code title="get /workflows/{workflowId}/errors">client.workflows.<a href="./src/resources/workflows/workflows.ts">retrieveErrors</a>(workflowID, { ...params }) -> unknown</code>
- <code title="put /workflows/{workflowId}/upgrade">client.workflows.<a href="./src/resources/workflows/workflows.ts">upgrade</a>(workflowID, { ...params }) -> unknown</code>

## Logs

Types:

- <code><a href="./src/resources/workflows/logs.ts">LogRetrieveResponse</a></code>
- <code><a href="./src/resources/workflows/logs.ts">LogDeleteResponse</a></code>

Methods:

- <code title="get /workflows/{workflowId}/logs">client.workflows.logs.<a href="./src/resources/workflows/logs.ts">retrieve</a>(workflowID, { ...params }) -> unknown</code>
- <code title="delete /workflows/logs">client.workflows.logs.<a href="./src/resources/workflows/logs.ts">delete</a>({ ...params }) -> unknown</code>

# Metadata

Types:

- <code><a href="./src/resources/metadata/metadata.ts">MetadataRetrieveConnectorsResponse</a></code>

Methods:

- <code title="get /metadata/connectors">client.metadata.<a href="./src/resources/metadata/metadata.ts">retrieveConnectors</a>({ ...params }) -> unknown</code>

## Credentials

Types:

- <code><a href="./src/resources/metadata/credentials.ts">CredentialRetrieveResponse</a></code>
- <code><a href="./src/resources/metadata/credentials.ts">CredentialRetrieveAllResponse</a></code>

Methods:

- <code title="get /metadata/credentials/{credentialName}">client.metadata.credentials.<a href="./src/resources/metadata/credentials.ts">retrieve</a>(credentialName, { ...params }) -> unknown</code>
- <code title="get /metadata/credentials">client.metadata.credentials.<a href="./src/resources/metadata/credentials.ts">retrieveAll</a>({ ...params }) -> unknown</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/users.ts">UserCreateBatchResponse</a></code>
- <code><a href="./src/resources/users.ts">UserDeactivateWorkflowsResponse</a></code>

Methods:

- <code title="post /users/">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /users/{userId}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userID, { ...params }) -> unknown</code>
- <code title="put /users/{userId}">client.users.<a href="./src/resources/users.ts">update</a>(userID, { ...params }) -> unknown</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> unknown</code>
- <code title="delete /users/{userId}">client.users.<a href="./src/resources/users.ts">delete</a>(userID, { ...params }) -> unknown</code>
- <code title="post /users/batch">client.users.<a href="./src/resources/users.ts">createBatch</a>({ ...params }) -> unknown</code>
- <code title="put /users/{userId}/deactivate-workflows">client.users.<a href="./src/resources/users.ts">deactivateWorkflows</a>(userID, { ...params }) -> unknown</code>

# Run

Types:

- <code><a href="./src/resources/run.ts">RunExecuteWorkflowResponse</a></code>

Methods:

- <code title="post /run/workflow">client.run.<a href="./src/resources/run.ts">executeWorkflow</a>({ ...params }) -> unknown</code>

# Analytics

Types:

- <code><a href="./src/resources/analytics.ts">AnalyticsGetDetailedUsageByIntegrationResponse</a></code>
- <code><a href="./src/resources/analytics.ts">AnalyticsGetDetailedUsageByUserResponse</a></code>
- <code><a href="./src/resources/analytics.ts">AnalyticsGetDetailedUsageTimeResponse</a></code>
- <code><a href="./src/resources/analytics.ts">AnalyticsGetUsageResponse</a></code>

Methods:

- <code title="get /analytics/detail-usage-integration">client.analytics.<a href="./src/resources/analytics.ts">getDetailedUsageByIntegration</a>({ ...params }) -> unknown</code>
- <code title="get /analytics/detail-usage-user">client.analytics.<a href="./src/resources/analytics.ts">getDetailedUsageByUser</a>({ ...params }) -> unknown</code>
- <code title="get /analytics/detail-usage-time">client.analytics.<a href="./src/resources/analytics.ts">getDetailedUsageTime</a>({ ...params }) -> unknown</code>
- <code title="get /analytics/usage">client.analytics.<a href="./src/resources/analytics.ts">getUsage</a>({ ...params }) -> unknown</code>
