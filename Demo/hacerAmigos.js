var repeat = true;
var amigos = [];
var continuar;
var numRandom = Math.floor(Math.random()* 100);

console.log('Random number = ' + numRandom);

while(repeat === true){
    continuar = prompt('¿Deseas añadir más amigos?');
    
    if(continuar === 'Si' || continuar === 'si'){
        
        amigos.push(prompt('Añade un nuevo amigo'));
        
        alert('Nuevo amigo adquirido: ' + amigos[amigos.length - 1] + ', enorabuena.');
        
    }else if(continuar === 'No' || continuar === 'no'){
        repeat = false;
    }else{
        alert('El sistema no te entiende');
    }
}
if(amigos[0] !== undefined){
    if(amigos.length == 1){
        switch(numRandom){
            case 99:
                document.write('Solamente tienes un amigo.');
                break;
            case 98:
                document.write('Solamente tienes un amigo, deberías conocer más gente');
                break;
            case 97:
                document.write('Veo que solamente tienes un amigo, ¿Quieres ser mi amigo?');
                break;
            case 96:
                document.write('Con uno no basta, y no aparecerán por arte de magia.');
                break;
            case 95:
                document.write('Necesitas más amigos además de ' + amigos[0]);
                break;
            default:
                document.write('Tienes ' + amigos.length + ' amigo.' + ' Se llama ' + amigos.join(', ') + '.');
                break;
        }
    } else{
        document.write('Tienes ' + amigos.length + ' amigos.' + ' Se llaman ' + amigos.join(', ') + '.');
    }
} else{
    switch(numRandom){
        case 99:
            document.write('No tienes amigos pringui.');
            break;
        case 98:
            document.write('Deberías buscar algún amigo.');
            break;
        case 97:
            document.write('Busca tus amigos, no aparecen por arte de magia');
            break;
        case 96:
            document.write('En la calle hay muchas oportunidades para hacer amigos');
            break;
        case 95:
            document.write('Veo que no tienes amigos, ¿Quieres ser mi amigo?');
            break;
        default:
            document.write('No tienes amigos.');
            break;
    }
}