let saveid;
let savepw;

function save(){
    saveid = document.getElementById("user-id").value;
    savepw = document.getElementById("user-pw").value;
    // localStorage.setItem("key1",saveid);
    // localStorage.setItem("key2",savepw);
    location.href ='login.html?'+saveid + ":" + savepw; 
}


