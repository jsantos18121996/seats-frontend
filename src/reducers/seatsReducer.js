
const initialState = {
    periods: null,
    terrains: null,
    period: null,
    terrain: null,
    seats: null
}

export default function seats (state = initialState, action) {
    switch (action.type) {
        case 'SELECT_PERIOD':
            const period = action.payload;
            return Object.assign({}, state, {
                period: period
            });

        case 'SELECT_TERRAIN':
            const terrain = action.payload;
            return Object.assign({}, state, {
                terrain: terrain
            });
        case 'GET_SEATS':
            const seats = action.payload;
            return Object.assign({}, state, {
                seats: seats
            });

        case 'SAVE_PERIODS_AND_TERRAINS':
            const { periods, terrains } = action.payload;
            return Object.assign({}, state, {
                terrains: terrains,
                periods: periods
            });

        default:
            return state;
    }
}