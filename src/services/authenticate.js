import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const authenticateHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const authenticateBody = {
    loginName: 'amohelangt@chaperone.co.ls',
    password: '1'
}
const baseUrl = 'https://localhost:5011/piecejob/api';

const createRequest = (url) => ({ url, headers: authenticateHeaders, body: authenticateBody});

export const authenticateAPI = createApi({
    reducerPath: 'authenticateAPI',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => createRequest(`Auth/authenticate`),
        })
    })
});
export const {
    useGetUserQuery,
} = authenticateAPI; 


