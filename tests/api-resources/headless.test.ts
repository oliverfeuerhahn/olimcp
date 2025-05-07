// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OliEmbeddedMcp from 'oli-embedded-mcp';

const client = new OliEmbeddedMcp({
  baseurl: 'My-Baseurl',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource headless', () => {
  // skipped: tests are disabled for the time being
  test.skip('completeInstallation', async () => {
    const responsePromise = client.headless.completeInstallation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('completeInstallation: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.headless.completeInstallation(
        {
          body: {
            installationId: '<string>',
            data: [
              {
                workflowId: '<string>',
                blockId: '<string>',
                fields: [
                  { name: '<string>', value: '<string>' },
                  { name: '<string>', value: '<string>' },
                ],
              },
              {
                workflowId: '<string>',
                blockId: '<string>',
                fields: [
                  { name: '<string>', value: '<string>' },
                  { name: '<string>', value: '<string>' },
                ],
              },
            ],
          },
          Accept: 'application/json',
          'x-api-version': '2024-07',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCredential', async () => {
    const responsePromise = client.headless.createCredential();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createCredential: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.headless.createCredential(
        {
          body: {
            credential: {
              type: '<string>',
              data: {
                realm: '<string>',
                consumerKey: '<string>',
                tokenId: '<string>',
                tokenSecret: '<string>',
              },
            },
            userId: '<string>',
          },
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('createOAuthLink', async () => {
    const responsePromise = client.headless.createOAuthLink();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createOAuthLink: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.headless.createOAuthLink(
        { app: 'app', userId: 'userId', Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('editInstallation', async () => {
    const responsePromise = client.headless.editInstallation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('editInstallation: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.headless.editInstallation(
        {
          body: {
            userId: '<string>',
            integrationId: '<string>',
            credentialIds: ['<string>', '<string>'],
            installationId: '<string>',
          },
          Accept: 'application/json',
          'x-api-version': '2024-07',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('startInstallation', async () => {
    const responsePromise = client.headless.startInstallation();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('startInstallation: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.headless.startInstallation(
        {
          body: {
            userId: '<string>',
            integrationId: '<string>',
            credentialIds: ['<string>', '<string>'],
            workflowIds: ['<string>', '<string>'],
          },
          Accept: 'application/json',
          'x-api-version': '2024-07',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });
});
