import BasicAlloc from "./lib/basic.js";
import ROAlloc from "./lib/ro.js";
import FastAlloc from "./lib/fast.js";
import QueueAlloc from "./lib/queue.js";

export const MODES = {
    BASIC: 1,
    RECYCLER_ONLY: 2,
    FAST: 4,
    QUEUE: 8
}

export const DEFAULT_SIZE = 0xFFFF

export class Alloc{
    constructor(mode = MODES.BASIC, size = DEFAULT_SIZE){
        this.mode = mode;
        this.size = size;
        if(mode === MODES.BASIC){
            this.a = new BasicAlloc();
        } else if (mode === MODES.RECYCLER_ONLY){
            this.a = new ROAlloc();
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

export {
    BasicAlloc,
    ROAlloc,
    FastAlloc,
    QueueAlloc
};