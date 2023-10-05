import axios from "axios";

const instance = axios.create({

    baseURL: "http://localhost:8080/hamsterd/",
});

export const addMember = async (formData) => {
 return await instance.post("member", formData);

 console.log(formData);

};