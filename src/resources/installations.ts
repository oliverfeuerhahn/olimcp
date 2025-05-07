// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Installations extends APIResource {
  /**
   * Retrieves details for a specific installation.
   *
   * @example
   * ```ts
   * const installation = await client.installations.retrieve(
   *   '<string>',
   * );
   * ```
   */
  retrieve(
    installationID: string,
    params: InstallationRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get(path`/installations/${installationID}`, {
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
   * Retrieves all installations available in the Alloy Embedded account.
   *
   * @example
   * ```ts
   * const installations = await client.installations.list();
   * ```
   */
  list(
    params: InstallationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get('/installations', {
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
   * Deletes a specific installation by its ID.
   *
   * @example
   * ```ts
   * const installation = await client.installations.delete(
   *   '<string>',
   * );
   * ```
   */
  delete(
    installationID: string,
    params: InstallationDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.delete(path`/installations/${installationID}/`, {
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
   * Activates a specific installation.
   *
   * @example
   * ```ts
   * const response = await client.installations.activate(
   *   '<string>',
   * );
   * ```
   */
  activate(
    installationID: string,
    params: InstallationActivateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put(path`/installations/${installationID}/activate`, {
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
   * Deactivates a specific installation.
   *
   * @example
   * ```ts
   * const response = await client.installations.deactivate(
   *   '<string>',
   * );
   * ```
   */
  deactivate(
    installationID: string,
    params: InstallationDeactivateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put(path`/installations/${installationID}/deactivate`, {
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
   * Upgrades a specific installation.
   *
   * @example
   * ```ts
   * const response = await client.installations.upgrade(
   *   '<string>',
   * );
   * ```
   */
  upgrade(
    installationID: string,
    params: InstallationUpgradeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.put(path`/installations/${installationID}/upgrade`, {
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

export type InstallationRetrieveResponse = unknown;

export type InstallationListResponse = unknown;

export type InstallationDeleteResponse = unknown;

export type InstallationActivateResponse = unknown;

export type InstallationDeactivateResponse = unknown;

export type InstallationUpgradeResponse = unknown;

export interface InstallationRetrieveParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface InstallationListParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface InstallationDeleteParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface InstallationActivateParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface InstallationDeactivateParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface InstallationUpgradeParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export declare namespace Installations {
  export {
    type InstallationRetrieveResponse as InstallationRetrieveResponse,
    type InstallationListResponse as InstallationListResponse,
    type InstallationDeleteResponse as InstallationDeleteResponse,
    type InstallationActivateResponse as InstallationActivateResponse,
    type InstallationDeactivateResponse as InstallationDeactivateResponse,
    type InstallationUpgradeResponse as InstallationUpgradeResponse,
    type InstallationRetrieveParams as InstallationRetrieveParams,
    type InstallationListParams as InstallationListParams,
    type InstallationDeleteParams as InstallationDeleteParams,
    type InstallationActivateParams as InstallationActivateParams,
    type InstallationDeactivateParams as InstallationDeactivateParams,
    type InstallationUpgradeParams as InstallationUpgradeParams,
  };
}
