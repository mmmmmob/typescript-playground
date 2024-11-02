import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const numberCollection = new NumberCollection([-10, 3, -4, 0]);
// const characterCollection = new CharacterCollection("cdAGhf");

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

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
