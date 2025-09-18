"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const SvgGeneric = (props) => (<svg fill="none" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <path d="m1 119v-118.000244h58.5858l19.4142 19.414244v98.586z" fill="#fff" stroke="#5e5e5e" strokeWidth={2}/>
    <g fill="#5e5e5e">
      <path d="m80 19.9998-20-20.00004414v20.00004414z"/>
      <path d="m10 27.9998h59.9997v5h-59.9997z"/>
      <path d="m10 37.9998h59.9997v5h-59.9997z"/>
      <path d="m10 47.9998h59.9997v5h-59.9997z"/>
      <path d="m10 57.9998h30v5h-30z"/>
    </g>
  </svg>);
exports.default = SvgGeneric;
