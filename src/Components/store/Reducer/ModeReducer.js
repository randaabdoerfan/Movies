
const savedMode = localStorage.getItem("mode");
const inital = {mode : savedMode ? savedMode :"light"}
export default function ModeReducer(state=inital,action){
    switch(action.type){
        case"set_mode":
        localStorage.setItem("mode",action.payload)
        return{
            ...state,
            mode:action.payload
        }
        default:
            return state
    }
}