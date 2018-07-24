export default class RecyclerOnlyAlloc{
    constructor(){
        this.recycler = [];
        this.recycler[0] = 1;
    }

    alloc(){
        let r = this.recycler;
        let id = r[0];
        id = (typeof id === "undefined") ? 0 : id;
        if(r[id] === 0){
            r[0] = id + 1;
        } else {
            r[0] = r[id];
        }
        return id
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