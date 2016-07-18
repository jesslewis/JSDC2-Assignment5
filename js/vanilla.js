// Normal JavaScript

    $(document).ready(function(){
        
    var counter = 0;

        $('#count-up').click( function() {
            var counter = $('#counter').val();
            counter += 1;
            $('#counter').val(counter);
        });

        $('#count-down').click( function() {}
        	var counter = $('#counter').val();
        	counter -= 1;
        	$('#counter').val(counter);
    	});

    	$('#reset').click( function() {
    		var counter = 0;
    		$('#counter').val(counter);
    	});

    });

// When #countUp is clicked we want to add 1
// When #countDown is clicked we want to subtract 1
// When #reset is clicked we want to go to 0

// var counter = 0;

// function count() {
// 	if $('#count-up').on('click', countUp)
// 	} else if {
// 		$('#count-down').on('click', countDown)
// 	} else {
// 		$('#reset').on('click', reset)
// 	}
// }

// function countUp() {
// 	var counter = $('#count-up').val();
// 	var counter ++;
// 	$('#counter').val(counter);
// }

// function countDown() {
// 	var count --;
// }

// function reset() {
// 	var count = 0;
// }