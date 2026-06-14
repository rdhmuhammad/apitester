export interface Response<T>{
    errorServer: string
    message: string
    messageTitle: string
    success: boolean
    data: T
}

export interface SendResponse {
    responseTime: number;
    responseSize: string;
    protocol: string;
    statusCode: number;
    statusText: string;
    data: object;
}
