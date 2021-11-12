document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  let inicial = document.getElementById('inicial');
  let final = document.getElementById('final');
  let salvar = document.getElementById('salvar');
  let indisponivel = document.getElementById('indisponivel');




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
      {
        id: 'a',
        title: 'Room A' 
      }
    ],
    resources: function(fetchInfo, successCallback, failureCallback) {
      somethingAsynchonous({
        start: fetchInfo.startStr,
        end: fetchInfo.endStr,
        timeZone: fetchInfo.timeZone
      }, function(resources) {
        successCallback(resources);
        resources.getResourceById( resourceId )
      });
    },
  
    events: [],
    

    eventDidMount: function(info) {
      // {description: "Lecture", department: "BioChemistry"}
      // console.log(info.event.extendedProps);
 
    },

   
    dateClick: function(info) {
      // alert('clicked ' + info.dateStr);
     // change the day's background color just for fun
   
      console.log(info.dayEl);
      calendar.getEventById('a')
    },
    select: function(info) {
      // alert('selected ' + info.startStr + ' to ' + info.endStr);
      inicial.value = info.startStr;
      final.value = info.endStr;
  
    
    },
    
   
  
  });
  
  calendar.render();
  calendar.setOption('locale', 'pt-br');
  
  //remover o evento
  function removeEvent() {
    let cancelar = document.getElementById('cancelar');

    cancelar.addEventListener('click', ()=>{
    
    if(randomID === randomID) {
      calendar.getEvents().forEach(event=>event.remove(randomID))
    }

    console.log('removido');
  })
}
removeEvent();


  let valor = document.getElementById('valor-noite');
  var randomID = function getRandomInt(min, max) {
    min = 1;
    max = 31;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function addEvent(event){
    calendar.addEvent(
      {
      id: `${randomID}`,
      title: `R$ ${valor.value}`, 
      start:`${inicial.value}`,
      end: `${final.value}`,
      resourceEditable:'true',
      editable:'true',

    },
  )
  }


  //Salvar o evento no calendario clicando no botão 
  salvar.addEventListener('click', ()=>{
    let selected = document.querySelector('.fc-h-event .fc-event-title-container');
    addEvent();
    console.log(randomID);

    if(indisponivel.checked === true) {
      selected.classList.add('indisponivel');
    }
  })

  //Salvar o evento no calendario apertando enter 
  valor.addEventListener('keyup', (e)=>{
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
      addEvent();
      console.log(randomID);
      let selected = document.querySelector('.fc-h-event .fc-event-title-container');
      if(indisponivel.checked === true) {
        selected.classList.add('indisponivel');
      }
  }
  })  
});







