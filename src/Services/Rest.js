import Axios from "axios";
import objectToFormData from 'object-to-formdata';

let cancel;
cancel && cancel();

const options = {
    indices: true,
    nullsAsUndefineds: false,
};

const Rest = {
    // url: `http://localhost:3100`,
    url: `http://dolfox.tk/dofy`,

    CancelToken: Axios.CancelToken,

    cancel() {
        cancel();
    },

    headerData: null,
    user_id: null,
    header: null,

    sendUName(query) {
        return Axios.post(this.url + '/userAccess', query);
    },

    askAi(query) {
        // query = this.getFormData(query);
        return Axios.post(this.url + '/askai', query);
    },

    headerCheck() {
        this.headerData = JSON.parse(localStorage.getItem('headerData'));
        if (this.headerData) {
            this.user_id = this.headerData.user_id;
            this.header = {
                'X-DIGEST': this.headerData ? this.headerData.X_DIGEST : '123',
                'X-DIGEST-V2': this.headerData ? this.headerData.X_DIGEST_V2 : '123'
            };
        } else {
            setTimeout(() => {
                this.headerCheck();
            }, 1000);
        }
    },

    getAllProjects() {
        return Axios.get(this.url + '/getProject');
    },

    getFormData: (data) => {
        let form_data = new FormData();
        for ( let key in data ) {
            form_data.append(key, data[key]);
        }

        return form_data;
    }
}

export default Rest;