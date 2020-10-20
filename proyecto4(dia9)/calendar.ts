import { Person } from "./person";

export class Calendar {
    public people:Person[];
    constructor() {
        this.people = new Array();
    }

    /**
     * printCalendar
     */
    public printCalendar() {
        console.log(this.people);
    }
}

