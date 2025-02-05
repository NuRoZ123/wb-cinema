const xhr = {
    post: (url: String, data: Object, token?: String) => {
        return new Promise((resolve, reject) => {
            const xhRequest = new XMLHttpRequest();
            xhRequest.open('POST', "http://localhost:3000" + url);
            xhRequest.setRequestHeader('Content-Type', 'application/json');

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
            xhRequest.open('GET', "http://localhost:3000" + url);

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
    }
};

export default xhr;