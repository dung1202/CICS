// // b1. kiem tra the ky
// function tk(a){
//     let b = a%10
//     let c = parseInt(a/100)
//     if (b >= 1) return console.log(`the ky ${c+1}`)
//         else return console.log(`the ky ${c}`)
// }

// let n = Number(prompt('nhap nam'))
// tk(n);

// -----------------------------------------------------

// // b2. xau doi xung
// function kt(a) {
//     let b = new String(a)
//     let k = true
//     for (let i = 0; i < b.length; i++) {
//         if (b[i] !== b[b.length-i-1])
//         {
//             k = false
//             break
//         }
//     }
//     if (kt===true) return console.log(`${a} la chuoi doi xung`)
//         else return console.log(`${a} khong phai la chuoi doi xung`)
// }

// let n = prompt('nhap chuoi')
// kt(n);

// --------------------------------------------------------

// // b3. tich 2 so gan nhau lon nhat
// function k()
// {
//     let a=[3, 6, -2, -5, 7, 3]
//     let b=[]
//     for (let i = 0; i < a.length-1; i++) {
//         b.push(a[i]*a[i+1])
//     }
//     let max = b[0];
//     for (let i = 1; i < b.length; i++) {
//         if (max < b[i]) max=b[i] 
//     }
//     return console.log(max)
// }
// k()

// -------------------------------

// // b4. kiem tra so chan
// function k(){
//     let a = [3,6,-2,-5,7,3,8,10,11]
//     let c=[]
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] % 2 === 0) c.push(a[i])
//     }
//     return console.log(c)
// }
// k();

// function k(){
//     let a = [3,6,-2,-5,7,3,8,10,11]
//     const k = a.filter(a => a%2 === 0)
//     return console.log(k)
// }
// k()

// //or

// function k(){
//     let a = [3,6,-2,-5,7,3,8,10,11]
//     const k = a.filter( function(value){
//         return a%2 === 0
// })
//     return console.log(k)
// }
// k()

//------------------------------------------

// function moi

const va = (stt) => Str.length  // in ra do dai xau
va()

