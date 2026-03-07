/* IMPORTANT NOTES
    1. EVERY MODULE consists of the following items:
        a) namespaced
        b) state
        c) mutations
        d) actions
        e) getters
    2. MUTATIONS are methods that take, as inputs, a STATE and a PAYLOAD and carry out changes
       to the state synchronously.
    3. ACTIONS are methods that, before executing a mutation (using the method commit(...)),
       carry out other operations.
    4. GETTERS are methods that take the STATE as input and return then data related to the
       state.   
*/

export default {
    /* NAMESPACED Property - SUPER IMPORTANT!! */
    namespaced: true,
    /* STATE - Reactive Variables */
    state: () => ({
        user: null,
        token: null
    }),
    /* MUTATIONS - Synchronous Methods used to change the Store State */
    mutations: {
        setUser(state, payload) {
            state.user = payload.user;
            state.token = payload.token;
        },
        logout(state) {
            state.user = null;
            state.token = null;
        }
    },
    /* ACTIONS - Asynchronous Methods used to change the Store State with a Mutation
                 after having carried out other operations. */
    actions: {
        login({commit}, credentials) {
            // Simulate API login
            const fakeToken = 'abc123';
            const fakeUser = {name: 'Jane Doe', email: credentials.email};
            commit('setUser', {user: fakeUser, token: fakeToken});
        }
    },
    /* GETTERS - Methods returning infos/data out from the State */
    getters: {
        isAuthenticated(state) {
            return !!state.token;
        }
    }
};