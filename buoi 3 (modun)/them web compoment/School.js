let age15 = []
let age18Hn = []
import { Student } from './Student.js'
export class School {
    listStudent;
    constructor() {
        this.listStudent = []
    }

    addStudnet(student) {
        if (student instanceof Student) {
            this.listStudent.push(student)
        } else {
            alert('Nhập linh tinh')
        }

        if (student.age === 15) age15.push(student)
        // kiểm tra độ tuổi là 15 không?
        if (student.age === 18 && student.village.toLowerCase() === 'ha noi') age18Hn.push(student)
        // kiểm tra độ tuổi là 18 và ở hà nội không
    }
}
console.log(age15,age18Hn)
export { age15, age18Hn }

export function addStudent() {
    let name = prompt('Nhập tên học sinh mới')
    let age = Number(prompt('Tuổi của học sinh'))
    let classroom = prompt('Tên lớp')
    let village = prompt('Quê quán không dấu')
    let villageE = prompt('Quê quán có dấu')
    const n = new Student(name, classroom, age, village, villageE)
    school.addStudnet(n)
    show(school.listStudent)
}