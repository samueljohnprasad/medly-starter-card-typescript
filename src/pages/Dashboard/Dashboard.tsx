import { PageContent } from '@components/layout';
import React from 'react';
import { Props } from './types';
import CoreTable from '@components/common/CoreTable';

export const Dashboard: React.FC<Props> = ({ isLoading }) => (
    <PageContent isLoading={isLoading}>
        <CoreTable />
    </PageContent>
);
