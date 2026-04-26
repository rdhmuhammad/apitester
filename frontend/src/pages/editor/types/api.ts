
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
  id: string;
  description?: string;
}

export interface Request {
  funIden: string;
  method: string;
  header: ItemUrl[];
  body?: RequestBody;
  url: RequestURL;
  description?: string;
}

export interface RequestBody {
  mode: string;
  raw?: string;
  formdata?: ItemUrl[]
}

export interface ItemUrl {
  key: string;
  value: string;
  description?: string;
  disabled?: boolean;
  type?: string;
  src?: string;
}

export interface RequestURL {
  raw: string;
  host: string[];
  path: string[];
  query: ItemUrl[];
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
  category: string;
  type: string;
}
