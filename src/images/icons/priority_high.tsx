import * as React from "react";
import type { SVGProps } from "react";
const SvgPriorityHigh = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#000000"
        role="img"
        {...props}
    >
        <path d="M0 0h24v24H0z" fill="none" />
        <circle cx={12} cy={19} r={2} />
        <path d="M10 3h4v12h-4z" />
    </svg>
);
export default SvgPriorityHigh;
