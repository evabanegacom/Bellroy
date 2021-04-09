import axios from "axios";
const setResult = (payload) => ({ type: "SET_RESULT", payload });

const submitResult =
  "https://recruitbot.trikeapps.com/api/v1/roles/bellroy-tech-team-recruit/big_five_profile_submissions.";

export const userResult = (userInfo) => async (dispatch) => {
  await fetch(submitResult, {
    method: "POST",
    // mode: 'no-cors',
    headers: {
      'Accept': 'application/json',
      "Content-type": "application/json; charset=UTF-8",
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Origin" : "*", 
    },
    body: JSON.stringify(userInfo)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch(setResult(data))})
    .catch(error => {
      console.log(error)
    });
};

// export const userResult = (userInfo) => async (dispatch) => {
//   await axios
//     .post(submitResult, {
//       headers: {
//         "Content-Type": "application/json",
//         "Access-Control-Allow-Origin": "*",

//       },
//       body: {
//         userInfo
//       },
//     })
//     .then((data) => {
//       console.log(data);
//       dispatch(setResult(data));
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
