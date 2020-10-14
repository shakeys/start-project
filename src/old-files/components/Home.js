import React, { Component, useEffect } from 'react';
import {
    Button
} from 'reactstrap';
import '../styles/profile-page.css';
import { authProvider } from '../authProvider';
import { getAllUsers,getUserEmail} from '../services/GraphService';
export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            usersList: []
        }
    }

    componentDidMount() {

        var user = authProvider.getAccount();

        if (user) {

            this.renderUsers()

        }
       
        
        
    }

    async renderUsers () {
        const accessToken = await authProvider.getAccessToken(); 
        var users = getAllUsers(accessToken)
        .then((response) => response.json())
        .then((responseJSON) => {
            this.setState({usersList: responseJSON.value})
            this.getEmailPerUser("AdeleV@rebardemo.onmicrosoft.com")
        });
    }

    async getEmailPerUser(userId) {
        const accessToken = await authProvider.getAccessToken(); 
        var emails = getUserEmail(userId,accessToken)
        .then((response) => response.json())
        .then((responseJSON) => {
           console.log(responseJSON)
        });
      //  return '<li>sasa</li>'
    }

     renderUserProfile(props) {
        //console.log(this.state.usersList)
        return (
            <div className="row">
                <div className="col-md-10">
                    <div className="profile-head">
                        <h5>
                           Welcome Back, {props.state.user.displayName}
                        </h5>
                        <h6>
                            {props.state.user.jobTitle}
                        </h6>
                    </div>
                    
                    <div style={{marginTop:20}} className="row">
                        <div className="col-md-10">
                            <ul style={{listStyle:"none"}}>
                                {this.state.usersList.map((user, index) => (
                                    <li key={index} style={{marginTop:5,marginBottom: 5}}>
                                        <div style={{paddingLeft:10,border:'1px solid black'}}>
                                            {user.displayName} - {user.jobTitle ? user.jobTitle : "Me"}
                                            <div style={{fontSize:10,marginTop:5,marginBottom: 5}}>
                                                <p>User Id: <i>{user.id}</i></p>
                                                <p style={{marginTop:-15}}>Email: {user.mail}</p>
                                                <p style={{marginTop:-15}}>Emails:</p>
                                            </div>
                                            <div style={{fontSize:9,marginTop:-10,marginBottom: 5}}>
                                                <ul style={{listStyle:"none"}}>
                                                    {/* {this.getEmailPerUser(user.userPrincipalName)} */}
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <Button color="primary" onClick={props.authButtonMethod}>Logout</Button>
                </div>
            </div>
        );
    }

    render() {
        let contents = null;

        if (this.props.isAuthenticated) {
            contents = this.props.state.isLoading
                ? <p className="text-center"><em>... Loading Your Profile ...</em></p>
                : this.renderUserProfile(this.props);
        }

        else {
            contents =
                <div>
                    <h2>Rebar Extractor</h2>
                    <Button color="primary" onClick={this.props.authButtonMethod}>Click here to sign in</Button>
                </div>;
        }

        return (
            <div className="container user-profile">
                {contents}
            </div>
        );
    }
}
