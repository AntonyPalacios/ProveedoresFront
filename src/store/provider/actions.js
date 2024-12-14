export default {
    async setProviders(context){
        const providers =[
            {
                providerId:'0001',
                pg:true,
                ttipopersona:'JUR',
                providerName: 'Bancom',
                ttipoidentificacion: 2,
                identificacion:'25635687458',
                phone:'987654321',
                evalState:'Aprovado',
                evalDate:'21/11/2023',
                fillState:'Terminado',
                state: 'Activo',
                fdesde:'01/01/2010',
                fultimamodificacion:'20/11/2023'
            },
            {
                providerId:'0002',
                pg:false,
                ttipopersona:'NAT',
                providerName: 'Antony Palacios Coronado',
                ttipoidentificacion: 2,
                identificacion:'72498155',
                phone:'987654321',
                evalState:'Aprovado',
                evalDate:'21/11/2023',
                fillState:'Terminado',
                state: 'Activo',
                fdesde:'01/01/2010',
                fultimamodificacion:'20/11/2023'
            },
        ];
        await context.commit('setProviders',providers);
    },
    async createProvider(context,payload){
        await context.commit('updateProviderList',{...payload});
    },
    async setProjectToEdit(context, payload){
        await context.commit('setProviderToEdit',payload);
    }
}