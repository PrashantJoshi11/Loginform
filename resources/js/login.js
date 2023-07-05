
function validuser(){
   
   
    var username= document.forms["accessForm"]["user"].value;
    var pass = document.forms["accessForm"]["pass"].value;

    if(username=="admin" && pass=="admin"){
        return true;
    }
    else{
        return false;
    }


    //  if (username=="" && pass=="")
    //  {
    //     document.getElementById("user").style.border="0.1px solid red";
    //     document.getElementById("pwd").style.border="0.1px solid red";
    //     document.getElementById("nameError").innerText="User Name can't be empty";
    //     document.getElementById("passError").innerText="Password can't be empty";

    //     return false ;
    //  }

}