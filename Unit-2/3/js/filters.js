
app.filter('kebab', function () {
  return function (input) {
  	return input.replace(/_/g, "-");
  };
});


// Camel Case Filter ------------------------


app.filter('camel', function () {
  return function (input) {
  	
if (input.indexOf('_') > 0) {
	var splits = input.split('_')
	var one = splits[0].toString()
	var two = splits[1].toString()
	var taco = two.charAt(0).toUpperCase() + two.slice(1);
	return one.concat(taco)

} else if (input.indexOf('-') > 0) {
    var splits = input.split('-')
	var one = splits[0].toString()
	var two = splits[1].toString()
	var taco = two.charAt(0).toUpperCase() + two.slice(1);
	return one.concat(taco)
	 } else {
  		return input;
  	}
  }
});


// Pig Latin Filter ---------------------------

app.filter('pigLatin', function () {
  return function (input) {
  	
var words = input.split(" ")
var phrase = ""
for (var i = 0; i < words.length; i++) {
  
  var word = words[i].toString().toLowerCase();


 if (word.charAt(0) == "a" || word.charAt(0) == "e" || word.charAt(0) == "i" || word.charAt(0) == "o" || word.charAt(0) == "u") {

    word = word + "-hay"; 
    phrase = phrase + " " + word;
    
    } else if (word.charAt(1) == "a" || word.charAt(1) == "e" || word.charAt(1) == "i" || word.charAt(1) == "o" || word.charAt(1) == "u") { 
    
     word = word.slice(1) + "-" + word.charAt(0) + "ay";
     phrase = phrase + " " + word;
   
   } else {
     
     word = word.slice(2) + "-" + word.charAt(0) + word.charAt(1) + "ay";
     phrase = phrase + " " + word;

   }
}

 return phrase;
  }
});


// Redact Filter ---------------------------

app.filter('redact', function () {
  return function (input, itemType) {
  	// console.log(itemType);
  	return input.replace(itemType, "REDACTED");
  };
});


