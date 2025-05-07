// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Authentication extends APIResource {
  /**
   * This endpoint is used to generate a new user token in the form of a JSON Web
   * Token (JWT) which is required to securely render the Embedded Modal in your
   * application. Once retrieved, you'll want to pass this token to your frontend.
   *
   * @example
   * ```ts
   * const response = await client.authentication.generateJwt();
   * ```
   */
  generateJwt(
    params: AuthenticationGenerateJwtParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/authentication', {
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
}

export type AuthenticationGenerateJwtResponse = unknown;

export interface AuthenticationGenerateJwtParams {
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

export declare namespace Authentication {
  export {
    type AuthenticationGenerateJwtResponse as AuthenticationGenerateJwtResponse,
    type AuthenticationGenerateJwtParams as AuthenticationGenerateJwtParams,
  };
}
