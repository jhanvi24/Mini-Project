var table=document.getElementById("table");
var i=0;
  function func(){
    i=i+1;
    document.getElementById("tr").style.visibility="visible";
    var name=document.getElementById("name").value;
    var phone=document.getElementById("phone").value;
    var mail=document.getElementById("mail").value;
    // var table=document.getElementById("table");
    var tr=document.createElement("tr");
    tr.setAttribute("id", "c"+i);
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    var td3=document.createElement("td");
    var del=document.createElement("button");
    del.setAttribute("id", "c"+i);
    del.setAttribute("onclick","func1(this.id)");
    td1.innerHTML=name;
    td2.innerHTML=phone;
    td3.innerHTML=mail;
    del.innerHTML="Delete";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(del);
    table.appendChild(tr);
    var b=document.getElementsByTagName("button");
    var x=document.getElementsByTagName("tr");
  }
   
function Delete(ctl) {
    $(ctl).parents("tr").remove();
}

