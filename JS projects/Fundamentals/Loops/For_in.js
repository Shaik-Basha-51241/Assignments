const Student = {Name:"Nagur", Branch :"CSE", Reg_No:211801340007};
let text = "";
for (let x in Student) {
  text += Student[x] + " ";
}
console.log(text);