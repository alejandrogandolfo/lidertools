window.addEventListener('load', function(){
	new Glider(document.querySelector('.slider__lista'),{
		slidesToShow: 1,
  		slidesToScroll: 1,
  		draggable: true,

  		dots: '.slider__indicadores',
  		arrows: {
    		prev: '.slider__anterior',
    		next: '.slider__siguiente'

    	}
    
    

	

    });

});

