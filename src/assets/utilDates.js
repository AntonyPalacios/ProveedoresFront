export default {
    stringToDate(str){
        const dateParts = str.split("/");
        return new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    }
}