const socket = io('ws://localhost:3500')



function sendMessage(e){
    e.preventDefault();
    const input = document.querySelector('input');
    if(!!input && input.value){
        socket.emit('message',input.value)
        input.value=""
    }
    input?.focus()
}
//on submit of form sendMessage will be called
document.querySelector('form')
        ?.addEventListener('submit',sendMessage)

//listen for msgs
socket.on('message',(data)=>{
    console.log("data,",data)
    const li = document.createElement('li');
    li.textContent=data;
    document.querySelector('ul')?.appendChild(li)
})