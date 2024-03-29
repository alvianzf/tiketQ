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

export const getFlight = async (to, from, date) :Promise<Array> => {
    let result: Object = [];

    await data.post('/getflights-json', {to, from, date})
        .then(res => result =res.data)
        .catch(err => result = err);

    return result
}

export const getPrice = async (params: Object) :Promise<Array> => {
    let result: Object = [];

    await data.post('/getprice-json', params)
        .then(res => result =res.data)
        .catch(err => result = err);

    return result
}

export const postBooking = async (params: Object) :Promise<Array> => {
    let result: Object = [];

    await data.post('/postbooking-json', params)
        .then(res => result =res.data)
        .catch(err => result = err);

    return result
}

export const getBooking = async (params: Object) :Promise<Array> => {
    let result: Object = [];

    await data.post('/getstatusbooking-json', params)
        .then(res => result =res.data)
        .catch(err => result = err);

    return result
}
