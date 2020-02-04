window.onload = function(){
    document.getElementById("password").addEventListener('input',check)

}

function check(){


    request = new XMLHttpRequest();
    var password = document.getElementById("password").value;

    var url = "check_password.php?password=" + password;

    request.onreadystatechange = showStatus;
    request.open("GET", url,true);
    request.send(null);
}

function showStatus(){
    if(request.readyState==4&&request.status==200){

        if(request.responseText=="weak"){
            document.getElementById("status").className="weak";
        }
        else if(request.responseText=="good"){
            document.getElementById("status").className="good";
        }else if(request.responseText=="verygood"){
            document.getElementById("status").className="verygood";
        }
    }
}