// let n = 5;
// let string = "";
// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n - i; j++) {
//         string += "  ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//         string += "* ";
//     }
//     string += '\n';
// } console.log(string);
// let n= 5;
// let s= "";
// for (let i=0; i<n; i++) {
//     for (let j=0; j<n - i; j++) {
//         s += "  ";
//     }
//     for (let k=0; k < 2 * i - 1; k++) {
//         s += "* ";

//         }
//         string += '\n';
//     }
//     console.log(string);
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
const str = 'aabbcde';
const repeatLetter = (str = '') => {
   const strArr = str.split("").sort();
   console.log(strArr,'strArr');
   let count = 1;
   let i = 1;
   let res = '';
   while (i < strArr.length) {
      if (strArr[i - 1] === strArr[i]) { count++; }
      else {
         res += count + strArr[i - 1];
         count = 1;
      };
      i++;
   };
   res += count + strArr[i - 1];
   return res;
};
console.log(repeatLetter(str));
