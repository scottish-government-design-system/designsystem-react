"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tag_1 = __importDefault(require("../tag/tag"));
const PhaseBanner = ({ children, phaseName, ...props }) => {
    return (<div className="ds_phase-banner" {...props}>
            <div className="ds_wrapper">
                <p className="ds_phase-banner__content">
                    {phaseName && <tag_1.default title={phaseName} className="ds_phase-banner__tag"/>}
                    <span className="ds_phase-banner__text">
                        {children || "This is a new service"}
                    </span>
                </p>
            </div>
        </div>);
};
PhaseBanner.displayName = 'PhaseBanner';
exports.default = PhaseBanner;
