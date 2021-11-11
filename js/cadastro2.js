
    let box1 = document.getElementById("box1");
    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let boxInput = document.getElementById('box-input');
    let boxInput2 = document.getElementById('box-input2');
    let boxInput3 = document.getElementById('box-input3');
    box1.addEventListener('click',()=>{
        boxInput.classList.add('box-input-active');
        boxInput2.classList.remove('box-input-active');
        boxInput3.classList.remove('box-input-active');
    });

    box2.addEventListener('click',()=>{
        boxInput2.classList.add('box-input-active');
        boxInput.classList.remove('box-input-active');
        boxInput3.classList.remove('box-input-active');
    });

    box3.addEventListener('click',()=>{
        boxInput3.classList.add('box-input-active');
        boxInput2.classList.remove('box-input-active');
        boxInput.classList.remove('box-input-active');
    });
    


    //scripts para aumentar e dimimuir o número de hospedes


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

    
    //scripts para aumentar e dimimuir o número de hospedes


    let plus2 = document.getElementById('plus2');
    let subtract2 = document.getElementById('subtract2');
    let hospedes2 = document.getElementById('hospedes2');

    function handleHospedes2(){
        subtract2.addEventListener('click', ()=>{
            var newValue = hospedes2.value--;  
            var min = 1;
            
            if(hospedes2.value <= min){
                hospedes2.value = min;
                console.log('limite');
            }
        });


        plus2.addEventListener('click', ()=>{
            var newPlus = parseInt(hospedes2.value++);
            hospedes2.innerHTML = newPlus;
         
        });
    }
    handleHospedes2();


      //scripts para aumentar e dimimuir o número de hospedes


      let plus3 = document.getElementById('plus3');
      let subtract3 = document.getElementById('subtract3');
      let hospedes3 = document.getElementById('hospedes3');
  
      function handleHospedes3(){
          subtract3.addEventListener('click', ()=>{
              var newValue = hospedes3.value--;  
              var min = 1;
              
              if(hospedes3.value <= min){
                  hospedes3.value = min;
                  console.log('limite');
              }
          });
  
  
          plus3.addEventListener('click', ()=>{
              var newPlus = parseInt(hospedes3.value++);
              hospedes3.innerHTML = newPlus;
           
          });
      }
      handleHospedes3();

       //scripts para aumentar e dimimuir o número de hospedes


       let plus4 = document.getElementById('plus4');
       let subtract4 = document.getElementById('subtract4');
       let hospedes4 = document.getElementById('hospedes4');
   
       function handleHospedes4(){
           subtract4.addEventListener('click', ()=>{
               var newValue = hospedes4.value--;  
               var min = 1;
               
               if(hospedes4.value <= min){
                   hospedes4.value = min;
                   console.log('limite');
               }
           });
   
   
           plus4.addEventListener('click', ()=>{
               var newPlus = parseInt(hospedes4.value++);
               hospedes4.innerHTML = newPlus;
            
           });
       }
       handleHospedes4();
