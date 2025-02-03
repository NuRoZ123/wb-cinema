import {defineStore} from "pinia";
import xhr from "@/utils/xhr.ts";

export const UtilisateurStore = defineStore("UtilisateurStore", {
    state: () => ({
        isConnected: localStorage.getItem("token") !== null,
    }),
    actions: {
        login(email, password, onSuccess, onFailed) {
            xhr.post("/auth/login", {email, password}).then(response => {
                if(response.code === 200) {
                    localStorage.setItem("token", JSON.parse(response.response).token);
                    this.isConnected = true;
                    onSuccess();
                } else {
                    onFailed();
                }
            });
        },

        register(email, password, onSuccess, onFailed) {
            xhr.post("/auth/register", {email, password}).then(response => {
                if(response.code === 201) {
                    onSuccess();
                } else {
                    onFailed();
                }
            });
        }
    },
});