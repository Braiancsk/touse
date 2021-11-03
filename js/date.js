const picker = datepicker('#checkin', {
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
    alwaysShow: false, // Never hide the calendar.
    dateSelected: new Date(), // Today is selected.
    maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
    minDate: new Date(), // June 1st, 2016.
    startDate: new Date(), // This month.
    showAllDates: true, // Numbers for leading & trailing days outside the current month will show.
  
    // Disabling things.
    noWeekends: false, // Saturday's and Sunday's will be unselectable.
    disabler: date => (date.getDay() === 2 && date.getMonth() === 9), // Disabled every Tuesday in October
    disabledDates: [new Date(2050, 0, 1), new Date(2050, 0, 3)], // Specific disabled dates.
    disableMobile: true, // Conditionally disabled on mobile devices.
    disableYearOverlay: true, // Clicking the year or month will *not* bring up the year overlay.
  
})

  const picker2 = datepicker('#checkout', {
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
    alwaysShow: false, // Never hide the calendar.
    dateSelected: new Date(), // Today is selected.
    maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
    minDate: new Date(2016, 5, 1), // June 1st, 2016.
    startDate: new Date(), // This month.
    showAllDates: true, // Numbers for leading & trailing days outside the current month will show.
  
    // Disabling things.
    noWeekends: true, // Saturday's and Sunday's will be unselectable.
    disabler: date => (date.getDay() === 2 && date.getMonth() === 9), // Disabled every Tuesday in October
    disabledDates: [new Date(2050, 0, 1), new Date(2050, 0, 3)], // Specific disabled dates.
    disableMobile: true, // Conditionally disabled on mobile devices.
    disableYearOverlay: true, // Clicking the year or month will *not* bring up the year overlay.
    
  })



const input = document.querySelector('.checkin');

// Toggle the calendar when a button is clicked.
input.addEventListener('click', e => {
  // THIS!!! Prevent Datepicker's event handler from hiding the calendar.
  e.stopPropagation()

  // Toggle the calendar.
  const isHidden = picker.calendarContainer.classList.contains('qs-hidden')
  picker[isHidden ? 'show' : 'hide']()
})
