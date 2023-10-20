var input = document.getElementById("inputfield");
var list = document.getElementById("list");


function addbtn() {
    //   console.log(input.value);
  if(input.value.length > 3){

    var liElement = document.createElement("li");
  
    var liText = document.createTextNode(input.value);
  
    liElement.appendChild(liText);


    var deletebtn = document.createElement("button");
  
    var deleltebtnText = document.createTextNode("Delete");
  
    deletebtn.appendChild(deleltebtnText);
  
    deletebtn.setAttribute("onclick", "delete1(this)");
  
    liElement.appendChild(deletebtn);
  
  
    var editbtn = document.createElement("button");
  
    var editbtnText = document.createTextNode("Edit");
  
    editbtn.appendChild(editbtnText);
  
    liElement.appendChild(editbtn);
  
    editbtn.setAttribute("onclick", "edit1(this)");
  
    var list = document.getElementById("list");
  
    list.appendChild(liElement);
  
    console.log(liElement);
  
    // input.value = "";
  }
  else{
    alert("Value Should Be At Least 5 character");
}
  
  }


  
  function delbtn() {
    var list = document.getElementById("list");
    list.innerHTML = "";
  }
  
  function delete1(d) {
    console.log(d.parentNode.remove());
  }
  
  function edit1(e) {
    var input = prompt("Enter updated value...");
  
    e.parentNode.firstChild.nodeValue = input;
  }