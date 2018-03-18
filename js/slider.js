
	$(document).ready(function(){
    	v = $( ".slider" ).css('width');
    	console.log(v);

    $(window).on('resize', function () {
    	v = $( ".slider" ).css('width');
	});

	$('.scrollright').click(function()
	{

    $('#scrollbar').animate( { scrollLeft: '+=' + v }, 1000);
	});

	$('.scrollleft').click(function()
	{

    $('#scrollbar').animate( { scrollLeft: '-=' + v }, 1000);
	});

	});




