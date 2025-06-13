"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const error_message_1 = __importDefault(require("../error-message/error-message"));
const hint_text_1 = __importDefault(require("../../common/hint-text"));
const wrapper_tag_1 = __importDefault(require("../../common/wrapper-tag"));
const Question = function ({ children, error, errorMessage, hintText, legend, tagName = 'div', ...props }) {
    return (<wrapper_tag_1.default tagName={tagName} className={[
            'ds_question',
            error && 'ds_question--error'
        ].join(' ')} {...props}>
            {legend && <legend>{legend}</legend>}
            {hintText && <hint_text_1.default text={hintText}/>}
            {error && errorMessage && <error_message_1.default text={errorMessage}/>}
            {children}
        </wrapper_tag_1.default>);
};
Question.displayName = 'Question';
exports.default = Question;
