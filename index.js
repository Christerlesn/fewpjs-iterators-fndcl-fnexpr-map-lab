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

const titleCased = () => {
  let result = tutorials.map((line)=>{
    let word= line.split(" ");
    let letter = word.map((e)=>{
    return e.charAt(0).toUpperCase() + e.slice(1);
    })
    let last= letter.join(" ")
     return last
  })
   console.log(result)
   return result;
}
titleCased(tutorials);