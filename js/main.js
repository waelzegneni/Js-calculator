var op;
var firstValue;
var secondValue;


function submit(x){
   let old = document.getElementById('display').value ; 
   document.getElementById('display').value=old +x;
}

function clearing(){
   document.querySelector("#display").value="";
   firstValue="";
   secondValue="";
   op="";
}

function operateur(x){
 op = x;
 firstValue =  document.querySelector("#display").value;
document.querySelector("#display").value="";
}

function equals(){
   secondValue=document.querySelector("#display").value;
   document.querySelector("#display").value="";
   if(op=='/'){
      result = firstValue / secondValue;
      document.querySelector("#display").value=result;
   }
   else if (op=='*'){
      result = firstValue * secondValue;
      document.querySelector("#display").value=result;
   }

   else if (op=='-'){
      result = firstValue - secondValue;
      document.querySelector("#display").value=result;
   }

   else if (op=='+'){
      result = firstValue*1 + secondValue*1;
      document.querySelector("#display").value=result;
   }

   firstValue="";
   secondValue="";
   op="";
}








