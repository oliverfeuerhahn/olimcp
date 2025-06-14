// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OliEmbeddedMcp } from '../client';

export abstract class APIResource {
  protected _client: OliEmbeddedMcp;

  constructor(client: OliEmbeddedMcp) {
    this._client = client;
  }
}
