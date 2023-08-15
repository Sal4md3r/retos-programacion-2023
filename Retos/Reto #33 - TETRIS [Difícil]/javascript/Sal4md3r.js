let tablero = [];
let pieza = [ [0,0], [1,0], [1,1], [1,2]];
let grados = 0;

function iniciarJuego(){
    for(let i = 0; i < 10; i++){
      tablero.push([]);
      for(let j = 0; j < 10; j++){
        tablero[i].push(0)
      }
    }

    pintarTablero(tablero,pieza);
}


function moverPieza(direccion){
  let newPosc = [];
  let isValidMove = true;
  switch(direccion){
    case 'R':
      newPosc = pieza.map((posc)=>{
        if((posc[1] + 1) > 9){
          isValidMove = false;
        }
        posc = [posc[0],posc[1] +1];
        return posc;
      });
      break;
    case 'L':
      newPosc = pieza.map((posc)=>{
        if((posc[1] - 1) < 0){
          isValidMove = false;
        }
        posc = [posc[0],posc[1] - 1];
        return posc;
      });
      break;
    case 'U':
        newPosc = pieza.map((posc)=>{
          if((posc[0] - 1) < 0){
            isValidMove = false;
          }
          posc = [posc[0] -1 ,posc[1]];
          return posc;
        });
        break;
    case 'D':
      newPosc = pieza.map((posc)=>{
        if((posc[0] + 1) > 9){
          isValidMove = false;
        }
        posc = [posc[0] + 1 ,posc[1]];
        return posc;
      });
        break;
      case 'T':
          newPosc = pieza.map((posc)=>{
            posc = [posc[1],posc[0]];
            return posc;
          });
        break;
  }

  console.clear();
  console.log(pieza);
  console.log(newPosc);
  if(isValidMove){
    pieza = newPosc;
  }else{
    console.log('############################################################');
    console.log('############# Movimiento fuera de los limites ##############');
    console.log('############################################################');
  }
  limpiarTablero(tablero);
  pintarTablero(tablero,pieza);
}

function limpiarTablero(tablero){
  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      tablero[i][j] = 0;
    }
  }
}


function pintarTablero(tablero,pieza){
  console.log();
  
  pieza.forEach((el)=>{
    tablero[el[0]][el[1]] = 1;
  });

  for(let i = 0; i < 10; i++){
    let string = `${i} \t`;
    for(let j = 0; j < 10; j++){
      if(tablero[i][j] == 0){
        string += `[ ]`
      }else{
        string += `[■]`
      }
    }
    console.log(string);
  }

  console.log();
};



iniciarJuego()
//pintarTablero(tablero);
//console.log(tablero[0][1]);