var str ='this-is_my test'

function camelCase(str){
	var newStr = ""
	for(var i=0; i < str.length; i++){
		if(str[i] === "-" || str[i] === " " || str[i] === "_" ){
			str[i+1] = newStr += str[i + 1].toUpperCase();
			i++
		} else {
			newStr += str[i]
		}
	}return newStr;
}

console.log(camelCase(str));