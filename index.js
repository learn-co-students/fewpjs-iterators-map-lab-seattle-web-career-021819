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

function titleCased() {
  let results = []
  for (const title of tutorials) {
    let wordArray = title.split(' ')
    let capitalizedArray = wordArray.map(word => {
      return word.slice(0, 1).toUpperCase() + word.slice(1)
    })
    let newTitle = capitalizedArray.toString()
    let finalTitle = newTitle.replace(/,/g, ' ')
    results.push(finalTitle)
  }

  return results
}
