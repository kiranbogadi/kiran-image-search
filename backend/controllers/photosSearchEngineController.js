import axios from "axios";
const SECRET_CLIENT_ID = "S-JnnsoxfX1irbwPxzd2NqqObHl5h4cURCrkr-Fp_t0";

/**
 * Express api to fetch images from unsplash
 * @param {*} req 
 * @param {*} res 
 */
export const getImagesByQuery = (req, res) => {
  const { query } = req.params;

  axios
    .get(
      `https://api.unsplash.com/search/photos?client_id=${SECRET_CLIENT_ID}&query=${query}`
    )
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      res.json(error);
    });
};
