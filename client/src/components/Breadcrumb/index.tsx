import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RouteBreadcrumb } from './routes';
import { LanguageContext } from '../../contexts';

export interface IBreadcrumb {
    breadcrumb: RouteBreadcrumb[],
}

export const Breadcrumb = ({breadcrumb}: IBreadcrumb) => {
    const {translate} = useContext(LanguageContext);
    return (
        <div className='bg--paper d-flex'>
            <div className='m--1 g--10'>
                <h3 className='d-flex m-0'>
                    {
                        breadcrumb.map((route: RouteBreadcrumb, index: number) => (
                            <div className='d-flex' key={index}>
                                {
                                    breadcrumb[ index + 1 ] ?
                                        <>
                                            <Link to={route.path} key={index} className='px-1'>
                                                <span
                                                    className='my-auto color--concrete'>{translate(route.label)}</span>
                                            </Link>
                                            <span className='px-1'>/</span>
                                        </> :
                                        <p className='d-flex m-0'>{translate(route.label)}</p>
                                }
                            </div>
                        ))
                    }
                </h3>
            </div>
        </div>
    )
};

export * from './routes';
