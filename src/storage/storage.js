export class Table {

    constructor(name, initial = null) {
        this.name = name;
        this.initial = initial;

        let table =  localStorage.getItem(this.name);
        
        if(table) {
            this.table = JSON.parse(table);
        }else {
            this.table = initial;
            this.save(initial);
        }
    }

    save(data) {
        localStorage.setItem(this.name, JSON.stringify(data));
    }
}