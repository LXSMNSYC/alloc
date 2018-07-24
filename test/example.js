var Allocator = require("../bundle.js");

describe("BasicAlloc", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.BasicAlloc();
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});

describe("ROAlloc", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.ROAlloc();
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});
describe("FastAlloc", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.FastAlloc();
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});
describe("QueueAlloc", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.QueueAlloc();
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});
describe("Alloc(mode = MODES.BASIC)", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.Alloc(Allocator.MODES.BASIC);
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});
describe("Alloc(mode = MODES.RECYCLER_ONLY)", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.Alloc(Allocator.MODES.RECYCLER_ONLY);
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});
describe("Alloc(mode = MODES.FAST, size = 8192)", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.Alloc(Allocator.MODES.FAST, 8192);
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});
describe("Alloc(mode = MODES.QUEUE, size = 8192)", () => {
    let allocator;
    let value = 0;
    beforeEach(() =>{
        allocator = new Allocator.Alloc(Allocator.MODES.QUEUE, 8192);
    });
    describe("alloc", () => {
        it("should allocate a new index", () =>{
            value = allocator.alloc();
        });
    });
    describe("free", () =>{ 
        it("should recycle/free an instance", () =>{
            allocator.free(value);
        });
    });
});