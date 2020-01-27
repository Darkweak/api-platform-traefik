import { DropdownFieldType, IField } from '../Field';

const number = {
    type: 'number'
};

const postcode = (className?: string): IField => ({
    className,
    name: 'postcode',
    pattern: '[0-9]+',
    placeholder: 'Code postal',
    ...number
});

const city = (className?: string): IField => ({
    className,
    name: 'city',
    placeholder: 'Ville',
});

const minPrice = (className?: string): IField => ({
    className,
    name: 'minPrice',
    placeholder: '€ min.',
    ...number,
});

const maxPrice = (className?: string): IField => ({
    className,
    name: 'maxPrice',
    placeholder: '€ max.',
    ...number,
});

const minSize = (className?: string): IField => ({
    className,
    name: 'minSize',
    placeholder: 'm² min.',
    ...number,
});

const maxSize = (className?: string): IField => ({
    className,
    name: 'maxSize',
    placeholder: 'm² max.',
    ...number,
});

export const searchFields: DropdownFieldType[] = [
    postcode('col-2'),
    city('col-4'),
    {
        className: 'col-3',
        name: 'Prix',
        fields: [
            minPrice('col-2'),
            maxPrice('col-2'),
        ]
    },
    {
        className: 'col-3',
        name: 'Taille',
        fields: [
            minSize('col-2'),
            maxSize('col-2'),
        ]
    },
];
