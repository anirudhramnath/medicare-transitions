$(document).ready(function () {

    $(".filterChkBox").click(function(){

        var t = $(this);
        if (t.val() == 'pain') {
            if(t.is(':checked')) {
                $("#PSchart").show();
                consloe.log('fdf');
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

    $(".filterChkBox2").click(function(){
        var t = $(this);
        if (t.val() == 'pain2') {
            if(t.is(':checked')) {
                $("#PSchart2").show();
            }
            else {
                $("#PSchart2").hide();
            }
        }
        else if (t.val() == 'bp2') {
            if(t.is(':checked')) {
                $("#BPchart2").show();
            }
            else {
                $("#BPchart2").hide();
            }
        }
        else if (t.val() == 'temp2') {
            if(t.is(':checked')) {
                $("#TempChart2").show();
            }
            else {
                $("#TempChart2").hide();
            }
        }
        else if (t.val() == 'rr2') {
            if(t.is(':checked')) {
                $("#RespChart2").show();
            }
            else {
                $("#RespChart2").hide();
            }
        }
        else if (t.val() == 'pulse2') {
            if(t.is(':checked')) {
                $("#PulseChart2").show();
            }
            else {
                $("#PulseChart2").hide();
            }
        }
        else if (t.val() == 'pulseOx2') {
            if(t.is(':checked')) {
                $("#PulseOxChart2").show();
            }
            else {
                $("#PulseOxChart2").hide();
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

    $("#bodySystemsPopover a").popover({
        title : 'Default Title Text'
    });
});