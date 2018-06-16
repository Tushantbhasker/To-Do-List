$("ul").on("click","li", function(){
	$(this).toggleClass("completed");
});


$("ul").on("click","span",function(event){
	
$(this).parent().fadeOut(600,function(){
	$(this).remove();
});
	event.stopPropagation();
});



$("input[type='text']").on("keypress",function(event){

  if(event.which === 13){
  	var newToDO = $("input[type='text']").val();
     $("ul").append("<li><span ><i class='fa fa-trash'></i> </span>"+ newToDO +"</li>");
     $(this).val("");
  }
});
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});