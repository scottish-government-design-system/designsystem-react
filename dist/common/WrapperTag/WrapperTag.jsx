"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Wraps all children in a specified HTML tag.
 */
const react_1 = __importDefault(require("react"));
const WrapperTag = ({ children, tagName = 'div', ...props }) => {
    return react_1.default.createElement(tagName, props, children);
};
WrapperTag.displayName = 'WrapperTag';
exports.default = WrapperTag;
