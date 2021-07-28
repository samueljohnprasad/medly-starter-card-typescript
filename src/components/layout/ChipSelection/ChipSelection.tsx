import { Chip } from '@medly-components/core';
import React, { useState } from 'react';
import { chipsData } from '@utils/chipsData';
import { useProducts } from 'contexts/productsContext/productsContext';

export const ChipSelection: React.FC = () => {
    const [chipColors, setChipColors] = useState(chipsData);
    const { dispatch, chipFilterProducts } = useProducts();
    const chipHandler = (i: number) => {
        const newColors = chipColors;
        newColors[i].color = newColors[i].color === 'black' ? '#c4c2c2' : 'black';
        setChipColors([...newColors]);
        dispatch(chipFilterProducts(chipColors[i].label));
    };
    return (
        <>
            {chipColors.map(chip => (
                <Chip key={chip.id} color={chip.color} label={chip.label} variant="solid" onClick={() => chipHandler(chip.id)} />
            ))}
        </>
    );
};
