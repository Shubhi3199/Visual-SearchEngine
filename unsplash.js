import axios from 'axios';
export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
                
        Authorization: 'Client-ID b73a71a1c54387e1040eca325e3f349d4c0add11dbd06d4175f738340cbf83e6'
    }
});