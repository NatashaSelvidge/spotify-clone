export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,

  //REMOVE AFTER DEVELOPMENT
  token:
    "BQA1v1iadscsk_NzJuy7hRqMlB7cetFqrZ852qMQBdrYZ_fZ-RiAlexAAJuxmfJkxjyRJAOkXuhcO00Qwu6uXjU0PePMup1dINrez2iz5MPj90D42FDqm8Bzvpe6QULZag19ZC50CoWj7FkxnHuDa0l-Nul87Xt2wA",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
