// The Call Stack
// We can say it is a stratergy/mechanism that JS follow behind the scene.

// So here we are going to study how JS manages the function calls behind the
// scenes.

// Call Stack :
// This is a mechanism the JS interpreter uses to keep track of its place in a
// script that calls multiple functions.

// How JS "knows" what function is currently being run and what functions are called
// from within that function, etc.

// So basically using this call stack, JS keeps track of all the function calls.

// Stack :
// Last In First Out (LIFO)

// How it works :

// When a script calls a function, the interpreter adds it to the call stack and
// then starts carrying out the function.

// Any functions that are called by that function are added to the call stack further
// up, and run where their calls are reached.

// When the current function is finished, the interpreter takes if off that stack
// and resumes execution where it left off in the last code listing.

// To understand this better, we can consider below example function that returns
// whether a triangle given by its side is a right triangle or not ?

const multiply = (x,y) => x*y;

const square = x => multiply(x,x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}

console.log(isRightTriangle(3,4,5));

// So for example, firstly isRightTriangle() function will be called and inserted
// into stack. However, inside this function we have another function call for
// square(), so then that function will be pushed onto stack.
// Now inside square() we are calling another function multiply(), so then,
// that will be inserted onto stack.

// Now, multiply() will give back the result which will be returned to square()
// its parent and multiply() will be removed from stack. Then square will return 
// its value to isRightTriangle () and that will also exit.

// Then next square inside isRightTriangle will be called and same procedure will
// be followed.

// Now, if you want to actually view how JS deals with all function calls and
// how it adds them inside stack and then pop them out based of execution flow
// you can make use of site : http://latentflip.com/loupe/

// Also, we can see the same functinality inside our chrome dev tools by opening
// source tab just adjuscent to console tab.

// inside source tab we can put a breackpoint by clicking in front of line from
// where we want to start debugging and chrome will pasue the execution just
// at that line of your script and then you can use up and down arrow symbols
// to debug into your code or a function calls which will be shown in call 
// stack area. (Practice this once).