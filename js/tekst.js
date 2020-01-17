var readMore = jQuery(document).ready(function () {
            $(".toggle_lesMer").click(function () {
                var elem = $(this).text();
                if (elem == "Les Mer") {
                    //Stuff to do when btn is in the read more state
                    $(this).text("Les Mindre");
                    $(this).parent().find('.les_mer').show();
                } else {
                    //Stuff to do when btn is in the read less state
                    $(this).text("Les Mer");
                    $(this).parent().find('.les_mer').hide();
                }
            });
        });
