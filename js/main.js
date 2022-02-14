// =============================DROP-DOWN==============================================
const selectSingle = document.querySelector('.drop-down');
const selectSingle_title = selectSingle.querySelector('.drop-down__title');
const selectSingle_labels = selectSingle.querySelectorAll('.drop-down__text');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
   if ('active' === selectSingle.getAttribute('data-state')) {
   selectSingle.setAttribute('data-state', '');
   } else {
   selectSingle.setAttribute('data-state', 'active');
   }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
   selectSingle_labels[i].addEventListener('click', (event) => {
      selectSingle_title.textContent = event.target.textContent;
      selectSingle.setAttribute('data-state', '');
   });
}