let infoMessage = document.getElementById('info-1');
let infoMessage2 = document.getElementById('info-2');
let infoMessage3 = document.getElementById('info-3');



infoMessage.addEventListener('click', ()=>{
    Swal.fire({
        icon: 'info',
        title: `Tem dúvidas sobre a área útil do
        seu imóvel?
       `,
        text: `Informe a área útil. Você pode informar um tamanho aproximado e alterar depois.
        `,
    });
});

infoMessage2.addEventListener('click', ()=>{
    Swal.fire({
        icon: 'info',
        title: `Imóveis mobiliados e itens que 
        ficam no imóvel        
       `,
        text: `Consideramos um imóvel como mobiliado se você vai deixar no imóvel ao menos 4 dos seguintes itens: armários na cozinha, armários no quarto, geladeira, cama, sofá, mesas e cadeiras.
        Lembre-se: O contrato da ToUse é de longo prazo e a nossa proteção não cobre itens de decoração e utensílios domésticos.
        `,
        
    });
});

infoMessage3.addEventListener('click', ()=>{
    Swal.fire({
        icon: 'info',
        title: `Dica: aceite animais de estimação`
        ,
        text: `Aceitar que o inquilino tenha animais de estimação aumenta suas chances de alugar mais rápido. Isso não significa que você precisará aceitar todos os tipos de animais, ok? Você poderá discutir isso direto com o inquilino na fase de negociação.
        `,
        
    });
});
