export interface Response<T>{
    errorServer: string
    message: string
    messageTitle: string
    success: boolean
    data: T
}

export interface SendResponse {
    rawRequest: string;
    responseTime: number;
    responseSize: string;
    protocol: string;
    statusCode: number;
    statusText: string;
    data: any;
    contentType?: string;
    isBinary?: boolean;
}

export interface ScriptLog {
    type: "log" | "error" | "warn" | "info"
    message: string
    timestamp: number
}
