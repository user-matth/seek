export class Task {
    constructor(
        public id?: string,
        public title?: string,
        public description?: string,
        public tag?: string,
        public until_when?: string,
        public created_at?: string
    ){ }
}