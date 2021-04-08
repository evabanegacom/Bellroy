const setResult = (payload) => ({ type: "SET_RESULT", payload });

const submitResult =
  "https://recruitbot.trikeapps.com/api/v1/roles/bellroy-tech-team-recruit/big_five_profile_submissions.";

  export const userResult = (userInfo) => async (dispatch) => {
    await fetch(submitResult, {
      method: "POST",
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
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