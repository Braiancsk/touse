let alugarButton = document.getElementById('alugar');
let comprarButton = document.getElementById('comprar');
let temporadaButton = document.getElementById('temporada');
let alugar = document.querySelector('.alugar');
let comprar = document.querySelector('.comprar');
let temporada = document.querySelector('.temporada');
let close = document.getElementById('close');
let modal = document.getElementById('modal');
let openModal = document.getElementById('open');
let bgModal = document.querySelector('.bg-modal');
let divide = document.getElementById('divide');
// Size of browser viewport.
let janela = $(window).width();


if('alugarButton = checked'){
    alugar.classList.toggle('active');
    }


comprarButton.addEventListener('click',()=>{
    if('comprarButton = checked'){
        comprar.classList.add('active');
        alugar.classList.remove('active');
        temporada.classList.remove('active');
    }
});

alugarButton.addEventListener('click',()=>{
    if('alugarButton = checked'){
        alugar.classList.add('active');
        comprar.classList.remove('active');
    }
});

temporadaButton.addEventListener('click',()=>{
    if('temporadaButton = checked'){
        temporada.classList.add('active');
        alugar.classList.remove('active');
        comprar.classList.remove('active');
    }
});



//script para abrir modal

openModal.addEventListener('click',()=>{
    modal.classList.add('active');
    cards.classList.add('active-cards');
    document.body.style.overflow = 'hidden';
    bgModal.style.display = 'block';
    footerTop.style.marginTop = '108px';
    if(janela <= 768){
        col2.classList.remove('map-active');
    }
});

close.addEventListener('click',()=>{
   modal.classList.remove('active');
   footerTop.style.marginTop = '108px';
   bgModal.style.display = 'none';
   document.body.style.overflow = 'auto';
   if(janela <= 768){
    col2.classList.remove('map-active');
}

});

//script para fechar modal ao clicar fora

bgModal.addEventListener('click',()=>{
    modal.classList.remove('active');
   footerTop.style.marginTop = '108px';
   bgModal.style.display = 'none';
   document.body.style.overflow = 'auto';
   if(janela <= 768){
    col2.classList.remove('map-active');
}

});

let mapaBtn = document.getElementById("mapa");
let col2 = document.getElementById('col2');
let cards = document.getElementById('cards');
let footerTop = document.getElementById('footer-map');
let firstCol = document.getElementById('first-col');
let mapCol = document.getElementById('property-listing-map');
let cardsDivide = document.querySelectorAll('article');
let resetMap = document.getElementById('property-listing-map');

    mapaBtn.addEventListener('click',()=>{
        col2.classList.add('map-active');
        footerTop.style.marginTop = '0px';
        if(janela <= 768){ 
            cards.classList.remove('active-cards');
            col2.classList.add('reset');
        }       
});

   

//detect de size of the screen
if(janela <= 768){
    col2.classList.remove('map-active');
    if("col2.classList.contains('map-active')"){
        for(var i = 0; i < cardsDivide.length; i++){
            cardsDivide[i].classList.add('cardsDivide');
        }
        col2.classList.add('reset');
        resetMap.classList.add('reset');

    }else if("cards.classList.contains('active-cards')"){
        col2.classList.remove('map-active');
        cards.classList.add('reset');
    } 
    
    console.log(janela);
} 

if(janela >= 900){
    for(var i = 0; i < cardsDivide.length; i++){
        cardsDivide[i].classList.add('cardsDivide');
    }
}


//scripts para os calendarios

const picker = datepicker('#entrada', {
    // Event callbacks.
    onSelect: instance => {
      // Show which date was selected.
      console.log(instance.dateSelected)
    },
    onShow: instance => {
      console.log('Calendar showing.')
    },
    onHide: instance => {
      console.log('Calendar hidden.')
    },
    onMonthChange: instance => {
      // Show the month of the selected date.
      console.log(instance.currentMonthName)
    },
  
    // Customizations.
    formatter: (input, date, instance) => {
      // This will display the date as `1/1/2019`.
      input.value = date.toDateString()
    },
    position: 'tr', // Top right.
    startDay: 1, // Calendar week starts on a Monday.
    customDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    overlayButton: 'Go!',
    overlayPlaceholder: 'Enter a 4-digit year',
  
    // Settings.
    alwaysShow: true, // Never hide the calendar.
    dateSelected: new Date(), // Today is selected.
    maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
    minDate: new Date(), // June 1st, 2016.
    startDate: new Date(), // This month.
    showAllDates: true, // Numbers for leading & trailing days outside the current month will show.
  
    // Disabling things.
    noWeekends: false, // Saturday's and Sunday's will be unselectable.
    disabler: date => (date.getDay() === 2 && date.getMonth() === 9), // Disabled every Tuesday in October
    disabledDates: [new Date(2050, 0, 1), new Date(2050, 0, 3)], // Specific disabled dates.
    disableMobile: false, // Conditionally disabled on mobile devices.
    disableYearOverlay: true, // Clicking the year or month will *not* bring up the year overlay.

  
  // ID - be sure to provide a 2nd picker with the same id to create a daterange pair.
  id: 1
})


  const picker2 = datepicker('#saida', {
    // Event callbacks.
    onSelect: instance => {
      // Show which date was selected.
      console.log(instance.dateSelected)
    },
    onShow: instance => {
      console.log('Calendar showing.')
    },
    onHide: instance => {
      console.log('Calendar hidden.')
    },
    onMonthChange: instance => {
      // Show the month of the selected date.
      console.log(instance.currentMonthName)
    },
  
    // Customizations.
    formatter: (input, date, instance) => {
      // This will display the date as `1/1/2019`.
      input.value = date.toDateString()
    },
    position: 'tr', // Top right.
    startDay: 1, // Calendar week starts on a Monday.
    customDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
    customMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    overlayButton: 'Go!',
    overlayPlaceholder: 'Enter a 4-digit year',
  
    // Settings.
    alwaysShow: true, // Never hide the calendar.
    dateSelected: new Date(), // Today is selected.
    maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
    minDate: new Date(2016, 5, 1), // June 1st, 2016.
    startDate: new Date(), // This month.
    showAllDates: true, // Numbers for leading & trailing days outside the current month will show.
  
    // Disabling things.
    noWeekends: false, // Saturday's and Sunday's will be unselectable.
    disabler: date => (date.getDay() === 2 && date.getMonth() === 9), // Disabled every Tuesday in October
    disabledDates: [new Date(2050, 0, 1), new Date(2050, 0, 3)], // Specific disabled dates.
    disableMobile: false, // Conditionally disabled on mobile devices.
    disableYearOverlay: true, // Clicking the year or month will *not* bring up the year overlay.

  // ID - be sure to provide a 2nd picker with the same id to create a daterange pair.
  id: 1
  })

  picker.getRange() // { start: <JS date object>, end: <JS date object> }
  picker2.getRange() // Gives you the same as above!



  let plus = document.getElementById('plus');
  let subtract = document.getElementById('subtract');
  let hospedes = document.getElementById('hospedes');

  function handleHospedes(){
      subtract.addEventListener('click', ()=>{
          var newValue = hospedes.value--;  
          var min = 1;
          
          if(hospedes.value <= min){
              hospedes.value = min;
              console.log('limite');
          }
      });


      plus.addEventListener('click', ()=>{
          var newPlus = parseInt(hospedes.value++);
          hospedes.innerHTML = newPlus;
       
      });
  }

  handleHospedes();

