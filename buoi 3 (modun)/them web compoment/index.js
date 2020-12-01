
import { Student } from "./Student.js"
import { School } from "./School.js"
import "./cardComponent.js"

function show(a) {
    let b = document.querySelector('#show')
    b.innerHTML = ''
    if (a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            const c = a[i];
            b.innerHTML +=
                `
                <card-container name="${c.name}" age="${c.age}" classroom="${c.classroom}" villageE="${c.villageE}"></card-container>
        `
        }
    }
    else b.innerHTML = 'Không tìm thấy học sinh'
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
        if  (school.listStudent[i].name.include(a.toLowerCase()).toLowerCase() === true) {
            s.push(school.listStudent[i])
        }

    } return s
}
