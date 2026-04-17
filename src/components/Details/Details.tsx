import { DetailsProps } from "./types";
import clsx from 'clsx';

const Details = ({
    children,
    className,
    summary,
    ...props
}: DetailsProps) => {
    return (
        <details
            className={clsx([
                "ds_details",
                className
            ])}
            {...props}
        >
            <summary className="ds_details__summary">
                {summary}
            </summary>
            <div className="ds_details__text">
                {children}
            </div>
        </details>
    );
};

Details.displayName = 'Details';

export default Details;
