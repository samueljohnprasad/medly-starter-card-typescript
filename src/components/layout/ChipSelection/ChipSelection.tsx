import { Chip } from '@medly-components/core';
import React, { useState } from 'react';
import { chipsData } from '@utils/chipsData';

export const ChipSelection: React.FC = () => {
    const [chipColors, setChipColors] = useState(chipsData);
    const chipHandler = (i: number) => {
        const newColors = chipColors;
        newColors[i].color = newColors[i].color === 'black' ? '#c4c2c2' : 'black';
        setChipColors([...newColors]);
    };
    return (
        <>
            {chipColors.map(chip => (
                <Chip key={chip.id} color={chip.color} label={chip.label} variant="solid" onClick={() => chipHandler(chip.id)} />
            ))}
        </>
    );
};
