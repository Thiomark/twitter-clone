const state = {
    feedTwoots: []
}

const mutations = {
    FeedTwoots(state, payload){
        state.feedTwoots = payload
    }, 
    addTwoot(state, payload){
        state.feedTwoots.unshift(payload);
    }, 
}

const actions = {
    fetchFeedTwoots({commit}){
        const twoots = [
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                id: '1615047624085',
                name: 'Itumeleng', 
                handle: 'thiomark', 
                date: 1615047624085, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi quaerat cum, iure cupiditate quam quos nostrum laudantium. Fugiat, eius error sunt, quam, quod quis nemo aut illo perferendis incidunt quidem consequatur. Debitis, enim?'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'Elon', 
                handle: 'elonmusk', 
                id: '1615047750358',
                twootImage: 'https://placeimg.com/500/300/nature',
                date: 1615047750358, 
                twoot: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'jonny', 
                handle: 'jonny3234', 
                id: '1615047761814',
                date: 1615047761814, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex!'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                id: '161504762408jhg5',
                name: 'Itumeleng', 
                handle: 'thiomark', 
                date: 1615047624085, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi quaerat cum, iure cupiditate quam quos nostrum laudantium. Fugiat, eius error sunt, quam, quod quis nemo aut illo perferendis incidunt quidem consequatur. Debitis, enim?'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'Elon', 
                handle: 'elonmusk', 
                id: '16150477503jhgf58',
                date: 1615047750358, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex! Eligendi'
            },
            {
                image: 'https://cdn.quasar.dev/img/avatar2.jpg',
                name: 'jonny', 
                handle: 'jonny3234', 
                id: '161504776181jhgf4',
                date: 1615047761814, 
                twoot: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate commodi aut aliquam dolorem similique eos magni neque, voluptatum illo eaque voluptatem consequuntur sunt laborum ex!'
            }
        ]
        commit('FeedTwoots', twoots)
    },
    createTwoot({commit}, twoot){
        commit('addTwoot', twoot)
    }
}

const getters = {
    getFeedTwoots: state => state.feedTwoots,
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}