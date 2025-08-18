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
const SvgRtf = (props) => (<svg fill="none" viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg" role="img" {...props}>
    <path d="m1 119v-118h58.5858l19.4142 19.4142v98.5858z" fill="#fff" stroke="#0065bd" strokeWidth={2}/>
    <g fill="#0065bd">
      <path d="m80 20-20-20v20z"/>
      <path d="m10 60h59.9997v5h-59.9997z"/>
      <path d="m10 70h59.9997v5h-59.9997z"/>
      <path d="m10 80h30v5h-30z"/>
      <path d="m10 28h60v27h-60z"/>
    </g>
    <path d="m25.5334 35.5586h4.6399c.9514 0 1.7688.1424 2.4524.4272.6893.2849 1.2191.7064 1.5894 1.2647s.5554 1.2447.5554 2.0593c0 .6665-.1139 1.239-.3418 1.7175-.2222.4729-.5383.8688-.9485 1.1878-.4044.3133-.8801.564-1.427.7519l-.8117.4273h-4.0332l-.0171-1.9995h2.9992c.4501 0 .8232-.0798 1.1194-.2393s.5184-.3817.6665-.6665c.1538-.2848.2307-.6152.2307-.9912 0-.3988-.074-.7434-.2221-1.0339-.1481-.2906-.3732-.5127-.6751-.6665s-.6807-.2307-1.1365-.2307h-2.0764v10.4333h-2.5635zm6.9556 12.4414-2.8369-5.5457 2.7087-.017 2.8711 5.4431v.1196zm9.3054-12.4414v12.4414h-2.5549v-12.4414zm3.8282 0v2.0081h-10.1514v-2.0081zm4.0246 0v12.4414h-2.5635v-12.4414zm4.9561 5.3149v1.9995h-5.6568v-1.9995zm.5981-5.3149v2.0081h-6.2549v-2.0081z" fill="#fff"/>
  </svg>);
exports.default = SvgRtf;
