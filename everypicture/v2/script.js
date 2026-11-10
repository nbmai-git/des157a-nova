
(function(){
        
    //background image changes
    // list the paths to your images inside the folder
    const images = [
      'lotusmana/1.jpeg',
      'lotusmana/2.jpeg',
      'lotusmana/3.jpeg',
      'lotusmana/4.jpeg'
    ];

    let currentIndex = 0;
    const background = document.querySelector('#window-bg');
    const leftbutton = document.querySelector('#left');
    const rightbutton = document.querySelector('#right');

    // Next button click
    rightbutton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Loops back to 0 at the end
    updateBackground();
    });

    // Previous button click
    leftbutton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loops to last image if at 0
    updateBackground();
});


function updateBackground() {
background.style.backgroundImage = `url('${images[currentIndex]}')`;
}

// set initial background on page load
updateBackground();



//character spawns
const spawnBtn = document.getElementById('spawn-btn');


        spawnBtn.addEventListener('click', () => {
            // create character element
            const char = document.createElement('div');
            char.classList.add('character');
            

            // set a random initial position near the center of the screen
            const randomX = Math.random() * (window.innerWidth - 100) + 20;
            const randomY = Math.random() * (window.innerHeight - 100);
            char.style.left = `${randomX}px`;
            char.style.top = `${randomY}px`;

            // attach drag-and-drop capability
            makeDraggable(char);

            // add to document
            document.body.appendChild(char);
        });

        //put all drag and drop interactions inside one function
        function makeDraggable(element) {
            let currentX; let currentY;
            let initialX; let initialY;
            let xOffset = 0; let yOffset = 0;
            let active = false;

            // handles both mouse and touch inputs
            element.addEventListener('mousedown', dragStart);
            element.addEventListener('touchstart', dragStart, { passive: false });

            document.addEventListener('mousemove', drag);
            document.addEventListener('touchmove', drag, { passive: false });

            document.addEventListener('mouseup', dragEnd);
            document.addEventListener('touchend', dragEnd);

            
            function dragStart(e) {

                // get coordinates for touch or mouse
                const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
                const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;

                // track the starting coordinates
                initialX = clientX - xOffset;
                initialY = clientY - yOffset;

                if (e.target === element) {
                    active = true;
                }
            }

            function drag(e) {
                if (active) {
                    e.preventDefault(); // prevents defualt scrolling on mobile

                    // bring dragged character to the front; date is always increasing so Z increases
                    element.style.zIndex = Date.now();
                
                    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
                    const clientY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;

                    currentX = clientX - initialX;
                    currentY = clientY - initialY;

                    xOffset = currentX;
                    yOffset = currentY;

                    // apply the transform to move the character
                    element.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
                    element.classList.add('is-dragging');
                    
                }
            }

            function dragEnd() {
                active = false;
                element.classList.remove('is-dragging');
            }
        } //end of character click and drags


        


})();
