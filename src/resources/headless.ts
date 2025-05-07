// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Headless extends APIResource {
  /**
   * Complete Installation
   *
   * @example
   * ```ts
   * const response =
   *   await client.headless.completeInstallation();
   * ```
   */
  completeInstallation(
    params: HeadlessCompleteInstallationParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/headless/completeInstallation', {
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
   * Use this endpoint to add a credential programmatically via the API. This
   * endpoint should be used primarily for non-OAuth blocks. If you are using Secrets
   * Manager with an OAuth block and you have the OAuth tokens already, you can add
   * them to Alloy with this endpoint. Please reference
   * [this](https://docs.runalloy.com/docs/headless) section of our docs for a
   * complete tutorial on when and how to use this endpoint.
   *
   * @example
   * ```ts
   * const response = await client.headless.createCredential();
   * ```
   */
  createCredential(
    params: HeadlessCreateCredentialParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/headless/credentials', {
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
   * This endpoint can be used to generate an OAuth link if you want to completely
   * white label your authentication experience. You can use this endpoint to
   * generate a link which your users can click to redirect to the specified
   * application without rendering the Alloy Embedded Modal.
   *
   * Note: this endpoint **only** works with OAuth enabled integrations. To add a
   * credential manually, please use the
   * [POST Create Credential API](https://docs.runalloy.com/reference/embedded/create-a-credential).
   *
   * This endpoint takes a `userId`, `integrationId`, and `connectorName` as inputs.
   * It should be used in conjunction with the
   * [GET Credential Metadata API](https://docs.runalloy.com/reference/embedded/get-credential-metadata).
   * `credentialName` represents the name of the integration you want to call.
   *
   * If the credential metadata endpoint returns any `properties,` you must pass them
   * as query string parameters at the end of this call. For example, to generate a
   * `oAuthURL` for Shopify, you'll need to add the specify `shopifySubdomain` in the
   * query paramter of the URI. Your URI may look like
   * `/oauthUrl?userId=YOUR_USER_ID&app=shopify&shopSubdomain=YOUR_STORE_NAME`
   *
   * @example
   * ```ts
   * const response = await client.headless.createOAuthLink();
   * ```
   */
  createOAuthLink(
    params: HeadlessCreateOAuthLinkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/headless/oauthUrl', {
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
   * This endpoint allows you to edit an existing installation for a user. The
   * `credentialIds` and `installationId` are optional parameters. If the user has
   * authorized any of the apps in the integration more than once, then
   * `credentialIds` is required. Otherwise, the user's credentials will be
   * automatically detected.
   *
   * @example
   * ```ts
   * const response = await client.headless.editInstallation();
   * ```
   */
  editInstallation(
    params: HeadlessEditInstallationParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/headless/editInstallation', {
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
   * This endpoint will create an installation record and return the information
   * required to create a form for your user to fill out.
   *
   * @example
   * ```ts
   * const response = await client.headless.startInstallation();
   * ```
   */
  startInstallation(
    params: HeadlessStartInstallationParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/headless/startInstallation', {
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

export type HeadlessCompleteInstallationResponse = unknown;

export type HeadlessCreateCredentialResponse = unknown;

export type HeadlessCreateOAuthLinkResponse = unknown;

export type HeadlessEditInstallationResponse = unknown;

export type HeadlessStartInstallationResponse = unknown;

export interface HeadlessCompleteInstallationParams {
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

export interface HeadlessCreateCredentialParams {
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

export interface HeadlessCreateOAuthLinkParams {
  /**
   * Query param: (Required) The name of the app you want the user to authorize
   * access to
   */
  app?: string;

  /**
   * Query param: (Required) The id of the user to generate this link for
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

export interface HeadlessEditInstallationParams {
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

export interface HeadlessStartInstallationParams {
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

export declare namespace Headless {
  export {
    type HeadlessCompleteInstallationResponse as HeadlessCompleteInstallationResponse,
    type HeadlessCreateCredentialResponse as HeadlessCreateCredentialResponse,
    type HeadlessCreateOAuthLinkResponse as HeadlessCreateOAuthLinkResponse,
    type HeadlessEditInstallationResponse as HeadlessEditInstallationResponse,
    type HeadlessStartInstallationResponse as HeadlessStartInstallationResponse,
    type HeadlessCompleteInstallationParams as HeadlessCompleteInstallationParams,
    type HeadlessCreateCredentialParams as HeadlessCreateCredentialParams,
    type HeadlessCreateOAuthLinkParams as HeadlessCreateOAuthLinkParams,
    type HeadlessEditInstallationParams as HeadlessEditInstallationParams,
    type HeadlessStartInstallationParams as HeadlessStartInstallationParams,
  };
}
