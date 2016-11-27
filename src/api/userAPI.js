import 'whatwg-fetch';

export function getUser() {
    return get('users');
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(responce) {
    return responce.json();
}

function onError(error) {
    console.log(error); // eslint-disable-line no-console
}
