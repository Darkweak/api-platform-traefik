import jwt_decode from 'jwt-decode';

export const hasWindow = (): boolean => 'undefined' !== typeof window;

class LS {
    protected name = '';

    get(): string {
        return localStorage.getItem(this.name) || '';
    }

    set(value: string): void {
        localStorage.setItem(this.name, value);
    }

    delete(): void {
        localStorage.removeItem(this.name);
    }
}

export class Token extends LS {
    protected name = 'token';

    set(value: string): void {
        super.set(value);
        new Username().set(jwt_decode(value));
    }

    getDecoded() {
        return jwt_decode(super.get());
    }
}

export class Username extends LS {
    protected name = 'username';
}
