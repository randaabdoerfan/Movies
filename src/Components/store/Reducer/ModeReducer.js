const inital ={mode :"light"}
export default function ModeReducer(state=inital,action){
    switch(action.type){
        case"set_mode":
        return{
            ...state,
            mode:action.payload
        }
        default:
            return state
    }
}