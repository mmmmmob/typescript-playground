"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
// ? create abstract class with generic type to be reusable with different type of return type
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
        })
            // convert a row as a set of managable data types
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
