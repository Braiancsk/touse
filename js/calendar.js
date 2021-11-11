document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  let inicial = document.getElementById('inicial');
  let final = document.getElementById('final');
  let salvar = document.getElementById('salvar');
  let disponivel = document.getElementById('disponivel');
  let indisponivel = document.getElementById('indisponivel');



  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    selectMirror:true,
    unselectAuto:false,
    defaultAllDay:true,
    timeZone: 'UTC',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    titleFormat: { // will produce something like "Tuesday, September 18, 2018"
      month:'long',
    },
    events: [
      {
        title  : 'R$ 100',
        start  : '2021-11-11',
        resourceEditable:'true',
        editable:'true',
      },
      {
        title  : 'R$ 150',
        start  : '2021-11-21',
        end    : '2021-11-28',
        resourceEditable:'true',
        editable:'true',
      },
    ],

    eventDidMount: function(info) {
      console.log(info.event.extendedProps);
      // {description: "Lecture", department: "BioChemistry"}
      
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
      disponivel.addEventListener('change', ()=>{
        
      });
    
    },
    function( changeInfo ){
      alert('change info');
    },
    
  
  });
  
  calendar.render();
  
  

 
});


