// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Connectors extends APIResource {
  /**
   * This endpoint makes it easy to send a passthrough request to the underlying
   * Third Party App using a specified credentialId. It returns the raw data coming
   * from the Third Party App.
   *
   * @example
   * ```ts
   * const response = await client.connectors.sendPassthrough();
   * ```
   */
  sendPassthrough(
    params: ConnectorSendPassthroughParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { credentialId, body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/connectors/passthrough', {
      query: { credentialId },
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

export type ConnectorSendPassthroughResponse = unknown;

export interface ConnectorSendPassthroughParams {
  /**
   * Query param: (Required) The credentialId for this integration.
   */
  credentialId?: string;

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

export declare namespace Connectors {
  export {
    type ConnectorSendPassthroughResponse as ConnectorSendPassthroughResponse,
    type ConnectorSendPassthroughParams as ConnectorSendPassthroughParams,
  };
}
