class Stack {
    constructor(){
        this.numbers = []  
    }
    pushIn(number){
        this.numbers.push(number); 
      
        return this.numbers;
    }
 
   
    pop(){
        this.numbers.pop();

        return this.numbers;
    }

    peek(){
      return  this.numbers[(this.numbers.length) -1];
    }

    isEmpty(){
        if(this.numbers.length == 0){return true}
        else return false
    }

}

function reverseArray(arr){
    output = [];
    for(let index in arr){
        output.unshift(arr[index]);
    }
    return output;
}

function myCallBack(sum, element){
    if(element % 2 == 0){
        return sum + element
    }     
    return sum; 
}

function sumEvenNumber(array){

    return array.reduce(myCallBack,0);
}

class Queue{
    constructor(){
        this.elements = [];
    }

    enqueue(number){
        this.elements.push(number);
        return this.elements
    }

    dequeue(){
        this.elements.splice(0,1);

        return this.elements;
    }

    front(){
        return  this.elements[0];
    }

    isEmpty(){
        if(this.numbers.length == 0){return true}
        else return false
    }

}

function arrayToObject(arrayInPairs){

   newObject = {};
   for(let arr of arrayInPairs){
        for(let index = 0;index < arr.length -1;index++){
            newObject[arr[index]] = arr[index + 1]
        } 
   }
   return newObject 
}

console.log(arrayToObject([["b00k" , "food"] ,["root", "tree"],["man", "farm"]]))
module.exports = {Stack,reverseArray,sumEvenNumber,Queue,arrayToObject};