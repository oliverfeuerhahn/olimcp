// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogsAPI from './logs';
import { LogDeleteParams, LogDeleteResponse, LogRetrieveParams, LogRetrieveResponse, Logs } from './logs';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Workflows extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Find a workflow given a workflowId
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.retrieve(
   *   '<string>',
   * );
   * ```
   */
  retrieve(
    workflowID: string,
    params: WorkflowRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get(path`/workflows/${workflowID}`, {
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
   * Returns a list of all active **parent** workflows associated with your Alloy
   * Embedded account. Note this endpoint does _not_ return a list of workflows that
   * the user has installed, but rather a list of all _available_ workflows. The
   * `installed` flag indicates if the user has installed a copy of the workflow but
   * does not indicate if the user has a given workflow "active".
   *
   * For each workflow, this endpoint returns the individual apps that are required
   * as part of the workflow. Commonly used to populate data on an integrations page.
   *
   * @example
   * ```ts
   * const workflows = await client.workflows.list();
   * ```
   */
  list(params: WorkflowListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/workflows', {
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
   * Deletes a workflow for a specific user. This endpoint does not delete a workflow
   * for all users.
   *
   * @example
   * ```ts
   * const workflow = await client.workflows.delete('<string>');
   * ```
   */
  delete(
    workflowID: string,
    params: WorkflowDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { userId, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.delete(path`/workflows/${workflowID}`, {
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

  /**
   * Reactivates a workflow that was previously disabled by the Disable Workflow
   * endpoint. This endpoint requires a specified WorkflowId and returns a
   * success/failure.
   *
   * @example
   * ```ts
   * const response = await client.workflows.activate();
   * ```
   */
  activate(
    params: WorkflowActivateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put('/workflows/activate', {
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

  /**
   * Disables all future invocations and runs for a given workflow.
   *
   * By deactivating a workflow, this endpoint will turn off any events or webhooks a
   * workflow is subscribed to. May be reactivated by the Reactivate workflow
   * endpoint.
   *
   * @example
   * ```ts
   * const response = await client.workflows.deactivate();
   * ```
   */
  deactivate(
    params: WorkflowDeactivateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put('/workflows/deactivate', {
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

  /**
   * Installs workflows for a specified user.
   *
   * @example
   * ```ts
   * const response = await client.workflows.install();
   * ```
   */
  install(
    params: WorkflowInstallParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/workflows/install', {
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

  /**
   * List Users by workflowId
   *
   * @example
   * ```ts
   * const response = await client.workflows.listUsers(
   *   '<string>',
   * );
   * ```
   */
  listUsers(
    workflowID: string,
    params: WorkflowListUsersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get(path`/workflows/${workflowID}/users`, {
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
   * Returns a list of all versions available for a given workflow
   *
   * @example
   * ```ts
   * const response = await client.workflows.listVersions(
   *   '<string>',
   * );
   * ```
   */
  listVersions(
    workflowID: string,
    params: WorkflowListVersionsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get(path`/workflows/${workflowID}/versions`, {
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
   * Retrieves log data for a given workflow over time. Logs are stored for a maximum
   * of 60 days before being purged.
   *
   * Each log includes the `executionId` (which can be used to rerun an execution),
   * the `startedAt` and `stoppedAt` date stamps, and the JSON output of the
   * execution.
   *
   * @example
   * ```ts
   * const response = await client.workflows.rerunExecution(
   *   '<string>',
   *   { workflowId: '<string>' },
   * );
   * ```
   */
  rerunExecution(
    executionID: string,
    params: WorkflowRerunExecutionParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { workflowId, Accept, 'x-api-version': xAPIVersion } = params;
    return this._client.post(path`/workflows/${workflowId}/rerun/${executionID}`, {
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
   * This endpoint returns the `totalAppActions` (the number of times each block
   * inside the workflow has been executed over the course of the workflow's
   * lifetime), the `totalWorkflowRuns` (which represents the number of times the
   * workflow has been invoked) and the `totalErrors` (the number of times the
   * workflow has had an error).
   *
   * @example
   * ```ts
   * const response = await client.workflows.retrieveAnalytics(
   *   '<string>',
   * );
   * ```
   */
  retrieveAnalytics(
    workflowID: string,
    params: WorkflowRetrieveAnalyticsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get(path`/workflows/${workflowID}/analytics`, {
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
   * This endpoint fetches an array of errors for a specific workflow.
   *
   * It returns the error message, and the date stamp when the error was thrown, the
   * block that caused the error, and the `workflowId` . Commonly used to debug
   * workflows when they error and identify historical errors; this endpoint may be
   * used in conjunction with the route error messages feature.
   *
   * If there are no errors for the specified workflow, this endpoint will return an
   * empty array.
   *
   * @example
   * ```ts
   * const response = await client.workflows.retrieveErrors(
   *   '<string>',
   * );
   * ```
   */
  retrieveErrors(
    workflowID: string,
    params: WorkflowRetrieveErrorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get(path`/workflows/${workflowID}/errors`, {
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
   * This endpoint allows you as the ISV to upgrade the workflow for a specified end
   * user. <br /> <br />In order to upgrade a workflow via this endpoint, the new
   * workflow must have the same configurable fields as the original. If any new
   * configurable fields were added, you will not be able to upgrade the workflow
   * programmatically and instead would need to reinstall the workflow for the end
   * user.
   *
   * @example
   * ```ts
   * const response = await client.workflows.upgrade('<string>');
   * ```
   */
  upgrade(
    workflowID: string,
    params: WorkflowUpgradeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { userId, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put(path`/workflows/${workflowID}/upgrade`, {
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

export type WorkflowRetrieveResponse = unknown;

export type WorkflowListResponse = unknown;

export type WorkflowDeleteResponse = unknown;

export type WorkflowActivateResponse = unknown;

export type WorkflowDeactivateResponse = unknown;

export type WorkflowInstallResponse = unknown;

export type WorkflowListUsersResponse = unknown;

export type WorkflowListVersionsResponse = unknown;

export type WorkflowRerunExecutionResponse = unknown;

export type WorkflowRetrieveAnalyticsResponse = unknown;

export type WorkflowRetrieveErrorsResponse = unknown;

export type WorkflowUpgradeResponse = unknown;

export interface WorkflowRetrieveParams {
  /**
   * Query param: (Required) The Id of the user you want to lookup. Returned from the
   * Create User endpoint. Note: you can also use the Embedded user's `username` in
   * this field.
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

export interface WorkflowListParams {
  /**
   * Query param: (Required) The Id of the user you want to lookup. Returned from the
   * Create User endpoint. Note: you can also use the Embedded user's `username` in
   * this field.
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

export interface WorkflowDeleteParams {
  /**
   * Query param: (Required) The Id of the user you want to lookup. Returned from the
   * Create User endpoint. Note: you can also use the Embedded user's `username` in
   * this field.
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

export interface WorkflowActivateParams {
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

export interface WorkflowDeactivateParams {
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

export interface WorkflowInstallParams {
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

export interface WorkflowListUsersParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface WorkflowListVersionsParams {
  /**
   * Query param: (Required) The Id of the user you want to lookup. Returned from the
   * Create User endpoint. Note: you can also use the Embedded user's `username` in
   * this field.
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

export interface WorkflowRerunExecutionParams {
  /**
   * Path param: (Required) The Id of the workflow you want to find logs for
   */
  workflowId: string;

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

export interface WorkflowRetrieveAnalyticsParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface WorkflowRetrieveErrorsParams {
  /**
   * Query param: The Id of the user
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

export interface WorkflowUpgradeParams {
  /**
   * Query param: (Required) Id of the end user you wish to upgrade the workflow for
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

Workflows.Logs = Logs;

export declare namespace Workflows {
  export {
    type WorkflowRetrieveResponse as WorkflowRetrieveResponse,
    type WorkflowListResponse as WorkflowListResponse,
    type WorkflowDeleteResponse as WorkflowDeleteResponse,
    type WorkflowActivateResponse as WorkflowActivateResponse,
    type WorkflowDeactivateResponse as WorkflowDeactivateResponse,
    type WorkflowInstallResponse as WorkflowInstallResponse,
    type WorkflowListUsersResponse as WorkflowListUsersResponse,
    type WorkflowListVersionsResponse as WorkflowListVersionsResponse,
    type WorkflowRerunExecutionResponse as WorkflowRerunExecutionResponse,
    type WorkflowRetrieveAnalyticsResponse as WorkflowRetrieveAnalyticsResponse,
    type WorkflowRetrieveErrorsResponse as WorkflowRetrieveErrorsResponse,
    type WorkflowUpgradeResponse as WorkflowUpgradeResponse,
    type WorkflowRetrieveParams as WorkflowRetrieveParams,
    type WorkflowListParams as WorkflowListParams,
    type WorkflowDeleteParams as WorkflowDeleteParams,
    type WorkflowActivateParams as WorkflowActivateParams,
    type WorkflowDeactivateParams as WorkflowDeactivateParams,
    type WorkflowInstallParams as WorkflowInstallParams,
    type WorkflowListUsersParams as WorkflowListUsersParams,
    type WorkflowListVersionsParams as WorkflowListVersionsParams,
    type WorkflowRerunExecutionParams as WorkflowRerunExecutionParams,
    type WorkflowRetrieveAnalyticsParams as WorkflowRetrieveAnalyticsParams,
    type WorkflowRetrieveErrorsParams as WorkflowRetrieveErrorsParams,
    type WorkflowUpgradeParams as WorkflowUpgradeParams,
  };

  export {
    Logs as Logs,
    type LogRetrieveResponse as LogRetrieveResponse,
    type LogDeleteResponse as LogDeleteResponse,
    type LogRetrieveParams as LogRetrieveParams,
    type LogDeleteParams as LogDeleteParams,
  };
}
