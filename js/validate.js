$(document).ready(function() {

//validates form submit action

  $('#form_submit').click(function(e) {
	  
	  //alert("submitted");
    e.preventDefault();
    var fever = $('#fever').val();
    var syncope = $('#syncope').val();
    var angina = $('#angina').val();
    //var dyspnea = $('#dyspnea').val();

    $(".error").remove();

    if (fever.length < 1) {
      $('#fever').after('<span class="error">This field is required</span>');
    }
    if (syncope.length < 1) {
      $('#syncope').after('<span class="error">This field is required</span>');
    }
    if (angina.length < 1) {
      $('#angina').after('<span class="error">This field is required</span>');
    } 
	
	//continues if valid and then counts each values
	
	
	else {
		
		  //var msg = $("#syncope-val1").val(); 
		  //var msg2 = $("#syncope-val2").val(); 
		  //var status = $("#domain").find(":selected").val();
		  
	
        //alert("got msg");
		
		var sum1 = 0;
    $(".form-checkbox1:checkbox:checked").each(function(){
        sum1 += +$(this).val();
		
    });	var sum2 = 0;
    $(".form-checkbox2:checkbox:checked").each(function(){
        sum2 += +$(this).val();
 
	});	var sum3 = 0;
	$(".form-checkbox3:checkbox:checked").each(function(){
        sum3 += +$(this).val();
    });
    
	var sum4 = $(".form-dropdown1").find(":selected").val()
      
    
	
	//alert (sum4);

      // Returns successful data submission message when the entered information is stored in database.
var dataString = '&syncope-val='+ sum1  + '&angina-val='+ sum2 + '&dyspnea-val='+ sum3 + '&fever-val='+ sum4 ;


        $.ajax({
            url: '\sp.php',
			data: dataString,
            type: 'POST',
            dataType: 'html',
			cache: false,
            success: function (data) {
                $('#dat').html(data);
            }
        });
		
	}
	
  });

});