﻿var graph = require('@microsoft/microsoft-graph-client');

function getAuthenticatedClient(accessToken) {
    // Initialize Graph client
    const client = graph.Client.init({
        // Use the provided access token to authenticate
        // requests
        authProvider: (done) => {
            done(null, accessToken.accessToken);
        }
    });

    return client;
}

export async function getUserDetails(userId, accessToken) {

    const client = getAuthenticatedClient(accessToken);

    const user = await client.api('/' + userId).get();

    return user;
}

export async function getUserPhoto(userId, accessToken) {

    var url = 'https://graph.microsoft.com/v1.0/' + userId + '/photo/$value';

    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken.accessToken,
            'Content-Type': 'application/json',
        },
    });

}

export async function getUserEmail(accessToken) {

    const client = graph.Client.init({
        authProvider: (done) => {
            done(null, accessToken.accessToken);
        }
    });

    let res = await client.api('/me/messages').get();

    return res;

}

export async function getCalendarEvents(accessToken) {

    const client = graph.Client.init({
        authProvider: (done) => {
            done(null, accessToken.accessToken);
        }
    });

    let res = await client.api('/me/events')
	.select('subject,body,bodyPreview,organizer,attendees,start,end,location')
	.get();
    return res;

}


export async function getTasks(accessToken) {

    const client = graph.Client.init({
        authProvider: (done) => {
            done(null, accessToken.accessToken);
        }
    });

    let res = await client.api('/me/todo/lists/AAMkAGI1Zjc1YzE0LWY0MjYtNDkyMi1hNTM4LTU2Y2EyMzExYTg1NwAuAAAAAAAsbEuO0TD5RIZgo2L9lJaRAQCCpd7iy_UDQL8pDji2Al0oAAAAAAESAAA=/tasks')
	.version('beta')
	.get();
    return res;

}

export async function getAllUsers(accessToken) {
    var url = 'https://graph.microsoft.com/v1.0/users'

    return fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + accessToken.accessToken,
            'Content-Type': 'application/json',
        },
    });

}