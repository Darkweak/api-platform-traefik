import React, { useContext, useState } from 'react';
import { ISearchItem, SearchContext } from '../../contexts/SearchContext';
import { Flipped, Flipper } from 'react-flip-toolkit';
import './list.scss';
import { Item } from './Item';

export const List: React.FC = () => {
    const [ selected, setSelected ] = useState<number | null>(null);
    const {list} = useContext(SearchContext);

    return (
        <Flipper
            flipKey={selected}
            className="content row"
            spring="noWobble"
            decisionData={selected}
        >
            {
                list.map((item: ISearchItem, index: number) =>
                    <Flipped
                        {...{
                            flipId: `card-item-${index}`,
                            key: index,
                        }}
                    >
                        <div {...{key: index, className: `col-${index === selected ? '12' : '6'}`}}>
                            <div className="d-flex h-100">
                                <div {...{
                                    className: `card tile tile--center pointer w-100 ${ index === selected ? 'expanded-item' : 'collapsed-item'}`,
                                    onClick: () => setSelected(index === selected ? null : index)
                                }}>
                                    <Item {...{index, item, selected}}/>
                                </div>
                            </div>
                        </div>
                    </Flipped>
                )
            }
        </Flipper>
    )
};
