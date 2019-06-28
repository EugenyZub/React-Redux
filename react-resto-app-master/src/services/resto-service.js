export default class RestoService {
    constructor() {
        this._db = 'http://localhost:3000';    
    }
    async getResource(url) {
        const result = await fetch(`${this._db}${url}`);
        if(!result.ok) {
            throw result.status;
        }

        return await result.json();
    }

    async getMenuItems() {
        return await this.getResource('/menu/')
    }
}