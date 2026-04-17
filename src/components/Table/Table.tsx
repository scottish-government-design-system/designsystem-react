import { useEffect, useRef } from 'react';
import DSTable from '@scottish-government/design-system/src/components/table/table';
import { TableProps } from './types';
import clsx from 'clsx';

const Table = ({
    children,
    className,
    smallscreen,
    ...props
}: TableProps) => {
    const ref = useRef(null);

    useEffect(() => {
        /* istanbul ignore else */
        if (ref.current) {
            new DSTable(ref.current).init();
        }
    }, [ref]);

    return (
        <table
            className={clsx([
                'ds_table',
                className
            ])}
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
