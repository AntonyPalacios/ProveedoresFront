export default {
    setProjects(state, payload) {
        state.projects = payload;
    },
    updateProjectList(state, payload){
        const index = state.projects.findIndex((project) =>{
            return project.projectId === payload.projectId;
        })
        if(index !== -1) {
            state.projects[index] = payload;
        }else{
            const projectId = state.projects.length +1
            state.projects.push({projectId,...payload});
        }
    },
    setProjectToEdit(state, payload) {
        const index = state.projects.findIndex((project) =>{
            return project.projectId === payload.projectId;
        })
        state.projectToEdit = state.projects[index];
    }
}