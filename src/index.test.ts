import * as index from "./index"
// @ponicode
describe("index.immutableFindReplace", () => {
    test("0", () => {
        let param3: any = [() => 16, true, "SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';"]
        let callFunction: any = () => {
            index.immutableFindReplace([true, 32, 0], () => false, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param3: any = [() => 32, false, "UPDATE Projects SET pname = %s WHERE pid = %s"]
        let callFunction: any = () => {
            index.immutableFindReplace([false, 256, 16], () => false, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param3: any = [() => 64, true, "UPDATE Projects SET pname = %s WHERE pid = %s"]
        let callFunction: any = () => {
            index.immutableFindReplace([false, 32, 32], () => true, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param3: any = [() => true, () => false]
        let callFunction: any = () => {
            index.immutableFindReplace([false, "foo bar", "This is a Text", false, 10], () => false, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param3: any = [() => 32, false, "DELETE FROM Projects WHERE pid = %s"]
        let callFunction: any = () => {
            index.immutableFindReplace([true, 64, 256], () => true, param3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.immutableFindReplace([], () => true, [])
        }
    
        expect(callFunction).not.toThrow()
    })
})
