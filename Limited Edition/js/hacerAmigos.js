var amigos = [],
    numRandom,
    btn_siguiente = document.getElementById('siguiente'),
    btn_listo = document.getElementById('listo'),
    txt_amigos = document.getElementById('amigos'),
    contenedor = document.getElementById('contenedor');

console.log('Random number = ' + numRandom);

function displayFriends(e){
    contenedor.innerHTML = "";
    var elemento = document.createElement('p'),
        contenido = document.createTextNode(e);
    
    elemento.appendChild(contenido);
    contenedor.appendChild(elemento);
    
    amigos = [];
}

siguiente.addEventListener('click', function(){
    var newFriend = document.getElementById('amigos').value;
    
    if(newFriend !== '' & newFriend !== ' '){
        amigos.push(newFriend);
    } else if(newFriend === '' || newFriend == ' '){
        alert('Error. Escriba el nombre de su nuebo amigo');
    } else{
        alert('Error desconocido, contacte con el desarrolador y describa el problema');
    }
    txt_amigos.value = "";
    
});

btn_listo.addEventListener('click', function(){
    
    çnumRandom = Math.floor(Math.random()* 100);
    
    if(amigos[0] !== undefined){
        if(amigos.length == 1){
            switch(numRandom){
                case 99:
                    displayFriends('Solamente tienes un amigo');
                    break;
                case 98:
                    displayFriends('Solamente tienes un amigo, deberías conocer más gente');
                    break;
                case 97:
                    displayFriends('Veo que solo tienes un amigo, ¿Quieres ser mi amigo?');
                    break;
                case 96:
                    displayFriends('Con uno no basta, y no aparecerán por arte de magia.');
                    break;
                case 95:
                    displayFriends('Necesitas más amigos a parte de ' + amigos[0]);
                    break;
                default:
                    displayFriends('Tienes ' + amigos.length + ' amigo. Se llama ' + amigos.join(', ' + '.'));
                    break;
            }
        } else{
        displayFriends('Tienes ' + amigos.length + ' amigos.' + ' Se llaman ' + amigos.join(', ') + '.');
        }
    } else{
        switch(numRandom){
            case 99:
                displayFriends('No tienes amigos pringao.');
                break;
            case 98:
                displayFriends('Deberías buscar algún amigo.');
                break;
            case 97:
                displayFriends('Busca tus amigos, no aparecen por arte de magia');
                break;
            case 96:
                displayFriends('En la calle hay muchas oportunidades para hacer amigos');
                break;
            case 95:
                displayFriends('Veo que no tienes amigos, ¿Quieres ser mi amigo?');
                break;
            default:
                displayFriends('No tienes amigos.');
                break;
        }
    }
});