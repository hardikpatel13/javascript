function checkdata(frm)
{
	var fname, age, mobile;

	fname = frm.firstname.value;
	age = frm.age.value;
	mobile = frm.mobileno.value;

	if (fname=="") 
	{
		alert("First Name is Required. Please ! Enter Valid First Name.");
		return false;
	}
	else if(checklength(fname)==false)
	{
		alert("Sorry ! Invalid First Name. Please ! Enter More than 6 Character.");
		return false;
	}

	else if (age=="") 
	{
		alert("Age is Required. Please ! Enter Valid Age.");
		return false;
	}

	else if(checklowerage(age)==false)
	{
		alert("Sorry ! Invalid Agee. Please ! Enter Above 18");
		return false;
	}

	else if(checkupper(age)==false)
	{
		alert("Sorry ! Invalid Agee. Please ! Enter Below 100");
		return false;
	}

	else 
	{
		return true;
	}
}



function checklength(data)
{
	if(data.length>=6 && data.length<=25)
	{
		return true;
	}

	else
	{
		return false;
	}
}

function checklowerage(data)
{
	if(data>=18)
	{
		return true;
	}

	else
	{
		return false;
	}
}

function checkupper(data)
{
	if(data>=18 && data<=100)
	{
		return true;
	}

	else
	{
		return false;
	}
}