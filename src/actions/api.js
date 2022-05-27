import axios from "axios";
axios.defaults.headers.common['Bypass-Tunnel-Reminder'] = 'value'

// eslint-disable-next-line
export default{
    pos(baseurl ,Tables){
       const url=baseurl+Tables;
        return{
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create : newRecord => axios.post(url,newRecord),
            update : (id,updatedRecord) => axios.put(url+id,updatedRecord),
            delete : id => axios.delete(url+id)
        
        }
    }
}