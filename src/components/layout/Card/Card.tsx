import React from 'react';
import { WithStyle } from '@medly-components/utils';
import styled from 'styled-components';
import websites from './utils.json';
import CardStyle from './Card.styled';
const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    overflow-x: auto;
    scroll-behavior: smooth;
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: nowrap;
    padding-left: calc(50vw - 160px);
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
    }

    > button:not(:first-child) {
        visibility: visible; /* switch to 'visible' */
    }
`;
type styler = {
    title?: string;
    description?: string;
    image?: string;
};
const Card: React.FC & WithStyle = React.memo(() => {
    return (
        <Page>
            <Grid>
                {websites.map((website: styler, index: number) => (
                    <CardStyle key={index} {...website} />
                ))}
            </Grid>
        </Page>
    );
});

Card.displayName = 'card';
export default Card;
