var React=require('react');
var ReactDom=require('react-dom');
var BasicForm=React.createClass({
    render:function(){
        return(
            <div>
            <div id="basic-form">
                <h1>Sign up</h1>
                <form id="myform" type="submit" autoComplete="false" onSubmit={this.Submit}>
                    <label htmlFor="Name">Name</label>
                    <input type="text" className="form-control" ref="name" id="Name" placeholder="your name"></input>
                    <label htmlFor="LastName">Last Name</label>
                      <input type="text" className="form-control" ref="lastname" id="LastName" placeholder="your name"></input>
                      <label htmlFor="Email">Email</label>
                      <input type="email" className="form-control" ref="email" id="Email"></input>
                      <label htmlFor="Password">Password:</label>
                        <input type="password" className="form-control" ref="password" id="Password"></input>
                        <input type="Submit" className="form-control" id="submit-button" ></input>
                          
                </form>
            </div>
            <div id="login-form">
               <form id="loginform" type="submit" autoComplete="false" onSubmit={this.login}>
                   <label htmlFor="UserName">UserName</label>
                   <input type="text" className="form-control" ref="loginusername" id="loginusername"></input>
                   <label htmlFor="Password" >Password</label>
                   <input type="password" className="form-control" ref="loginpassword" id="loginpassword"></input>
                   <button type="Submit" className="form-control" id="loginsubmit"  >Login</button>
                   </form>
            </div>
            </div>
        )
    },
    Submit:function(e){
        e.preventDefault();
        var userdata={
            // "FirstName":this.refs.name.value,
            // "LastName":this.refs.lastname.vale,
            "email":this.refs.email.value,
            "password":this.refs.password.value
        }
     $.ajax({
         url:'http://127.0.0.1:5000/signup',
         type:'POST',
        dataType:'json',
         data:userdata,
         success:function(data){
             console.log(data);
         },
         error:function(err){
             console.log(err);
         }
        
     })
    },
    login:function(e){
        e.preventDefault();
        var userdata={
            "UserName":this.refs.loginusername,
            "Password":this.refs.loginpassword
        }
        $.ajax({
            type:"POST",
            dataType:"JSON",
            Data:userdata,
            url:"http://127.0.0.1:5000/login",
            success:function(data){
                console.log(data);
            },
            error:function(err){
                console.log(err);
            }
        })
    }
});
module.exports=BasicForm;