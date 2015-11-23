$(document).ready(function () {

    $(".filterChkBox").click(function(){
        var t = $(this);
        if (t.val() == 'pain') {
            if(t.is(':checked')) {
                $("#PSchart").show();
            }
            else {
                $("#PSchart").hide();
            }
        }
        else if (t.val() == 'bp') {
            if(t.is(':checked')) {
                $("#BPchart").show();
            }
            else {
                $("#BPchart").hide();
            }
        }
        else if (t.val() == 'temp') {
            if(t.is(':checked')) {
                $("#TempChart").show();
            }
            else {
                $("#TempChart").hide();
            }
        }
        else if (t.val() == 'rr') {
            if(t.is(':checked')) {
                $("#RespChart").show();
            }
            else {
                $("#RespChart").hide();
            }
        }
        else if (t.val() == 'pulse') {
            if(t.is(':checked')) {
                $("#PulseChart").show();
            }
            else {
                $("#PulseChart").hide();
            }
        }
        else if (t.val() == 'pulseOx') {
            if(t.is(':checked')) {
                $("#PulseOxChart").show();
            }
            else {
                $("#PulseOxChart").hide();
            }
        }
    });

    $(".pulmonaryUpdate").click(function(){
        $.post( "/updateResidentPlan", { residentplan: $('.pulmonaryplan').val(),
            body_system: 'pulmonary' })
          .done(function( data ) {
          });
        var spanElement = $(this).parent().find('span');
        spanElement.toggleClass('hide');
        setTimeout(function(){ spanElement.toggleClass('hide');}, 3000);
    });

    $(".cardiovascularUpdate").click(function(){
        $.post( "/updateResidentPlan", { residentplan: $('.cardiovascularplan').val(),
            body_system: 'cardiovascular' })
          .done(function( data ) {
          });
        var spanElement = $(this).parent().find('span');
        spanElement.toggleClass('hide');
        setTimeout(function(){ spanElement.toggleClass('hide');}, 3000);
    });
    $(".neurologicUpdate").click(function(){
        $.post( "/updateResidentPlan", { residentplan: $('.neurologicplan').val(),
            body_system: 'neurologic' })
          .done(function( data ) {
          });
          var spanElement = $(this).parent().find('span');
        spanElement.toggleClass('hide');
        setTimeout(function(){ spanElement.toggleClass('hide');}, 3000);
    });
});