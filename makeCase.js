const makeCase = function (input, arrayOrStringCase) {
  let newStr = input;
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  let queue = [];
  let camelObj =
  {
    caseName: 'camel',
    priority: 1,
    function: function () {
      let newString = '';
      for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === ' ') {
          i++;
          newString = newString + newStr.charAt(i).toUpperCase();
        }
        else {
          newString = newString + newStr.charAt(i);
        }
      }
      newStr = newString;
    }
  }
  let pascalObj =
  {
    caseName: 'pascal',
    priority: 1,
    function: function () {
      let newString = '';
      newString = newString + newStr.charAt(0).toUpperCase();
      for (let i = 1; i < newStr.length; i++) {
        if (newStr[i] === ' ') {
          i++;
          newString = newString + newStr.charAt(i).toUpperCase();
        }
        else {
          newString = newString + newStr.charAt(i);
        }
      }
      newStr = newString;
    }
  }
  let snakeObj =
  {
    caseName: 'snake',
    priority: 1,
    function: function () {
      let newString = '';
      for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === ' ') {
          newString = newString + '_';
        }
        else {
          newString = newString + newStr.charAt(i);
        }
      }
      newStr = newString;
    }
  }
  let kebabObj =
  {
    caseName: 'kebab',
    priority: 1,
    function: function () {
      let newString = '';
      for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === ' ') {
          newString = newString + '-';
        }
        else {
          newString = newString + newStr.charAt(i);
        }
      }
      newStr = newString;
    }
  }
  let titleObj =
  {
    caseName: 'title',
    priority: 1,
    function: function () {
      let newString = '';
      newString = newString + newStr.charAt(0).toUpperCase();
      for (let i = 1; i < newStr.length; i++) {
        if (newStr[i] === ' ') {
          newString = newString + ' ';
          newString = newString + newStr.charAt(i + 1).toUpperCase();
          i++;
        }
        else {
          newString = newString + newStr.charAt(i);
        }
      }
      newStr = newString;
    }
  }
  let vowelObj =
  {
    caseName: 'vowel',
    priority: 2,
    function: function () {
      let newString = '';
      for (let i = 0; i < newStr.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
          if (vowel[j] === newStr[i]) {
            newString = newString + newStr.charAt(i).toUpperCase();
            i++;
          }
        }
        newString = newString + newStr.charAt(i);
      }
      newStr = newString;
    }
  }
  let consonantObj =
  {
    caseName: 'consonant',
    priority: 2,
    function: function () {
      let newString = '';
      for (let i = 0; i < newStr.length; i++) {
        for (let j = 0; j < vowel.length; j++) {
          if (vowel[j] === newStr[i]) {
            newString = newString + newStr.charAt(i);
            i++;
          }
        }
        newString = newString + newStr.charAt(i).toUpperCase();
      }
      newStr = newString;
    }
  }
  let upperObj =
  {
    caseName: 'upper',
    priority: 3,
    function: function () {
      newStr = newStr.toUpperCase();
    }
  }
  let lowerObj =
  {
    caseName: 'lower',
    priority: 3,
    function: function () {
      newStr = newStr.toLowerCase();
    }
  }
  let arrayOfCaseObj =
    [
      camelObj,
      pascalObj,
      snakeObj,
      kebabObj,
      titleObj,
      vowelObj,
      consonantObj,
      upperObj,
      lowerObj
    ];
  if (arrayOrStringCase.constructor === String) {
    for (let caseObj of arrayOfCaseObj) {
      if (caseObj.caseName === arrayOrStringCase) {
        queue.push(caseObj.function());
      }
    }
  }
  else {
    let newArrayOfCaseObj = [];
    for (let cases of arrayOrStringCase) {
      for (let caseObj of arrayOfCaseObj) {
        if (cases === caseObj.caseName) {
          newArrayOfCaseObj.push(caseObj);
        }
      }
    }
    if (newArrayOfCaseObj[0].priority <= newArrayOfCaseObj[1].priority) {
      queue.push(newArrayOfCaseObj[0].function());
      queue.push(newArrayOfCaseObj[1].function());
    }
    else {
      queue.push(newArrayOfCaseObj[1].function());
      queue.push(newArrayOfCaseObj[0].function());
    }
  }
  queue[0];
  return newStr;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));