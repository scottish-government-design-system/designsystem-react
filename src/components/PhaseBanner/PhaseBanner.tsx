import Tag from "../Tag/Tag";
import { PhaseBannerProps } from "./types";
import clsx from 'clsx';

const PhaseBanner = ({
    children,
    className,
    phaseName,
    ...props
}: PhaseBannerProps) => {
    return (
        <div
            className={clsx([
                'ds_phase-banner',
                className
            ])}
            {...props}
        >
            <div className="ds_wrapper">
                <p className="ds_phase-banner__content">
                    {phaseName && <Tag className="ds_phase-banner__tag">{phaseName}</Tag>}
                    <span className="ds_phase-banner__text">
                        {children || "This is a new service"}
                    </span>
                </p>
            </div>
        </div>
    )
}

PhaseBanner.displayName = 'PhaseBanner';

export default PhaseBanner;
