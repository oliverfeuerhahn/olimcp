// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Events extends APIResource {
  /**
   * Returns a list of all Custom Events you have enabled in Alloy Embedded.
   *
   * @example
   * ```ts
   * const events = await client.events.list();
   * ```
   */
  list(params: EventListParams | null | undefined = {}, options?: RequestOptions): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get('/events', {
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
   * This endpoint runs a workflow that uses a **Custom Event**. Note that this
   * endpoint cannot be used to invoke a workflow that has a Custom Webhook Trigger.
   *
   * If you have defined a custom JSON body for the Custom Event, it should be passed
   * into the `data` body parameter.
   *
   * @example
   * ```ts
   * const response = await client.events.trigger();
   * ```
   */
  trigger(
    params: EventTriggerParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { body, Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.post('/events/run', {
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

export type EventListResponse = unknown;

export type EventTriggerResponse = unknown;

export interface EventListParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export interface EventTriggerParams {
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

export declare namespace Events {
  export {
    type EventListResponse as EventListResponse,
    type EventTriggerResponse as EventTriggerResponse,
    type EventListParams as EventListParams,
    type EventTriggerParams as EventTriggerParams,
  };
}
