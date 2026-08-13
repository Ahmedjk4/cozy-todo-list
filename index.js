print = console.log;
let cardsGrid = document.getElementsByClassName("todo-cards-grid")[0];
let todosList = JSON.parse(localStorage.getItem('todosList')) || [];

if(todosList == null) {
    localStorage.setItem('todosList', '[]');
}




for (var todo of todosList) {
    if(todo.id == null) continue;
    cardsGrid.innerHTML += `
        <div class="todo-card" id=${todo.id}>
            <div class="card-content">    
                <div class="card-header">
                    <h3 class="card-title">${todo.title || 'No Title'}</h3>
                    <button class="delete-btn" onclick="deleteTask(this)">×</button>
                </div>
                <p class="cart-desc">${todo.desc || 'No Description'}</p>
                <label class="todo-status">
                    <input type="checkbox" class="todo-checkbox" ${todo.status ? 'checked=""' : ""}}></input>
                    <span>Mark as done</span>
                </label>
            </div>
        </div>
    `
}


function addNewTask() {
    let title = prompt("Title")
    let description = prompt("Description")
    let newId = todosList.length > 0 ? Math.max(...todosList.map(t => t.id)) + 1 : 1; // I got this line also from google I swear to god, although I can barely understand it.

    todosList.push({id: newId, title: title, desc: description, status: false})
    cardsGrid.innerHTML += `
        <div class="todo-card" id=${newId}>
            <div class="card-content">
                <div class="card-header">
                    <h3 class="card-title">${title || 'No Title'}</h3>
                    <button class="delete-btn" onclick="deleteTask(this)">×</button>
                </div>
                <p class="cart-desc">${description || 'No Description'}</p>
                <label class="todo-status">
                    <input type="checkbox" class="todo-checkbox"></input>
                    <span>Mark as done</span>
                </label>
            </div>
        </div>
    `
    localStorage.setItem('todosList',JSON.stringify(todosList));

}

function deleteTask(ele) {
    let card = ele.closest('.todo-card');
    print(card.id +' removed YO');
    todosList = todosList.filter(item => item.id != parseInt(card.id));
    localStorage.setItem('todosList', JSON.stringify(todosList));
    card.remove();
}

setInterval(() => {
    let cards = document.querySelectorAll('.todo-card');
    let cardsChanged = false;
    let totalDone = parseInt(localStorage.getItem('completedTasksCount')) || 0;
    cards.forEach(card => {
        let cardId = parseInt(card.id);
        let checkbox = card.querySelector('.todo-checkbox');
        let todo = todosList.find(item => item.id === cardId);
       
            
        if (todo && todo.status !== checkbox.checked) {
            todo.status = checkbox.checked;
            cardsChanged = true;
            if(checkbox.checked) {
                totalDone += 1;
                const audio = new Audio('taskDone.mp3');
                audio.play();
                print("card change detected, looks like someone has done a task");
            } else {
                const audio = new Audio('taskUndone.mp3');
                audio.play();
                totalDone = Math.max(0, totalDone - 1); 
            }
        }
    });

    if (cardsChanged) {
        localStorage.setItem('todosList', JSON.stringify(todosList));
        localStorage.setItem('completedTasksCount', totalDone.toString());;
    }

    
}, 100);
const hour = new Date().getHours();
print(hour);
if(hour > 1 && hour < 13) {
    document.querySelector('.part-of-the-day').innerHTML = "Morning";
} else {
    document.querySelector('.part-of-the-day').innerHTML = "Evening";
}


let backgrounds = [
    'images/1.jpg',
    'images/2.jpg', 
    'images/3.jpg',
    'images/4.jpg', 
    'images/5.jpg',
    'images/6.jpg'
];

let currentBackground = 0;
document.body.style.background = '#fff5e3';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';
document.body.style.backgroundSize = 'cover';
document.body.style.minHeight = '100vh';

function changeBackground() {
    currentBackground++;

    if (currentBackground > backgrounds.length) {
        currentBackground = 0;
    }
    
    if (currentBackground === 0) {
         document.body.style.backgroundImage = 'none';
         document.body.style.backgroundColor = '#fff5e3';
    } else {
         let imagePath = backgrounds[currentBackground - 1];
         document.body.style.backgroundImage = `url('${imagePath}')`;
    }
}
