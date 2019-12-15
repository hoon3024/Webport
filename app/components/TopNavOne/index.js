import template from './template.html!text';
import style from './style.css!css';

export default {
    template,
 
    ready() {

    'use strict'
        var vm = this;

        vm.navigator();
        vm.scrollspy();
        vm.toggleNav();




    },
    data() {
        return {

        }
    },
    methods: {


        navigator() {
            
            $('.link-scroll').on('click', function(e) {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 1000);
                e.preventDefault();
            });
        },

        scrollspy() {
            
            $('body').scrollspy({
                target: '#navbarSupportedContent',
                offset: 80
            });
        },
        toggleNav() {

            
            $('.navbar .navbar-toggler').on('click', function() {
                $(this).toggleClass('active');
            });
        },
        themeColor() {

            var stylesheet = $('link#theme-stylesheet');
            $("<link id='new-stylesheet' rel='stylesheet'>").insertAfter(stylesheet);
            var alternateColour = $('link#new-stylesheet');

            if ($.cookie("theme_csspath")) {
                alternateColour.attr("href", $.cookie("theme_csspath"));
            }

            $("#colour").change(function() {

                if ($(this).val() !== '') {

                    var theme_csspath = 'css/style.' + $(this).val() + '.css';

                    alternateColour.attr("href", theme_csspath);

                    $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

                }

                return false;
            });

        }

    },
    computed: {},
    components: {}

}