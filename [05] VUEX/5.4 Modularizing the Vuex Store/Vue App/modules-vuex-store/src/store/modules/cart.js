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
        items: []
    }),
    /* MUTATIONS - Synchronous Methods used to change the Store State */
    mutations: {
        addItem(state,item) {
            state.items.push(item);
        },
        removeItem(state, index) {
            state.items.splice(index,1);
        }
    },
    /* GETTERS - Methods returning infos/data out from the State */
    getters: {
        itemCount(state) {
            return state.items.length;
        },
        totalPrice(state) {
            return state.items.reduce((sum,item)=> sum + item.price,0);
        }
    }
};