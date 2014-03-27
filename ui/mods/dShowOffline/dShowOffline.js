(function() {

	var oldarmy_state = handlers.army_state;
	handlers.army_state = function (armies) {
		oldarmy_state(armies);
		console.log("dShowOffline:", armies);
	}

	$('.div_player_name_status').append('<span class="div_player_name ai" data-bind="text: disconnected ? \'OFFLINE\' : \'ONLINE\'"></span>');

	$('.div_spectate_item').each( function(index, item) {
		console.log('item=',item);
		$(this).children(":first").append('<span class="div_player_name ai" data-bind="text: disconnected ? \'OFFLINE\' : \'ONLINE\'"></span>');
	});

})();
