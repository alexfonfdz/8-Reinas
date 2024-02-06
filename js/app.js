let reinasMax = 8;
let reinasColocadas = 0;
let columnasBloqueadas = [];
let indice = -1;


function colocarReina(celda){
    // alert(`Clic celda ${celda}`)
    // celda.style="background-image: url(./img/reina.png); background-size: cover";
    let opcion = document.getElementById('opciones');
    let valor = opcion.options[opcion.selectedIndex].value;
    let valor_num = parseInt(valor);
    console.log(columnasBloqueadas)


    if(valor_num == 0){

    let renglon = celda.parentElement.rowIndex;
    let columna = celda.cellIndex;
    let tablero = document.getElementById('tablero');
    console.log(renglon, columna)
    console.log(typeof(renglon), typeof(columna))

    if (window.getComputedStyle(celda).backgroundImage == "none") {

        if (reinasColocadas < 8) {

            if((renglon+columna)%2 == 0){
                celda.style="background-image: url(./img/black_reina.png); background-size: cover";
            }else{
                celda.style="background-image: url(./img/white_reina.png); background-size: cover";
            }

            // bloqueamos renglon
            for(let i = 0; i < 8; i++){

                if (columna != i) {

                    tablero.rows[renglon].cells[i].removeAttribute('onclick');
                    tablero.rows[renglon].cells[i].style = "background-image: url(./img/x.png); background-size: cover";
                    tablero.rows[renglon].cells[i].classList.remove('clic');
                    columnasBloqueadas.push(renglon + ',' + i);

                }
                //bloqueamos columna
                if (renglon != i) {

                    tablero.rows[i].cells[columna].removeAttribute('onclick');
                    tablero.rows[i].cells[columna].style = "background-image: url(./img/x.png); background-size: cover";
                    tablero.rows[i].cells[columna].classList.remove('clic');
                    columnasBloqueadas.push(i + ',' + columna);

                }
            }


            let r = renglon;
            let c = columna;


            // //Recorremos diagonales
            while (r >= 0 && c < 8) {
                if(renglon != r && columna != c){
                    tablero.rows[r].cells[c].removeAttribute('onclick');
                    tablero.rows[r].cells[c].style = "background-image: url(./img/x.png); background-size: cover";
                    tablero.rows[r].cells[c].classList.remove('clic');
                    columnasBloqueadas.push(r + ',' + c);
                    r--;
                    c++;
                }else{
                    r--;
                    c++;
                } 
              }
            

              r = renglon;
              c = columna;
              while (r < 8 && c >= 0) {
                if(renglon != r && columna != c){
                    tablero.rows[r].cells[c].removeAttribute('onclick');
                    tablero.rows[r].cells[c].style = "background-image: url(./img/x.png); background-size: cover";
                    tablero.rows[r].cells[c].classList.remove('clic');
                    columnasBloqueadas.push(r + ',' + c);
                    r++;
                    c--;
                }else{
                    r++;
                    c--;
                }
              }


            r=renglon;
            c=columna;
            while (r >= 0 && c >= 0) {
                if(renglon != r && columna != c){
                    tablero.rows[r].cells[c].removeAttribute('onclick');
                    tablero.rows[r].cells[c].style = "background-image: url(./img/x.png); background-size: cover";
                    tablero.rows[r].cells[c].classList.remove('clic');
                    columnasBloqueadas.push(r + ',' + c);
                    r--;
                    c--;
                }else{
                    r--;
                    c--;
                } 
              }
            
              r = renglon;
              c = columna;
              while (r < 8 && c < 8) {
                if(renglon != r && columna != c){
                    tablero.rows[r].cells[c].removeAttribute('onclick');
                    tablero.rows[r].cells[c].style = "background-image: url(./img/x.png); background-size: cover";
                    tablero.rows[r].cells[c].classList.remove('clic');
                    columnasBloqueadas.push(r + ',' + c);
                    r++;
                    c++;
                }else{
                    r++;
                    c++;
                }
              }


            // alert(renglon + ` ` + columna)
            reinasColocadas++;
            reinasMax--;
        }
    }else{


        celda.style="background-image:none;";

        // desbloqueamos renglon
        for(let i = 0; i < 8; i++){

            if (columna != i) {
                columnasBloqueadas.splice(columnasBloqueadas.indexOf(renglon + ',' + i),1);
                if(!columnasBloqueadas.includes(renglon + ',' + i)){
                    tablero.rows[renglon].cells[i].setAttribute('onclick', 'colocarReina(this)');
                    tablero.rows[renglon].cells[i].style="background-image: none";
                    tablero.rows[renglon].cells[i].classList.add('clic');
                }
            }
            //desbloqueamos columba
            if (renglon != i) {
                columnasBloqueadas.splice(columnasBloqueadas.indexOf(i + ',' + columna),1);
                if(!columnasBloqueadas.includes(i + ',' + columna)){
                    tablero.rows[i].cells[columna].setAttribute('onclick', 'colocarReina(this)');
                    tablero.rows[i].cells[columna].style="background-image: none";
                    tablero.rows[i].cells[columna].classList.add('clic');
                }

            }
        }


        r = renglon;
        c = columna


        //Recorremos diagonales
        while (r >= 0 && c < 8) {
            if(renglon != r && columna != c){
                indice = columnasBloqueadas.indexOf(r + ',' + c);
                if(indice !== -1){
                    columnasBloqueadas.splice(columnasBloqueadas.indexOf(r + ',' + c),1);
                }
                if(!columnasBloqueadas.includes(r + ',' + c)){
                    tablero.rows[r].cells[c].setAttribute('onclick', 'colocarReina(this)');
                    tablero.rows[r].cells[c].style="background-image: none";
                    tablero.rows[r].cells[c].classList.add('clic');
                }
                r--;
                c++;
            }else{
                r--;
                c++;
            }
            
          }
        

          r = renglon;
          c = columna;
          while (r < 8 && c >= 0) {
            if(renglon != r && columna != c){
                indice = columnasBloqueadas.indexOf(r + ',' + c);
                if(indice !== -1){
                    columnasBloqueadas.splice(columnasBloqueadas.indexOf(r + ',' + c),1);
                }
                if(!columnasBloqueadas.includes(r + ',' + c)){
                    tablero.rows[r].cells[c].setAttribute('onclick', 'colocarReina(this)');
                    tablero.rows[r].cells[c].style="background-image: none";
                    tablero.rows[r].cells[c].classList.add('clic');
                }

                r++;
                c--;
            }else{
                r++;
                c--;
            }
          }


          r= renglon;
          c = columna;
        while (r >= 0 && c >= 0) {
            if(renglon != r && columna != c){
                indice = columnasBloqueadas.indexOf(r + ',' + c);
                if(indice !== -1){
                    columnasBloqueadas.splice(columnasBloqueadas.indexOf(r + ',' + c),1);
                }
                if(!columnasBloqueadas.includes(r + ',' + c)){
                    tablero.rows[r].cells[c].setAttribute('onclick', 'colocarReina(this)');
                    tablero.rows[r].cells[c].style="background-image: none";
                    tablero.rows[r].cells[c].classList.add('clic');
                }
                r--;
                c--;
            }else{
                r--;
                c--;
            }
            
          }
        

          r = renglon;
          c = columna;
          while (c < 8 && r < 8) {
            if(renglon != r && columna != c){
                indice = columnasBloqueadas.indexOf(r + ',' + c);
                if(indice !== -1){
                    columnasBloqueadas.splice(columnasBloqueadas.indexOf(r + ',' + c),1);
                }
                if(!columnasBloqueadas.includes(r + ',' + c)){
                    tablero.rows[r].cells[c].setAttribute('onclick', 'colocarReina(this)');
                    tablero.rows[r].cells[c].style="background-image: none";
                    tablero.rows[r].cells[c].classList.add('clic');
                }
                r++;
                c++;
            }else{
                r++;
                c++;
            }
          }

        reinasColocadas--;
        reinasMax++;

    }
}else{
    alert(`Presiona Restart para hacer algún movimiento...
No seas tramposillo`);
}
    document.getElementById("porColocar").innerHTML = `Reinas por colocar ${reinasMax}`;
    document.getElementById("colocadas").innerHTML = `Reinas colocadas ${reinasColocadas}`;
    
    setInterval(()=>{
        if (reinasColocadas == 8) {
            alert("Felicidades, ganaste!!!");
            restart();
        }
    }, 500);
    
}

function solucion(){
    let opcion = document.getElementById('opciones');
    let valor = opcion.options[opcion.selectedIndex].value;
    let valor_num = parseInt(valor);


    restart();

    switch(valor_num){
        case 1: solucion1();
        break;
        case 2: solucion2();
        break;
        case 3: solucion3();
        break;
        case 4: solucion4();
        break;
        case 5: solucion5();
        break;
        case 6: solucion6();
        break;
        default: restart();
    }
}

function solucion1(){
    let celdas = document.getElementById('tablero');
    celdas.rows[0].cells[3].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[1].cells[6].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[2].cells[2].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[3].cells[7].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[4].cells[1].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[5].cells[4].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[6].cells[0].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[7].cells[5].style="background-image: url(./img/black_reina.png); background-size: cover";
}

function solucion2(){
    let celdas = document.getElementById('tablero');
    celdas.rows[0].cells[4].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[1].cells[1].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[2].cells[3].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[3].cells[6].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[4].cells[2].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[5].cells[7].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[6].cells[5].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[7].cells[0].style="background-image: url(./img/white_reina.png); background-size: cover";
}

function solucion3(){
    let celdas = document.getElementById('tablero');
    celdas.rows[0].cells[3].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[1].cells[1].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[2].cells[6].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[3].cells[2].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[4].cells[5].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[5].cells[7].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[6].cells[4].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[7].cells[0].style="background-image: url(./img/white_reina.png); background-size: cover";
}

function solucion4(){
    let celdas = document.getElementById('tablero');
    celdas.rows[0].cells[3].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[1].cells[6].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[2].cells[0].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[3].cells[7].style="background-image: url(./img/black_reina.png); background-size: cover"
    celdas.rows[4].cells[4].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[5].cells[1].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[6].cells[5].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[7].cells[2].style="background-image: url(./img/white_reina.png); background-size: cover";
}

function solucion5(){
    let celdas = document.getElementById('tablero');
    celdas.rows[0].cells[5].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[1].cells[1].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[2].cells[6].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[3].cells[0].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[4].cells[3].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[5].cells[7].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[6].cells[4].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[7].cells[2].style="background-image: url(./img/white_reina.png); background-size: cover";
}

function solucion6(){
    let celdas = document.getElementById('tablero');
    celdas.rows[0].cells[5].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[1].cells[3].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[2].cells[6].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[3].cells[0].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[4].cells[7].style="background-image: url(./img/white_reina.png); background-size: cover";
    celdas.rows[5].cells[1].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[6].cells[4].style="background-image: url(./img/black_reina.png); background-size: cover";
    celdas.rows[7].cells[2].style="background-image: url(./img/white_reina.png); background-size: cover";
}

function restart(){
    let celdas = document.getElementById('tablero');

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            celdas.rows[r].cells[c].setAttribute('onclick', 'colocarReina(this)');
            celdas.rows[r].cells[c].style="background-image: none";
            celdas.rows[r].cells[c].classList.add('clic');       
        }
    }
    reinasColocadas = 0;
    reinasMax = 8;
    document.getElementById("porColocar").innerHTML = `Reinas por colocar ${reinasMax}`;
    document.getElementById("colocadas").innerHTML = `Reinas colocadas ${reinasColocadas}`;

    // document.getElementById('opciones').selectedIndex = 0;
}

function restartButtom(){
    let celdas = document.getElementById('tablero');

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            celdas.rows[r].cells[c].setAttribute('onclick', 'colocarReina(this)');
            celdas.rows[r].cells[c].style="background-image: none";
            celdas.rows[r].cells[c].classList.add('clic');       
        }
    }
    reinasColocadas = 0;
    reinasMax = 8;
    document.getElementById("porColocar").innerHTML = `Reinas por colocar ${reinasMax}`;
    document.getElementById("colocadas").innerHTML = `Reinas colocadas ${reinasColocadas}`;

    document.getElementById('opciones').selectedIndex = 0;
}


