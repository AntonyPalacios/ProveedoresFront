import { createStore } from 'vuex'
import projectModule from './project/index'
import providerModule from './provider/index'
import providerFormModule from './providerForm/index'

export default createStore({
    modules:{
        project: projectModule,
        provider: providerModule,
        providerForm: providerFormModule
    },
    state:{
        username:"Antony",
        userType:"user"
    },
    getters:{
        getUserType(state){
            return state.userType;
        },
        getUsername(state){
            return state.username;
        }
    },
    actions:{
        login(context,payload){
            //TODO funcion para login
            if(payload.username==='provider'){
                payload.userType = 'provider';
                context.commit('login',payload);
            }
        }
    },
    mutations:{
        login(state, payload){
            state.userType = payload.userType;

        }
    }
})