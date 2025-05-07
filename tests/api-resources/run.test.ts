// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OliEmbeddedMcp from 'oli-embedded-mcp';

const client = new OliEmbeddedMcp({
  baseurl: 'My-Baseurl',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource run', () => {
  // skipped: tests are disabled for the time being
  test.skip('executeWorkflow', async () => {
    const responsePromise = client.run.executeWorkflow();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('executeWorkflow: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.run.executeWorkflow(
        {
          body: { userId: '<string>', workflowId: '<string>', workflowName: '<string>', data: {} },
          Accept: 'application/json',
          'x-api-version': '{{apiVersion}}',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(OliEmbeddedMcp.NotFoundError);
  });
});
