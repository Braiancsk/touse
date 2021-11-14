var value = document.getElementById('value');
var imovelValue = document.getElementById('imovel-value');
var percentValue = document.getElementById('percent-value');
var totalValue = document.getElementById('total-value');

// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'BRL',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

value.addEventListener('keyup',()=>{
    const valor = value.value;
    const newValue = valor;
    imovelValue.innerHTML= newValue;
    
    const percentNumber = 6/100;
    const percent = parseInt(newValue * percentNumber);

    percentValue.innerHTML = formatter.format(percent);

    totalReceber = newValue - percent;

    totalValue.innerHTML = formatter.format(totalReceber);
});