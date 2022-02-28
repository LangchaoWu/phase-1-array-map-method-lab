const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
      const arr=tutorials.map(function(str){

        const newStr=str.split(" ");
      for(let i=0;i<newStr.length ;i++){
        newStr[i]=newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
      }

      const str2=newStr.join(" ");
      return str2;
      })
      return arr;
    }



