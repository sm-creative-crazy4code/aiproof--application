import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const rapiApi = import.meta.env.VITE_RAPID_API_KEY

export const textApi= createApi({

    reducerPath:'textApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://ai-content-detector1.p.rapidapi.com/',
        prepareHeaders:(headers)=>{
            headers.set('X-RapidAPI-Key',rapiApi);
            headers.set('X-RapidAPI-Host','ai-content-detector1.p.rapidapi.com');


            return headers;
        }
    }),

    endpoints: (builder)=>({
        getTextVerdict:builder.query({
            query:(params)=>`/?text=${params.text}`
        })
    })

})

export const {useLazyGetTextVerdictQuery}=textApi
