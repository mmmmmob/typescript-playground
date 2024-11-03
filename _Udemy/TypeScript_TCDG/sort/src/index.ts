import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([-10, 3, -4, 0]);

// .sort() can be directly calling from NumberCollection class
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharacterCollection("cdAGhf");
characterCollection.sort();
console.log(characterCollection.data);

// const sorterNum = new Sorter(numberCollection);
// sorterNum.sort();
// const sorterChar = new Sorter(characterCollection);
// sorterChar.sort();

// console.log(numberCollection.data);
// console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(5);

linkedList.sort();
linkedList.print();

// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
