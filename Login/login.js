temp = location.href.split("?");
data=temp[1].split(":");
newid = data[0];
newpw = data[1];

function savelogin(){
  location.href ='signup.html?'+newid + ":" + newpw;
}
// 엔터 쳐서 로그인 하는거 jquery로 만들어 보기
function sbm(){
    inputid = document.getElementById("user-id").value;
    inputpw = document.getElementById("user-pw").value;
  if(newid != inputid){
      alert("Wrong ID");
  }
  else{
    if(newpw != inputpw){
        alert("Wrong PW");
    }
    else{    
      location.href ='index.html?'+newid + ":" + newpw;
    }    
    }
  }
function sbm_re(){
    inputidre = document.getElementById("user-id-re").value;
    inputpwre = document.getElementById("user-pw-re").value;
  if(newid != inputidre){
      alert("Wrong ID");
  }
  else{
    if(newpw != inputpwre){
        alert("Wrong PW");
    }
    else{
      location.href ='index.html?'+newid + ":" + newpw;    
    }
  }
}