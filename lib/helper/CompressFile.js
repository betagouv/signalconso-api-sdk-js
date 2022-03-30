"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompressFile = void 0;
const browser_image_compression_1 = __importDefault(require("browser-image-compression"));
class CompressFile {
}
exports.CompressFile = CompressFile;
CompressFile.compress = (f) => {
    if (f.type.includes('image/')) {
        return CompressFile.compressImage(f, {
            maxSizeMB: 0.1,
            maxWidthOrHeight: 2000,
        });
    }
    return Promise.resolve(f);
};
CompressFile.compressImage = (f, options) => browser_image_compression_1.default(f, options);
//# sourceMappingURL=CompressFile.js.map