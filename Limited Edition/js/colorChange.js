var body = document.getElementById('body'),
    loop = false,
    color = 'yellow';


colorSwitch();
body.className = 'red';

setInterval(colorSwitch, 2000);

function colorSwitch(){
    
        
         if(color == 'yellow'){
            body.className = 'green';
            color = 'green';
        } else if(color == 'green'){
            body.className = 'turquese';
            color = 'turquese';
        } else if(color == 'turquese'){
            body.className = 'blue';
            color = 'blue';
        } else if(color == 'blue'){
            body.className = 'pink';
            color = 'pink';
        } else if(color == 'pink'){
            body.className = 'red';
            color = 'red';
        } else if(color == 'red'){
            body.className = 'yellow';
            color = 'yellow';
        }
}