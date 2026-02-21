const favSaved = JSON.parse(localStorage.getItem("favList"));

const initialState = {
  favList: favSaved || [],
};

export default function FavReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_FAV":
      const exists = state.favList.find(
        (movie) => movie.id === action.payload.id
      );

      let newList;

      if (exists) {
        newList = state.favList.filter(
          (movie) => movie.id !== action.payload.id
        );
      } else {
        newList = [...state.favList, action.payload];
      }

      localStorage.setItem("favList", JSON.stringify(newList));

      return {
        ...state,
        favList: newList,
      };

    default:
      return state;
  }
}