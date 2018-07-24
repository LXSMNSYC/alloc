(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.alloc = {})));
}(this, (function (exports) { 'use strict';

    class BasicAlloc{
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

    class ROAlloc{
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

    class FastAlloc{
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

    class QueueAlloc{
        constructor(size = 8192){
            this.recycler = [];
            this.recycler[size] = 0;
            for(let i = 0; i < size; i++){
                this.recycler[i] = i + 1;
            } 
            this.last = size;
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
            r[this.last] = id;
            r[id] = 0;
            this.last = id;
        }
    }

    const MODES = {
        BASIC: 1,
        RECYCLER_ONLY: 2,
        FAST: 4,
        QUEUE: 8
    };

    const DEFAULT_SIZE = 0xFFFF;

    class Alloc{
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

    exports.MODES = MODES;
    exports.DEFAULT_SIZE = DEFAULT_SIZE;
    exports.Alloc = Alloc;
    exports.BasicAlloc = BasicAlloc;
    exports.ROAlloc = ROAlloc;
    exports.FastAlloc = FastAlloc;
    exports.QueueAlloc = QueueAlloc;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
