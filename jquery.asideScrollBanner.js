(function(global,$){
    //scrollBanner
    $.fn.asideScrollBanner = $.fn.asideScrollBanner || function(speed){ 
        speed=speed||1000;
        var $this = this;
        var currentPosition = parseInt($(this).css("top"));
        $(window).scroll(function(el){
            console.log('this2',this);
            var position = $(window).scrollTop();
            $($this).stop().animate({"top":position+currentPosition+"px"},speed);
        });
        return this;
    };
})(window,window.jQuery);