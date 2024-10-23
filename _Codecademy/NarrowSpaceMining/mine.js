function isItem(item) {
    return item !== null && "kind" in item;
}
var Mine = /** @class */ (function () {
    function Mine() {
        this.possible = [
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
        // The mine will contain up to 10 items
        this.count = Math.floor(Math.random() * 10);
    }
    Mine.prototype.dig = function () {
        if (this.count === 0 || Math.random() > 0.5) {
            return null;
        }
        this.count--;
        return this.possible[Math.floor(Math.random() * this.possible.length)];
    };
    Mine.prototype.isEmpty = function () {
        return this.count === 0;
    };
    return Mine;
}());
var myMine = new Mine();
for (var i = 1; i <= myMine.count; i++) {
    var find = void 0;
    find = myMine.dig();
    if (isItem(find)) {
        console.log("Dig #".concat(i, ": Found ").concat(find.kind, "!"));
    }
    else {
        console.log("Dig #".concat(i, ": Nothing's found"));
    }
}
