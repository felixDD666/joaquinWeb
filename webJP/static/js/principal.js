    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-92536150-1', 'auto');
      ga('send', 'pageview');

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    //#to-top button appears after scrolling
    var fixed = false;
    $(document).scroll(function() {
        if ($(this).scrollTop() > 250) {
            if (!fixed) {
                fixed = true;
                $('#to-top').show("slow", function() {
                    $('#to-top').css({
                        position: 'fixed',
                        display: 'block'
                    });
                });
            }
        } else {
            if (fixed) {
                fixed = false;
                $('#to-top').hide("slow", function() {
                    $('#to-top').css({
                        display: 'none'
                    });
                });
            }
        }
    });




   //Para la barra de navegacion
   $(document).ready(function() {
        var elem = $("#mainNav");
        var elem2 = $(".page-scroll");
        elem.css("background-color", "#464952");
        elem2.mouseover(function() {
          $(this).css("background-color","#ff5200");
          $(this).css("border-radius","15px 15px 15px 15px");
        });
        elem2.mouseout(function() {
          $(this).css("background-color","#464952");
        });
        elem.css("opacity", "1");
        elem2.css("color","white");
        elem2.css("background-color", "#464952");
        elem2.css("font-weight","bolder");
});
    $(document).on("scroll", function(){
        var elem = $("#mainNav");
        var elem2 = $(".page-scroll");
        var pos = elem.offset();
        if(pos.top == 0){
            elem.css("background-color", "#464952");
            elem2.mouseover(function() {
              $(this).css("background-color","#ff5200");
              $(this).css("border-radius","15px 15px 15px 15px");
            });
            elem2.mouseout(function() {
              $(this).css("background-color","#464952");
            });
            elem.css("opacity", "1");
            elem2.css("color","white");
            elem2.css("background-color", "#464952");
            elem2.css("font-weight","bolder");
        }else{
            elem.css("background-color", "white");
            elem2.mouseover(function() {
              $(this).css("background-color","#ff5200");
            });
            elem2.mouseout(function() {
              $(this).css("background-color","rgba(255,255,255,0.7)");
            });
            elem.css("opacity", "0.7");
            elem2.css("color","#464952")
            elem2.css("font-weight","bolder")
            elem2.css("background-color","rgba(255,255,255,0.7)");
        }
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });



    $(document).ready(function () {
        var isMobile = {
            mobilecheck : function() {
            return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|at|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
            }
        }
        if(isMobile.mobilecheck()){
            var screenWidth = screen.width;
            var halfWidth = screenWidth/2;
            $("#barraNavegacion").css("width",screenWidth + "px");
            $("#tituloWeb").css("font-size","2.5em");
            $(".citasText").css("font-size","20px");
            $("#team").hide();
            $("#team").attr("id","teamNo");
            $("#team2").attr("id","team");
            $(".citasText").css("padding","0 15px");
            $('#servicios').hide();
            $("#servicios").attr("id","serviciosNo");
            $("#servicios2").attr("id","servicios");
            $("#fondoCabecera").css("width",screenWidth + "px");
            $("#fondoCabecera").css("margin-left", "-" + halfWidth + "px");
            $(".callout").hide();
        }
        var podoDepTextH = $("#podoDepText").width();
        $("#podoDepImg").css("width",podoDepTextH + "px"); 

        var podoDepTextH2 = $("#podoDepText2").width();
        $("#podoDepImg2").css("width",podoDepTextH2 + "px"); 

        var podoDepTextH3 = $("#podoDepText3").width();
        $("#podoDepImg3").css("width",podoDepTextH3 + "px"); 
    });        

/*Captcha JS*/
$('.js-captcha-refresh').click(function(){
    $form = $(this).parents('form');

    $.getJSON($(this).data('url'), {}, function(json) {
        // This should update your captcha image src and captcha hidden input
    });

    return false;
});
 

