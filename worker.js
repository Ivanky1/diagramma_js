onmessage = function(event) {
    var v = event.data/100;
    var s = 0;
    for(var i=0; i<=event.data; i++){
        if (i%v == 0) {
            if (s%10 == 0) {
                postMessage(s);
            }
            s +=1;
        }

    }
   postMessage('Цикл завершен'); 
   
}