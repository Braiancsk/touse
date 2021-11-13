document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  let inicial = document.getElementById('inicial');
  let final = document.getElementById('final');
  let salvar = document.getElementById('salvar');
  let indisponivel = document.getElementById('indisponivel');
  let disponivel = document.getElementById('disponivel');

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
   
      console.log(info.dayEl);
    },
    select: function(info) {
      // alert('selected ' + info.startStr + ' to ' + info.endStr);
      inicial.value = info.startStr;
      final.value = info.endStr;
  
    
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
        console.log(allID)
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
});







