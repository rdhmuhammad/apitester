
export interface ExampleResponse {
    name: string
    status?: string
    code?: number
    body?: string
    header?: ItemUrl[] | Array<{key: string; value: string}>
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

export type ColtBodyType = "raw" | "formdata";

export interface RequestBody {
    mode: ColtBodyType;
    raw?: string;
    formdata?: ItemUrl[]
}

export interface RequestURL {
    raw: string;
    host: string[];
    path: string[];
    query: ItemUrl[];
}

export interface ReqAuth {
    type: string;
    bearer?: ItemUrl[];
    authSource?: "inherit" | "onrequest" | "none" | string;
}
export interface RestRequestResponse {
    id: string
    name: string
    method: string
    url: RequestURL
    headers: ItemUrl[]
    query: ItemUrl[]
    body?: RequestBody
    auth?: ReqAuth
    script: string
    responses?: ExampleResponse[]
    version: string
}