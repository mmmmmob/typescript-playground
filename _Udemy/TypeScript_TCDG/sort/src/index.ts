import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numberCollection = new NumberCollection([-10, 3, -4, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);
