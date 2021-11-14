document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  let inicial = document.getElementById('inicial');
  let final = document.getElementById('final');
  let salvar = document.getElementById('salvar');
  let indisponivel = document.getElementById('indisponivel');
  let disponivel = document.getElementById('disponivel');
  let inicialMobile = document.getElementById('inicialMobile');
  let finalMobile = document.getElementById('finalMobile');
  let cancelarMobile = document.getElementById('cancelarMobile');
  let salvarMobile = document.getElementById('salvarMobile');
  let indisponivelMobile = document.getElementById('indisponivelMobile')


  //gerar random id
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  var rndInt = randomIntFromInterval(1, 100)




  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    selectMirror:true,
    unselectAuto:false,
    defaultAllDay:true,
    refetchResourcesOnNavigate: true,
    timeZone: 'UTC',
    locale: 'pt-br',
    longPressDelay:'Integer',


    buttonText:{
      today:    'Hoje',
      month:    'Mês',
      week:     'Semana',
      day:      'Dia',
      list:     'Lista'
    },
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    titleFormat: { // will produce something like "Tuesday, September 18, 2018"
      month:'long',
    },
    resources: [
      { id: `${rndInt}`, title: 'Resource A' },
      { id: 'a', title: 'Resource B' }
    ],
    eventSources: {
      events: [
        // Insira os eventos aqui
        // etc...
      ],
      color: 'red',   // an option!
      textColor: 'white' // an option!,
      
    },

    

    eventDidMount: function(info) {
      // {description: "Lecture", department: "BioChemistry"}
      // console.log(info.event.extendedProps);
     
    },

   
    dateClick: function(info) {
      // alert('clicked ' + info.dateStr);
     // change the day's background color just for fun

    },
    select: function(info) {
      // alert('selected ' + info.startStr + ' to ' + info.endStr);
      inicial.value = info.startStr;
      final.value = info.endStr;
      inicialMobile.value = info.startStr;
      finalMobile.value = info.endStr;

      //abrir modal no mobile
      let modal = document.querySelector('.side-form-mobile');
      let bgModal = document.querySelector('.bg-side-form');
      let body = document.body;
      modal.classList.add('side-form-active');
      bgModal.classList.add('side-form-active');
      body.classList.add('overflow-none');
    }
  });
  
  calendar.render();
  calendar.setOption('locale', 'pt-br');

  //variavel de disponibilidade
  var setDisponibilidade = 'disponivel';



//verificar disponibilidade
  var disponivelName = 'indisponivel'
  
//array de ids  
var randomID = []
  
//add evento no calendário
  let valor = document.getElementById('valor-noite');
  function addEvent(event){
    calendar.addEvent(
      {
      id: `${randomID}`,
      title: `${disponivelName}`, 
      start:`${inicial.value}`,
      end: `${final.value}`,
      resourceEditable:'true',
      editable:'true',
      className: `${setDisponibilidade}`,   
    },
    
  )
  }



//remover o evento
  function removeEvent() {
    
    if(randomID === randomID) {
      allID = calendar.getEventById( randomID ).remove()
    }  
}


//remover o evento clicando em cancelar 
let cancelar = document.getElementById('cancelar');
cancelar.addEventListener('click', ()=>{
   removeEvent();
})


//Salvar o evento no calendario clicando no botão 
  salvar.addEventListener('click', ()=>{
  
    //verificar se está disponivel ou não
    if(indisponivel.checked === true){
      setDisponibilidade = 'indisponivel';
      disponivelName = 'indisponivel'
    }else{
      setDisponibilidade = 'disponivel';
      disponivelName = `R$ ${valor.value}`
    }
    randomID.push(Math.random(rndInt));
    
    console.log(randomID);

    addEvent(); 


    
  })

  //Salvar o evento no calendario apertando enter 
  valor.addEventListener('keyup', (e)=>{
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"

        //verificar se está disponivel ou não
      if(indisponivel.checked === true){
        setDisponibilidade = 'indisponivel';
        disponivelName = 'indisponivel'
      }else{
        setDisponibilidade = 'disponivel';
        disponivelName = `R$ ${valor.value}`
      }

      addEvent();
      randomID.push(Math.random(randomID));
      console.log(randomID);
    
  }
  })  

  //funções do mobile
  //add evento no calendário
  let valorMobile = document.getElementById('valorMobile');
  function addEventMobile(event){
    calendar.addEvent(
      {
      id: `${randomID}`,
      title: `${disponivelName}`, 
      start:`${inicialMobile.value}`,
      end: `${finalMobile.value}`,
      resourceEditable:'true',
      editable:'true',
      className: `${setDisponibilidade}`,
      
    },
    
  )
  }



  //remover o evento
  function removeEventMobile() {
    cancelarMobile.addEventListener('click', ()=>{
        let body = document.body;
        var allID = randomID.map((event)=>event)
        calendar.getEventById(allID).remove()
        modal.classList.remove('side-form-active');
        bgModal.classList.remove('side-form-active');
        body.classList.remove('overflow-none');
  })
}
removeEventMobile();



  //Salvar o evento no calendario clicando no botão 
 
  salvarMobile.addEventListener('click', ()=>{
  
    //verificar se está disponivel ou não
    if(indisponivelMobile.checked === true){
      setDisponibilidade = 'indisponivel';
      disponivelName = 'indisponivel'
    }else{
      setDisponibilidade = 'disponivel';
      disponivelName = `R$ ${valorMobile.value}`
    }
    randomID.push(Math.random(randomID));
    

    addEventMobile(); 

      let body = document.body;
      modal.classList.remove('side-form-active');
      bgModal.classList.remove('side-form-active');
      body.classList.remove('overflow-none');

    
  })

  //Salvar o evento no calendario apertando enter 
  valorMobile.addEventListener('keyup', (e)=>{
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"

        //verificar se está disponivel ou não
      if(indisponivelMobile.checked === true){
        setDisponibilidade = 'indisponivel';
        disponivelName = 'indisponivel'
      }else{
        setDisponibilidade = 'disponivel';
        disponivelName = `R$ ${valorMobile.value}`
      }

      addEventMobile();
      randomID.push(Math.random(randomID));

      let body = document.body;
      modal.classList.remove('side-form-active');
      bgModal.classList.remove('side-form-active');
      body.classList.remove('overflow-none');
  
    
  }
  })  

});

//fechar modal
let modal = document.querySelector('.side-form-mobile');
let bgModal = document.querySelector('.bg-side-form');


bgModal.addEventListener('click',()=>{
    let body = document.body;
    modal.classList.remove('side-form-active');
    bgModal.classList.remove('side-form-active');
    body.classList.remove('overflow-none');
});

cancelarMobile.addEventListener('click', ()=>{
  let body = document.body;
  modal.classList.remove('side-form-active');
  bgModal.classList.remove('side-form-active');
  body.classList.remove('overflow-none');
});










