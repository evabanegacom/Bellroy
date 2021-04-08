const setResult = payload => ({ type: 'SET_RESULT', payload})

const resultError = error => ({ type: 'SET_ERROR', error})

const submitResult = 'https://recruitbot.trikeapps.com/api/v1/roles/bellroy-tech-team-recruit/big_five_profile_submissions'

export const userBooking = userInfo => async dispatch => {
    await fetch(submitResult, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
     },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(data => {
        dispatch(setResult(data));
      })
      .catch((err) =>{
          dispatch(resultError(err))
      })
  };