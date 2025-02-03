const xhr = {
    post: (url, data) => {
        return new Promise((resolve, reject) => {
            const xhRequest = new XMLHttpRequest();
            xhRequest.open('POST', "http://localhost:3000" + url);
            xhRequest.setRequestHeader('Content-Type', 'application/json');
            xhRequest.onload = () => {
                if (xhRequest.responseText === "Created" || JSON.parse(xhRequest.responseText).error) {
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