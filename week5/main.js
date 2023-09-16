

//array can contain different data types in one array
const x = [1, true, 'A']
console.log(x)
console.log(x.length) //length is size of array
console.log(x[0]) //get the first element of array
//array size can grow dynamically
x[1] = false
x[x.length] = 555 //append a new element
x.push(888)
console.log(x)
//x[expression to find index number]
console.log(x[x.length - 1]) //get the last element of array

const y = [] //y is an empty array
let z

console.log(typeof y)
console.log(typeof z)

if (y.length === 0) console.log('y is an empty array')
else console.log('y is not an empty array')

if (z?.length === 0) console.log('z is an empty array')
else console.log('z is not an empty array')



z = new Array(5);
z.push(1)
console.log(z[0]);//udifined

console.log(Number.parseInt("+1"));

//from copy ค่าข้างในมาใส่

//ลบค่าแต่ไม่มีไม่ลดขนาด แค่เปบี่ยนเป็น empty
delete y[1]
console.log(z[0]);//udifi

let letter = [..."hello"];
console.log(typeof letter.entries());
for (const [index, value] of letter.entries()) {
    console.log(index, value);
}

