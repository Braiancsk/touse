document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  let inicial = document.getElementById('inicial');
  let final = document.getElementById('final');
  let salvar = document.getElementById('salvar');

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
    eventSources: [
      // your event source
      
      {
        events: function(info, successCallback, failureCallback) {
          salvar.addEventListener('click',()=>{
           console.log('clicado');
           
             calendar.addEvent({
              title  : 'event1',
              start  : '2021-11-11',
              end    : '2021-11-23',
              display: 'background',
             })

           
          });
        },
        color: 'yellow',   // an option!
        textColor: 'black' // an option!
      }
      // any other sources...
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
      
    },
    
  
  });
  
  calendar.render();
  
  

 
});


