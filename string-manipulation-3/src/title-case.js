/* exported titleCase */
function titleCase(title) {
  function capitalizeFirstLetter(needsCap) {
    var cappedFirstLetter = needsCap[0].toUpperCase();
    for (var i = 1; i < needsCap.length; i++) {
      cappedFirstLetter += needsCap[i];
    }
    return cappedFirstLetter;
  }

  var newTitle = '';
  var tempWord = '';
  function notImportant(judgment) {
    if (tempWord === 'and' || tempWord === 'or' || tempWord === 'not' || tempWord === 'but' || tempWord === 'a' || tempWord === 'an' || tempWord === 'the' || tempWord === 'as' || tempWord === 'at' || tempWord === 'by' || tempWord === 'in' || tempWord === 'of' || tempWord === 'on' || tempWord === 'per' || tempWord === 'to' || tempWord === 'for') {
      return true;
    } else {
      return false;
    }
  }

  for (var j = 0; j < title.length; j++) {
    if (j === 0) {
      tempWord += title[0].toUpperCase();
    } else {
      if (title[j] === ' ' || title[j] === '-') {
        if (tempWord.length <= 3 && notImportant(tempWord) && title[j - tempWord.length - 2] !== ':' && title[j] !== '-') {
          newTitle = newTitle + tempWord + title[j];
          tempWord = '';
        } else {
          newTitle = newTitle + capitalizeFirstLetter(tempWord) + title[j];
          tempWord = '';
        }
      } else {
        tempWord += title[j];
      }
    }
  }

  newTitle += capitalizeFirstLetter(tempWord);
  tempWord = '';
  var jsTitle = newTitle.replace('Javascript', 'JavaScript');
  var apiTitle = jsTitle.replace('Api', 'API');
  return apiTitle;
}

// i am returning a new string
// i want to capitalize only certain letters for words that meet a certain requirement
// i have to identify what words are
// i have to identify that there are certain special exceptions to what needs to be upper cased
// the end of the title will not have a space, so i will need to add that in

// i guess the first thing that i want to do is make sure that the first word is capitalized regardless
// i want to make sure that every word after a colon and hyphen is capitalized as well
// i want to make sure that every word that is important is capitalized
// i only want to not capitalize certain words that fall under a certain category
// basically, i want every word to be capitalized unless there is a certain trigger and certain condtiions are met
// the string that i want to return needs to have javascript and api spelled a certain way, so i will do that at the tail end before i send
