import { PageContent } from '@components/layout';
import { Text } from '@medly-components/core';
import React from 'react';
import { Props } from './types';
import Products from '@components/layout/Products.tsx';

export const Dashboard: React.FC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Products />
    </PageContent>
);
