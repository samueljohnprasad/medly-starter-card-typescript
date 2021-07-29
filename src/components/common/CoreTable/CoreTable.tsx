import { Button, Table } from '@medly-components/core';
import React from 'react';

export const CoreTable: React.FC = () => {
    return (
        <Table
            columns={[
                {
                    field: 'firstName',
                    fitContent: false,
                    fraction: 2,
                    sortable: true,
                    title: 'USER NAME'
                },
                {
                    children: [
                        {
                            align: 'right',
                            field: 'maths',
                            sortable: true,
                            title: 'Maths'
                        },
                        {
                            align: 'right',
                            field: 'science',
                            sortable: true,
                            title: 'Science'
                        }
                    ],
                    field: 'marks',
                    title: 'Marks'
                },
                {
                    align: 'right',
                    field: 'age',
                    sortable: true,
                    title: 'Age'
                },
                {
                    field: 'isPassed',
                    formatter: function formatter(data) {
                        return data ? 'Yes' : 'No';
                    },
                    sortable: true,
                    title: 'Passed'
                },
                {
                    align: 'right',
                    field: 'rating',
                    sortable: true,
                    title: 'Rating'
                }
            ]}
            data={[
                {
                    id: '12',
                    firstName: 'Albus',
                    lastName: ' Perciva',
                    color: 'red,green',
                    disabled: true,
                    isPassed: false,
                    marks: {
                        maths: 6,
                        science: 4
                    },
                    rating: 5
                }
            ]}
            defaultActivePage={1}
            defaultSortOrder="desc"
            isRowExpandable
            isRowSelectable
            itemsPerPage={10}
            rowClickDisableKey="disabled"
            rowIdentifier="id"
            rowSelectionDisableKey="disabled"
            selectedRowIds={[2, 3]}
            size="M"
            totalItems={10}
            withActionBar
            withMinimap={false}
            withPagination
        />
    );
};
