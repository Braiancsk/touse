var value = document.getElementById('value');
var imovelValue = document.getElementById('imovel-value');
var percentValue = document.getElementById('percent-value');
var totalValue = document.getElementById('total-value');

value.addEventListener('keyup',()=>{
    const newValue = `${value.value}`.toLocaleString('en-US');
    imovelValue.innerHTML= newValue.toLocaleString('en-US');
    
    const percentNumber = 6/100;
    const percent = parseInt(newValue * percentNumber);

    percentValue.innerHTML = `${percent}`.toLocaleString('en-US');

    totalReceber = newValue - percent;

    totalValue.innerHTML = totalReceber;
});