import axios from "axios";

let axiosInstance = axios.create({
    baseURL : 'https://jsonplaceholder.typicode.com'
});

class APIClient<T>{
    endPoint : string;
    constructor(endpoint : string){
        this.endPoint = endpoint;
    }

    getAll = () => {
       return axiosInstance.get<T[]>(this.endPoint).then(res => res.data);
    }

    post = (data : T) => {
        return axiosInstance.post<T>(this.endPoint, data).then(res => res.data);
    }
    
}

export default APIClient;

