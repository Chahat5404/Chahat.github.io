var a=0; b=0; c=0; d=0; e=0; x=0;
var R=3; I=4; D=5, J=6; L=7;
var totalcost1=0, totalcost2=0, totalcost3=0, totalcost4=0, totalcost5=0;
var gstprice=0;
var subtotal=0, sum=0, costtotal=0;

function X1()
{
	a=prompt('Add the number of flowers you want to buy','');
	a=a.trim();

	while(isNaN(a) || a === '' || a === null)
	{
	 a= prompt('Enter any valid number');
	}

	a = parseInt(a);

	document.getElementById('V1').innerHTML = a;
	document.getElementById('vA').innerHTML = a;
    
    totalcost1= R*a;
    document.getElementById('R').innerHTML= totalcost1;
}

function X2()
{
	b=prompt('Add the number of flowers you want to buy','');
	b=b.trim();

	while(isNaN(b) || b ==='' || b === null)
	{
	 b= prompt('Enter any valid number');
	}

	b = parseInt(b);

	document.getElementById('V2').innerHTML = b;
	document.getElementById('vB').innerHTML = b;
    
    totalcost2= I*b;
    document.getElementById('I').innerHTML= totalcost2;
}

function X3()
{
	c=prompt('Add the number of flowers you want to buy','');
	c=c.trim();

	while(isNaN(c) || c ==='' || c === null)
	{
	 c= prompt('Enter any valid number');
	}

	c = parseInt(c);

	document.getElementById('V3').innerHTML = c;
	document.getElementById('vC').innerHTML = c;
    
    totalcost3= D*c;
    document.getElementById('D').innerHTML= totalcost3;
}

function X4()
{
	d=prompt('Add the number of flowers you want to buy','');
	d=d.trim();

	while(isNaN(d) || d ==='' || d === null)
	{
	 d= prompt('Enter any valid number');
	}

	d = parseInt(d);

	document.getElementById('V4').innerHTML = d;
	document.getElementById('vD').innerHTML = d;
    
    totalcost4= J*d;
    document.getElementById('J').innerHTML= totalcost4;
}

function X5()
{
	e=prompt('Add the number of flowers you want to buy','');
	e=e.trim();

	while(isNaN(e) || e ==='' || e === null)
	{
	 e= prompt('Enter any valid number');
	}

	e = parseInt(e);

	document.getElementById('V5').innerHTML = e;
	document.getElementById('vE').innerHTML = e;
    
    totalcost5= L*e;
    document.getElementById('L').innerHTML= totalcost5;
}



function Check()
 {
    x = prompt('Please Enter Your Name!');
    document.getElementById('V6').innerHTML = x;


 }


function gst(){

subtotal = a + b + c + d + e; 

sum = totalcost1+totalcost2+totalcost3+totalcost4+totalcost5; 

gstprice = sum*13/100;

    costtotal = add + gstprice;
    console.log(subtotal,gstprice,costtotal);
    document.getElementById('subtotal').innerHTML = subtotal;
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('gst').innerHTML = gstprice;
    document.getElementById('costtotal').innerHTML = costtotal;
}