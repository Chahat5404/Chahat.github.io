var noutput;
var eoutput;
var numoutput = 0;
var incomeoutput = 0;
var totalincome = 0;
var otherincome = 0;
var totalincometax = 0;
var incometaxpaid = 0;
var TIT = 0;
var ITP = 0;
var TI = 0;
var output='';
var A1 = 0;
var A2 = 0;
var A3 = 0;
var A4 = 0;
var A5 = 0;
var A6 = 0;


var test = '';

function result(){
        
 var formName = document.getElementById('name').value;
 var formEmail = document.getElementById('email').value;
 var formNumber = document.getElementById('num').value;
 var form1 = document.getElementById('inc').value;
 var form2 = document.getElementById('oth').value;
 var form3 = document.getElementById('tax').value;
    
    var error = '';
    
    if(formName == '' || formName == null){
    error += 'Please enter the Name <br>';
}

var emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
if(formEmail == '' || formEmail == null){
        error += 'Please enter the Email <br>';
}

else{
    
if(!emailRegex.test(formEmail)){
error += 'Invalid Email address <br>';
}
}

var phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

if (formNumber == '' || formName == null) {
    error += 'Please Enter the Phone Number <br>';
}

else{
    if (!phoneRegex.test(formNumber)) {
        error += 'Invalid Phone Number <br>';
    }
}

if (form1 == '' || form1 == null) {
    error += 'Employement Income is Mandatory! <br>'
}

else{

}

if (form3 == '' || form3 == null) {
    error += 'Income Tax Paid is Mandatory! <br>'
}

else{
    
}

if (formEI < 60000) {
    TIT = formEI * 0.2;
}

else{

}

if (formEI >= 60000 && formEI <= 90000) {
    TIT = formEI * 0.25;
}

else{

}

if (formEI > 90000) {
    TIT = formEI * 0.34;
}

ITP = TIT - formITP;
TI = formOI + formEI;


if(error){
    {   
        document.getElementById('error').innerHTML = error;
    }

}


else{
    document.getElementById('error').innerHTML = '';

    totalincome = formEI + formOI;
    
    noutput = (`Name:  ${formName}`);
    eoutput = (`Email: ${formEmail}`); 
    totalincome = formEI + formOI;
    incomeoutput = (`Employement Income: $${form1}`);
    otherincome = (`Other Income : $${form2}`);
    totalincome = (`Total Income :$${TI}`)
    totalincometax = (`Total Income Tax :$${TIT}`)
    incometaxpaid = (`Income Tax Paid : $${form3}`);
    incometaxpayable = (`Income Tax Payable : $${ITP}`);
    output += `<h2>Calculations</h2>
    ${noutput}</br></br>
    ${eoutput}</br></br>
    ${incomeoutput}</br></br>
    ${otherincome}</br></br> 
    ${totalincometax}</br></br>
    ${incometaxpaid}</br></br>
    ${incometaxpayable}`;
    
    
    document.getElementById('formResult').innerHTML = output;   
  }
     return false;

}