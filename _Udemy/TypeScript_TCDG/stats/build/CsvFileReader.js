"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// ? this reader is now a generic reader without any references of MatchReader and can be reuse with any .csv
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, { encoding: "utf-8" })
            .split("\n")
            .map((row) => {
            return row.split(",");
        });
    }
}
exports.CsvFileReader = CsvFileReader;
