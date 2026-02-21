const initial ={
    isLogin: localStorage.getItem("isLoggedIn") === "true" ? true : false
}
export default function LoginReducer(state=initial,action){
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