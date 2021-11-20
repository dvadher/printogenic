$(document).ready(function () {
    /*====================== js for sticky and mobile menu ====================== */
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function () {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function(){
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top',navHeight+"px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top',0);
        }
    });
    $('.jb_front_nav_close button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    $(".password-icon").click(function(){
        if (password_field.type === "password") {
           password_field.type = "text";
           $('.password-toggle').addClass('flaticon-eye');
           $('.password-toggle').removeClass('flaticon-invisible');
        } else {
           password_field.type = "password";
           $('.password-toggle').addClass('flaticon-invisible');
           $('.password-toggle').removeClass('flaticon-eye');
        }
     });
     
     
    /*====================== js for sticky and mobile menu ====================== */
    // bootstrap time-picker start
    var defaults = {
        calendarWeeks: true,
        showClear: true,
        showClose: true,
        allowInputToggle: true,
        useCurrent: false,
        ignoreReadonly: true,
        // minDate: new Date(),
        toolbarPlacement: 'top',
        locale: 'nl',
        icons: {
            time: 'fa fa-clock-o',
            date: 'fa fa-calendar',
            up: 'fa fa-angle-up',
            down: 'fa fa-angle-down',
            previous: 'fa fa-angle-left',
            next: 'fa fa-angle-right',
            today: 'fa fa-dot-circle-o',
            clear: 'fa fa-trash',
            close: 'fa fa-times'
        }
    };
    
    var optionsDatetime = $.extend({}, defaults, {format:'DD-MM-YYYY HH:mm'});
    var optionsDate = $.extend({}, defaults, {format:'DD-MM-YYYY'});
    var optionsTime = $.extend({}, defaults, {format:'HH:mm'});
    var optionYearMonth = $.extend({},defaults, {format: 'MM-YYYY'});
    
    $('.datepicker').datetimepicker(optionsDate);
    $('.timepicker').datetimepicker(optionsTime);
    $('.monthyearpicker').datetimepicker(optionYearMonth);

    $('.datetimepicker').datetimepicker(optionsDatetime);
    //bootstrap time picker end

    // select2 dropdown set in all form control and placeholder
    var placeholder = $('.form-control-select2').data('placeholder');    
    
    $('.form-control-select2').select2({
        placeholder :placeholder,
    });
});


     /*====================== js for scrollTop ====================== */
        var btn = $('#button');

            $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
               btn.addClass('show');
            } else {
               btn.removeClass('show');
            }
            });

            btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '500');
            });
    /*====================== js for scrollTop ====================== */
    
    /*====================== web slider ====================== */
    $('#home-slider').owlCarousel( {
        loop: true,
        center: true,
        items: 2,
        autoplay: true,
        dots:true,
      nav:true,
        autoplayTimeout: 3000,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });
    
    $('#team-slider').owlCarousel( {
        loop: true,
        items: 2,
        autoplay: true,
        dots:true,
        margin:10,
        nav:true,
        autoplayTimeout: 3000,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 2
            }
        }
    });
    /*====================== web slider ====================== */
    
    /*====================== custom video ====================== */
    // video icon poster frame click event
    $(document).on('click','.js-videoPoster',function(ev) {
        ev.preventDefault();
        var $poster = $(this);
        var $wrapper = $poster.closest('.js-videoWrapper');
        videoPlay($wrapper);
        });

        // play the targeted video (and hide the poster frame)
        function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        // hide poster
        $wrapper.addClass('videoWrapperActive');
        // add iframe src in, starting the video
        $iframe.attr('src',src);
        }

        // stop the targeted/all videos (and re-instate the poster frames)
        function videoStop($wrapper) {
        // if we're stopping all videos on page
        if (!$wrapper) {
           var $wrapper = $('.js-videoWrapper');
           var $iframe = $('.js-videoIframe');
        // if we're stopping a particular video
        } else {
           var $iframe = $wrapper.find('.js-videoIframe');
        }
        // reveal poster
        $wrapper.removeClass('videoWrapperActive');
        // remove youtube link, stopping the video from playing in the background
        $iframe.attr('src','');
        }
    /*====================== custom video ====================== */
    
});/*====================== all js end ====================== */

