import axios from "axios";
import {login} from "../../api/login";
const instance = axios.create({

    baseURL: "http://localhost:8080/hamsterd/",
});

export const login = async (formData) => {
 return await instance.post("member", formData);

 console.log(formData);

};