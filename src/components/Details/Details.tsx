import { DetailsProps } from "./types";

const Details = ({
    children,
    className,
    summary,
    ...props
}: DetailsProps) => {
    return (
        <details
            className={[
                "ds_details",
                className
            ].join(' ')}
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
