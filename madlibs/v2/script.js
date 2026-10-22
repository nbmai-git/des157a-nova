(function(){
    'use strict';
    console.log('reading js');

    const myform = document.querySelector('#myform');
    const madlib = document.querySelector('#madlibstory');

    const clearbutton = document.querySelector('#clear');

    myform.addEventListener('submit',function(event){
        event.preventDefault();

        const name = document.querySelector('#name').value;
        const location = document.querySelector('#location').value;
        const emotion1 = document.querySelector('#emotion1').value;
        const object = document.querySelector('#object').value;
        const verb1 = document.querySelector('#verb1').value;
        const adj1 = document.querySelector('#adj1').value;
        const count = document.querySelector('#count').value;
        const time = document.querySelector('#time').value;
        const verb2 = document.querySelector('#verb2').value;
        const emotion2 = document.querySelector('#emotion2').value;
        
        alert('form submitted');


        let mytext; //define mytext for use

       
        mytext = `Here is your story: <br>
        Today, ${name} was feeling very ${emotion1}, so they decided to visit the ${location}. At 
        ${location}, they found a ${object}. The ${object} was very ${adj1}, it made ${name} ${emotion2}. 
        ${name} started to ${verb1} with the ${object} in their hands. They did this ${count} times, until the
        ${object} was gone. ${name} no longer felt ${emotion2} anymore. Finally, after their very eventful time, 
        ${name} decided to go home. It took ${time} days`;

        madlib.innerHTML = mytext;

        
        clearbutton.addEventListener('click', function(){
            mytext = `your story will appear here`;
            const name = document.querySelector('#name').value='';
            const location = document.querySelector('#location').value='';
            const emotion1 = document.querySelector('#emotion1').value='';
            const object = document.querySelector('#object').value='';
            const verb1 = document.querySelector('#verb1').value='';
            const adj1 = document.querySelector('#adj1').value='';
            const count = document.querySelector('#count').value='';
            const time = document.querySelector('#time').value='';
            const verb2 = document.querySelector('#verb2').value='';
            const emotion2 = document.querySelector('#emotion2').value='';

       }); 

    });




})();