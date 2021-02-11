"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const S = require("fp-ts/lib/State");
const pipeable_1 = require("fp-ts/lib/pipeable");
const appLog = {
    running: false,
    completed: false,
    result: 0
};
describe('Smlouva with unlimited validity', () => {
    const initProcess = (initValue) => (log) => {
        const logVersion = { ...log, running: true };
        // console.log(JSON.stringify(logVersion))
        return [initValue, logVersion];
    };
    const completeProcess = (initValue) => (log) => {
        const logVersion = { ...log, running: false, completed: true, result: initValue };
        // console.log(JSON.stringify(logVersion))
        return [initValue, logVersion];
    };
    const double = (number) => number * 2;
    const tripple = (number) => number * 3;
    const map3 = (f) => (fa) => {
        console.log(`iterace`);
        return (s1) => {
            console.log(`${s1}`);
            const [a, s2] = fa(s1);
            console.log(a);
            console.log(f(a));
            return [f(a), s2];
        };
    };
    const a = (n) => (b) => n + b;
    // const mapec = (t: tester) => {
    //     const val = t('pes') + '1';
    //     return  => [t,val]
    // }
    // const testik = pipe(
    //     a('les'),
    //     mapec,
    // )
    it('Hodnota before smlouva', () => {
        const result = () => pipeable_1.pipe(initProcess(10), map3(double), map3(tripple), map3(tripple), map3(tripple), S.chain(completeProcess));
        // (val) => [1,2]
        // (val) => [2,3]
        // (val) => [3,4]
        // const test = result();
        // console.log(JSON.stringify(result))
        // const fest = result()(appLog);
        expect(result()(appLog)).toBeNull();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3Rlc3QvdGVzdC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXFDO0FBQ3JDLGlEQUF3QztBQU94QyxNQUFNLE1BQU0sR0FBUTtJQUNoQixPQUFPLEVBQUUsS0FBSztJQUNkLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLE1BQU0sRUFBRSxDQUFDO0NBQ1osQ0FBQTtBQUVELFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLEVBQUU7SUFFN0MsTUFBTSxXQUFXLEdBQUcsQ0FBZ0IsU0FBaUIsRUFBcUIsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDakYsTUFBTSxVQUFVLEdBQUcsRUFBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFDLENBQUE7UUFDMUMsMENBQTBDO1FBQzFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbEMsQ0FBQyxDQUFDO0lBRUYsTUFBTSxlQUFlLEdBQUcsQ0FBZ0IsU0FBaUIsRUFBc0IsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDdEYsTUFBTSxVQUFVLEdBQUcsRUFBQyxHQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxDQUFBO1FBQy9FLDBDQUEwQztRQUUxQyxPQUFPLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQ2xDLENBQUMsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sT0FBTyxHQUFHLENBQUMsTUFBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRTlDLE1BQU0sSUFBSSxHQUFHLENBQU0sQ0FBYSxFQUFFLEVBQUUsQ0FBQyxDQUFJLEVBQWdCLEVBQWdCLEVBQUU7UUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNqQixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ3JCLENBQUMsQ0FBQTtJQUNMLENBQUMsQ0FBQTtJQUdELE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUUzQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixJQUFJO0lBRUosdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsSUFBSTtJQUVMLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLEVBQUU7UUFJOUIsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsZUFBSSxDQUNyQixXQUFXLENBQUMsRUFBRSxDQUFDLEVBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQzNCLENBQUE7UUFFRCxpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFDekIsc0NBQXNDO1FBR3RDLGlDQUFpQztRQUVqQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIn0=