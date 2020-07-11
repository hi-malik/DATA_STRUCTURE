//Math.pow(5, 100)

/*
// Arrays SImple Understanding
const strings = ['a','b','c','d'];
// 4*4 = 16 bytes of storage

strings.push('e'); //O(1)

strings.unshift('5'); //O(n)

strings.shift(); //O(1)

strings.splice(1, 0, "BOSS") //O(n)

console.log(strings)
*/

/*
//DS:Arrays_Implementing
class MyArray{
  constructor(){
    this.length = 0;
    this.data = {};
  }
  get(index){
    return this.data[index]
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop(){
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index){
    for(let i = index; i < this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("HI");
newArray.push('hello');
newArray.push('BRO>>>>');
newArray.delete(0);
console.log(newArray);
*/