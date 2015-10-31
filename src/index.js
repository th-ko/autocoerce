module.exports = function autoCoerce(obj) {
  for(var key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = fullCoerce( obj[key] );
    }
    else {        
      obj[key] = coerceToDate( obj[key] );
      obj[key] = coerceToNumber( obj[key] );
    }
  }
  return obj;
}

function coerceToDate(text) {
  try {
    var date = new Date(text);
    return date.toISOString() === text ? date : text ;
  }
  catch(ex) {
    return text;
  }
}

function coerceToNumber(text) {
  var num = Number(text);
  return isNaN(num) ? text : num;
}