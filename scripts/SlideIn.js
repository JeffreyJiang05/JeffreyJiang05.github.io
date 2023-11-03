function add_all_slide_in()
{
    $(".slide-in").each(function(){
        const slideInAt = (window.scrollY + window.innerHeight) - $(this).height() / 2;
        const imgBottom = $(this).offset().top + $(this).height();

        if (slideInAt > $(this).offset().top && $(window).scrollTop() < imgBottom)
        {
            $(this).addClass("slide-in-active")
        }
        else
        {
            $(this).removeClass("slide-in-active")
        }
    })
}

$(function(){
    $(document).on("scroll", debounce(add_all_slide_in))
})