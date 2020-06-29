
function GetRandomDice()
{
	var dice = 0;
	while(1)
	{
		dice = Math.random() * 10;
		if( (dice >= 1) && (dice <= 6) )
		{
			break;
		}
	}
	return Math.round(dice);
}


function UpdateFeild()
{
	document.getElementById("dice_one").value = GetRandomDice();
	document.getElementById("dice_two").value = GetRandomDice();
	document.getElementById("dice_three").value = GetRandomDice();
	document.getElementById("dice_four").value = GetRandomDice();
	document.getElementById("dice_five").value = GetRandomDice();
}

/*
<!DOCTYPE html>
<html>
<body>

<h3>A demonstration of how to access a P element</h3>

<p id="myP">I am a paragraph. Click the button to get my id.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>


<script>

function GetRandomDice()
{
	var dice = 0;
	while(1)
	{
		dice = Math.random() * 10;
		if( (dice >= 1) && (dice <= 6) )
		{
			break;
		}
	}
	return Math.round(dice);
}

function myFunction() {
    //var x = document.getElementById("myP").id;
   
    var y = ""
    for(var i = 0; i < 5; i++)
    {
    	var x = GetRandomDice();
        y = y + " " + x.toString(); 
    		
    }
    
    document.getElementById("demo").innerHTML = y
}




</script>

</body>
</html>


*/