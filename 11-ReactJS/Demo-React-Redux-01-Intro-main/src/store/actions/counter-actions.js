// Constantes avec le nom des différentes actions
export const COUNTER_INCREMENT = 'counter/increment';
export const COUNTER_DECREMENT = 'counter/decrement';
export const COUNTER_RESET = 'counter/reset';

// Méthode pour générer les objets "actions"
// Fonction qui crée l'action "increment"
export const counterIncrement = (value) => {
    // Créer l'objet "action"
    return {
        type: COUNTER_INCREMENT,
        payload: value
    };
};

// Fonction lambda qui crée l'action "increment"
export const counterDecrement = (value) => ({
    type: COUNTER_DECREMENT,
    payload: value
});

export const counterReset = () => ({
    type: COUNTER_RESET
});