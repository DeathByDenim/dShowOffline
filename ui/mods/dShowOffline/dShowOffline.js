(function() {

	$('.div_player_name_status').append('<span class="div_player_name ai" data-bind="visible: disconnected">OFFLINE</span>');

	$('.div_spectate_item').each( function(index, item) {
		console.log('item=',item);
		$(this).children(":first").append('<span class="div_player_name ai" data-bind="visible: disconnected">OFFLINE</span>');
	});

})();
