
export interface GetCollectionResponse {
  changed: boolean;
  content: DocsContent;
  updatedAt: string;
}

export interface DocsContent {
  info: CollectionInfo;
  item: CollectionItem[];
  variable: CollectionVar[];
}

export interface CollectionInfo {
  _postman_id: string;
  name: string;
  description: string;
  schema: string;
}

export interface CollectionItem {
  funIden: string;
  name: string;
  item?: CollectionItem[];
  request?: Request;
  response?: unknown[];
  event?: CollectionEvent[];
  id?: string;
  description?: string;
}

export interface Request {
  funIden: string;
  method: string;
  header: Header[];
  body?: RequestBody;
  url: RequestURL;
  description?: string;
}

export interface Header {
  key: string;
  value: string;
}

export interface RequestBody {
  mode: string;
  raw: string;
}

export interface RequestURL {
  raw: string;
  host: string[];
  path: string[];
}

export interface CollectionEvent {
  listen: string;
  script: EventScript;
}

export interface EventScript {
  exec: string[];
  type: string;
}

export interface CollectionVar {
  id: string;
  key: string;
  value: string;
  type: string;
}
