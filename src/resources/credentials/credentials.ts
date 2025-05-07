// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from './users';
import {
  UserDeleteCredentialParams,
  UserDeleteCredentialResponse,
  UserRetrieveAllParams,
  UserRetrieveAllResponse,
  Users,
} from './users';

export class Credentials extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

Credentials.Users = Users;

export declare namespace Credentials {
  export {
    Users as Users,
    type UserDeleteCredentialResponse as UserDeleteCredentialResponse,
    type UserRetrieveAllResponse as UserRetrieveAllResponse,
    type UserDeleteCredentialParams as UserDeleteCredentialParams,
    type UserRetrieveAllParams as UserRetrieveAllParams,
  };
}
