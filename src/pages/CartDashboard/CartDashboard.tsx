import { PageContent } from '@components/layout';
import React from 'react';
import { Props } from '../Dashboard/types';
import Products from '@components/layout/Products';

export const CartDashboard: React.FC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <Products />
    </PageContent>
);
