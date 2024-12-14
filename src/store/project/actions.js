export default {
    async setProjects(context){
        const projects =[
            {
                projectId: '1',
                projectName: 'Empresa uno',
                projectType:'Proyecto 1',
                projectCode: '20141735',
                analystCode:1,
                analystName:"Analista 1",
                state: true,
                fdesde:'13/02/2023',
                fhasta:'20/11/2023'
            },
            {
                projectId: '2',
                projectName: 'Empresa uno',
                projectType:'Proyecto 1',
                projectCode: '20141735',
                analystCode:1,
                analystName:"Analista 3",
                state: false,
                fdesde:'13/02/2023',
                fhasta:'20/11/2023'
            },
            {
                projectId: '3',
                projectName: 'Empresa uno',
                projectType:'Proyecto 1',
                projectCode: '20141735',
                analystCode:1,
                analystName:"Analista 4",
                state: true,
                fdesde:'13/02/2023',
                fhasta:'20/11/2023'
            },
            {
                projectId: '4',
                projectName: 'Empresa uno',
                projectType:'Proyecto 1',
                projectCode: '20141735',
                analystCode:1,
                analystName:"Analista 2",
                state: false,
                fdesde:'13/02/2023',
                fhasta:'20/11/2023'
            },
        ];
        await context.commit('setProjects',projects);
    },
    async createProject(context,payload){
        await context.commit('updateProjectList',{...payload});
    },
    async setProjectToEdit(context, payload){
        await context.commit('setProjectToEdit',payload);
    }
}