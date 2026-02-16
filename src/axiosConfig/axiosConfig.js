import axios from 'axios'
import React from 'react'
import store from '../Components/store/store'
import setLoader from '../Components/store/Actions/setLoader'

function axiosConfig (){
  
    axios.interceptors.request.use(function(config){
        store.dispatch(setLoader(true))
        return(config)
    },function(error){
        return(error)
    })
    axios.interceptors.response.use(function(responce){
    store.dispatch(setLoader(false))
    return(responce)
},function(error){
return Promise.reject(error);
}
    )
  
}

export default axiosConfig