import template from './template.html!text';
import style from './style.css!css';
import { FooterArea,ScrollTop,Contact} from 'components/index';

export default {
	template,

	ready() {
	'use strict'
		new WOW().init();
	},

	data() {
		return {}
	},
	methods: {

	},
	computed: {},
	components: {
		
		FooterArea,
		ScrollTop,Contact
		
	}
};