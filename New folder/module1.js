let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click',inputMsg);
function validateEmail(){
    //alert("Hello World");
    const mail=document.getElementById("textbox").value;
    var globalVariable={
        x:mail
    };
    var regx=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(mail==""){
        document.getElementById("err_msg").innerHTML="";
        document.getElementById("textbox").style.backgroundColor="rgb(255,255,255)";
        document.getElementById("textbox").style.color="rgb(0,0,0)";
    }
    else if(!regx.test(mail)){
        document.getElementById("err_msg").innerHTML="Valid email required";
        document.getElementById("textbox").style.color="hsl(4, 100%, 67%)";
        document.getElementById("textbox").style.backgroundColor="hsl(6,100%,92%)";
    }
    else{
        document.getElementById("err_msg").innerHTML="";
        document.getElementById("textbox").style.backgroundColor="rgb(255,255,255)";
        document.getElementById("textbox").style.color="rgb(0,0,0)";
    }
}