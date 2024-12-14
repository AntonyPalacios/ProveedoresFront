import mutations from './mutations'
import actions from './actions'
import getters from './getters'

export default {
    namespaced:true,
    state(){
        return{
            personalInfo:null,
            taxResidence:null,
            legalRepresentation: null,
            providerCeos:[],
            providerStockshares:[],
            providerExperience:0.0,
            providerServices : []
        }
    },
    mutations,
    actions,
    getters
}