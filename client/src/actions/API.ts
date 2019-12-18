import axios from 'axios';

const DELETE = 'DELETE';
const GET = 'GET';
const PATCH = 'PATCH';
const POST = 'POST';
const PUT = 'PUT';

interface IAPIConnection {
    method?: 'GET'|'POST'|'PUT'|'PATCH'|'DELETE',
}

interface IData {
    data?: any,
}

interface IEndpoint {
    endpoint: string
}

interface IHeaders {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

const APIConnection = async ({
    data,
    endpoint,
    method = 'GET',
}: IAPIConnection & IData & IEndpoint) => {
    const headers: IHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    };
    return axios({
        url: `${process.env.REACT_APP_API_ENTRYPOINT}${endpoint}`,
        data: data || null,
        headers,
        method,
    });
};

export const deleteRequest = async ({ endpoint }: IEndpoint) => {
    return APIConnection({
        endpoint,
        method: DELETE,
    })
};

export const getRequest = async ({ endpoint }: IEndpoint) => {
    return APIConnection({
        endpoint,
        method: GET,
    })
};

export const patchRequest = async ({ data, endpoint }: IData & IEndpoint) => {
    return APIConnection({
        endpoint,
        method: PATCH,
        data,
    })
};

export const postRequest = async ({ data, endpoint }: IData & IEndpoint) => {
    return APIConnection({
        endpoint,
        method: POST,
        data,
    })
};

export const putRequest = async ({ data, endpoint }: IData & IEndpoint) => {
    return APIConnection({
        endpoint,
        method: PUT,
        data,
    })
};
