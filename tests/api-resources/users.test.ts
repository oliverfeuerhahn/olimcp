// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OliEmbeddedMcp from 'oli-embedded-mcp';

const client = new OliEmbeddedMcp({
  baseurl: 'My-Baseurl',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: tests are disabled for the time being
  test.skip('create', async () => {
    const responsePromise = client.users.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.create(
        {
          body: { username: '<string>', fullName: '<string>' },
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve', async () => {
    const responsePromise = client.users.retrieve('<string>');
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
      client.users.retrieve(
        '<string>',
        { Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('update', async () => {
    const responsePromise = client.users.update('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.update(
        '<string>',
        {
          body: { username: '<string>', fullName: '<string>' },
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.users.list();
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
      client.users.list(
        {
          parentWorkflowId: 'parentWorkflowId',
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete', async () => {
    const responsePromise = client.users.delete('<string>');
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
      client.users.delete(
        '<string>',
        { Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('createBatch', async () => {
    const responsePromise = client.users.createBatch();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('createBatch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.createBatch(
        {
          body: {
            users: [
              { username: '<string>', fullName: '<string>' },
              { username: '<string>', fullName: '<string>' },
            ],
          },
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('deactivateWorkflows', async () => {
    const responsePromise = client.users.deactivateWorkflows('<string>');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('deactivateWorkflows: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.users.deactivateWorkflows(
        '<string>',
        { Accept: 'application/json', 'x-api-version': '{{apiVersion}}' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });
});
