const Bicicleta = require("../../models/bicicleta");

beforeEach( () => {Bicicleta.allBicis = [];});
describe("Bicicleta.allBicis", () => {
    it("comienza vacia", () => {
        expect(Bicicleta.allBicis.length).toBe(0);
    })
})

describe("Bicicleta.add", ()=>{
    it("agregamos una",() => {
        
        expect(Bicicleta.allBicis.length).toBe(0);

        const a = new Bicicleta(1,"rojo","urbana",[-12.045498,-77.030261]);
        Bicicleta.add(a);

        expect(Bicicleta.allBicis.length).toBe(1);
        expect(Bicicleta.allBicis[0]).toBe(a);
    })
})

describe("Bicicleta.findById", () => {
    it("debe devolver la bici con id 1", () => {
        
        expect(Bicicleta.allBicis.length).toBe(0);
        const aBici = new Bicicleta(1, "verde","urbana");
        const aBici2 = new Bicicleta(2, "verde","urbana");

        Bicicleta.add(aBici)
        Bicicleta.add(aBici2)

        const targetBici = Bicicleta.findById(1);
        expect(targetBici.id).toBe(1);
        expect(targetBici.color).toBe(aBici.color);
        expect(targetBici.modelo).toBe(aBici.modelo);
    })
})

describe("Bicicleta.removeById", () => {
    it("debe remover una bicicleta con id 1",() => {
        expect(Bicicleta.allBicis.length).toBe(0);

        const aBici = new Bicicleta(1, "verde","urbana");
        Bicicleta.add(aBici)

        Bicicleta.removeById(1);
        expect(Bicicleta.allBicis.length).toBe(0);
    })
})