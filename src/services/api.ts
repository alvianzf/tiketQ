import axios from 'axios'

const data = axios.create({
    baseURL: "http://143.198.208.181:3000/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export const getArea = async () : Promise<Array> => {
    let result: Object[] = [];

    await data.get('/getcodearea-json')
        .then(res => {
            result = res.data
        })
        .catch(err => result = err);

    return result

}

