function bold(){
if(document.getElementById("demo").style.fontWeight=="bold")
{document.getElementById("demo").style.fontWeight="normal";}
else
document.getElementById("demo").style.fontWeight="bold";
}
function italic(){
if(document.getElementById("demo").style.fontStyle=="italic")
{document.getElementById("demo").style.fontStyle="normal";}
else
document.getElementById("demo").style.fontStyle="italic";
}
function underlined(){
if(document.getElementById("demo").style.textDecoration=="underline")
{document.getElementById("demo").style.textDecoration="";}
else
document.getElementById("demo").style.textDecoration="underline";
}
function change_size(){
var siz=document.getElementById("size").value;
document.getElementById("demo").style.fontSize= siz;
}
function change_police(){
var pol=document.getElementById("police").value;
document.getElementById("demo").style.fontFamily= pol;
}


$('.course1').mouseenter(function(){
    $('#btnCourses1').show()
});
$('.course1').mouseleave(function(){
    $('#btnCourses1').hide()
});

$('.course2').mouseenter(function(){
    $('#btnCourses2').show()
});
$('.course2').mouseleave(function(){
    $('#btnCourses2').hide()
});

$('.course3').mouseenter(function(){
    $('#btnCourses3').show()
});
$('.course3').mouseleave(function(){
    $('#btnCourses3').hide()
});

$('.course4').mouseenter(function(){
    $('#btnCourses4').show()
});
$('.course4').mouseleave(function(){
    $('#btnCourses4').hide()
});

$('.course5').mouseenter(function(){
    $('#btnCourses5').show()
});
$('.course5').mouseleave(function(){
    $('#btnCourses5').hide()
});

$('.course6').mouseenter(function(){
    $('#btnCourses6').show()
});
$('.course6').mouseleave(function(){
    $('#btnCourses6').hide()
});
$('.course7').mouseenter(function(){
    $('#btnCourses7').show()
});
$('.course7').mouseleave(function(){
    $('#btnCourses7').hide()
});
$('.course8').mouseenter(function(){
    $('#btnCourses8').show()
});
$('.course8').mouseleave(function(){
    $('#btnCourses8').hide()
});
$('.course9').mouseenter(function(){
    $('#btnCourses9').show()
});
$('.course9').mouseleave(function(){
    $('#btnCourses9').hide()
});

$('.close').click(function(){
 $('.cadree').hide()
});
$('#btnCourses1').click(function(){
    $('.cadree').show()
});
$('#btnCourses2').click(function(){
    $('.cadree').show()
});
$('#btnCourses3').click(function(){
    $('.cadree').show()
});
$('#btnCourses4').click(function(){
    $('.cadree').show()
});
$('#btnCourses5').click(function(){
    $('.cadree').show()
});
$('#btnCourses6').click(function(){
    $('.cadree').show()
});
$('#btnCourses7').click(function(){
    $('.cadree').show()
});
$('#btnCourses8').click(function(){
    $('.cadree').show()
});
$('#btnCourses9').click(function(){
    $('.cadree').show()
});