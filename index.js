function checkSorted(myarray) {
  
	for (var i=0; i<myarray.length-1; i++) { 
		if (myarray[i] > myarray[i+1]) {
     		return false;
		}
	}
	return true;
}    

var myarray = [-5,0,1,2,3,4];     
checkSorted(myarray);   
