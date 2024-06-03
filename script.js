const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // let span = document.createElement("span");
        // span.innerHtml = "\u00D7";
        // li.appendChild(span);
        let span = document.createElement("span");
        span.textContent = "\u00D7"; // Unicode character for multiplication sign (×)
        span.className = 'cross-icon';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(); //WHENEVER WE WILL ADD ANY TASK THIS FUNCTION NEEDS TO BE CALLED TO SAVE THE DATA.

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();//TO GET THE UPDATED DATA SAVED.
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();//TO SAVE THE UPDATED DATA.
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//NOW WE WANT TO DISPLAY THE DATA WE HAVE EVERYTIME WE OPEN THIS TODO LIST ON BROWSER.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()//AS WE HAVE TO CALL THE FUNCTION.