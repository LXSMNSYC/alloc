export default class BasicAlloc{
    constructor(){
        this.recycler = [];
        this.instance = 0;
    }

    alloc(){
        let r = this.recycler;
        let id = r[0];
        id = (typeof id === "undefined") ? 0 : id;
        if(id === 0){
            return ++this.instance;
        }
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