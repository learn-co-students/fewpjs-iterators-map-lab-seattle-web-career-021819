const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
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
  let output = tutorials.map(function(sentence){
    let stringArray = sentence.split(" ") //stringArray is an array
      for(let i=0; i < stringArray.length; i++){
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1) //overwrite string array[i]
      }
     return stringArray.join(" ") //join each title back together
  })
  return output // return the original array 
}

//titleCased(tutorials)
