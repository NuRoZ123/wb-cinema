const xhr = {
    post: (url: String, data: Object, token?: String) => {
        return new Promise((resolve, reject) => {
            const xhRequest = new XMLHttpRequest();
            xhRequest.open('POST', import.meta.env.VITE_API_URL + url);
            xhRequest.setRequestHeader('Content-Type', 'application/json');
            xhRequest.setRequestHeader("Access-Control-Allow-Origin", "*");

            if (token) {
                xhRequest.setRequestHeader('Authorization', `Bearer ${token}`);
            }

            xhRequest.onload = () => {
                if (xhRequest.responseText === "Created" || JSON.parse(xhRequest.responseText).error) {
                    return reject({response: xhRequest.responseText, code: xhRequest.status});
                }
                return resolve({response: xhRequest.responseText, code: xhRequest.status});
            }
            xhRequest.onerror = () => reject({response: xhRequest.responseText, code: xhRequest.status});
            xhRequest.send(JSON.stringify(data));
        })
    },
    get: (url: String, token?: String) => {
        return new Promise((resolve, reject) => {
            const xhRequest = new XMLHttpRequest();
            xhRequest.open('GET', import.meta.env.VITE_API_URL + url);
            xhRequest.setRequestHeader("Access-Control-Allow-Origin", "*");

            if (token) {
                xhRequest.setRequestHeader('Authorization', `Bearer ${token}`);
            }

            xhRequest.onload = () => {
                if (xhRequest.responseText === "Not found" || JSON.parse(xhRequest.responseText).error) {
                    return reject({response: xhRequest.responseText, code: xhRequest.status});
                }
                return resolve({response: xhRequest.responseText, code: xhRequest.status});
            }
            xhRequest.onerror = () => reject({response: xhRequest.responseText, code: xhRequest.status});
            xhRequest.send();
        })
    },
    delete: (url: String, token?: String) => {
        return new Promise((resolve, reject) => {
            const xhRequest = new XMLHttpRequest();
            xhRequest.open('DELETE', import.meta.env.VITE_API_URL + url);

            if (token) {
                xhRequest.setRequestHeader('Authorization', `Bearer ${token}`);
            }

            xhRequest.onload = () => {
                if (xhRequest.responseText === "Not found" || JSON.parse(xhRequest.responseText).error) {
                    return reject({response: xhRequest.responseText, code: xhRequest.status});
                }
                return resolve({response: xhRequest.responseText, code: xhRequest.status});
            }
            xhRequest.onerror = () => reject({response: xhRequest.responseText, code: xhRequest.status});
            xhRequest.send();
        })
    },
    put: (url: String, data: Object, token?: String) => {
        return new Promise((resolve, reject) => {
            const xhRequest = new XMLHttpRequest();
            xhRequest.open('PUT', import.meta.env.VITE_API_URL + url);
            xhRequest.setRequestHeader('Content-Type', 'application/json');
            xhRequest.setRequestHeader("Access-Control-Allow-Origin", "*");

            if (token) {
                xhRequest.setRequestHeader('Authorization', `Bearer ${token}`);
            }

            xhRequest.onload = () => {
                if (xhRequest.responseText === "Not found" || JSON.parse(xhRequest.responseText).error) {
                    return reject({response: xhRequest.responseText, code: xhRequest.status});
                }
                return resolve({response: xhRequest.responseText, code: xhRequest.status});
            }
            xhRequest.onerror = () => reject({response: xhRequest.responseText, code: xhRequest.status});
            xhRequest.send(JSON.stringify(data));
        })
    }
};

export default xhr;