import React, { useEffect, useState } from 'react';
import { ISearchItem } from '../../contexts/SearchContext';
import { Flipped } from 'react-flip-toolkit';
import { Icon } from '../Layout';

interface ItemInterface {
    index: number,
    item: ISearchItem,
    selected: number | null,
}

export const Item: React.FC<ItemInterface> = ({index, item, selected}) => {
    const [ expanded, setExpanded ] = useState<boolean>(selected === index);
    useEffect(() => {
        setExpanded(selected === index)
    }, [ index, selected ]);
    return (
        <div className="d-flex w-100 h-100">
            <div className="p-0 col-4 ignore-screen">
                <img
                    src={item.photos[ 0 ] ? (item.photos[ 0 ].url_photo || item.photos[ 0 ].url) : ''}
                    alt={item.photos[ 0 ] ? item.photos[ 0 ].photo : ''}
                    className="h-100 w-100 fit-cover"/>
            </div>
            <Flipped
                {...{
                    flipId: `card-content-${index}`,
                    key: index,
                }}
            >
                <div className={`col-8 ignore-screen d-flex ${ expanded ? 'p-0' : '' }`}>
                    <div className="tile__container d-flex h-100 flex-column">
                        <span className="tile__title u-no-margin d-block text-center">
                            {item.price}€
                        </span>
                            <span className="tile__subtitle u-no-margin d-block text-center">
                            {item.city}
                        </span>
                        <span
                            {...{
                                className: `info text-center mb-1 ${ !expanded ? 'clamped clamped-3' : ''}`,
                                dangerouslySetInnerHTML: {
                                    __html: item.description
                                }
                            }}
                        />
                        {
                            expanded && (
                                <div className="mt-auto btn-group btn-group-fill">
                                    <button className="btn-transparent outline" onClick={(event: any) => {
                                        event.stopPropagation();
                                    }}>
                                        <Icon icon="file-signature"/> Postuler
                                    </button>
                                    <button className="btn-transparent outline" onClick={(event: any) => {
                                        event.stopPropagation();
                                    }}>
                                        <Icon icon="heart"/> Sauvegarder
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Flipped>
        </div>
    )
};
