import BasicAlloc from "./alloc/basic.js";
import RecyclerOnlyAlloc from "./alloc/recycleronly.js";
import FastAlloc from "./alloc/fast.js";
import QueueAlloc from "./alloc/queue.js";

export const MODES = {
    BASIC = 1,
    RECYCLER_ONLY = 2,
    FAST = 4,
    QUEUE = 8
}

export const DEFAULT_SIZE = 0xFFFF

export class Allocator{
    constructor(mode = MODES.BASIC, size = DEFAULT_SIZE){
        this.mode = mode;
        this.size = size;
        if(mode === MODES.BASIC){
            this.a = new BasicAlloc();
        } else if (mode === MODES.RECYCLER_ONLY){
            this.a = new RecyclerOnlyAlloc();
        } else if (mode === MODES.FAST){
            this.a = new FastAlloc(size);
        } else if (mode === MODES.QUEUE){
            this.a = new QueueAlloc(size);
        }
    }    

    alloc(){
        return this.a.alloc();
    }

    free(id){
        this.a.free(id);
    }
}