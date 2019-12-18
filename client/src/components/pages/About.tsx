import React from 'react';
import { ABOUT, HOME } from '../Breadcrumb';
import { Layout } from '../Layout';
import { Table } from '../Table';

const headers = ['label', 'description', 'test'];
const data = [
    {
        id: '1',
        description: 'Description 1',
        label: 'Label 1',
        test: 'Test 1',
    },
    {
        id: '2',
        description: 'Description 1',
        label: 'Label 1',
        test: 'Test 1',
    },
    {
        id: '3',
        description: 'Description 1',
        label: 'Label 1',
        test: 'Test 1',
    },
    {
        id: '4',
        description: 'Description 1',
        label: 'Label 1',
        test: 'Test 1',
    },
    {
        id: '5',
        description: 'Description 1',
        label: 'Label 1',
        test: 'Test 1',
    },
    {
        id: '6',
        description: 'Description 1',
        label: 'Label 1',
        test: 'Test 1',
    },
    {
        id: '7',
        description: 'Description 1',
        label: 'Label 1',
        test: 'Test 1',
    },
]

export const About: React.FC = () => {
    return (
        <Layout pageName={`Nous contacter`} breadcrumb={[HOME, ABOUT]}>
            <div className="g--10 m--1">
                <Table {...{data, headers, selectable: true, withHeaders: true}}/>
            </div>
        </Layout>
    )
}
