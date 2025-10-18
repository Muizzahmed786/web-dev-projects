const extensions = document.querySelectorAll('.extension');
const removeButtons = document.querySelectorAll('.controls button');
const buttons = document.querySelectorAll('.select-options div');
const darkModeBtn = document.querySelector('.dark-mode-toggle');
const body = document.body;

//dark mode toggle
darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        darkModeBtn.textContent = '☀️';
    } else{
        darkModeBtn.textContent = '🌙';
    }
});

//remove button
removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const extensionElement = event.target.closest('.extension');
        if(!extensionElement) return;
        if(confirm('Do you want to remove this extension ?')){
            extensionElement.remove();
        }
    });
});
