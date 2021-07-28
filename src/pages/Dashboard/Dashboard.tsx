import { PageContent } from '@components/layout';
import React from 'react';
import { Props } from './types';
import Products from '@components/layout/Products';

export const Dashboard: React.FC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Products />
    </PageContent>
);
