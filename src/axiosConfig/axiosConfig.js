import axios from 'axios'
import store from '../Components/store/store'
import setLoader from '../Components/store/Actions/setLoader'

const axiosConfig = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/popular?api_key=9ad18e366fd18f87f43bb71cd4839939&", 
});
  
    axiosConfig.interceptors.request.use(function(config){
        store.dispatch(setLoader(true))
        return(config)
    },function(error){
        return(error)
    })
    axiosConfig.interceptors.response.use(function(responce){
    store.dispatch(setLoader(false))
    return(responce)
},function(error){
return Promise.reject(error);
}
    )
  


export default axiosConfig