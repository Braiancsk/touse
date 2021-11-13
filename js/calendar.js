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
  const rndInt = randomIntFromInterval(1, 30)

  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    selectMirror:true,
    unselectAuto:false,
    defaultAllDay:true,
    refetchResourcesOnNavigate: true,
    timeZone: 'UTC',
    locale: 'pt-br',


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
        {
          title: 'Event1',
          start: '2021-11-11',
          id: 'a',
          resourceId: `${rndInt}`,
          color: 'blue',   // an option!
          className: 'disponivel',
          resourceEditable:'true',
          editable:'true',
        },
        {
          title: 'Indisponivel',
          start: '2021-11-15',
          id: 'b',
          resourceId: `${rndInt}`,
          className: 'indisponivel',
          resourceEditable:'true',
          editable:'true',
        },
        {
          title: 'Event2',
          start: '2021-11-12',
          id: '1',
          resourceId: 'a',
          resourceEditable:'true',
          editable:'true',
        }
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
  
  //add evento no calendário
  let valor = document.getElementById('valor-noite');
  function addEvent(event){
    calendar.addEvent(
      {
      id: `${Math.random(rndInt)}`,
      title: `R$ ${valor.value}`, 
      start:`${inicial.value}`,
      end: `${final.value}`,
      resourceEditable:'true',
      editable:'true',
      className: `${setDisponibilidade}`,
      
    },
    
  )
  }


  let calendarID = calendar.getEventById(rndInt)
  console.log(calendarID);

  //remover o evento
  function removeEvent() {
    let cancelar = document.getElementById('cancelar');
    cancelar.addEventListener('click', ()=>{
      
      if(rndInt === calendarID) {
        calendar.getEventById(rndInt).remove()
      }
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

    addEvent(); 
    console.log(Math.random(rndInt));
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
      console.log(rndInt);
    
  }
  })  
});







