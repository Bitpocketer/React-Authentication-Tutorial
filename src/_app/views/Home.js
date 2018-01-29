var React = require('react');
var ReactDom = require('react-dom');
var Home = React.createClass({
    render: function () {
        return (
            <section>
            <div className="Menu">
            <div className="items-list">
                <ul>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>About</li>
                </ul>
            </div>
           
            </div>
             <div className="left-sidebar">
                <ul>
                    <li>Account</li>
                    <li>Profile</li>
                    <li>Bots</li>
                    <li>Setting</li>
                </ul>
            </div>
            </section>
        );
    }
});

module.exports=Home;