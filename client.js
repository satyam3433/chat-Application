const socket = ('http://localhost:8000');

const form = document.getElementById('send-container');
const messageinp = document.getElementById('messageinp')

const messagecontainer = document.querySelector(".container")




const append = (message, position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message')
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
     
}
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const message = messageinp.nodeValue;
    append:('you:${message}','right');
    socket.emit('send', message);
    messageinp.value = 
})
const name = prompt("enter your name to join");
socket.emit('new-user-joined', name);
  
socket.on('user-joined', name =>{
    append('${name} joined the chat', 'right')


})

socket.on('receive', data =>{
    append('${data.name}: ${data.message}','left')
})
socket.on('left', name =>{
    append('${name} left the chat', 'right')
})
