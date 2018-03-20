function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var swatch = ['#f8ed62', '#e9d700', '#dab600', '#a98600', '#f8ed62', '#e9d700', '#dab600', '#a98600','#f8ed62', '#e9d700', '#dab600', '#a98600'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getColorFromPalette(index){
	return swatch[index];
}



var slider;
var slideCount = [];
var url = 'https://raw.githubusercontent.com/le-poplab/oulipop/master/data/'+window.location.hash.replace('#', '')+'.csv';
console.log(url);
$(document).ready(function(){
	$.get(url, { "_": $.now() }, function( data ) {
	  lists = data.match(/[^\r\n]+/g);

	  var items = [];
	  var nb_blocks = data.length;
	  $.each( lists, function( index, list ) {
	  	
	  	items.push( "<div class='block'>");
	  	items.push( "<div class='scroller'>");
	  	list = list.split(',');
		slideCount[index] = list.length;		
	  	$.each( list, function( index, value ) {
	    	items.push( "<div class='element'><div>" + value + "</div></div>" );
	    });
	    items.push( "</div>");
	    items.push( "</div>");
	  });
	 
	  $( "<div/>", {
	    "class": "blocks",
	    html: items.join( "" )
	  }).appendTo( ".container" );

	  $('.block').css("height",100/nb_blocks+"%");
	  $('.block').each(function(index){
	  	$(this).css("background-color",getColorFromPalette(index));
	  })
	  

	  slider = $('.scroller').slick({
		arrows : false
	  });
	});

	$('.reload').on('click',function(e){
		console.log('ok');
		$('.scroller').each(function(index){
			console.log(slideCount[index]);
	  		$(this).slick('slickGoTo',getRandomInt(slideCount[index]));
	  	})
	})

});