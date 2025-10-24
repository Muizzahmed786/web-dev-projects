const extensions = document.querySelectorAll('.extension');
const removeButtons = document.querySelectorAll('.controls button');
const darkModeBtn = document.querySelector('.dark-mode-toggle');
const toggles = document.querySelectorAll('.toggle');
const filterBtns = document.querySelectorAll('[data-filter]');
let activeFilter = 'all'; 

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        darkModeBtn.textContent = '☀️';
    } else{
        darkModeBtn.textContent = '🌙';
    }
});

removeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const extensionElement = event.target.closest('.extension');
        if(!extensionElement) return;
        if(confirm('Do you want to remove this extension ?')){
            extensionElement.remove();
        }
    });
});

toggles.forEach(toggle => {
  toggle.setAttribute('role','switch');
  toggle.dataset.active = 'false';

  toggle.addEventListener('click', () => {
    const isOn = toggle.classList.toggle('on');
    toggle.dataset.active = isOn ? 'true' : 'false';
    applyFilter();
  });
});

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    filterBtns.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    applyFilter();
  });
});

function applyFilter() {
  extensions.forEach(ext => {
    const toggle = ext.querySelector('.toggle');
    const isOn = toggle.classList.contains('on');

    if (activeFilter === 'all') ext.style.display = '';
    else if (activeFilter === 'active') ext.style.display = isOn ? '' : 'none';
    else if (activeFilter === 'inactive') ext.style.display = isOn ? 'none' : '';
  });
}

applyFilter();

