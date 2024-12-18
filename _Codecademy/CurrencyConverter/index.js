var conversionRates = {
    euro: 1.1,
    inr: 0.012,
    usd: 1,
};
var Wallet = /** @class */ (function () {
    function Wallet(currency, remaining) {
        this.currency = currency;
        this.stored = remaining;
    }
    Wallet.prototype.spend = function (amount) {
        if (this.stored < amount) {
            return false;
        }
        this.stored -= amount;
        return true;
    };
    Wallet.prototype.transferTo = function (newCurrency) {
        var newStored = (this.stored / conversionRates.usd) * conversionRates[newCurrency];
        this.stored = 0;
        return new Wallet(newCurrency, newStored);
    };
    return Wallet;
}());
function purchaseInCurrency(wallet, tag) {
    return wallet.spend(tag.price) && tag.item;
}
var americanWallet = new Wallet("usd", 50);
var hat = purchaseInCurrency(americanWallet, {
    currency: "usd",
    item: "cowboy hat",
    price: 34.99,
});
if (hat) {
    console.log("I purchased a hat! 🤠");
}
else {
    console.log("I couldn't afford the hat...");
}
var falafel = purchaseInCurrency(americanWallet.transferTo("euro"), {
    currency: "euro",
    item: "falafel",
    price: 10,
});
if (falafel) {
    console.log("I purchased falafel! 🥙");
}
else {
    console.log("I couldn't afford the falafel...");
}
