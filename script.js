// let n = 16;
let n = prompt("How many pixels per side would you like?", "16");

      
const mainContainer = document.querySelector('#main-container');
const container = document.createElement('div');

// mainContainer.style.display = 'flex';
// mainContainer.style.justifyContent = 'flex-end';
// mainContainer.style.alignItems = 'center';

 // A container for the pixels using CSS grid, with appropriately proportioned grid lines. 
createContainer(n);
function createContainer(n) {
        container.classList.add('container');
        container.style.maxWidth = '600px';
        container.style.maxHeight = '600px';
        container.style.display = 'grid';
        container.style.gridTemplate = 'repeat(' + n + ', 1fr) / repeat(' + n + ', 1fr)';
        container.style.gap = '1px';
        container.style.margin = 'auto';
        container.style.marginBottom = '200px';
        mainContainer.appendChild(container);
};


        // This creates the default pixel to fill the container
const pixel = document.createElement('div');
createPixel(n);
function createPixel(n) {
        pixel.classList.add('pixel');
        pixel.style.boxSizing = 'border-box';
        pixel.style.borderStyle = 'solid';
        pixel.style.borderWidth = '1px';
        pixel.style.backgroundColor = 'blue';
        pixel.style.opacity = '0.1';
        pixel.style.height = 600/n + 'px';
        pixel.style.width = 600/n + 'px';
        pixel.style.transition = '0.4s';

        // Creates a n*n - long array of pixels and appends clones of them to the div "container"
        const pixels = [];
        for (let i = 0; i < (n*n); i++) {
                pixels[i] = pixel;
                container.appendChild(pixels[i].cloneNode(true));
        };
                // This creates the gradual shading effect on mouseover
        document.querySelectorAll('.pixel').forEach(item => {
                item.addEventListener('mouseover', () => {

                if (item.style.opacity == 0.1) {
                        item.style.opacity = 0.2;        
                } else 
                if (item.style.opacity == 0.2) {
                        item.style.opacity = 0.3;
                } else 
                if (item.style.opacity == 0.3) {
                        item.style.opacity = 0.4;
                } else 
                if (item.style.opacity == 0.4) {
                        item.style.opacity = 0.5;
                } else 
                if (item.style.opacity == 0.5) {
                        item.style.opacity = 0.6;
                } else 
                if (item.style.opacity == 0.6) {
                        item.style.opacity = 0.7;
                } else 
                if (item.style.opacity == 0.7) {
                        item.style.opacity = 0.8;
                } else 
                if (item.style.opacity == 0.8) {
                        item.style.opacity = 0.9;
                } else 
                if (item.style.opacity == 0.9) {
                        item.style.opacity = 1;
                }
                
        }) 
})
};

        // For new grids at the press of a button:
const button = document.querySelector('.btn');

button.addEventListener('click', newEtch)

function newEtch() {
        let n = prompt("How many pixels per side would you like?", "16");
        if (+n < 1 || +n > 100) {
                alert('Please choose a number between 1 and 100');
                return;
        }
        function removeAllChildNodes(parent) {
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
            const container1 = document.querySelector('.container');
            removeAllChildNodes(container1);
        document.querySelector('.container').remove();
        createContainer(n);
        createPixel(n);
};




