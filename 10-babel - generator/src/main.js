// // CommonJS规范  在浏览器中不支持
// // let a = require('./a.js')
// // ES6的导入导出语法规范

// //导入css
// import './css/b.css'
// import './css/index.css'
// import './less/index.less'
// import './sass/index.scss'
// import 'bootstrap/dist/css/bootstrap.css'

// import a from './a.js.js'
// console.log(a)
// console.log('黑马程序员真牛逼!')
// console.log('11黑马程序员真牛逼! 是的牛逼!!!')
// console.log("呵呵2");
// console.log("呵呵2");
// console.log("呵呵2");
// console.log("呵呵2");
// console.log("呵呵2");

// //babel
// //es5的写法
// setTimeout(function(){
//     console.log("1秒后执行");
// },1000)
// //es6写法
// setTimeout(()=>{
//     console.log("1秒后执行");
// },1000)

// //es6里的类
// class Person{
//     constructor(name){
//         this.name=name;
//     }
// }

// let p=new Person('小黑')
// console.log(p);

// //es6更高级的语法
// class Dog{
//     name='大黄'
//     static color='yellow'
//     // 上面两个都是高级用法
// }
// //普通写法应该是这样
// // Dog.color='yellow'
// let d=new Dog()
// console.log(d);
// console.log(Dog);

// function *fn(){
//     yield 1
//     yield 2
//     return 3
// }

// let newfn=fn();

// console.log(newfn.next());
// console.log(newfn.next());
// console.log(newfn.next());
// console.log(newfn.next());

// import "@babel/polyfill";
let str = '123'
console.log(str.includes('2'))
