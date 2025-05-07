// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Integrations extends APIResource {
  /**
   * Finds a specific integration for a user
   *
   * @example
   * ```ts
   * const integration = await client.integrations.retrieve(
   *   '<string>',
   * );
   * ```
   */
  retrieve(
    integrationID: string,
    params: IntegrationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get(path`/integrations/${integrationID}`, {
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
   * Returns all the available integrations in your Alloy Embedded Account. Includes
   * integrations/apps you've created an "integration" for, their workflows and
   * statuses. If `installed` equals `true`, the `installedVersion` key will show the
   * currently installed version.
   *
   * @example
   * ```ts
   * const integrations = await client.integrations.list();
   * ```
   */
  list(params: IntegrationListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/integrations', {
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
   * This endpoint generates an alloy Link. For more details on Embedded Link, please
   * [read](https://docs.runalloy.com/docs/alloy-link) this tutorial.
   *
   * @example
   * ```ts
   * const response =
   *   await client.integrations.createInstallLink('<string>');
   * ```
   */
  createInstallLink(
    integrationID: string,
    params: IntegrationCreateInstallLinkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get(path`/integrations/${integrationID}/install-url`, {
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
   * Retrieves all integrations available in the Alloy Embedded account.
   *
   * @example
   * ```ts
   * const response = await client.integrations.listAll();
   * ```
   */
  listAll(
    params: IntegrationListAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get('/integrations/all', {
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

export type IntegrationRetrieveResponse = unknown;

export type IntegrationListResponse = unknown;

export type IntegrationCreateInstallLinkResponse = unknown;

export type IntegrationListAllResponse = unknown;

export interface IntegrationRetrieveParams {
  /**
   * Query param: (Required) The Id used to identify the user. Note: you can also use
   * the Embedded user's `username` in this field.
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

export interface IntegrationListParams {
  /**
   * Query param:
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

export interface IntegrationCreateInstallLinkParams {
  /**
   * Query param: (Required) The user to generate the Embedded Link for
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

export interface IntegrationListAllParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export declare namespace Integrations {
  export {
    type IntegrationRetrieveResponse as IntegrationRetrieveResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationCreateInstallLinkResponse as IntegrationCreateInstallLinkResponse,
    type IntegrationListAllResponse as IntegrationListAllResponse,
    type IntegrationRetrieveParams as IntegrationRetrieveParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationCreateInstallLinkParams as IntegrationCreateInstallLinkParams,
    type IntegrationListAllParams as IntegrationListAllParams,
  };
}
