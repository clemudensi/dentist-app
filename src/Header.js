import React, { Component } from 'react';
import {auth, googleAuthProvider} from './services/firebase';


class Header extends Component {

  constructor() {
        super();

        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogin() {
        googleAuthProvider.setCustomParameters({
            'hd': 'meltwater.org'
        });

        auth.signInWithPopup(googleAuthProvider)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    handleLogout() {
        console.log("logout");
        auth.signOut()
            .then(() => {
                this.props.logout();
            }).catch((err) => {
                console.error(err)
        });
    }
  render() {
    let user = this.props.user;

    const Login = () => {return <div className="navbar-right"><button  onClick={this.handleLogin}  className="btn btn-default navbar-btn">Login</button></div>};
      const Logout = () => {
          let inlineStyle = {
              width: '40%'
          };
          return (
              <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Hi {user.displayName}</a></li>
                  <li><a href="#"><img src={user.photoURL} className="img-circle" style={inlineStyle}></img></a></li>
                  <li><button onClick={this.handleLogout} className="btn btn-default navbar-btn">Logout</button></li>
              </ul>
          );
      };


    return(
      <header>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/"><h1>Kweku's Clinic</h1></a>
            </div>
            {user ? <Logout /> : <Login />}
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
