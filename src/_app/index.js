var React=require('react');
var ReactDom=require('react-dom');
var Form=require('./views/Form')
var Home=require('./views/home');
// var profile=require('./views/Profile');
require('./assets/style.css')
import{HashRouter as Router,Route,Link} from 'react-router-dom';
var MainComponent=React.createClass({
    render:function(){
        return(
            <Router>
                <div>
                    <Route  exact path={'/'} component={Form}></Route>
                    <Route path={'/login'} component={Form}></Route>
                    <Route path={'/profile'} component={Home}></Route>
               
                </div>
            </Router>
        )
    }
})
ReactDom.render(<MainComponent/>,document.getElementById('App-Root'));