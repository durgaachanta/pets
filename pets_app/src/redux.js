import { createStore } from 'redux';

const initialState = {
  petDetails: [],
};

//action
export const updateReduxStore = (petdata) => ({
  type: "UPDATE_REDUX_INITIAL_LOAD",
  payload: petdata,

});

export const addNewPetData = (newpetdata) => ({
  type: "ADD_NEW_PET_DATA",
  payload: newpetdata,
});

export const deletePet = (index) => ({
  type: "DELETE_PET",
  payload: index,
});

export const editPetData = (petdata, index) => ({
  type: "EDIT_PET_DATA",
  payload: petdata,
  idx: index,
});

export const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "UPDATE_REDUX_INITIAL_LOAD":
      return {
        ...state,
        petDetails: action.payload,
      };
    case "ADD_NEW_PET_DATA":
      return {
        ...state,
        petDetails: [...state.petDetails, action.payload],
      };
    case "DELETE_PET":
      return {
        ...state,
        petDetails: [
          ...state.petDetails.slice(0, action.payload),
          ...state.petDetails.slice(action.payload + 1),
        ]
      };
    case "EDIT_PET_DATA":
      return {
        ...state,
        petDetails: [
          ...state.petDetails.slice(0, action.idx),
          state.petDetails[action.idx] = action.payload,
          ...state.petDetails.slice(action.idx + 1),
        ]
      };
    default:
      return state;
  }

};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);