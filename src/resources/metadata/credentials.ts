// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Credentials extends APIResource {
  /**
   * Retrieve credential structure for an app
   *
   * @example
   * ```ts
   * const credential =
   *   await client.metadata.credentials.retrieve('<string>');
   * ```
   */
  retrieve(
    credentialName: string,
    params: CredentialRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get(path`/metadata/credentials/${credentialName}`, {
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
   * This endpoint returns a basic structure of what data must be inputted when
   * adding a credential manually. This should be used when creating a credential
   * using the POST credential endpoint.
   *
   * This endpoint returns the structure of every supported block on Alloy Embedded.
   * It returns a boolean flag called `isOauth` which indicates if the credential
   * uses OAuth or an API key.
   *
   * @example
   * ```ts
   * const response =
   *   await client.metadata.credentials.retrieveAll();
   * ```
   */
  retrieveAll(
    params: CredentialRetrieveAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get('/metadata/credentials', {
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

export type CredentialRetrieveResponse = unknown;

export type CredentialRetrieveAllResponse = unknown;

export interface CredentialRetrieveParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface CredentialRetrieveAllParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export declare namespace Credentials {
  export {
    type CredentialRetrieveResponse as CredentialRetrieveResponse,
    type CredentialRetrieveAllResponse as CredentialRetrieveAllResponse,
    type CredentialRetrieveParams as CredentialRetrieveParams,
    type CredentialRetrieveAllParams as CredentialRetrieveAllParams,
  };
}
