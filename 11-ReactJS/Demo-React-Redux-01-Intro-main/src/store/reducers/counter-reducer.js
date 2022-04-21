import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from '../actions/counter-actions';

const initialState = {
    count: 0,
    message: 'Le compteur est initialisé'
};

// Fonction "Reducer" qui sera déclanchée lors des actions.
// Génère un nouveau state sur base du state et de l'action.
export const counterReducer = (state = initialState, action) => {

    // 
    switch (action.type) {
        case COUNTER_INCREMENT:
            return {
                ...state, // Permet d'éviter la perte de valeur
                count: state.count + action.payload,
                message: `Le compteur est incrémenté de ${action.payload}`
            };
        case COUNTER_DECREMENT:
            return {
                ...state, // Permet d'éviter la perte de valeur
                count: state.count - action.payload,
                message: `Le compteur est décrémenté de ${action.payload}`
            };
        case COUNTER_RESET:
            return {
                ...state,
                count: 0,
                message: `Le compteur a été remis à zéro`
            };

        // Alternative: Remise à la valeur du state initial
        // return { ...initialState };

        default:
            return state;
    }

};

export default counterReducer;