module.exports = function(input,todo){
	if(todo === "lower"){
		return input.toLowerCase();
	}
	if(todo === "upper"){
		return input.toUpperCase();
	}
	if(todo === "delete"){
		return "";
	}
}
