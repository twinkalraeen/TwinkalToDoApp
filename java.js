let inputs = document.getElementById("inp");
let text = docuent.querySelector(".text");

function Add(){
    if(inputs.value ==""){
        alert("please Enter Task")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML='${inputs.value}';
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("i").addEventListener("click" ,remove);
        function remove(){
            newEle.remove()
        }
    }
}

