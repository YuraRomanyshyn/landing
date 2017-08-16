$(document).ready(function() {
    
  	// Hidden menu

  	$( '.btn-menu, .hidden-menu ul a' ).click(function(){
  		if ( $( '.hidden-menu' ).is( ':hidden' ) ){
  			$( '.hidden-menu' ).show();
  		}
  		else {
  			$( '.hidden-menu' ).hide();
  		}
  	})  
  	
  	// page scroll
  	$("a[rel='m_PageScroll2id']").mPageScroll2id({
    	offset:30
	
	});
  		// slider
    	$("#owl-demo").owlCarousel({
    		autoPlay: 5000, 
    		items: 3,
    		itemsDesctop: [1199, 3],
    		itemsDesctopSmall: [979, 3]
	});

    // tabs
    
    $('#responsiveTabsDemo').responsiveTabs({
    startCollapsed: 'tabs'
});	
    
});