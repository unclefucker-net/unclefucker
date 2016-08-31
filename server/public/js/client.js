


$(document).ready(function () {
	
	HookupTabs();
	SelectTab('tab-stream');

});

function HookupTabs() {
	$('ul#main-nav a').on('click', function() {
		var id = $(this).data('tab');
		SelectTab(id);
	});
}

function SelectTab(id) {
	// update tab
	$('ul#main-nav li').removeClass('is-active');
	$('ul#main-nav li.' + id).addClass('is-active');

	// show content
	$('.tab').hide();
	$('.tab.' + id).show();
}