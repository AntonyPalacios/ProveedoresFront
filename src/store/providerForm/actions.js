export default {
    async setPersonalInfo(context,payload){
        await context.commit('setPersonalInfo',payload);
    },
    async setTaxResidence(context,payload){
        await context.commit('setTaxResidence',payload);
    },
    async setLegalRepresentation(context, payload){
        await context.commit('setLegalRepresentation',payload);
    },
    async setProviderCeos(context, payload){
        await context.commit('setProviderCeos',payload);
    },
    async setProviderStockshares(context, payload){
        await context.commit('setProviderStockshares',payload);
    },
    async setProviderExperience(context, payload){
        await context.commit('setProviderExperience',payload);
    },
    async setProviderServices(context, payload){
        await context.commit('setProviderServices',payload);
    },
}