$(function() {

	$(document).ready(function(){

		// preloader 
        setTimeout(function(){
            $('.preloader').fadeOut();
        }, 500);

        // show first screen animation
		setTimeout(function(){
			$('.promo').addClass('active');
		}, 600);
        
        // menu toggle btn 
		$('.btn-menu').click(function(){
            $('.fixed-menu').addClass('open');
        });

        $('.btn-close').click(function(){
            $('.fixed-menu').removeClass('open');
        });


		// custom select
		$('.select').each(function(){
            var $this = $(this), numberOfOptions = $(this).children('option').length;
          
            $this.addClass('select-hidden'); 
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select-styled"></div>');

            var $styledSelect = $this.next('div.select-styled');
            $styledSelect.text($this.children('option').eq(0).text());
          
            var $list = $('<ul />', {
                'class': 'select-options'
            }).insertAfter($styledSelect);
          
            for (var i = 0; i < numberOfOptions; i++) {
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val()
                }).appendTo($list);
            }
          
            var $listItems = $list.children('li');
          
            $styledSelect.click(function(e) {
                e.stopPropagation();
                $('div.select-styled.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').fadeToggle();
            });
          
            $listItems.click(function(e) {
                e.stopPropagation();
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.fadeOut();
                //console.log($this.val());
            });
          
            $(document).click(function() {
                $styledSelect.removeClass('active');
                $list.fadeOut();
            });
         
        });

        // check inputs
        $(".form__input").focus(function(){
			$(this).addClass("in");
		});
		$(".form__input").focusout(function(){
			if($.trim($(this).val()) == ''){
		      $(this).removeClass('in')
		   } 
        });

        // press  carousel 

        $(".press-carousel").owlCarousel({
            items: 2,
            margin: 30,
            dots: true,
            responsive : {
                0 : {
                    items: 1,
                },
                768 : {
                    items: 2,
                }
            }
        });
        
        // news carousel 

        $(".news-carousel").owlCarousel({
            items: 3,
            margin: 30,
            dots: true,
            responsive : {
                0 : {
                    items: 1,
                },
                768 : {
                    items: 2,
                },
                992 : {
                    items: 3,
                }
            }
        });

       

        // timer 

        var countDownDate = new Date("Jun 20, 2018 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="timer"
            document.getElementById("timer").innerHTML = "<div class='timer__item'><div class='timer__value'>" + days + "</div><div class='timer__item-title'>Days</div></div> <div class='timer__item'><div class='timer__value'>" + hours + "</div><div class='timer__item-title'>Hours</div></div> <div class='timer__item'><div class='timer__value'>"
            + minutes + "</div><div class='timer__item-title'>Minutes</div></div> <div class='timer__item'><div class='timer__value'>" + seconds + "</div><div class='timer__item-title'>Seconds</div></div> ";

            // If the count down is finished, write some text 
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "EXPIRED";
            }
        }, 1000);
        

         // counter up values
        $('.counter').countUp({
            'time': 2000,
            'delay': 10
        });

        $('.popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

        // animation

        AOS.init({
			disable: 'mobile',
            duration: 1000,
            once: true
		  });
      

        // scroll 
        $('.menu__link').on('click', function(event) {
			       
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();

		        $('html, body').stop().animate({
		            scrollTop: target.offset().top - 110
		        }, 1000);

		    } 
		    
		});
        

        $('.mob-menu__link').on('click', function(event) {
		    var target = $(this.getAttribute('href'));
		    if( target.length ) {
		        event.preventDefault();
		        $('html, body').stop().animate({
		            scrollTop: target.offset().top - 100
		        }, 1000);
		        $('.fixed-menu').removeClass('open');
		    }
        });

        // form validation
        $("#subscribe-top").validate({
			rules: {
				subscribe_top__email: {
					  required: true,
					  email: true
				 },
			},
			messages: {
				subscribe_top__email: {
				 required: "",
				 email: ""
			   },
			   
			 },
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					   url: "/mail.php",
					data: $(form).serialize(),
					success: function () {
                        $(form).trigger("reset");
					}
				});
				return false; // required to block normal submit since you used ajax
			}
        });
        
        $("#subscribe-bot").validate({
			rules: {
				subscribe_bot__email: {
					  required: true,
					  email: true
				 },
			},
			messages: {
				subscribe_bot__email: {
				 required: "",
				 email: ""
			   },
			   
			 },
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					   url: "/mail.php",
					data: $(form).serialize(),
					success: function () {
                        $(form).trigger("reset");
					}
				});
				return false; // required to block normal submit since you used ajax
			}
		});

        
       
	});

});

// sticky header
var $window = $(window);

// function getHeight(){
//     return $('.promo').outerHeight();
// }

$window.on('scroll', function () {
    if ($window.scrollTop() > 1) {
        $('.header').addClass('sticky');
    } else {
        $('.header').removeClass('sticky');
    }
});

