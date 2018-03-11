import "babel-polyfill";

//import './class/lesson1';
//import './class/lesson2';
//import './class/lesson3';
import './class/lesson4';
class Test{
    constructor(){
        this.a = "codehtml-ceshi"
    }
}
let test = new Test();

document.body.innerHTML = test.a;
