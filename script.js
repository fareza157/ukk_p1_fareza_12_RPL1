var result = 0;
var operation = false;
var lastoperator = '';

//Control and especial keys
function doControl(evt){
  var tempValue= document.getElementById("numbers").value;
  switch(evt){
      case 'C':
           document.getElementById("numbers").value = '0'; 
           result=0; operationsymbol = '';
           break;
      case '=':
            doOperation(lastoperator);
            result=0;
            operation=true;
            break;
      case '.':
            if(tempValue.indexOf('.') == -1){
              var lastdata=document.getElementById("numbers").value;
              lastdata = lastdata + '.';
              document.getElementById("numbers").value = lastdata;
            }
            break;
      break;
  }
}

//Math operations
function doOperation(evt){
  var tempValue= parseFloat(document.getElementById("numbers").value);
  switch(evt){
      case '+':
        result+=tempValue;
        document.getElementById("numbers").value = result;
        operation=true;
        lastoperator=evt;
        break;
      case '*':
        if (result != 0)
          result= result*tempValue;
        else
          result= tempValue;
      
        document.getElementById("numbers").value = result;
        operation=true;
        lastoperator=evt;
        break;
      case '/':
        if (result != 0)
          result= result/tempValue;
        else
          result= tempValue;
      
        document.getElementById("numbers").value = result;
        operation=true;
        lastoperator=evt;
        break;
      case '-':
        if (result != 0)
          result= result-tempValue;
        else
          result= tempValue;
      
        document.getElementById("numbers").value = result;
        operation=true;
        lastoperator=evt;
        break;
          
  }
}
//Update the calculator screen with the new information
function updatePanel(evt){
          var lastdata=document.getElementById("numbers").value;
          if(lastdata=='0') lastdata='';
          
          if(operation){
            lastdata = evt.innerHTML;
            operation=false;
          }
          else{
            lastdata = lastdata + evt.innerHTML;
          }
           
  
          document.getElementById("numbers").value = lastdata;
}