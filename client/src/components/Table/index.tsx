import React, { ChangeEvent, useContext } from 'react';
import { ADD_SELECTED_ITEM, REMOVE_SELECTED_ITEM, TableContext, TableProvider } from '../../contexts';
import './table.scss';
import { RedButton } from '../Button';
import { Icon } from '../Layout/Icon';

interface ITable {
    actions?: JSX.Element | JSX.Element[],
    data: any[],
    dataKeys?: string[],
    dispatch?: any,
    headers: string[],
    items?: string[],
    selectable?: boolean,
    withHeaders: boolean,
}

export const TableComponent: React.FC<ITable> = ({actions, data, dataKeys, dispatch, headers, items, selectable, withHeaders}) => {
    return (
        <div className='table-responsive card p-0'>
            {
                selectable && items && items.length ? (
                    <div className='p-4 d-flex bg--midnight-blue color--paper'>
                        <span
                            className='my-auto'>{items.length} ligne{items.length > 1 && 's'} sélectionnée{items.length > 1 && 's'}</span>
                        <span className='ml-auto'>
                            <RedButton>
                                <Icon icon='trash'/>
                                <span className='my-auto'>
                                    Supprimer
                                </span>
                            </RedButton>
                        </span>
                    </div>
                ) : null
            }
            <table className='table'>
                {
                    withHeaders && (
                        <thead>
                        <tr className={`table-header ${selectable && 'table-selectable'}`}>
                            {
                                (selectable ? ['Select.', ...headers] : headers).map((header: string, key: number) =>
                                    <th {...{className: 'px-3', key}}>{header}</th>
                                )
                            }
                        </tr>
                        </thead>
                    )
                }
                <tbody>
                {
                    data.map(
                        (item: any, index: number) => (
                            <tr key={index}
                                className={(items && items.includes(item.id) && 'bg--belize not-hoverable color--paper') || ''}>
                                {
                                    selectable && (
                                        <td className='p-0 d-flex'>
                                            <input
                                                type='checkbox'
                                                checked={items && items.includes(item.id)}
                                                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                                    dispatch({
                                                        type: event.target.checked ? ADD_SELECTED_ITEM : REMOVE_SELECTED_ITEM,
                                                        payload: item.id
                                                    })
                                                }
                                            />
                                        </td>
                                    )
                                }
                                {
                                    (dataKeys || headers).map(
                                        (property: string, key: number) => <td {...{
                                            className: 'text-center p-0',
                                            key
                                        }}>{item[ property ]}</td>
                                    )
                                }
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    )
};

const TableSelectable: React.FC<ITable> = props => {
    const {items, dispatch} = useContext(TableContext);

    return (
        <TableComponent {...{...props, items, dispatch}}/>
    )
};

export const Table: React.FC<ITable> = props => (
    props.selectable ?
        <TableProvider>
            <TableSelectable {...props}/>
        </TableProvider> : <TableComponent {...props}/>
);
