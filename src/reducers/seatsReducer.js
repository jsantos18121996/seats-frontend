import { GET_SEATS, GET_TERRAINS_BY_PERIOD, GET_TREES_BY_PERIOD_AND_TERRAIN, GET_TREES_BY_PLANTID, SELECT_PERIOD, SELECT_TERRAIN } from "../actions/types";

const initialState = {
    periods: null,
    terrains: null,
    period: null,
    terrain: null,
    trees: null,
    data: null,
    treesSelected: null,
    treesByPlantId: null,
    terrainsByPeriod: null,
    isLoading: false,
    isLoadingTreesByPlantId: false,
    isLoadingTerrainsByPeriod: false
}

function getTreesSelected(data) {
    console.log("data ", data);
    const { period, terrain, rows } = data;
    let periodSelected = period;
    let terrainSelected = terrain;

    /*
    trees.forEach(tree => {
        if(tree.period === period) {
            tree.terrains.forEach(t => {
                if(t.terrain === terrain) {
                    treesSelected = t;
                }
            })
        }
    })
    */

    return {
        periodSelected,
        terrainSelected,
        rows
    }
}

export default function seats(state = initialState, action) {
    switch (action.type) {
        case SELECT_PERIOD:
            const period = action.payload;
            return Object.assign({}, state, {
                period: period
            });

        case SELECT_TERRAIN:
            const terrain = action.payload;
            return Object.assign({}, state, {
                terrain: terrain
            });
        case GET_SEATS:
            const { periods, terrains, trees } = action.payload.data;
            return Object.assign({}, state, {
                periods,
                terrains,
                trees
            });

        case GET_TREES_BY_PERIOD_AND_TERRAIN:
            const treesSelected = getTreesSelected(action.payload);
            return Object.assign({}, state, {
                treesSelected
            });

        case GET_TREES_BY_PLANTID:
            return Object.assign({}, state, {
                treesByPlantId: action.payload
            });

        case GET_TERRAINS_BY_PERIOD:
            return Object.assign({}, state, {
                terrainsByPeriod: action.payload
            });

        default:
            return state;
    }
}