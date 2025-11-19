"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const react_1 = require("react");
//@ts-ignore
const tracking_1 = __importDefault(require("@scottish-government/design-system/src/base/tools/tracking/tracking"));
function default_1() {
    (0, react_1.useEffect)(() => {
        const observer = new MutationObserver(() => {
            tracking_1.default.init();
        });
        tracking_1.default.init();
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });
        return () => {
            observer.disconnect();
        };
    }, []);
}
