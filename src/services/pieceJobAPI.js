import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const piecejobApiHeaders = {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFtb2hlbGFuZ3RAY2hhcGVyb25lLmNvLmxzIiwibmJmIjoxNjQwNTkzODUzLCJleHAiOjE2NDA2MDgyNTMsImlhdCI6MTY0MDU5Mzg1M30.Cyd0j0qLTDc1ShHmkx0fl2bO_qoaE0OJVfbFhoHi-0k', 
    'Content-Type': 'application/x-www-form-urlencoded'
}
const baseUrl = 'https://localhost:5011/piecejob/api';

const createRequest = (url) => ({ url, headers: piecejobApiHeaders});

export const piecejobAPI = createApi({
    reducerPath: 'piecejobAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getServices: builder.query({
            query: (count) => createRequest(`/AService/GetServices?limit=${count}`)
        })
    })
});
export const {
    useGetServicesQuery,
} = piecejobAPI; 
// var axios = require('axios');
// var qs = require('qs');
// var data = qs.stringify({
//   'name': 'Holly',
//   'text': 'my new comment' 
// });
// var config = {
//   method: 'get',
//   url: 'https://localhost:5011/piecejob/api/AService/GetServices?limit=10',
//   headers: { 
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFtb2hlbGFuZ3RAY2hhcGVyb25lLmNvLmxzIiwibmJmIjoxNjQwNTkzODUzLCJleHAiOjE2NDA2MDgyNTMsImlhdCI6MTY0MDU5Mzg1M30.Cyd0j0qLTDc1ShHmkx0fl2bO_qoaE0OJVfbFhoHi-0k', 
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });