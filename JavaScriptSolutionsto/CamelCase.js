function toCamelCase(str){
  var words;
  var result = "";
  if (str.includes('-')) {
    words = str.split('-');
  } else {
    words = str.split('_');
  }
  result += words[0];
  for (var i=1; i<words.length; i++) {
    result += capitalizeFirstLetter(words[i]);
  }
  return result;
  
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
