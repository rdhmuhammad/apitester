import type {ColtBodyType} from "@/app/slices";

export interface GetCollectionResponse {
  changed: boolean;
  content: DocsContent;
  updatedAt: string;
}

export interface DocsContent {
  info: CollectionInfo;
  item: CollectionItem[];
  auth?: CollectionAuth;
  variable: CollectionVar[];
}

export interface CollectionInfo {
  _postman_id: string;
  name: string;
  description: string;
  schema: string;
}

export interface CollectionItem {
  funIden?: string;
  name: string;
  item?: CollectionItem[];
  request?: Request;
  response?: CollectionResponse[];
  event?: CollectionEvent[];
  id: string;
  description?: string;
}

export interface CollectionResponse {
  name: string;
  originalRequest?: Request;
  status: string;
  code: number;
  _postman_previewlanguage?: string | null;
  header: ItemUrl[];
  cookie: ResponseCookie[];
  body: string;
}

export interface ResponseCookie {
  key: string;
  value: string;
  domain?: string;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
}

export interface Request {
  funIden?: string;
  method: string;
  header: ItemUrl[];
  body?: RequestBody;
  url: RequestURL;
  description?: string;
}

export interface RequestBody {
  mode: ColtBodyType;
  raw?: string;
  formdata?: ItemUrl[]
}

export interface ItemUrl {
  id?: string;
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

export interface CollectionAuth {
  type: string;
  bearer?: AuthProperty[];
}

export interface AuthProperty {
  key: string;
  value: string;
  type: string;
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
