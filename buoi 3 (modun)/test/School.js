import { Student } from './index.js'
export class School {
    listStudent;
    constructor() {
        this.listStudent = []
    }

    addStudnet(student) {
        if (student instanceof Student)
        {
            this.listStudent.push(student)
        }
        else {
            alert('nhap lai di')
        }
        if (student.age === 15) age15.push(student)
        // kiểm tra độ tuổi là 15 không?
        if (student.age === 18 && student.village.toLowerCase() === 'ha noi') age18Hn.push(student)
        // kiểm tra độ tuổi là 18 và ở hà nội không
    }
}
let age15 = []
let age18Hn = []