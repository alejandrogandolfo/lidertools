const open = document.getElementById('bremen');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('cerrar');

open.addEventListener('click',()=>{
	modal_container.classList.add('show');

});

close.addEventListener('click',()=>{
	modal_container.classList.remove('show');
	
});



