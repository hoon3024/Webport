
/* Vue */
import Vue from 'js/vue';
/* 제이쿼리 */
import $ from 'js/jquery-3.2.1.min';
/* moment */
import moment from 'js/moment';
/* 부트스트랩 */
import popper from 'js/popper.min';
import bs from 'js/bootstrap.min';
/* wow */
import wow from 'js/wow.min';
/* owl */
import owl from 'js/owl.carousel.min';
/* uikit */
import uikit from 'js/uikit.min';
import iconkit from 'js/uikit-icons.min';
/* vuerouter */
import VueRouter from 'js/vue-router.min';
/* app */
import App from 'components/App/index';
/* routes */
import routes from 'routes/index';

Vue.use(VueRouter);



var router = window.router = new VueRouter();

router = router.map(routes);

router.start(App, '#app');


