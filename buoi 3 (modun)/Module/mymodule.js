// cách 1
function helloByVn() {
    console.log('Xin Chào')
}
export { helloByVn, helloByThailand } //chìa ra cho file js khác dùng

// cách 2
export function helloByThailand() {
    console.log('Xa Qua Di Cap')
}

// cách 3
export default function helloByThailand() {
    console.log('Xa Qua Di Cap')
}   //chỉ dùng khi export chỉ 1 cái duy nhất


