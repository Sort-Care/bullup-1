$().ready(function(){
	/* dropdown menu initialize */
	$(".dropdown-button").dropdown({
		constrainWidth: true,
		hover: true
	});

	$('select').material_select();
	
	/* modal initialize */
	$("#create_room_modal").modal();

	/* modal initialize */
	$("#log_modal").modal();

	$("#sign_modal").modal();

	$("#message_sheet").modal();

	$("#link_modal").modal();

	$(".button-collapse").sideNav();
	
    $('ul.tabs').tabs();

    $('#team-detail-modal').modal();

    $('#waiting-modal').modal();
	
	$('#message_collapsible').collapsible();
    // If waiting mode ends, close detail modal and open the created room modal

});
