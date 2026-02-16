const inital ={isFav:false}
export default function FavReducer(state=inital,action){
    switch(action.type){
        case"set_fav":
        return{
            ...state,
            isFav:action.payload
        }
        default:
            return state
    }
}