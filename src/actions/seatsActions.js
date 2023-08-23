import axios from "axios";
import { GET_SEATS, GET_TREES_BY_PERIOD_AND_TERRAIN, SAVE_PERIODS_AND_TERRAINS, SELECT_PERIOD, SELECT_TERRAIN } from "./types";

const requestConfig = {
    withCredentials: true
}

export const getSeats = (data) => async dispatch => {
    const URI = `https://seats-backend.onrender.com/api/seats/search`;
    
    const res = await axios.post(URI, data, requestConfig);
    dispatch({
      type: GET_SEATS,
      payload : res.data
    })

}

export const selectPeriod = (data) => async dispatch => {
    dispatch({
        type: SELECT_PERIOD,
        payload: data
    })
}

export const selectTerrain = (data) => async dispatch => {
    dispatch({
        type: SELECT_TERRAIN,
        payload: data
    })
}

export const savePeriodsAndTerrains = (data) => async dispatch => {
    dispatch({
        type: SAVE_PERIODS_AND_TERRAINS,
        payload: data
    })
}

export const getTreesByPeriodAndTerrain = (data) => async dispatch => {

    const URI = `https://seats-backend.onrender.com/api/seats/search`;
    console.log('data RQ ', data);
    try {
        const res = await axios.post(URI, data, requestConfig);
        console.log('res.data getTreesByPeriodAndTerrain', res.data);
        const { trees } = res.data.data;
        console.log('variable trees ', trees);
        data["trees"] = trees;
    } catch (error) {
        console.log('error in getTreesByPeriodAndTerrain ', error);
    }

    
    
    dispatch({
        type: GET_TREES_BY_PERIOD_AND_TERRAIN,
        payload: data
    })
}