// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CredentialsAPI from './credentials';
import {
  CredentialRetrieveAllParams,
  CredentialRetrieveAllResponse,
  CredentialRetrieveParams,
  CredentialRetrieveResponse,
  Credentials,
} from './credentials';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Metadata extends APIResource {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);

  /**
   * Returns all the available apps currently supported by Alloy Embedded
   *
   * @example
   * ```ts
   * const response = await client.metadata.retrieveConnectors();
   * ```
   */
  retrieveConnectors(
    params: MetadataRetrieveConnectorsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get('/metadata/connectors', {
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

export type MetadataRetrieveConnectorsResponse = unknown;

export interface MetadataRetrieveConnectorsParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

Metadata.Credentials = Credentials;

export declare namespace Metadata {
  export {
    type MetadataRetrieveConnectorsResponse as MetadataRetrieveConnectorsResponse,
    type MetadataRetrieveConnectorsParams as MetadataRetrieveConnectorsParams,
  };

  export {
    Credentials as Credentials,
    type CredentialRetrieveResponse as CredentialRetrieveResponse,
    type CredentialRetrieveAllResponse as CredentialRetrieveAllResponse,
    type CredentialRetrieveParams as CredentialRetrieveParams,
    type CredentialRetrieveAllParams as CredentialRetrieveAllParams,
  };
}
