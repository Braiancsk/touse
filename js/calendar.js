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

  var randomID = []


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
     inicial.value = info.startStr;
      final.value = info.endStr;
        //abrir modal no mobile
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

      modal.classList.add('side-form-active');
      bgModal.classList.add('side-form-active');
      document.body.style.overflow = 'hidden';
    },
    
   
  
  });
  
  calendar.render();
  calendar.setOption('locale', 'pt-br');

  //variavel de disponibilidade
  var setDisponibilidade = 'disponivel';


      
  let calendarID = calendar.getEventById(randomID)
  console.log(calendarID);
  
//add evento no calendário


  let valor = document.getElementById('valor-noite');
  function addEvent(event){
    calendar.addEvent(
      {
      id: `${randomID}`,
      title: `R$ ${valor.value}`, 
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
    let cancelar = document.getElementById('cancelar');
    cancelar.addEventListener('click', ()=>{
        const allID = randomID.map((event)=>event)
        calendar.getEventById(allID).remove()
  })
}
removeEvent();



  //Salvar o evento no calendario clicando no botão 
 
  salvar.addEventListener('click', ()=>{
  
    //verificar se está disponivel ou não
    if(indisponivel.checked === true){
      setDisponibilidade = 'indisponivel';
    }else{
      setDisponibilidade = 'disponivel';
    }
    randomID.push(Math.random(randomID));
    
    console.log(randomID);

    addEvent(); 


    
  })

  //Salvar o evento no calendario apertando enter 
  valor.addEventListener('keyup', (e)=>{
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"

        //verificar se está disponivel ou não
      if(indisponivel.checked === true){
        setDisponibilidade = 'indisponivel';
      }else{
        setDisponibilidade = 'disponivel';
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
      title: `R$ ${valorMobile.value}`, 
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
        const allID = randomID.map((event)=>event)
        calendar.getEventById(allID).remove()
        modal.classList.remove('side-form-active');
        bgModal.classList.remove('side-form-active');
        document.body.style.overflow = 'auto';
  })
}
removeEventMobile();



  //Salvar o evento no calendario clicando no botão 
 
  salvarMobile.addEventListener('click', ()=>{
  
    //verificar se está disponivel ou não
    if(indisponivelMobile.checked === true){
      setDisponibilidade = 'indisponivel';
    }else{
      setDisponibilidade = 'disponivel';
    }
    randomID.push(Math.random(randomID));
    

    addEventMobile(); 

    
      modal.classList.remove('side-form-active');
      bgModal.classList.remove('side-form-active');
      document.body.style.overflow = 'auto';

    
  })

  //Salvar o evento no calendario apertando enter 
  valorMobile.addEventListener('keyup', (e)=>{
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"

        //verificar se está disponivel ou não
      if(indisponivelMobile.checked === true){
        setDisponibilidade = 'indisponivel';
      }else{
        setDisponibilidade = 'disponivel';
      }

      addEventMobile();
      randomID.push(Math.random(randomID));

      modal.classList.remove('side-form-active');
        bgModal.classList.remove('side-form-active');
        document.body.style.overflow = 'auto';
  
    
  }
  })  

});


//fechar modal
let modal = document.querySelector('.side-form-mobile');
let bgModal = document.querySelector('.bg-side-form');


bgModal.addEventListener('click',()=>{
   modal.classList.remove('side-form-active');
   bgModal.classList.remove('side-form-active');
   document.body.style.overflow = 'auto';
});










