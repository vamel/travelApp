export class TicketPrices {
    constructor(max_price: string, min_price: string, currency: string) {
        this.max_price = max_price;
        this.min_price = min_price;
        this.currency = currency;
    }
    max_price: string;
    min_price: string;
    currency: string;
}
