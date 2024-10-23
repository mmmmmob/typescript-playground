type CurrencyCode = keyof typeof conversionRates;

const conversionRates = {
  euro: 1.1,
  inr: 0.012,
  usd: 1,
};

class Wallet<Currency extends CurrencyCode> {
  readonly currency: Currency;
  private stored: number;

  constructor(currency: Currency, remaining: number) {
    this.currency = currency;
    this.stored = remaining;
  }

  spend(amount: number) {
    if (this.stored < amount) {
      return false;
    }
    this.stored -= amount;
    return true;
  }

  transferTo<NewCurrency extends CurrencyCode>(newCurrency: NewCurrency) {
    const newStored =
      (this.stored / conversionRates.usd) * conversionRates[newCurrency];

    this.stored = 0;

    return new Wallet(newCurrency, newStored);
  }
}

interface PriceTag<Currency extends CurrencyCode> {
  currency: Currency;
  item: string;
  price: number;
}

function purchaseInCurrency<Currency extends CurrencyCode>(
  wallet: Wallet<Currency>,
  tag: PriceTag<Currency>
) {
  return wallet.spend(tag.price) && tag.item;
}

const americanWallet = new Wallet("usd", 50);

const hat = purchaseInCurrency(americanWallet, {
  currency: "usd",
  item: "cowboy hat",
  price: 34.99,
});

if (hat) {
  console.log("I purchased a hat! 🤠");
} else {
  console.log("I couldn't afford the hat...");
}

const falafel = purchaseInCurrency<"euro">(americanWallet.transferTo("euro"), {
  currency: "euro",
  item: "falafel",
  price: 10,
});

if (falafel) {
  console.log("I purchased falafel! 🥙");
} else {
  console.log("I couldn't afford the falafel...");
}
