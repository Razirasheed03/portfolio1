

function validate(){
    let name = document.getElementById('name').value.trim();
    let reg1 =/^[a-zA-Z ]+$/;
    let result1= reg1.test(name);

    if(result1==false){
        alert("Enter a Valid Name")
        return false;
    }
    let email = document.getElementById('email').value;
    let reg =/^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+\.([a-z]+)(.[a-z]+)?$/;
    let result= reg.test(email);

    if(result==false){
        // document.getElementById('valemail').innerHTML="Enter A Valid Email";
        alert("Enter a Valid Email")
        return false;
    }
    let subject = document.getElementById('subject').value.trim();
    if(subject==""){
        // document.getElementById('valSubject').innerHTML="Please Fill This Field";
        alert("Please Add Subject")
        return false;
    } 
    
    return true;

}

    
    return true;

}

