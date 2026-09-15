
import api from "./axiosInstance";

export const getResults = (gameId , limit, offset) => {
  return api.get("/results", {
    params: {
      game_id: gameId,
      limit,
      offset,
    },
  });
};


export const getProfile = (id) => {
    return api.get("/profile" ,{
        params : {
            id,
        }
    })
}


export const getBetHistory = (game_id , limit , offset , userid) =>{
    return api.post("/bet_history", {game_id, limit, offset, userid})
}


