import axios, { AxiosInstance } from 'axios';
import { Token } from '../helpers';

interface IData {
    data?: any,
}

interface IEndpoint {
    endpoint?: string
}

const getHeaders = (url: string): Headers => {
    const headers: any = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const token = new Token().get();
    if (url.includes(process.env.REACT_APP_API_ENTRYPOINT || 'https://api.domain.com') && token) {
        headers['Authorization'] = `Bearer ${ token }`;
    }

    return headers;
};

export abstract class APIConnection {
    protected endpoint: string = '';
    protected baseUrl: string = process.env.REACT_APP_API_ENTRYPOINT || '';

    private request(): AxiosInstance {
        return axios.create({
            baseURL: this.baseUrl,
            headers: getHeaders(this.baseUrl),
        });
    }

    protected async deleteRequest({ endpoint }: IEndpoint) {
        return this.request().delete(`${ this.endpoint }${ endpoint || '' }`)
    }

    protected async getRequest({ endpoint = '' }: IEndpoint) {
        return this.request().get(`${ this.endpoint }${ endpoint }`)
    }

    protected async patchRequest({ data, endpoint = '' }: IData & IEndpoint) {
        return this.request().patch(`${ this.endpoint }${ endpoint }`, JSON.stringify(data));
    }

    protected async postRequest({ data, endpoint = '' }: IData & IEndpoint) {
        return this.request().post(`${ this.endpoint }${ endpoint }`, data);
    }

    protected async putRequest({ data, endpoint }: IData & IEndpoint) {
        return this.request().put(`${ this.endpoint }${ endpoint || '' }`, JSON.stringify(data));
    }
}
