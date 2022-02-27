import { v4 as uuidv4 } from 'uuid';
export const getUUID = () => {
    //本地获取一个uuid
    let uuid_token = localStorage.getItem('uuid');
    if (!uuid_token) {
        uuid_token = uuidv4();
        localStorage.setItem('uuid', uuid_token);
    }
    return uuid_token;
} 