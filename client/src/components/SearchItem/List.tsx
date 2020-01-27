import React, { useContext, useState } from 'react';
import { ISearchItem, SearchContext } from '../../contexts/SearchContext';
import { Flipper } from 'react-flip-toolkit';

export const List: React.FC = () => {
    const [ selected ] = useState<number|null>(null);
    const { list } = useContext(SearchContext);
    return (
        <Flipper
            flipKey={ selected }
            className="staggered-list-content"
            spring="gentle"
            staggerConfig={{
                card: {
                    reverse: selected !== null
                }
            }}
            decisionData={ selected }
        >
            <div className="content row">
                {
                    list.map((item: ISearchItem, key: number) => (
                        <div {...{ className: 'col-4', key }}>
                            <div className="d-flex h-100">
                                <div className="card tile tile--center pointer">
                                    <div className="d-flex w-100 h-100">
                                        <div className="p-0 col-4 ignore-screen">
                                            <img src={ item.photos[0].url_photo || item.photos[0].url } alt={ item.photos[0].photo } className="h-100 w-100"/>
                                        </div>
                                        <div className="col-8 ignore-screen">
                                            <div className="tile__container">
                                            <span className="tile__title u-no-margin d-block text-center">
                                                { item.price }€
                                            </span>
                                                <span className="tile__subtitle u-no-margin d-block text-center">
                                                { item.city }
                                            </span>
                                                <span
                                                    className="info text-center clamped clamped-3 pb-1"
                                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Flipper>
    )
}
