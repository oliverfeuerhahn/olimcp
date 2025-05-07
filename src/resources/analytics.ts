// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Analytics extends APIResource {
  /**
   * Returns usage data for a specific integration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.getDetailedUsageByIntegration();
   * ```
   */
  getDetailedUsageByIntegration(
    params: AnalyticsGetDetailedUsageByIntegrationParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/analytics/detail-usage-integration', {
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
   * Retrieves usage data for a specific user.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.getDetailedUsageByUser();
   * ```
   */
  getDetailedUsageByUser(
    params: AnalyticsGetDetailedUsageByUserParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/analytics/detail-usage-user', {
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
   * Returns app actions usage based on a given time period.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analytics.getDetailedUsageTime();
   * ```
   */
  getDetailedUsageTime(
    params: AnalyticsGetDetailedUsageTimeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion, ...query } = params ?? {};
    return this._client.get('/analytics/detail-usage-time', {
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
   * Returns a list of all app actions usage data.
   *
   * @example
   * ```ts
   * const response = await client.analytics.getUsage();
   * ```
   */
  getUsage(
    params: AnalyticsGetUsageParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { Accept, 'x-api-version': xAPIVersion } = params ?? {};
    return this._client.get('/analytics/usage', {
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

export type AnalyticsGetDetailedUsageByIntegrationResponse = unknown;

export type AnalyticsGetDetailedUsageByUserResponse = unknown;

export type AnalyticsGetDetailedUsageTimeResponse = unknown;

export type AnalyticsGetUsageResponse = unknown;

export interface AnalyticsGetDetailedUsageByIntegrationParams {
  /**
   * Query param: (Required) The ID of the integration.
   */
  integrationId?: string;

  /**
   * Query param: The time period for usage data.
   */
  timePeriod?: string;

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

export interface AnalyticsGetDetailedUsageByUserParams {
  /**
   * Query param: The time period for usage data.
   */
  timePeriod?: string;

  /**
   * Query param: (Required) The ID of the user.
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

export interface AnalyticsGetDetailedUsageTimeParams {
  /**
   * Query param: The time period for usage data. Default time-period is
   * `current-billing-cycle`
   */
  timePeriod?: string;

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

export interface AnalyticsGetUsageParams {
  Accept?: string;

  /**
   * (Required) The version of the API to use. The current API version is
   * **2024-07**.
   */
  'x-api-version'?: string;
}

export declare namespace Analytics {
  export {
    type AnalyticsGetDetailedUsageByIntegrationResponse as AnalyticsGetDetailedUsageByIntegrationResponse,
    type AnalyticsGetDetailedUsageByUserResponse as AnalyticsGetDetailedUsageByUserResponse,
    type AnalyticsGetDetailedUsageTimeResponse as AnalyticsGetDetailedUsageTimeResponse,
    type AnalyticsGetUsageResponse as AnalyticsGetUsageResponse,
    type AnalyticsGetDetailedUsageByIntegrationParams as AnalyticsGetDetailedUsageByIntegrationParams,
    type AnalyticsGetDetailedUsageByUserParams as AnalyticsGetDetailedUsageByUserParams,
    type AnalyticsGetDetailedUsageTimeParams as AnalyticsGetDetailedUsageTimeParams,
    type AnalyticsGetUsageParams as AnalyticsGetUsageParams,
  };
}
