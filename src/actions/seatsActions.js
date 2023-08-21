import axios from "axios";

const requestConfig = {
    withCredentials: true
}

export const getSeats = (data) => async dispatch => {
    console.log('getSeats action activado ! ', data);
    //const URI = `https://seats-backend.onrender.com/api/seats/search`;
    const URI = `https://seats-backend.onrender.com/api/seats/search`;
    
    const res = await axios.post(URI, data, requestConfig);
    console.log('res.data ', res.data);
    dispatch({
      type: 'GET_SEATS',
      payload : res.data
    })

}

export const selectPeriod = (data) => async dispatch => {
    console.log('selectPeriod action activado ! ', data);
    dispatch({
        type: 'SELECT_PERIOD',
        payload: data
    })
}

export const selectTerrain = (data) => async dispatch => {
    console.log('selectTerrain activado ! ', data);
    dispatch({
        type: 'SELECT_TERRAIN',
        payload: data
    })
}

export const savePeriodsAndTerrains = (data) => async dispatch => {
    console.log('savePeriodsAndTerrains activado ', data);
    dispatch({
        type: 'SAVE_PERIODS_AND_TERRAINS',
        payload: data
    })
}