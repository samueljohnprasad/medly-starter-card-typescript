import { Chip } from '@medly-components/core';
import React, { useState } from 'react';
import { chipsData } from '@utils/chipsData';
import { useProducts } from 'contexts/productsContext/productsContext';
const selectedCheckboxes = new Set();
export const ChipSelection: React.FC = () => {
    const [chipColors, setChipColors] = useState(chipsData);
    const { dispatch, chipFilterProducts } = useProducts();

    const chipHandler = (i: number) => {
        const newColors = chipColors;
        newColors[i].color = newColors[i].color === 'black' ? '#c4c2c2' : 'black';
        setChipColors([...newColors]);
        const label = newColors[i].label;
        if (selectedCheckboxes.has(label)) {
            selectedCheckboxes.delete(label);
        } else {
            selectedCheckboxes.add(label);
        }
        console.log('selectedCheckboxes', Array.from(selectedCheckboxes));
        const arr: string[] = Array.from(selectedCheckboxes) as string[];
        console.log(Array.isArray(arr));
        dispatch(chipFilterProducts(arr));
    };
    return (
        <>
            {chipColors.map(chip => (
                <Chip key={chip.id} color={chip.color} label={chip.label} variant="solid" onClick={() => chipHandler(chip.id)} />
            ))}
        </>
    );
};
