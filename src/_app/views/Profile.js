var React = require('React');
var Profile=React.createClass({
    render:function(){
        return(
            <div>
                <div className="Header">
                <h4 id="profilename">user name</h4>
                 </div>
                 <div className="Left-Menubar">
                 <ul>
                     <li>My playlist</li>
                     <li>My images</li>
                     <li>My videos</li>
                     <li>My projects</li>
                 </ul>
                 </div>
                 <div id="About me">
                 <p>Hello welcome to my profile today i will teach you about authentication with nodejs
                     I'm jawad, technology enthusiast, I'm having diverse skills under my command
                 </p>
                 </div>

            </div>
        )
    }
})
module.exports=Profile;