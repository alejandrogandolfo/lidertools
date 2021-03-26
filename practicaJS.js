$(document).ready(function(){
	

	$('.aside .categoryItems[category="todo"]').addClass(`ct_item-active`);

	$('.categoryItems').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

	$('.categoryItems').removeClass(`ct_item-active`);
	$(this).addClass('ct_item-active');


	$('.productosItems').hide();

	$('.productosItems[category="'+catProduct+'"]').show();


	});

	//AHORA AL APRETAR TODOS ME VA A MOSTRAR TODOS LOS PRODUCTOS
	$('.categoryItems[category="todo"]').click(function(){
		$('.productosItems').show();


		});
});