export default {
    //formdata的信息添加
    set(object){
        if(object == ""){
            return false;
        }

        let formdata = new FormData();

        for(let key in object){
            formdata.append(key,object[key]);
        }

        return formdata;
    }
}