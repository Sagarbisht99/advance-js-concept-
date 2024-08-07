   // (higher oprder function) // - this is the function thta takes another function as a parameter  OR jo return karta hai eak aur function i hope you understood the point  // 
   
//   const abcd = () => {

//   return 

// };

// abcd( () => {



// });  

// for each is higher order function // 

//-----------------------------------------------------------------------------------------------------------------------------------------------//


// (constructor function)  mai hum eak function banate hai thisme hum this ka use karete hai jaha hum eak function banate aur yeh waha use hota hai jaha humne alag alag elemnt bnate lekin unki property lagbhag same hoti hai // 

// jaisa hume Parle-G eah hi type ke biucuit banate hai toh // 

// example 


// function circularButton() {

//     this.color = "red";
//     this.radius = 5;
//     this.border = false;

// }

// var btn1 = new circularButton();
// var btn2 = new circularButton();



//(first class function ) // - this is the function in which arey bhai normal function hi hota hai yeh // jisko hum normal call karsakte hai variable ke andar sav karsakte hai // 


//-//--------------------------------------------------------------------------------------------------------------------------------------------------------


//(new Keyword) // bhai new ka simple means that new is the object new ko dekhte hi make an object in your mind // ye brother constructor function ko call karne mai madad karta hai // 


//--------------------------------------------------------------------------------------------------------------------------------------------------------

// (iife) // (immediatly invoked function expression) // -- so isko hum koi private value ya koi safe chiz ko safe rakhne ke liye rakhte hai // ye bhi aam ki chiz hai // 
// ye turant chalta hai // 

// let ans = (function(){

//     var a = 12;

//     return {
//         getter : function(){
//          console.log(a);
//         }    , 

//         setter : function(val){
//          a = val
//         }
//     }
// })();


//--------------------------------------------------------------------------------------------------------------------------------------------------------

// prototype //


//kux property already hoti hai console mai uni ko hi prototype kehta hai // 
// dekh bhai jese array ki length niklne ke liye .length property lgat ehai // thk hai 
// hunme banai toh nhi hjai lekin woh hai na inbuild thta is what prototype is 


//--------------------------------------------------------------------------------------------------------------------------------------------------------

// prototype inheritance //

// let naam = {
//     name : "sagar"
// }


// let human = {

//    canFly: false,
//    canTalk : true,
//    canWalk : true,
//    haveEmotion : true,
//    hasfourLegd : false

// }


// let sherians = {
// canMakeAmazingWebsite : true , 
// canMakeAmazingAnimationWebsite : true,
// canMakeWordClassAmazingWebsite  : true

// }


// sherians.__proto__ = human;


//--------------------------------------------------------------------------------------------------------------------------------------------------------

// this // 

// this is the keyword bro where it has different values as pervthe situation //

//  -global scope mai this ki value => window 

//  -local ya phir function ke ndar bhi this ki value => window hopti hai 

// -object ke ANDAR mtbl method ke andar this ki value object hoti hai 


//--------------------------------------------------------------------------------------------------------------------------------------------------------


// IMPURE fUNCTION AND PURE FUNCTION 


// PURE MTLB JO INPUT BHI SAME LETE HAI AUR OUTPUT BHI SAME DETA HAI // 

// IMPURE FUNCTION MTLB JO SAME INPUT LEKE ALAG ALAG OUYTPUT DETE HAI //

// function abcd (val)
// {
 
//     console.log(Math.random() * val);                        // impure // hai kyu baar baar alag value de rha hai // 

// }

// abcd(2);
// abcd(2);




// function abcd (val1 , val2){

// console.log(val1 *val2);

// }                                                           // pure hai , kyuki same value de rha hai kitne bhi baar call karo //

// abcd(1,2);
// abcd(1,2);
















// this // call //  bind  // 

// call//  
// function abcd(val1 , val2 , val3){

// console.log(this , val1 , val2 , val3);
   
// }

// obj = {
//    age : 19
// }


// abcd.call(obj,1,2,3);

// apply //

// function abcd(val1 , val2 , val3 ){
//    console.log(this ,val1 , val2 , val3);
// }

// obj = {
//    age : 30
// }

// abcd.apply(obj , [1,2,3]);

// bind // 


// function abcd(){

// console.log(this.name);

// }

// let obj = {

//    name : "sagar" , 
//    age : 19

// }

// var result = abcd.bind(obj);

// result();







































