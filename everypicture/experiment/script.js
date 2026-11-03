
(function(){
    
'use strict';
console.log ('reading js');
    
const character = document.querySelector('#character');
const spawnbutton = document.querySelector('button');;


let dragging = false;
let startx, starty;
let moved = false;



// pointer down: start tracking drag position, e is for mouse/event
character.addEventListener('pointerdown', (event) => {
  dragging = true;
  moved = false;

  //starting position is the event objects position
  startx = event.clientX;
  starty = event.clientY;

});

// pointer move: update character position if dragged
window.addEventListener('pointermove', (event) => {
  if (!dragging) return;

  const dx = event.clientX - startx;
  const dy = event.clientY - starty;

  //no longer dropped for changing character sprites
  character.classList.remove('is-dropped');
  character.classList.add('is-dragging');

  //moves visual
  character.style.left = `${startx + dx}px`;
  character.style.top = `${starty + dy}px`;

});



// pointer up: end drag and trigger click action if unclicked
window.addEventListener('pointerup', (event) => {
  if (!dragging) return;
  dragging = false;

  //for changing character sprite
  character.classList.add('is-dropped');
  character.classList.remove('is-dragging');

  falling();


});



function falling() {

//for falling animation
  while (character.style.top > 20) {
    character.style.top = `${starty}`;
    starty--;
  }

}






spawnbutton.addEventListener('click',spawnElement);


 function spawnElement() {
      // create a reference to the new HTML element
      const newcharacter = document.createElement('div');
      
      // give it the kitten image
      newcharacter.className = 'character';
      
      //put it inside th html
      document.querySelector('body').appendChild(newcharacter);
    }



})();
