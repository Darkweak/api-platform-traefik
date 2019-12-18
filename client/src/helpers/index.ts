import jwt_decode from 'jwt-decode';

const TOKEN = 'token';
const USERNAME = 'username';

const getLS = (item: string) => localStorage.getItem(item);
const setLS = (item: string, value: string) => localStorage.setItem(item, value);
const deleteLS = (item: string) => localStorage.removeItem(item);
export const hasWindow = (): boolean => 'undefined' !== typeof window;
export const getToken = () => hasWindow() && getLS(TOKEN);
export const setToken = (value: string) => hasWindow() && setLS(TOKEN, value) && setUsername(value);
export const deleteToken = () => hasWindow() && deleteLS(TOKEN) && deleteUsername();
export const getUsername = (): string => (hasWindow() && getLS(USERNAME)) || '';
export const setUsername = (value: string) => hasWindow() && setLS(USERNAME, jwt_decode(value));
export const deleteUsername = () => hasWindow() && deleteLS(USERNAME);
