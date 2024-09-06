export class TicketPrices {
    constructor(regular: string, reduced: string, student: string, group: string, currency: string) {
        this.regular = regular;
        this.reduced = reduced;
        this.student = student;
        this.group = group;
        this.currency = currency;
    }
    regular: string;
    reduced: string;
    student: string;
    group: string;
    currency: string;
}
