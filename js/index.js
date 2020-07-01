// JUEGO
var quiz = [
    {
      pregunta: 'Cuál es el nombre del planeta rojo?',
      respuesta: 'marte',
    },
    {
      pregunta: 'Qué planeta usa bijouterie?',
      respuesta: 'saturno',
    },
    {
      pregunta: 'Qué planeta ta que arde?',
      respuesta: 'mercurio'
    },
    {
      pregunta: 'Qué planeta en un freezer?',
      respuesta: 'neptuno'
    },
    {
      pregunta: 'Cuál es el planeta más grande?',
      respuesta: 'jupiter'
    },
    {
      pregunta: 'Cuál es el satélite natural de la Tierra?',
      respuesta: 'la luna'
    },
    {
      pregunta: 'Cuál es el satélite natural de la Tierra?',
      respuesta: 'la luna'
    },
    {
      pregunta: 'De qué planeta es Superman?',
      respuesta: 'kryton'
    },
  ],
  acertarArr = ['Esaaaa', 'Bien ahí', 'Opiiii'],
  fallarArr = ['Uuhhh, taba fácil', 'Fallaste :)', 'Ponele onda', 'No pegás una', 'Fuiste a la escuela?'],
  vidas = 3,
  score = 0,
  tagPregunta = document.querySelector('.pregunta'),
  tagInput = document.querySelector('.input-resp'),
  buttonResp = document.querySelector('.send-resp'),
  tagVidas = document.querySelector('.vidas'),
  tagScore = document.querySelector('.score'),
  tagMensaje = document.querySelector('.resp-mensaje'),
  tagGameOver = document.querySelector('.game-over'),
  tagNewGame = document.querySelector('.new-game'),
  currentPreg = 0;
  
  (()=>{
    setPregunta(currentPreg);//Llamada a una funcion tenés que poner la variable
    printScoreYVidas(vidas, score);
  })();

  function printScoreYVidas(v,s){
    tagScore.innerText = s;
    tagVidas.innerText = v;
  }

  function setPregunta(cpreg){
    tagPregunta.innerText = quiz[cpreg].pregunta;
  }

  buttonResp.addEventListener('click', ()=>{
    //obtengo el valor del input con tagInput.value
    //luego lo paso todo a minúsculas con el método toLowerCase()
    let userResp = tagInput.value.toLowerCase(); 
    evalInputVal(userResp, currentPreg);
  });

  function evalInputVal(uresp, cpreg){
    tagInput.value = '';//limpio el input
    return uresp != null && uresp != '' ? evalResp(uresp, cpreg) : tagMensaje.innerText = 'No se aceptan respuestas en blanco';
  }

  function evalResp(uresp, cpreg){
    return uresp === quiz[cpreg].respuesta ? acertar() : noAcertar();
  }
  
  function acertar(){ 
   if(currentPreg <= quiz.length - 1){
     let pos = Math.floor(Math.random()*(acertarArr.length));
      printScoreYVidas(vidas, ++score);
      setPregunta(++currentPreg) 
      tagMensaje.innerText = acertarArr[pos];
    }
  }

  function noAcertar(){
    let pos = Math.floor(Math.random()*(fallarArr.length));
    if(vidas >= 1){
      setNewScore(--vidas);  
      tagMensaje.innerText = fallarArr[pos];
    }else {
      setPregunta(currentPreg = 0);
      printScoreYVidas(vidas = 3, score = 0);
      tagMensaje.innerText = '';
      showGameOver();
    }
  }

  function setNewScore(v){
    if(score >= 1){
      printScoreYVidas(v, --score);
    }else{
      printScoreYVidas(v, score);
    }
  }

  function showGameOver(){
    tagGameOver.classList.toggle('none');
  }

  