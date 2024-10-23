"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const words_1 = require("./words");
class PasswordGenerator {
    constructor(length) {
        this.passwordLength = 12;
        this.passwordLength = length;
    }
    generatePassword() {
        let password = "";
        for (let i = 0; i < this.passwordLength; i++) {
            password += this.generateRandomCharacter();
        }
        return password;
    }
    generateRandomCharacter() {
        const characters = "abcdefghijklmnopqrstuvwxyz".split("");
        const randomCharacter = this.getRandomItem(characters);
        if (Math.random() > 0.5) {
            return randomCharacter.toUpperCase();
        }
        return randomCharacter;
    }
    getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
}
class ReadablePasswordGenerator extends PasswordGenerator {
    generateRandomWord() {
        const randomWord = this.getRandomItem(words_1.wordList);
        return randomWord;
    }
    generatePassword() {
        let finalReadablePassword = "";
        while (finalReadablePassword.length < this.passwordLength + 1) {
            finalReadablePassword += this.generateRandomWord() + "-";
        }
        return finalReadablePassword.slice(0, -1);
    }
}
const myPasswordGenerator = new PasswordGenerator(30);
const password = myPasswordGenerator.generatePassword();
const myReadablePasswordGenerator = new ReadablePasswordGenerator(30);
const ReadablePassword = myReadablePasswordGenerator.generatePassword();
console.log(`
Generated password:
${password}
`);
console.log(`
Generated readable-password:
${ReadablePassword}
`);
