function deepEquals(a, b) {
 if(a===b){
	 return true;
 }if(isNaN(a) === isNaN(b))
	return true
}
return false;

module.exports=deepEquals;