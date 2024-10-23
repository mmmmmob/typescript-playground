type Item = {
  kind: string;
};

type Diggable = Item | null;

function isItem(item: Diggable): item is Item {
  return item !== null && "kind" in item;
}

class Mine {
  readonly possible = [
    {
      kind: "rock",
    },
    {
      kind: "iron",
      value: 10,
    },
    {
      kind: "gold",
      value: 20,
    },
    {
      kind: "platinum",
      value: 30,
    },
  ];
  count: number;
  constructor() {
    // The mine will contain up to 10 items
    this.count = Math.floor(Math.random() * 10);
  }

  dig(): Diggable {
    if (this.count === 0 || Math.random() > 0.5) {
      return null;
    }
    this.count--;
    return this.possible[Math.floor(Math.random() * this.possible.length)];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }
}

let myMine = new Mine();
for (let i = 1; i <= myMine.count; i++) {
  let find: Diggable;
  find = myMine.dig();
  if (isItem(find)) {
    console.log(`Dig #${i}: Found ${find.kind}!`);
  } else {
    console.log(`Dig #${i}: Nothing's found`);
  }
}
