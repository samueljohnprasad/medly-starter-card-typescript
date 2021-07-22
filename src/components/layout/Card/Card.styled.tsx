import React from 'react';
import styled from 'styled-components';

const cardWidth = 320;
const borderRadius = 8;
const transition = 'all 0.45s ease';

const Screenshot = styled.figure<{ image: string }>`
    z-index: 200;
    position: relative;
    margin: 0;
    padding: 0;
    width: ${cardWidth}px;
    height: 200px;
    background: url(${props => props.image}) 0 0 no-repeat;
    background-size: cover;
    border-radius: ${borderRadius}px ${borderRadius}px 0 0;
    overflow: hidden;
    backface-visibility: hidden;
    transition: ${transition};
    object-fit: contain;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0);
        transition: ${transition};
    }
`;

const Content = styled.div`
    z-index: 200;
    position: relative;
    padding: 20px 20px 30px;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 4px;
    font-size: 1.25em;
    font-weight: 500;
    transition: ${transition};
`;

const Description = styled.span`
    display: block;
    font-size: 0.875em;
    color: #999;
    transition: ${transition};
    transition-delay: 0.04s;
`;

const BottomBar = styled.span<{ background: string }>`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10px;
    background: ${props => props.background && props.background};
    border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
    transition: ${transition};
`;

const Style = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    flex-shrink: 0;
    width: ${cardWidth}px;
    text-align: left;
    background: #fff;
    border-radius: ${borderRadius}px;
    cursor: pointer;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
    transition: ${transition};
    padding: 0;
    border: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    &:hover {
        transform: scale(1.04);
        ${Title},
        ${Description},
    ${BottomBar} {
            transform: scale(0.92);
        }
        ${Title} {
            transform: translateY(-10px);
        }
        ${Description} {
            transform: translateY(-12px);
        }
        ${BottomBar} {
            margin-left: 135px;
            width: 50px;
            height: 30px;
            border-radius: ${borderRadius - 2}px;
            transform: translateY(-14px) scale(0.9);
        }
        ${Screenshot} {
            transform: translateY(4px) scale(0.92);
            border-radius: ${borderRadius - 2}px;
            &::before {
                background: rgba(0, 0, 0, 0.1);
            }
        }
    }
`;

type styler = {
    title?: string;
    description?: string;
    image?: string;
};

const CardStyles = ({ image, title, description }: styler) => (
    <Style>
        <Screenshot image={image} />
        <Content>
            <Title>{title}</Title>
            <Description>{description.slice(0, 100)}</Description>
            <BottomBar background={'green'}></BottomBar>
        </Content>
    </Style>
);

export default CardStyles;
