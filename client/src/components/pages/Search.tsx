import React from 'react';
import { Layout } from '../Layout';
import { SearchForm } from '../Form';
import { SearchProvider } from '../../contexts/SearchContext';
import { List } from '../SearchItem/List';

export const Search: React.FC = () => {
    return (
        <Layout>
            <SearchProvider>
                <div className="bg-primary">
                    <SearchForm/>
                </div>
                <List/>
            </SearchProvider>
        </Layout>
    )
};
