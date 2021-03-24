"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
var serve = function (dir, filename, port) {
    console.log('serving traffic on port', port);
    console.log('saving/fetching cells from', filename);
    console.log('file is located in directory:', dir);
};
exports.serve = serve;
