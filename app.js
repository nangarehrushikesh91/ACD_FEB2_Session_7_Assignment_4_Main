function outerFunction() {
    function innerFunction(){
		return "Hello World From Inner Function";
		}
    var innerFunctionVar = innerFunction();    
    return innerFunctionVar; 
}
 var outerFunctionVar = outerFunction();
 console.log(outerFunctionVar);

