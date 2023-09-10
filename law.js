/* global console, document,$, console, window */
/*disallowMultipleLineBreaks: true*/
/*jslint devel: true, evil: true, plusplus: true */
/*eslint no-console: off */
 /*eslint no-unused-vars: off, no-unused-labels: off*/

$(function () { 'use strict';
               $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:false,
                items: 1,
                center:true,
                dots: true
}); //end owl
               $(window).on("scroll", function () {
                   var zp = $(".counter").offset().top - 700;
                   if ($(window).scrollTop() >= zp){ $(".counter").countTo();}
               }); //end count to
               $("#check").change( function () {
                    if(this.checked){ 
                        $("body").css("overflow-y", "hidden");}
                    else { $("body").css("overflow-y", "scroll");}
                }); //end sidebar check
               $(".indili1").on("click", function () {
                   $(this).addClass("active");
                   $(".indili2").removeClass("active");
                   $(".indili3").removeClass("active");
                   
                   $(".slide1").addClass("active");
                   $(".slide2").removeClass("active");
                   $(".slide3").removeClass("active");
               });
               $(".indili2").on("click", function () {
                   $(this).addClass("active");
                   $(".indili1").removeClass("active");
                   $(".indili3").removeClass("active");
                   
                   $(".slide2").addClass("active");
                   $(".slide1").removeClass("active");
                   $(".slide3").removeClass("active");
               });
               $(".indili3").on("click", function () {
                   $(this).addClass("active");
                   $(".indili2").removeClass("active");
                   $(".indili1").removeClass("active");
                   
                   $(".slide3").addClass("active");
                   $(".slide2").removeClass("active");
                   $(".slide1").removeClass("active");
               });
               $(".frmlink").on("click", function () {
                   $(".head").css("overflow", "visible");
                   $(".vbigoverlay").css("display", "block");
                   $("body").css("overflow", "hidden");
                   $(".iframehold").offset({top: $(".vidp").offset().top + 100});
               });
               $(window).on("resize", function () {
                    $(".iframehold").offset({top: $(".vidp").offset().top + 100});
               });
               $(".closee, .vbigoverlay").on("click", function() {
                  $('.rem')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*'); 
                   $(".vbigoverlay").css("display", "none");
                   $("body").css("overflow-y", "scroll");
               });
               $(document).ready(function() {
                     $(".load").delay(1000).fadeOut();
                });
               $(window).on("scroll", function () {
                    if($(this).scrollTop() >= 500) {$("#scroll").fadeIn(); }
                    else {$("#scroll").fadeOut();}
                });
                $("#scroll").on("click", function () {$("html,body").animate({ scrollTop : 0}, 600); });
               
});//end main