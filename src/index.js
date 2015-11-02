module.exports = function autoCoerce(obj, weakDateCheck) {
  for(var key in obj) {
    if (typeof obj[key] === 'object') {
      obj[key] = autoCoerce( obj[key] );
    }
    else {        
      obj[key] = coerceISODate( obj[key], weakDateCheck );
      obj[key] = coerceNumber( obj[key] );
    }
  }
  return obj;
}

function coerceISODate(text, weakDateCheck) {
  try {
    var date = new Date(text);
    if (weakDateCheck) {
      return date.toISOString().slice(0,10) === text.slice(0,10) ? date : text ;
    }
    else {      
      return date.toISOString() === text ? date : text ;
    }
  }
  catch(ex) {
    return text;
  }
}


function coerceNumber(text) {
  var num = Number(text);
  return isNaN(num) ? text : num;
}