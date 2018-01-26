$(function(){ 
    $(document).on('submit','#chatForm',fucntion(){ 
        var text = $.trim($("#text").val()); 
        var name = $.trim($("#text").val()); 
        if(text != "" && name != ""){ 
            $.post('ChatPoster.php',{text: text, name: name}, function(data){ 
                $(".chatMessages").append(data); 
        }else{
            alert("Oops");    
        }
    });
    function getMessages()
    {
        $.get('GetMessages.php', function(data){
            $(".chatMessages").html(data));
        }); 
    }

    setInterval(function(){ 
        getMessages(); 
    },500); 
}); 
  
