var taskInput = document.querySelector('#input');
var inputButton = document.querySelector('#input-button');
var taskList = document.querySelector('#task-list');


inputButton.addEventListener('click', addTask);
taskList.addEventListener('click', removeTask);


function addTask(e) {
    if(taskInput.value === "") {
        alert('scrivi qualcosa')
    }

    // Creare nuovo li e aggiungere classe
    var li = document.createElement('li');
    li.className = 'task';

    //creare nuovo textnode e metterlo dentro li
    li.appendChild(document.createTextNode(taskInput.value));

    //creare link
    var link = document.createElement('a');

    //aggiungere classe a <a>
    link.className = "delete-todo"

    //aggiungi X al <a>

    link.innerHTML = '<h3>X</h3>'

    //mettere link nel li (list items)
    li.appendChild(link)

    //mettere li dentro ul
    taskList.appendChild(li);

    taskInput.value = ""

    e.preventDefault()
}

function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-todo')) {
        e.target.parentElement.parentElement.remove();
    }
}