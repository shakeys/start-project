import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  {Home}  from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { authProvider } from '../authProvider';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { getUserDetails, getUserPhoto,getUserEmail, getAllUsers } from '../services/GraphService';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            user: null,
        };

        var user = authProvider.getAccount();

        if (user) {

            this.getMyProfile();

        }
    }

    async getAccessToken() {
        var accessToken = await authProvider.getAccessToken();
        return accessToken;
    }

    async login() {

        await authProvider.login();

        await this.getMyProfile();
    }

    async getMyProfile() {

        try {

            var accessToken = await authProvider.getAccessToken();

            if (accessToken) {
                this.setState({
                    isLoading: false,
                    user: await getUserDetails("me", accessToken),

                });
            }
        }
        catch (err) {
            console.error(err);
        }
    }

    async getMyPhoto(accessToken) {
        return await getUserPhoto("me", accessToken).then(
            function (response) {
                if (response.ok) {
                    return response.blob();
                }
            })
            .then(
                function (photoBlob) {
                    if (photoBlob) {
                        return URL.createObjectURL(photoBlob);
                    }
                });
    }

    async getMyEmail(accessToken) {
        return await getUserEmail("me", accessToken).then(
            function (response) {
                if (response.ok) {
                    console.log(response)
                }
            })
    }

    render() {
        return (
            <AzureAD provider={authProvider}>
                {
                    ({ logout, authenticationState }) => {
                        return (
                            <Layout>
                                {
                                    <React.Fragment>
                                        <Route exact path="/"
                                            render={(props) =>
                                                <Home {...props}
                                                    state={this.state}
                                                    isAuthenticated={authenticationState === AuthenticationState.Authenticated}
                                                    authButtonMethod={authenticationState === AuthenticationState.Authenticated ?
                                                        logout.bind(this) : this.login.bind(this)} />
                                            } />
                                        <Route path='/counter' component={Counter} />
                                        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                                    </React.Fragment>
                                }
                            </Layout>
                        );
                    }
                }
            </AzureAD>
        );
    }
}

