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

export const getProfile = (id) => {
  return api.get("/profile", {
    params: {
      id,
    },
  });
};

export const getBetHistory = (game_id, limit, offset, userid) => {
  return api.post("/bet_history", { game_id, limit, offset, userid });
};

export const bets = (game_id, amount, games_no, number, userid) => {
  return api.post("/bets", { game_id, amount, games_no, number, userid });
};


export const getAccountView = (user_id) => {
  return api.get("/Account_view", {
    params: {
      user_id,
    }
  })
}
export const getWinAmount = (userid, game_id, games_no) => {
  return api.get("/win-amount", {
    params: {
      userid,
      game_id,
      games_no
    }
  })
}



