/**
 * Adds together two numbers
 * @param a - the first number to add
 * @param b - the second number to add
 * @returns the total
 */

interface linkedList {
  value : number;
  pointer: linkedList | null
}
function firstLInkedListCreation (num1 = 10,num2 = 20,num3 = 30,num4 = 40): linkedList {
  const returnList: linkedList = {
    value: num1, pointer: {
      value: num2, pointer:{
        value: num3, pointer: {
          value: num4, pointer: null
        } 
      }
    }
  }
  return returnList
}

function createLinkedList(nums: number[]): linkedList{
    let num  = nums[0]
    const returnList: linkedList = {value: num, pointer: null}    
    if (nums.length!==1) {    
      returnList.pointer = createLinkedList(nums.slice(1,nums.length))
    }
    return returnList  
}

function traverseLinkedList(list: linkedList): void{
  let tempList: linkedList | null = list;
  while (tempList !== null) {
    console.log(tempList.value);
    tempList = tempList.pointer;
  }
}


console.log(createLinkedList([90,80,60,40]));


function sum(a: number, b: number): number {
  return a + b;
}

export default sum;
