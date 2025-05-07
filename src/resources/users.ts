// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Creates a new user in your Embedded account. The user record acts like a
   * "container" to store all the integrations, workflows, and credentials for any
   * given user. Returns a user identifier.
   *
   * @example
   * ```ts
   * const user = await client.users.create();
   * ```
   */
  create(
    params: UserCreateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/users/', {
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
   * Returns a specific user given a userId and any active workflows associated with
   * the user.
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve('<string>');
   * ```
   */
  retrieve(
    userID: string,
    params: UserRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get(path`/users/${userID}`, {
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
   * Updates a user given a specified userId. This endpoint allows you to update a
   * username or fullName and returns the updated user object.
   *
   * @example
   * ```ts
   * const user = await client.users.update('<string>');
   * ```
   */
  update(
    userID: string,
    params: UserUpdateParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put(path`/users/${userID}`, {
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
   * Returns a list of all users created in your Embedded account.
   *
   * @example
   * ```ts
   * const users = await client.users.list();
   * ```
   */
  list(params: UserListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/users', {
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
   * This endpoint deletes a user account. It is most commonly used when a user stops
   * being a customer of your platform or in conjunction with a GDPR compliance
   * request. Note that this endpoint only deletes the user's account – not any
   * corresponding workflow logs or other data. To remove that data as part of a
   * compliance request, see our 'Delete User Logs' endpoint
   *
   * @example
   * ```ts
   * const user = await client.users.delete('<string>');
   * ```
   */
  delete(
    userID: string,
    params: UserDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.delete(path`/users/${userID}`, {
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
   * Creates a new user in your Embedded account. The user record acts like a
   * "container" to store all the integrations, workflows, and credentials for any
   * given user. Returns a user identifier.
   *
   * @example
   * ```ts
   * const response = await client.users.createBatch();
   * ```
   */
  createBatch(
    params: UserCreateBatchParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/users/batch', {
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
   * Deactivates all active workflows for a user in bulk.
   *
   * This endpoint may be used to perform a bulk operation such as temporarily
   * disabling a user's account in lieu of deleting the user account if the user
   * wants to "pause" their account.
   *
   * @example
   * ```ts
   * const response = await client.users.deactivateWorkflows(
   *   '<string>',
   * );
   * ```
   */
  deactivateWorkflows(
    userID: string,
    params: UserDeactivateWorkflowsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put(path`/users/${userID}/deactivate-workflows`, {
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

export type UserCreateResponse = unknown;

export type UserRetrieveResponse = unknown;

export type UserUpdateResponse = unknown;

export type UserListResponse = unknown;

export type UserDeleteResponse = unknown;

export type UserCreateBatchResponse = unknown;

export type UserDeactivateWorkflowsResponse = unknown;

export interface UserCreateParams {
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

export interface UserRetrieveParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface UserUpdateParams {
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

export interface UserListParams {
  /**
   * Query param: You can pass a parentWorkflowId if you wish to list users for a
   * specific workflow.
   */
  parentWorkflowId?: string;

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

export interface UserDeleteParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface UserCreateBatchParams {
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

export interface UserDeactivateWorkflowsParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserCreateBatchResponse as UserCreateBatchResponse,
    type UserDeactivateWorkflowsResponse as UserDeactivateWorkflowsResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserCreateBatchParams as UserCreateBatchParams,
    type UserDeactivateWorkflowsParams as UserDeactivateWorkflowsParams,
  };
}
