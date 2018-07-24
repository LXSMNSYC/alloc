export default class FastAlloc{
    constructor(size = 8192){
        this.recycler = [];
        this.recycler[size] = 0;
        for(let i = 0; i < size; i++){
            this.recycler[i] = i + 1;
        } 
    }   

    alloc(){
        let r = this.recycler;
        let id = r[0];
        id = (typeof id === "undefined") ? 0 : id;
        r[0] = r[id];
        return id;
    }

    /**
     * 
     * @param {Number} id 
     */
    free(id){
        let r = this.recycler;
        r[id] = r[0];
        r[0] = id;
    }
}