
import Home from 'routes/Home/index';


export default {
    '/home': {
        component: Home
    },
    '*':{
        component: Home
    }
};
