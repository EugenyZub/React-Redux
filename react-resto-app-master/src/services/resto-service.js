export default class RestoService {
    constructor() {
        this._db = 'http://localhost:3000/menu/';    
    }
    async getResource() {
        const result = await fetch(this._db);
        if(result.ok) {
            throw result.status;
        }

        return await result.json();
    }

    // async getMenuItems() {
    //     return await this.getResource('/menu/')
    // }
}