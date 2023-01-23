import { IService } from '../service';

export interface IForm {
  queries?: {
    [key: string]: string;
  };
  headers?: {
    [key: string]: string;
  };
  body?: {
    [key: string]: string | object | number | object[];
  };
}

export interface ISchema {
  properties: {
    [key: string]: ISchema;
  };
  enum: (string | number)[];
  type: 'object' | 'array' | 'string' | 'number';
  title: string;
  optional: boolean;
}

export interface IRequest {
  id: string;
  body: ISchema;
  headers: ISchema;
  queries: ISchema;
  params: ISchema;
  method: 'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
}

export interface IResponse {
  id: string;
  title: string;
  description?: string;
  example?: string;
  is_success: boolean;
  error_code?: string;
  status_code: number;
  body: ISchema;
  headers: ISchema;
}

export interface IApi {
  id: string;
  path: string;
  endpoint: string;
  alias: string;
  title?: string;
  introduction?: string;
  tags?: string[];
  request: IRequest;
  request_id: string;
  responses: IResponse[];
  response_ids: string[];
  is_free?: boolean;
  service?: IService;
  service_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface IApiListResponse {
  count: number;
  items: IApi[];
}

export type IApiDetailResponse = IApi;