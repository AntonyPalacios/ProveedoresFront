export default {
    setProviders(state, payload) {
        state.providers = payload;
    },
    updateProviderList(state, payload){
        const index = state.providers.findIndex((provider) =>{
            return provider.providerId === payload.providerId;
        })
        if(index !== -1) {
            state.providers[index] = payload;
        }else{
            const providerId = state.providers.length +1
            state.providers.push({providerId,...payload});
        }
    },
    setProviderToEdit(state, payload) {
        const index = state.providers.findIndex((provider) =>{
            return provider.providerId === payload.providerId;
        })
        state.providerToEdit = state.providers[index];
    }
}