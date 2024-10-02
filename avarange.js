//amar kace akta array ace amake array got number bahir kora daw

// const array = [ 12, 13, 18, 39, 40]
// let count = 0;
// for(const item of array){
//       count = count + item
// }
// avg = count / array.length;
// console.log(avg);






// const array = [ 12, 13, 18, 39, 40];
// let sum = 0;
// for( let i = 0; i <array.length; i++){
//       sum = sum +array[i]
// }

// avg = sum / array.length;


// console.log(avg);



// function chakNumber(num1, num2){
// if(typeof num1 !=='number' || typeof num2 !== 'number'){
//       return 'invalid number'
// }
// const result = num1 * num2;
// return result
// }







// console.log(chakNumber(10,'10'));



// function cheakeObject(info){
// if(typeof info !== 'object'){
//       return 'Invalid object'
// }
// const reslut = info.age + info.name;
// return reslut

// }

// const person={
//       name:'rakiib',
//       age: 20,
      
// }
// console.log(cheakeObject(person));






// function cheakString(info){
// if(typeof info !== 'string'){
//       return 'invalid string'
// }

// }


// console.log(cheakString(10));










// array cheak borbo akhon








// function arrayCheak(info){
//       if(!Array.isArray(info)){
//             return 'invalid array'
//       }
// }



// console.log(arrayCheak(5));









// amader alakay kisu pola pain ace jara birayani love tader name 2 day ami amon akti function likbo jen tader name dhora fele tera jene 2 bar nite na pare
// const names = ['Rakib', 'rana', 'tufan', 'babu', 'kamal', 'babu', 'Rakib', 'rana'
// ]
// function cheakName(info){
//   let cheks =[];    
// for( const item of info){
//    if(cheks.includes(item)=== false){
//     cheks.push(item)
//    }   
// }
// return cheks;
// }




// console.log(cheakName(names));








function discountLear(info){
      if(info <= 100){
      return info* 100;
      }
      else if(info <= 200){
            return info * 90;
      }
      else {
            return  info * 70;
      }
}




console.log(discountLear(200));

