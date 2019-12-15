import template from './template.html!text';
import style from './style.css!css';

export default {
    template,

    ready() {
        'use strict'
        var vm = this;
        vm.scrolltop();
        vm.scrollup();
    },

    data() {
        return {}
    },
    methods: {
        scrolltop() {
            $('#scrollTop').on('click', function() {

                $('html, body').animate({ scrollTop: 0 }, 800);
            });
        },
        scrollup() {
            var c, currentScrollTop = 0,
                navbar = $('.navbar');
            $(window).on('scroll', function() {


                var a = $(window).scrollTop(),
                    b = navbar.height();

                currentScrollTop = a;
                if (c < currentScrollTop && a > b + b) {
                    navbar.addClass("scrollUp");
                } else if (c > currentScrollTop && !(a <= b)) {
                    navbar.removeClass("scrollUp");
                }
                c = currentScrollTop;


                if ($(window).scrollTop() >= 1600) {
                    $('#scrollTop').addClass('active');
                } else {
                    $('#scrollTop').removeClass('active');
                }
            });
        }


    },
    computed: {},
    components: {}
};