// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OliEmbeddedMcp from 'oli-embedded-mcp';

const client = new OliEmbeddedMcp({
  baseurl: 'My-Baseurl',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource workflows', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.workflows.retrieve('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.retrieve(
        '<string>',
        { userId: 'userId', Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.workflows.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.list(
        { userId: 'userId', Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.workflows.delete('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.delete(
        '<string>',
        { userId: 'userId', Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('activate', async () => {
    const responsePromise = client.workflows.activate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('activate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.activate(
        {
          body: { userId: '<string>', workflowName: '<string>', workflowId: '<string>' },
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('deactivate', async () => {
    const responsePromise = client.workflows.deactivate();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deactivate: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.deactivate(
        {
          body: { userId: '<string>', workflowId: '<string>', workflowName: '<string>' },
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('install', async () => {
    const responsePromise = client.workflows.install();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('install: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.install(
        {
          body: {
            workflowIds: ['<string>', '<string>'],
            credentialIds: ['<string>', '<string>'],
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
  test.skip('listUsers', async () => {
    const responsePromise = client.workflows.listUsers('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listUsers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.listUsers(
        '<string>',
        { Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVersions', async () => {
    const responsePromise = client.workflows.listVersions('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listVersions: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.listVersions(
        '<string>',
        { userId: 'userId', Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('rerunExecution: only required params', async () => {
    const responsePromise = client.workflows.rerunExecution('<string>', { workflowId: '<string>' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('rerunExecution: required and optional params', async () => {
    const response = await client.workflows.rerunExecution('<string>', {
      workflowId: '<string>',
      Accept: 'application/json',
      'x-api-version': '{{apiVersion}}',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAnalytics', async () => {
    const responsePromise = client.workflows.retrieveAnalytics('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveAnalytics: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.retrieveAnalytics(
        '<string>',
        { Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveErrors', async () => {
    const responsePromise = client.workflows.retrieveErrors('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveErrors: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.retrieveErrors(
        '<string>',
        { userId: 'userId', Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('upgrade', async () => {
    const responsePromise = client.workflows.upgrade('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('upgrade: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.workflows.upgrade(
        '<string>',
        { userId: 'userId', Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });
});
