import { GET_SEATS, GET_TREES_BY_PERIOD_AND_TERRAIN, SELECT_PERIOD, SELECT_TERRAIN } from "../actions/types";

const initialState = {
    periods: null,
    terrains: null,
    period: null,
    terrain: null,
    trees: null,
    data: null,
    treesSelected: null
}

function getTreesSelected(data) {
    const { period, terrain, trees } = data;
    let periodSelected = period;
    let treesSelected = null;
    let terrainSelected = terrain;
    trees.map(tree => {
        if(tree.period === period) {
            tree.terrains.map(t => {
                if(t.terrain === terrain) {
                    treesSelected = t;
                }
            })
        }
    })
    return {
        periodSelected,
        treesSelected,
        terrainSelected
    }
}

export default function seats (state = initialState, action) {
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
            })

        default:
            return state;
    }
}