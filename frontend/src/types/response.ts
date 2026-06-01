export interface Response<T>{
    errorServer: string
    message: string
    messageTitle: string
    success: boolean
    data: T
}

export interface SendResponse {
    statusCode: number;
    statusText: string;
    data: object;
}
