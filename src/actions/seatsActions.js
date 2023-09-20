import axios from "axios";
import { GET_SEATS, GET_TERRAINS_BY_PERIOD, GET_TREES_BY_PERIOD_AND_TERRAIN, GET_TREES_BY_PLANTID, SAVE_PERIODS_AND_TERRAINS, SELECT_PERIOD, SELECT_TERRAIN } from "./types";

const requestConfig = {
    withCredentials: true
}

export const getSeats = (data) => async dispatch => {
    const URI = `https://seats-backend.onrender.com/api/seats/search`;

    const res = await axios.post(URI, data, requestConfig);
    dispatch({
        type: GET_SEATS,
        payload: res.data
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
    //const URI = `http://localhost:5000/api/seats/search`;
    console.log('data RQ ', data);
    try {
        const res = await axios.post(URI, data, requestConfig);
        console.log('res.data getTreesByPeriodAndTerrain', res.data);
        const { rows } = res.data.data;
        console.log('variable rows ', rows);
        data["rows"] = rows;
    } catch (error) {
        console.log('error in getTreesByPeriodAndTerrain ', error);
    }

    dispatch({
        type: GET_TREES_BY_PERIOD_AND_TERRAIN,
        payload: data
    })
}

export const getTreesByPlantId = (id) => async dispatch => {

    //const search = "http://localhost:5000/api/seats/search";
    const search = "https://seats-backend.onrender.com/api/seats/search";

    const URI = `${search}/${id}`;
    console.log('getTreesByPlantId dataRQ -> ', id);
    console.log('URI -> ', URI);
    try {
        const response = await axios.get(URI);
        console.log('response.data -> ', response.data);
        dispatch({
            type: GET_TREES_BY_PLANTID,
            payload: response.data.data
        })
    } catch (error) {
        console.error('error consultando ', URI, 'error -> ', error);
        dispatch({
            type: GET_TREES_BY_PLANTID,
            payload: []
        })
    }
}

export const getTerrainsByPeriod = (data) => async dispatch => {

    const URI = `https://seats-backend.onrender.com/api/terrains/search`;
    //const URI = `http://localhost:5000/api/terrains/search`;
    console.log('getTerrainsByPeriod -> data RQ ', data);
    try {
        const res = await axios.post(URI, data, requestConfig);
        console.log('res.data getTerrainsByPeriod', res.data);
        dispatch({
            type: GET_TERRAINS_BY_PERIOD,
            payload: res.data.data
        });
    } catch (error) {
        console.log('error in getTerrainsByPeriod ', error);
        dispatch({
            type: GET_TERRAINS_BY_PERIOD,
            payload: []
        })
    }

}