let noOfTasksDone = localStorage.getItem('completedTasksCount');

document.querySelector('.no-of-tasks').innerHTML = noOfTasksDone;


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
         document.body.style.backgroundImage = `url('${backgrounds[currentBackground - 1]}')`; //that -1 due to array starts from 0
    }
}
