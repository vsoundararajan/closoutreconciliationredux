var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
var Home = require('./components/Home');
var Main = require('./components/Main');
var Signin = require('./components/Signin');
var actions = require('./actions/actions');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!react-datepicker/dist/react-datepicker.css');
$(document).foundation();
var store = require('configureStore').configure();

store.subscribe( () => {
    var state = store.getState();
    console.log('New state', store.getState());
});

store.dispatch(actions.setBeginningtil(200.00));

console.log(store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <Route path="signin" component={Signin}/>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
);
