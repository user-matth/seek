export class Exam {
    constructor(
        public id?: string,
        public subject?: string,
        public title?: string,
        public description?: string,
        public question?: string,
        public answer_a?: string,
        public answer_b?: string,
        public answer_c?: string,
        public answer_d?: string,
        public answer_e?: string,
        public correct_answer?: string,
    ) {  }
}