import { useEffect, useRef } from 'react';
// @ts-expect-error no types from core SGDS
import DSTable from '@scottish-government/design-system/src/components/table/table';
import { TableProps } from './types';

const Table = ({
    children,
    className,
    smallscreen,
    ...props
}: TableProps) => {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            new DSTable().init();
        }
    }, [ref]);

    return (
        <table
            className={[
                'ds_table',
                className
            ].join(' ')}
            data-smallscreen={smallscreen}
            ref={ref}
            {...props}
        >
            {children}
        </table>
    );
};

Table.displayName = 'Table';

export default Table;
