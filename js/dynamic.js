var pages = ["Home", "Bio", "Resume", "Projects", "Companies", "Contact"]
var urls = ["Home.html", "Bio.html", "Resume.html", "Projects.html", "Companies.html", "Contact.html"]
var menu = '<img src="img/Rune.png" />';
var tab;
for(var i = 0; i < pages.length; i++){
    menu += '<a href="'+urls[i]+'" target="_self"';
    if(pages[i] == pageName){
        menu += ' class="currentPage"';
    }
    menu += '>'+pages[i]+'</a>';
}

$('#menu').html(menu);
function sizeBody(){
    var menuClearance = $('#menu').outerHeight()+30;
    $('body').css("margin-top",menuClearance);
}

$('head').append('<title>'+pageTitle+'</title>');
var header ='<table class="head"><tr><td><h1>'+pageTitle+'</h1></td></tr></table>';
$('#header').html(header);

var up = '^ <span style="font-weight:bold;">TOP</span> ^';
$('#up').html(up);
$( "#up" ).bind( "click", function() {
    $('html, body').animate({scrollTop: '0px'}, 500);
});

var footer = `
<p style="text-align: center;">This page is fully open source and forked from <a href="https://github.com/teachingtechYT/teachingtechYT.github.io" target="_blank">TeachingTech</a>.</p>
    <p style="text-align: center;">This page was created using:</p>
    <ul style="margin-top:-20px;">
        <li><a href="https://jquery.com/" target="_blank">jQuery</a></li>
        <li><a href="https://github.com/jellekralt/Responsive-Tabs" target="_blank">Responsive Tabs by jellekraut</a></li>
        <li><a href="https://fonts.google.com/specimen/Roboto" target="_blank">Roboto font</a></li>
        <li><a href="https://github.com/tedktedk/videobox" target="_blank">Videobox by tedktedk</a></li>
        <li><a href="https://github.com/noelboss/featherlight" target="_blank">Featherlight by noelboss</a></li>
        <li><a href="https://github.com/toperkin/staticFormEmails/blob/master/README.md" target="_blank">staticFormEmails by toperkin</a></li>
    </ul>`;
$('#footer').html(footer);

$(document).ready(function(){
    $('#tabs').responsiveTabs({
        startCollapsed: 'accordion'
    });
    $(".videoThumb").videoBox({
        width: '480',
        height: '360',
        loop: false,
        autoplay: false,
        byline: false,
        color: "00adef",
        maxheight: '',
        maxwidth: '',
        portrait: true,
        title: '',
        controls: 1
    });
    sizeBody();
    $(window).resize(function(){
        sizeBody();
    });
    tab = $(location).attr('hash');
  });