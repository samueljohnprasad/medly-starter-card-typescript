import { SingleSelect } from '@medly-components/core';
import { useProducts } from 'contexts/productsContext/productsContext';
import React from 'react';
import { useState } from 'react';

export const Selections: React.FC = () => {
    const { dispatch, selectionProducts } = useProducts();
    const [value, setValue] = useState<number | React.Dispatch<number>>(1);
    return (
        <SingleSelect
            errorText=""
            fullWidth={false}
            helperText="Groceries"
            includesNestedOptions={false}
            isSearchable={false}
            label="Groceries"
            maxWidth=""
            minWidth="20rem"
            options={[
                {
                    label: 'Highest to Lowest',
                    value: '1'
                },
                {
                    label: 'Lowest to Highest',
                    value: '2'
                }
            ]}
            onChange={selection => {
                setValue(selection);
                return dispatch(selectionProducts(selection));
            }}
            placeholder="Groceries"
            required={false}
            showDecorators
            size="S"
            value={value}
            variant="outlined"
        />
    );
};
