import {ElMessage} from "element-plus";
export default {

    setErrorMessageBox(error){
        ElMessage({
            type: 'error',
            message: error.message,
            duration: 2000
        })
    },
    setSuccessMessageBox(message){
        ElMessage({
            type: 'success',
            message,
            duration: 2000
        })
    }
}