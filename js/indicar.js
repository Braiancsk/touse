const contactForm = `<div class="add-contact d-flex justify-content-between align-items-center">
        <div class="wrapper-input d-flex flex-column">
            <label class="color-text mt-4" for="rua">Telefone do proprietário</label>
            <input id="telefone2" class="custom-input" type="text" name="rua" placeholder="(00) 00000-0000" required/>
        </div>
            <img onclick="deleteContact()" class="close-line img-fluid" src="images/close-line.svg" alt="icone" />   
        </div>`
    

const contacts = document.querySelector('.list-contacts')
const listContact = []
const addContact = document.getElementById('add-contact')
const htmlObject = document.createElement('div');
htmlObject.innerHTML = listContact;

addContact.addEventListener('click',()=>{
    
    listContact.push(contactForm)
    const newContact = listContact.slice(-1)[0]
    contacts.insertAdjacentHTML('beforeend',newContact)
      
})

function addList(){
    listContact.push(contactForm)
    const newContact = listContact.slice(-1)[0]
    contacts.insertAdjacentHTML('beforeend',newContact)
}


let remove = document.querySelectorAll('.close-line');

var deleteContact = function (i) {
    listContact.splice(i, 1);
    contacts.innerHTML = listContact
}


function maskNumber(){
    document.getElementById('telefone').addEventListener('input', function (e) {
        var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    });
}
maskNumber()




