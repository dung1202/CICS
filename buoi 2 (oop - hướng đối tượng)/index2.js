class Person{
    name;
    age;
    address;
    gender;
    constructor(name, age, address, gender){                          // được gọi khi có đối tượng mới
        this.name = name
        this.age = age
        this.address = address
        this.gender = gender
                                                                      // this là tên gọi tắt cho oop vừa được nhập
    }
    speak(){
        console.log(
        `hello, i'm ${this.name}
        i'm ${this.age} year old
        i from ${this.address}
        i'm ${this.gender}`)
    }
}

// const add = new Person('Duyet', 20, 'Ha Noi', 'Female')
// const them = new Person('Dung', 19, 'Vinh Phuc', 'Female')
// // console.log(add)
// // console.log(them)
// // add.speak()

// them.speak()

// class Animal{
//     name;
//     species;
//     age;
//     numberOfLeg;
//     gender;
//     // con + name + dang keu 
//     constructor(name, species, age, numberOfLeg, gender)
//     {
//         this.name = name
//         this.species = species
//         this.age = age
//         this.numberOfLeg = numberOfLeg
//         this.gender = gender
//     }
//     speak(){
//         console.log('meo keu meo meo')
//     }
//     isDangerous()    
//     {
//         // if (this.numberOfLeg>4 || this.numberOfLeg===0)
//         //      console.log('nguy hiem')
//         // else console.log('so cuke')
//         const messeger = (this.numberOfLeg>4 || this.numberOfLeg===0) ? 'nguy hiem' : 'so kute'
//         console.log(messeger)
//     }
// }

// const add = new Animal('meo', 'meo rung', 2, 4, 'female')
// console.log(add)


// static mathod
// dung khi khong can goi ten cac lop
// class MyMath{
//     static sum(a, b)
//     {
//         return a+b
//     }
//     static div(a, b)
//     {
//         return a/b
//     }
// }
// console.log(MyMath.sum(1,2))

//ke thua
// class Employee extends Person{
//     salary;
//     constructor(name, age, address, gender, salary){
//         super(name, age, address, gender)
//         this.salary = salary
//     }
//     speak()
//     {
//         console.log('Tong thong tau hai')
//     }
//     showOff()
//     {
//         console.log(`my salary is ${this.salary}`)
//     }
// }

// const myEmployee = new Employee('trump', 76, 'New York', ' Female', '1m$')
// console.log(myEmployee)
// console.log(myEmployee.speak())


//ke thua
// tao class dog ke thua animal, khi speak() in ra gau gau

// class Dog extends Animal
// {
//     constructor(name, species, age, numberOfLeg, gender)
//     {
//         super(name, species, age, numberOfLeg, gender)
//     }
//     speak(){
//         console.log('cho sua gau gau')
//     }
// }

// const cho = new Dog('cho', 'cho nha', 1, 4, 'male') 




