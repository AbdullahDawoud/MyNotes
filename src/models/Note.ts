export class Note {
    constructor() {
        this.dateCreated = new Date();
        this.id = Math.round(Math.random() * 1000);
    }
    id: number;
    dateCreated: Date;
    title: string = '';
    text: string = '';
    color: string = '';
}
