// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Users extends APIResource {
  /**
   * To delete a credential via the API, you need to invoke the below endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.credentials.users.deleteCredential(
   *     '<string>',
   *     { credentialId: '<string>' },
   *   );
   * ```
   */
  deleteCredential(
    userID: string,
    params: UserDeleteCredentialParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { credentialId, Accept, 'x-api-version': xAPIVersion } = params;
    return this._client.delete(path`/credentials/${credentialId}/users/${userID}`, {
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
   * Returns a list of all credentials created for a specified user.
   *
   * @example
   * ```ts
   * const response = await client.credentials.users.retrieveAll(
   *   '<string>',
   * );
   * ```
   */
  retrieveAll(
    userID: string,
    params: UserRetrieveAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get(path`/credentials/users/${userID}`, {
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

export type UserDeleteCredentialResponse = unknown;

export type UserRetrieveAllResponse = unknown;

export interface UserDeleteCredentialParams {
  /**
   * Path param: (Required) The credential you're looking to delete
   */
  credentialId: string;

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

export interface UserRetrieveAllParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export declare namespace Users {
  export {
    type UserDeleteCredentialResponse as UserDeleteCredentialResponse,
    type UserRetrieveAllResponse as UserRetrieveAllResponse,
    type UserDeleteCredentialParams as UserDeleteCredentialParams,
    type UserRetrieveAllParams as UserRetrieveAllParams,
  };
}
