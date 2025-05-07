// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * Retrieves log data for a given workflow over time. Logs are stored for a maximum
   * of 60 days before being purged.
   *
   * Each log includes the `executionId` (which can be used to rerun an execution),
   * the `startedAt` and `stoppedAt` date stamps, and the JSON output of the
   * execution.
   *
   * @example
   * ```ts
   * const log = await client.workflows.logs.retrieve(
   *   '<string>',
   * );
   * ```
   */
  retrieve(
    workflowID: string,
    params: LogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get(path`/workflows/${workflowID}/logs`, {
      query,
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

  /**
   * This endpoint deletes all historical logs associated with a user and is most
   * commonly used in conjunction with a compliance request such as GDPR. This
   * endpoint requires a userId.
   *
   * Note that this action cannot be undone.
   *
   * @example
   * ```ts
   * const log = await client.workflows.logs.delete();
   * ```
   */
  delete(params: LogDeleteParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    const { userId, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.delete('/workflows/logs', {
      query: { userId },
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

export type LogRetrieveResponse = unknown;

export type LogDeleteResponse = unknown;

export interface LogRetrieveParams {
  /**
   * Query param: Number of results per page (max 30, default 10)
   */
  limit?: string;

  /**
   * Query param: asc or desc for ascending/descending (default desc)
   */
  order?: string;

  /**
   * Query param: page of results
   */
  page?: string;

  /**
   * Query param: The Id of the user you want delete logs for. Returned from the
   * Create User endpoint
   */
  userId?: string;

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

export interface LogDeleteParams {
  /**
   * Query param: (Required) The Id of the user you want delete logs for. Returned
   * from the Create User endpoint
   */
  userId?: string;

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

export declare namespace Logs {
  export {
    type LogRetrieveResponse as LogRetrieveResponse,
    type LogDeleteResponse as LogDeleteResponse,
    type LogRetrieveParams as LogRetrieveParams,
    type LogDeleteParams as LogDeleteParams,
  };
}
