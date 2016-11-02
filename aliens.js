 var blueAliens = 995;
 var redAliens = 9000;
 var greenAliens = 5;

 function aliensFound (){
 if (blueAliens + redAliens + greenAliens == 10000)
 	if (greenAliens == 5000){
 		console.log('MOTHER OF GOD, not the green ones');
 	}
 	else if (greenAliens + redAliens > 8000){
 		console.log('DOOOOOM');
 	}
 	else if (redAliens + blueAliens < 3000){
 		console.log('We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!');
    } 
 }
aliensFound();