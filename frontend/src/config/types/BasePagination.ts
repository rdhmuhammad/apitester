export interface IBasePagination<T>{
    values: T[];
    element_total: number;
    page: number;
    page_total: number;
    first: boolean;
    empty: boolean;
    last: boolean;
}