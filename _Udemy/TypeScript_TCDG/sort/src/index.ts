import { CharacterCollection } from "./CharacterCollection";
import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([-10, 3, -4, 0]);
const characterCollection = new CharacterCollection("cdAGhf");

const sorterNum = new Sorter(numberCollection);
sorterNum.sort();
const sorterChar = new Sorter(characterCollection);
sorterChar.sort();

console.log(numberCollection.data);
console.log(characterCollection.data);
