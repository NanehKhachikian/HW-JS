//HW2_Ex1
let inputArray = ['a','b','c']
    let maxLength = 3
        
    function overallPermutation (array, length){    
	    function permutation(array, i, string, length){
	        for(let a = 0; a < array.length; a++){
	    	string1 = string + array[a];
	    	    if(i == length - 1){
	    		    document.write(string1 + '<br>');
	    	    }
	    	    else{
	    		    permutation(array, i + 1, string1, length);
	    	    } 
	        }
	    }
	    for(let i = 0; i < length; i++){
    	    permutation(array, i, '', length);
	    }
    }
    overallPermutation(inputArray, maxLength);


