
var readline = require('readline');


var input = readline.createInterface({
  input: process.stdin
});
   const userInput =[];

input.on("line",function(values){
  userInput.push(values);
});
  
input.on("close",function(){
    console.log(addvalues(userInput));
});

    function addvalues(data)
    {
        var sum=0;
        var num=data[0].split(" ");
        for(var i=0;i<num.length;i++)
        {
            num[i]=parseInt(num[i]);
            sum+=num[i];
        }
          return sum;
    }
    
