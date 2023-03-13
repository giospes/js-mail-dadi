const submit = document.querySelector('button');
const footer = document.querySelector('footer');
const mailRegistered = [
    'giovanni@gmail.com', 'jacopo@libero.it', 'speranza@yahoo.com']; 

submit.addEventListener('click', function(e){
    e.preventDefault();
    sendform();
});


function sendform(){
    let i, message, flag=0;
    let messageContainer = document.querySelector('p'); 
    const mailUser = document.getElementById('mail').value;
    

    for(i=0; i< mailRegistered.length && flag===0; i++){
        flag = mailUser == mailRegistered[i] ? 1 : 0;
    }
    message = flag== 1 ? "Email trovata" : "Email non trovata";
    messageContainer.innerHTML = message;
}

footer.innerHTML = 'Per il tutor: email inserite nella lista:' + printarray() ;

function printarray(){
    let stringEmail=" ";
    for(i=0; i< mailRegistered.length; i++){
        stringEmail += mailRegistered[i] +" " ;
    }
    return stringEmail
}