export interface IPortalResponse {
    status: string;
    totalResults: number;
    articles: IArticle[];
}

export interface ISources {
    status: string;
    sources: ISource[];
}

export interface ISource {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface IArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

type Source = {
    id: string;
    name: string;
};

export interface Options {
    sources?: string;
    apiKey?: string;
}

export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export type CallbackFunction = (data: IPortalResponse) => void;
