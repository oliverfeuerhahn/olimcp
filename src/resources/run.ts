// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Run extends APIResource {
  /**
   * This endpoint runs a workflow that uses a **Webhook Trigger.** Note that this
   * endpoint should not be used to invoke a workflow that has a Custom Event. If you
   * have defined a custom JSON body for the webhook trigger, it should be passed
   * into the `data` body parameter.
   *
   * @example
   * ```ts
   * const response = await client.run.executeWorkflow();
   * ```
   */
  executeWorkflow(
    params: RunExecuteWorkflowParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/run/workflow', {
      body: body,
      ...options,
      headers: buildHeaders([
        {
          ...(Accept != null ? { Accept: Accept } : undefined),
          ...(xAPIVersion != null ? { 'x-api-version': xAPIVersion } : undefined),
        },
        options?.headers,
      ]),
    });
  }
}

export type RunExecuteWorkflowResponse = unknown;

export interface RunExecuteWorkflowParams {
  /**
   * Body param:
   */
  body?: unknown;

  /**
   * Header param:
   */
  Accept?: string;

  /**
   * Header param: (Required) The version of the API to use. The current API version
   * is **2024-07**.
   */
  'x-api-version'?: string;
}

export declare namespace Run {
  export {
    type RunExecuteWorkflowResponse as RunExecuteWorkflowResponse,
    type RunExecuteWorkflowParams as RunExecuteWorkflowParams,
  };
}
