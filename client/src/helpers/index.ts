import jwt_decode from 'jwt-decode';

export const hasWindow = (): boolean => 'undefined' !== typeof window;

abstract class LS {
    protected field = '';
    public get(): string {
        return (hasWindow() && localStorage.getItem(this.field)) || '';
    }
    public set(value: string): void {
        localStorage.setItem(this.field, value);
    }
    public delete(): void {
        localStorage.removeItem(this.field);
    }
}

export class Token extends LS {
    protected field = 'token';

    public getDecodedToken(): any {
        return jwt_decode(this.get());
    }
}

export class Firstname extends Token{
    protected field = 'firstname';

    public set() {
        super.set(new Token().getDecodedToken().firstname);
    }
}

export class Lastname extends Token{
    protected field = 'lastname';

    public set() {
        super.set(new Token().getDecodedToken().lastname);
    }
}

export class Username extends Token{
    protected field = 'username';

    public set() {
        super.set(new Token().getDecodedToken().username);
    }
}
