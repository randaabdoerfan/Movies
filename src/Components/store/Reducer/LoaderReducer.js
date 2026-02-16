const inital={isLoading:false}

export default function LoaderReducer(state=inital,action){
  switch(action.type){
    case "setLoader":
        return{
            ...state,
            isLoading:action.payload
        }
        default:
           return state
  }    
}
