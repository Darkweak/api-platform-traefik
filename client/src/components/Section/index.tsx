import React from 'react';

export interface SectionInterface {
    description: JSX.Element;
    title: string;
}

export const Section: React.FC<SectionInterface> = ({description, title}) => (
    <>
        <div className='text-center d-flex'>
            <h1 className='h1-responsive m-auto title-category'>
                {title}
                <div className='dropdown-divider'/>
            </h1>
        </div>
        <h5 className='h5-responsive m-0'>
            {description}
        </h5>
    </>
)
