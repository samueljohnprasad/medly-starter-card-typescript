import React from 'react';
import { WithStyle } from '@medly-components/utils';
import styled from 'styled-components';
import CardStyle from './Card.styled';
const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-y: auto;
    scroll-behavior: smooth;
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 60px;
    &::after {
        content: '';
        position: relative;
        display: block;
        flex-shrink: 0;
        width: calc(50vw - 160px);
        height: 1px;
    }
    > button {
        margin-right: 40px;
        margin-bottom: 40px;
    }

    > button:not(:first-child) {
        visibility: visible; /* switch to 'visible' */
    }
`;
type obj = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

interface styler {
    sam: obj[];
}
const Card: React.FC<styler> = React.memo(({ sam }) => {
    return (
        <Page>
            <Grid>
                {sam.map((website: obj, index: number) => (
                    <CardStyle key={index} {...website} />
                ))}
            </Grid>
        </Page>
    );
});

Card.displayName = 'card';
export default Card;
