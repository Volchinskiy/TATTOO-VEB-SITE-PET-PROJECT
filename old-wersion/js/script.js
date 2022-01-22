'use strict'

const isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return(
                isMobile.Android() ||
                isMobile.BlackBerry() ||
                isMobile.iOS() ||
                isMobile.Opera() ||
                isMobile.Windows());
        }
    };
    
    if (isMobile.any()) {
        document.body.classList.add('_touch');
    
        let menuArrows = document.querySelectorAll('.menu__arrow');
    
        if (menuArrows.length > 0){
            for (let index = 0; index < menuArrows.length; index++) {
                const menuArrow = menuArrows[index];
                menuArrow.addEventListener("click", function (e) {
                    menuArrow.parentElement.classList.toggle('_active');
                });
            }
        }
    
    } else {
        document.body.classList.add('_pc');
    }

    
const firstNavbar = document.querySelector('.first-navbar');
const secondNavbar = document.querySelector('.second-navbar');

setTimeout(function(){
    firstNavbar.classList.add('--displayNone');
    secondNavbar.classList.add('--displayFlex');
}, 2000)

console.log(firstNavbar);



// function firstNonRepeatingLetter(s) {

//   if(s.length == 1){
//     return s;
//   }

//   if(s.length == 0){
//     return '';
//   }

//   if(s == undefined){
//     return '';
//   }

//   let stringToArr = s.split('');
//   let resultArr = [];
//   let result;

//   for(let index of stringToArr){
//     if(index == ' '){continue};
//     let temporaryArr = [];
//     let operand = index;
    
//     for(let index2 of stringToArr){
//       if(index2 == ' '){continue};
//       if (operand === index2){
//         temporaryArr.push(false);
//       } else {
//         temporaryArr.push(operand);
//       }
    
//     }
//     resultArr.push(temporaryArr);
//   }

//   for(let index of resultArr){
//     let count = 0;
    
//     for(let index2 of index){
//       if(index2 === false){
//         count++
//       }
//     }
    
//     if(result != undefined){
//       break;
//     }
    
//     if(count === 1){
//       result = index[0];
//     }

//     if(count === index.length){
//       return '';
//     }
//   }

//   return result;
// }
// console.log(result);
// console.log(resultArr);
// firstNonRepeatingLetter('S')
// alert( firstNonRepeatingLetter('dddd') );

////////////////////////////////////////////////////////////////////

// function findEvenIndex(arr){
//   let newArr = [];
//   let flag;
//   let count = 0;

//   for(let index = 0; index < arr.length; index++){
    
//     let temporaryArr = [];
//     let sumLeft = 0;
//     let sumRight = 0;

//     for(let index2 = 0; index2 < index; index2++){
//       sumLeft += arr[index2];
//     }

//     temporaryArr.push(sumLeft);
//     temporaryArr.push(index);

//     for(let index2 = index + 1; index2 < arr.length; index2++){
//       sumRight += arr[index2];
//     }

//     temporaryArr.push(sumRight);
//     newArr.push(temporaryArr);
//   }

//   for(let index of newArr){
//     if(flag == true){ break };
//     if(index[0] == index[2]){
//       flag = true;
//     };
//     if(count == newArr.length){
//       if(index[0] !== index[2]){
//         flag = false;
//       }
//     }
//     count++;
//   }

//   if(flag == true){
//     count = count - 1;
//   }

//   if(flag == true){
//     return count;
//   } else {
//     return -1;
//   }  
  
// }

// console.log(flag);
// console.log(count);
// console.log(newArr);

// findEvenIndex([1,2,3,4,3,2,1]);
// findEvenIndex([1,100,50,-51,1,1]);
// findEvenIndex([1,2,3,4,5,6]);
// findEvenIndex([20,10,30,10,10,15,35]);
// alert(findEvenIndex([10,-80,10,10,15,35,20]));
///////////////////////////////////////////////////////////////////////////