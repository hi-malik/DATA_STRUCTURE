  //Math.pow(5, 100)

//DS_Arrays


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
/*
//Interview Question: Reverse a string!!
//Create a function that reverse a string:
//'Hi my name is MALIK' should be:
//KILAM si eman ym iH

function reverseString(str){
  //check input
  if( !str || str.length<2 || typeof str !== 'string'){
    return 'Hmm that is not good';
  }

  const backwards = [];
  const totalItems = str.length-1;
  for(let i = totalItems; i >= 0; i--){
    backwards.push(str[i]);
  }
  console.log(backwards);
  return backwards.join('');
}

//reverseString('Hi my name is MALIK');

function reverseString2(str){
  return str.split('').reverse().join('')
}
//reverseString2('Hi my name is MALIK');

const reverseString3 = str => [...str].reverse().join('');
reverseString3('Hi my name is MALIK');
*/
/*
//Interview Questions Merge Sorted Arrays
//mergeSortedArrays([0,3,4,31],[4,6,30]);
// [0,3,4,4,6,30,31]

function mergeSortedArrays(array1, array2){
  const mergeArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;
  //Check input
  if(array1.length === 0){
    return array2;
  }
  if(array2.length === 0){
    return array1;
  }

  while(array1Item || array2Item){
    if(!array2Item || array1Item<array2Item){
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    }
    else{
      mergeArray.push(array2Item);
      array2Item = array2[j];
     j++;
    } 
  } 
  return mergeArray;
}
mergeSortedArrays([0,3,4,31],[4,6,30])
*/




//DS_HashTables

let user = {
  age: 54,
  name: 'vadi',
  magic: true,
  scream: function(){
    console.log('Ahhhhh');
  }
}

user.age //O(1)
user.aappel = 'DJIADFSHJKBF'; //O(1)
user.scream() //O(1)
user