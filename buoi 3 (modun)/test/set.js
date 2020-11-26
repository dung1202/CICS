import { Student } from './index.js'
import { School } from '.School.js'

function show(a) {
    let b = document.querySelector('#show')
    b.innerHTML = ''
    if (a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            const c = a[i];
            b.innerHTML +=
                `
                    <div class='tp'>
                        <div>Họ và tên: ${c.name}</div>
                        <div>Tuổi: ${c.age}</div>
                        <div>Lớp: ${c.classroom}</div>
                        <div>Quê quán: ${c.villageE}</div>
                    </div>
        `
        }
    }
    else b.innerHTML = 'Không tìm thấy học sinh'
}

function addStudent() {
    let name = prompt('Nhập tên học sinh mới')
    let age = Number(prompt('Tuổi của học sinh'))
    let classroom = prompt('Tên lớp')
    let village = prompt('Quê quán không dấu')
    let villageE = prompt('Quê quán có dấu')
    const n = new Student(name, classroom, age, village, villageE)
    school.addStudnet(n)
    show(school.listStudent)
}
const school = new School()
const c1 = new Student('Phạm Văn A', '12B', 15, 'Lao Cai', 'Lào Cai')
const c2 = new Student('Phạm Văn B', '12C', 18, 'Ha Noi', "Hà Nội")
const c3 = new Student('Nguyễn Văn C', '12A', 17, 'Ha Noi', 'Hà Nội')
const c4 = new Student('Nguyễn Văn D', '12D', 15, 'Vinh Phuc', 'Vĩnh Phúc')
school.addStudnet(c1)
school.addStudnet(c2)
school.addStudnet(c3)
school.addStudnet(c4)
show(school.listStudent)

function ht() {
    show(school.listStudent)
}

function enterLogin(e, t) {
    if (e.key === 'Enter') tk();
}

function y() {
    show(age15)
}

function yHN() {
    show(age18Hn)
}

function tk() {
    show(sreach())
}

function sreach() {
    let s=[]
    let a = document.querySelector('#sreach').value.trim()
    for (let i = 0; i < school.listStudent.length; i++) {
        if (a.toLowerCase() === school.listStudent[i].fullName.include(a).toLowerCase()) {
            s.push(school.listStudent[i])
        }
    } return s
}