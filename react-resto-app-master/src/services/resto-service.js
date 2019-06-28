export default class RestoService {
    constructor() {
        this._db = 'http://localhost:3000/menu';    
    }
    getMenuItems = async () => {
        //return [];
        const result = await fetch(this._db);
        //console.log(result)
        if(!result.ok) {
            throw result.status;
        }

        return result.json();
    }
}