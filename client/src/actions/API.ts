import axios, { AxiosInstance } from 'axios';
import { getToken } from '../helpers';

interface IData {
    data?: any,
}

interface IEndpoint {
    endpoint?: string
}

const getHeaders = (): Headers => {
    const headers = new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
    });

    if (getToken()) {
        headers.append('Authorization', `Bearer ${ getToken() }`)
    }

    return headers;
};

export abstract class APIConnection {
    protected endpoint: string = '';
    protected baseUrl: string = process.env.REACT_APP_API_ENTRYPOINT || '';

    private request(): AxiosInstance {
        return axios.create({
            baseURL: this.baseUrl,
            headers: getHeaders(),
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
        return this.request().post(`${ this.endpoint }${ endpoint }`, JSON.stringify(data));
    }

    protected async putRequest({ data, endpoint }: IData & IEndpoint) {
        return this.request().put(`${ this.endpoint }${ endpoint || '' }`, JSON.stringify(data));
    }
}
