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
const SvgPpt = (props) => (<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <path d="m1 119v-118h58.59l19.41 19.41v98.59z" fill="#fff" stroke="#cb4e0b" strokeWidth={2}/>
    <path d="m80 20-20-20v20z" fill="#cb4e0b"/>
    <path d="m10 28h60v27h-60z" fill="#cb4e0b"/>
    <path d="m29.25 43.57h-3.17v-2h3.17c.49 0 .89-.08 1.2-.24.31-.17.53-.39.67-.68s.21-.62.21-.98-.07-.71-.21-1.03-.37-.58-.67-.77-.71-.29-1.2-.29h-2.28v10.43h-2.56v-12.44h4.84c.97 0 1.81.18 2.5.53.7.35 1.24.83 1.61 1.44.37.62.56 1.32.56 2.11s-.19 1.5-.56 2.08c-.37.59-.91 1.04-1.61 1.36-.69.32-1.53.48-2.5.48zm11.28 0h-3.17v-2h3.17c.49 0 .89-.08 1.2-.24.31-.17.53-.39.67-.68s.21-.62.21-.98-.07-.71-.21-1.03-.37-.58-.67-.77c-.31-.19-.71-.29-1.2-.29h-2.28v10.43h-2.56v-12.44h4.85c.97 0 1.81.18 2.5.53.7.35 1.24.83 1.61 1.44.37.62.56 1.32.56 2.11s-.19 1.5-.56 2.08c-.37.59-.91 1.04-1.61 1.36-.69.32-1.53.48-2.5.48zm12-8.01v12.44h-2.56v-12.44zm3.82 0v2.01h-10.15v-2.01z" fill="#fff"/>
    <g fill="#cb4e0b">
      <path d="m58.03 83.48c0 3.76-1.12 7.44-3.2 10.56-2.09 3.13-5.06 5.56-8.53 7s-7.3 1.81-10.99 1.08-7.08-2.55-9.74-5.2-4.47-6.05-5.2-9.74-.36-7.51 1.08-10.99c1.44-3.47 3.88-6.44 7-8.53 3.13-2.09 6.8-3.2 10.56-3.2v19.02z"/>
      <path d="m40.98 62.5c2.5 0 4.97.49 7.28 1.45s4.4 2.36 6.17 4.12c1.77 1.77 3.17 3.86 4.12 6.17.96 2.31 1.45 4.78 1.45 7.28h-19.02z"/>
    </g>
  </svg>);
exports.default = SvgPpt;
