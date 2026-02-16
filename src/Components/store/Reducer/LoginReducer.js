const inital ={isLogin:false}
export default function LoginReducer(state=inital,action){
    switch(action.type){
        case"set_login":
        return{
            ...state,
            isLogin:action.payload
        }
        default:
            return state
    }
}