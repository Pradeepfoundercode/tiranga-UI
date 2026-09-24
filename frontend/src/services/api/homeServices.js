import api from "./axiosInstance";

export const getResults = (gameId, limit, offset) => {
  return api.get("/results", {
    params: {
      game_id: gameId,
      limit,
      offset,
    },
  });
};




export const getSlider = () =>{
    return api.get("/slider_image_view")
}
export const getGameCategory = () =>{
    return api.get("/game-categories")
}





