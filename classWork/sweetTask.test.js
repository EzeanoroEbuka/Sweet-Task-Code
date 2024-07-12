const{Stack,reverseArray,sumEvenNumber,Queue,arrayToObject} = require("./sweetTask");

test("test that the push method adds an element in a new array",() =>{
    let  stack = new Stack();
    expect([9]).toEqual(stack.pushIn(9))
    
})

test("test that the push method adds element from the last index in a new array", () => {
    let stack = new Stack();
    stack.pushIn(9)
    stack.pushIn(6)
    stack.pushIn(7)
    expect([9,6,7,0]).toEqual(stack.pushIn(0))
})

test("test that the pop method removes an element from last index of an array",() =>{
    let  stack = new Stack();
    stack.pushIn(9)
    stack.pushIn(6)
    stack.pushIn(7)
    expect(stack.pop()).toEqual([9,6])
})

test("test that the peek method returns the element at last index of an array",() =>{
    let  stack = new Stack();
    stack.pushIn(9)
    stack.pushIn(6)
    stack.pushIn(7)
    expect(stack.peek()).toEqual(7)
})

test("test that isEmpty method return true for an empty array",() =>{
    let  stack = new Stack();
   expect(stack.isEmpty()).toEqual(true)
})

test("test that isEmpty method return false when there are elements in an array",() =>{
    let  stack = new Stack();
    stack.pushIn(6);
   expect(stack.isEmpty()).toEqual(false)
})

test("test that reverse function return the reverse of an array",() =>{
    let input = reverseArray([2,4,6,8,])
   expect(input).toEqual([8,6,4,2])
   
})

test("test that sumUpEvenNumbers function return the sum of all even elements in an array",() =>{
    let input = sumEvenNumber([1,4,3,8,9,2])
   expect(input).toEqual(14)   
})

test("test that enqueue function add at the end of an array",() =>{
    let queue = new Queue();
    let input = queue.enqueue(8);
    expect(input).toEqual([8]);
})

test("test that enqueue function add to an array from the end",() =>{
    let queue = new Queue();
    queue.enqueue(9);
    queue.enqueue(4);
    let input = queue.enqueue(8);
    expect(input).toEqual([9,4,8]);
})

test("test that dequeue function removes from the end of an array",() =>{
    let queue = new Queue();
    queue.enqueue(9);
    queue.enqueue(4);
    queue.enqueue(8); 
    let input = queue.dequeue();
    expect(input).toEqual([4,8]);
})

test("test that front method returns the element at the first  index of an array",() =>{
    let  queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(0);
    queue.enqueue(2); 
    expect(queue.front()).toEqual(5)
})

test("test that arrayToObj function return the an object from an array of key value pairs",() =>{
    let input = arrayToObject([["b00k" , "food"] ,["root", "tree"],["man", "farm"]])
   expect(input).toStrictEqual({ b00k: 'food', root: 'tree', man: 'farm' })
   
})

