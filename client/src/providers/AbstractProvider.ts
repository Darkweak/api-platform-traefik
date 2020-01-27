import { APIConnection } from '../actions/API';

export abstract class AbstractProvider extends APIConnection {
    protected baseUrl = '';
    protected endpoint = '';
}
