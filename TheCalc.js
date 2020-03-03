function getValues()
{
	//button click gets values from inputs
	var Liability;
 
    var intialCost = 0
 
	var asset = parseFloat(document.getElementById("capital").value);
	
	var payment = parseFloat(document.getElementById("capital").value);
	
		var escalate = 
		parseFloat(document.getElementById("escalate").value/100.0);

	var interestRate = 
		parseFloat(document.getElementById("interest").value/100.0);
		
		
	var term = parseInt(document.getElementById("terms").value);
	
	var extention = parseInt(document.getElementById("Extention").value);
	
	var terms = (term + extention);
	
	//set the div string
	var div = document.getElementById("Result");
	
	//in case of a re-calc, clear out the div!
	div.innerHTML = "";
	
	//validate inputs - display error if invalid, otherwise, display table
	var balVal = validateInputs(Liability);
	var assetVal = validateInputs(asset);
	var intrVal = validateInputs(interestRate);

	if (assetVal>0)
	{
		//Returns div string if inputs are valid
		div.innerHTML += amort(Liability, interestRate, terms,asset,payment,escalate);
	}
	else
	{
		//returns error if inputs are invalid
		div.innerHTML += "Please Check your inputs and retry - invalid values.";
	}
}

/**
 * Amort function:
 * Calculates the necessary elements of the loan using the supplied user input
 * and then displays each months updated amortization schedule on the page
*/
function amort(Liability, interestRate, terms, asset,payment,escalate)
{
    //Calculate the per month interest rate
	var monthlyRate = interestRate/12;
	
	var term1;
	var term2;
	var term3;
	var term4;
	var term5;
		
	var pay1;
	var pay2;
	var pay3;
	var pay4;
	var pay5;
	
	var cf1;
	var cf2;
	var cf3;
	var cf4;
	var cf5;
	
	//1 year lease
	if(terms<13){
		
		term1 = 12;
	     term2 = 0;
		 term3 = 0;
		 term4 = 0;
		 term5 = 0;
		 term6 = 0;
		 term7 = 0;
		 term8 = 0;
		 term9 = 0;
		 term10 = 0;
		 
		pay1=payment;
		
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);		
		
		
		var cashFlows = Array(term1).fill(pay1);
	}
	//2 year lease
	else if(terms<25){
		 term1 = 12;
	     term2 = 12;
		 term3 = 0;
		 term4 = 0;
		 term5 = 0;
		 term6 = 0;
		 term7 = 0;
		 term8 = 0;
		 term9 = 0;
		 term10 = 0;		 
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);	
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		
	     var cashFlows=cf1.concat(cf2)
	} 
	//3 year lease
	else if(terms<37){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 0;
		 term5 = 0;
		 term6 = 0;
		 term7 = 0;
		 term8 = 0;
		 term9 = 0;
		 term10 = 0;		 
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);			 
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		
		 var cashFlows=cf1.concat(cf2,cf3)	
	}
	//4 year lease
		else if(terms<49){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 12;
		 term5 = 0;
		 term6 = 0;
		 term7 = 0;
		 term8 = 0;
		 term9 = 0;
		 term10 = 0;		 
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);		 
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		cf4	= Array(term4).fill(pay4);
		
		 var cashFlows=cf1.concat(cf2,cf3,cf4)	
	}
	//5 year lease
			else if(terms<61){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 12;
		 term5 = 12;
		 term6 = 0;
		 term7 = 0;
		 term8 = 0;
		 term9 = 0;
		 term10 = 0;		 
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);			 
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		cf4	= Array(term4).fill(pay4);
		cf5	= Array(term5).fill(pay5);
		
		 var cashFlows=cf1.concat(cf2,cf3,cf4,cf5)	
	}
	//6 year lease
				else if(terms<73){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 12;
		 term5 = 12;
		 term6 = 12;
		 term7 = 0;
		 term8 = 0;
		 term9 = 0;
		 term10 = 0;
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);		 
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		cf4	= Array(term4).fill(pay4);
		cf5	= Array(term5).fill(pay5);
		cf6	= Array(term6).fill(pay6);
		
		 var cashFlows=cf1.concat(cf2,cf3,cf4,cf5,cf6)	
	}
	//7 year lease
					else if(terms<85){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 12;
		 term5 = 12;
		 term6 = 12;
		 term7 = 12;
		 term8 = 0;
		 term9 = 0;
		 term10 = 0;		 
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);			 
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		cf4	= Array(term4).fill(pay4);
		cf5	= Array(term5).fill(pay5);
		cf6	= Array(term6).fill(pay6);
		cf7	= Array(term7).fill(pay7);
		
		 var cashFlows=cf1.concat(cf2,cf3,cf4,cf5,cf6,cf7)	
	}
	//8 year lease	
		else if(terms<97){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 12;
		 term5 = 12;
		 term6 = 12;
		 term7 = 12;
		 term8 = 12;
		 term9 = 0;
		 term10 = 0;		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);		 
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		cf4	= Array(term4).fill(pay4);
		cf5	= Array(term5).fill(pay5);
		cf6	= Array(term6).fill(pay6);
		cf7	= Array(term7).fill(pay7);
		cf8	= Array(term8).fill(pay8);
		
		 var cashFlows=cf1.concat(cf2,cf3,cf4,cf5,cf6,cf7,cf8)	
	}
	//9 year lease
	
		else if(terms<109){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 12;
		 term5 = 12;
		 term6 = 12;
		 term7 = 12;
		 term8 = 12;
		 term9 = 12;
		 term10 = 0;
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		cf4	= Array(term4).fill(pay4);
		cf5	= Array(term5).fill(pay5);
		cf6	= Array(term6).fill(pay6);
		cf7	= Array(term7).fill(pay7);
		cf8	= Array(term8).fill(pay8);
		cf9	= Array(term9).fill(pay9);
		
		 var cashFlows=cf1.concat(cf2,cf3,cf4,cf5,cf6,cf7,cf8,cf9)	
	}
	//10 year lease
		else if(terms<121){
		 term1 = 12;
	     term2 = 12;
		 term3 = 12;
		 term4 = 12;
		 term5 = 12;
		 term6 = 12;
		 term7 = 12;
		 term8 = 12;
		 term9 = 12;
		 term10 = 12;
		 
		 pay1=payment;
		 pay2 = pay1*(1+escalate);
		 pay3 = pay2*(1+escalate);
		 pay4 = pay3*(1+escalate);
		 pay5 = pay4*(1+escalate);
		 pay6 = pay5*(1+escalate);
		 pay7 = pay6*(1+escalate);
		 pay8 = pay7*(1+escalate);
		 pay9 = pay8*(1+escalate);
		 pay10 = pay9*(1+escalate);
		 
		 
		cf1 = Array(term1).fill(pay1);
        cf2	= Array(term2).fill(pay2);
		cf3	= Array(term3).fill(pay3);
		cf4	= Array(term4).fill(pay4);
		cf5	= Array(term5).fill(pay5);
		cf6	= Array(term6).fill(pay6);
		cf7	= Array(term7).fill(pay7);
		cf8	= Array(term8).fill(pay8);
		cf9	= Array(term9).fill(pay9);
		cf10 = Array(term10).fill(pay10);
		
		 var cashFlows=cf1.concat(cf2,cf3,cf4,cf5,cf6,cf7,cf8,cf9,cf10)	
	}	
	//fixed at zero	
   	var initialCost = 0;
	
	
	//opening balance of ROU(asset) and Liability Measure(liability)
	Liability = (getNPV(interestRate, initialCost, cashFlows));
	
	
	asset = Liability;

	//Calculate the Depr
    var depr = (asset / -terms);


	    
	//begin building the return string for the display of the table
    var result = "NPV Opening: R" + Liability.toFixed(2) +  "<br />" + 
        "Discount rate: " + (interestRate*100).toFixed(2) +  "%<br />" +
        "Number of months: " + terms + "<br />" +
       // "Monthly payment: R" + payment.toFixed(2) + "<br />" +
       "Total paid: R" + ((term1*pay1)+(term2*pay2)+(term3*pay3)+(term4*pay4)+(term5*pay5)+(term6*pay6)+
	   (term7*pay7)+(term8*pay8)+(term9*pay9)+(term10*pay10)).toFixed(2) + "<br /><br />";
        
    //add header row for table to return string
	result += "<table border='5' id ='tblData'><tr><th>Month #</th><th>Liability Measure</th>" + 
        "<th>Interest</th><th>Capital</th><th>Right Of Asset</th><th>Depreciation</th><th>Payment</th>";
    
   
    //Loop  calculates the amounts per term then adds 
   
	for (var count = 0; count < terms; ++count)
	{ 
		//in-loop interest amount holder
		var interest = 0;
		
		//in-loop monthly capital amount holder
		var monthlyCapital = 0;
         
		 if (count<12){
			 payment=pay1;
		 }
		 else if(count<24){
			 payment=pay2;
		 }
		 else if(count<36){
			 payment=pay3;
		 }
		 else if(count<48){
			 payment=pay4;
		 }
         else if(count<60){
			 payment=pay5;
		 }
         else if(count<72){
			 payment=pay6;
		 }
         else if(count<84){
			 payment=pay7;
		 }
         else if(count<96){
			 payment=pay8;
		 }
         else if(count<108){
			 payment=pay9;
		 }
         else if(count<120){
			 payment=pay10;
		 }		 
		 

		
		//start a new table row on each loop iteration
		result += "<tr align=center>";
		
		//display the month number in col 1 using the loop count variable
		result += "<td>" + (count + 1) + "</td>";

 


		
		



		//code for displaying in loop Liability
		result += "<td> R" + Liability.toFixed(2) + "</td>";
		
		//calc the in-loop interest amount and display
		interest = Liability * monthlyRate;
		result += "<td> R" + interest.toFixed(2) + "</td>";
		
		//calc the in-loop monthly capital and display
		monthlyCapital = payment - interest;
		result += "<td> R" + monthlyCapital.toFixed(2) + "</td>";

//test
         result += "<td> R" + asset.toFixed(2) + "</td>";

         
         result += "<td> R"+ depr.toFixed(2) + "</td>";
		 
		  result += "<td> R"+ payment.toFixed(2) + "</td>";
		   
         // result += "<td> R"+ escalate.toFixed(2) + "</td>";

		
		//end the table row on each iteration of the loop	
		result += "</tr>";
		
		//update the Liability for each loop iteration
		Liability = Liability - monthlyCapital;
		asset = asset + depr;				
	}
	
	//Final piece added to return string before returning it - closes the table
    result += "</table>";
	
	//returns the concatenated string to the page
    return result;
}

function validateInputs(value)
{
	//some code here to validate inputs
	if ((value == null) || (value == ""))
	{
		return false;
	}
	else
	{
		return true;
	}
}



    

function getNPV(interestRate, initialCost, cashFlows) {
  return cashFlows.reduce(
    (accumulator, currentValue, index) =>
      accumulator + currentValue / Math.pow(interestRate /12 + 1, index + 1),
    initialCost
  );
}




