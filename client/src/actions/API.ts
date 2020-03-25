import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

interface EndpointInterface {
    endpoint?: string
}

export abstract class API {
    public endpoint = '';

    getRequest(): AxiosInstance {
        console.log(this.endpoint);
        return axios.create({
            baseURL: `${process.env.REACT_APP_API_ENTRYPOINT || 'http://localhost:8080'}${this.endpoint}`,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
        })
    }

    get({endpoint = ''}: EndpointInterface): Promise<AxiosResponse> {
        return this.getRequest().get(endpoint);
    }

    post({endpoint = '', data}: AxiosRequestConfig & EndpointInterface): Promise<AxiosResponse> {
        return this.getRequest().post(endpoint, data);
    }

    patch({endpoint = '', data}: AxiosRequestConfig & EndpointInterface): Promise<AxiosResponse> {
        return this.getRequest().patch(endpoint, data);
    }
}
