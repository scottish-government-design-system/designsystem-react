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
const SvgImage = (props) => (<svg fill="none" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <path d="m.999512 119v-118.000244h58.585788l19.4142 19.414244v98.586z" fill="#fff" stroke="#5e5e5e" strokeWidth={2}/>
    <path d="m79.9995 19.9998-20-20.00004414v20.00004414z" fill="#5e5e5e"/>
    <path d="m63.9773 27.9998h-47.4546c-2.6363 0-5.2727 2.6666-5.2727 5.3333v37.3333c0 2.9334 2.3727 5.3334 5.2727 5.3334h47.4546c2.6363 0 5.2727-2.6667 5.2727-5.3334v-37.3333c0-2.6667-2.6364-5.3333-5.2727-5.3333zm-42.1818 37.3333 9.2272-12 6.5909 8.0267 9.2273-12.0267 11.8636 16z" fill="#5e5e5e"/>
    <circle cx={39.5833} cy={43.6246} fill="#fff" r={3.33333}/>
  </svg>);
exports.default = SvgImage;
