import React, { useContext } from 'react';
import { Connection, getClient, getRegister } from '../Connection';
import { ClientContext } from '../../contexts';

export const Register = () => {
    const { updateClient } = useContext(ClientContext);
    return <Connection firstForm={getRegister()} secondForm={getClient(updateClient)} page={'register'}/>
};
