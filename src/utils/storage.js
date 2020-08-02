//字面量的方式定义一个变量,JSON.stringify()  JSON.parse();

const storage = {
    //设置本地存储  key，value  isJson
    //isJson是否需要对数据进行json对象转换
    set: function(key,value,isJson = false){
        //设置的方法，先做判断，判断key和value是否为空
        if(key.length == 0 || value.length == 0){
            return false;
        }
        //判断是否需要转换json字符串，true转换，false不转换即可
        let data = ( isJson == true ? JSON.stringify(value) : value );
        
        //设置缓存值即可
        localStorage.setItem(key,data);
    },

    //获取本地存储 key isJson
    get: function(key,isJson = false){
        //判断参数是否合法
        if(key.length == 0){
            return false;
        }
        //从本地存储获取内容
        let data = localStorage.getItem(key);
        //判断是否需要转换json字符串，true转换，false不转换即可
        return isJson == true ? JSON.parse(data) : data;
    },

    //删除本地存储  key
    remove: function(key){
        //判断参数是否合法
        if(key.length == 0){
            return false;
        }
        //删除的操作
        localStorage.removeItem(key);
    }
}

//抛出对象即可
export default storage;