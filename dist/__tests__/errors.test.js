"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeable_1 = require("fp-ts/pipeable");
const errors_1 = require("../modules/errors");
const E = require("fp-ts/lib/Either");
const function_1 = require("fp-ts/function");
const utilts_1 = require("./utilts");
describe('Test of retry util', () => {
    it(`should test union coreError json structure [${utilts_1.okScenario}]`, async () => {
        const dbError = {
            _tag: 'databaseError',
            errorMessage: 'message',
            rawError: {},
        };
        const res = pipeable_1.pipe(dbError, errors_1.coreError.decode, E.chainW((either) => E.right(either)), E.fold(function_1.constVoid, (e) => e));
        expect(res).toBe(dbError);
    });
    it(`should test union coreError json structure [${utilts_1.errorScenario}]`, async () => {
        const dbError = {
            _tag: 'apiError',
            errorMessage: 'message',
            rawError: {},
        };
        const res = pipeable_1.pipe(dbError, errors_1.coreError.decode, E.chainW((either) => E.right(either)), E.fold(function_1.constVoid, (e) => e));
        expect(res).toBe(undefined);
    });
    it(`should test databaseError json structure [${utilts_1.errorScenario}]`, async () => {
        const dbError = {
            _tag: 'wrongTag',
            errorMessage: 'message',
            rawError: {},
        };
        const res = pipeable_1.pipe(dbError, errors_1.databaseError.decode, E.chainW((either) => E.right(either)), E.fold(function_1.constVoid, (e) => e));
        expect(res).toBe(undefined);
    });
    it(`should test databaseError json structure [${utilts_1.okScenario}]`, async () => {
        const dbError = {
            _tag: 'databaseError',
            errorMessage: 'message',
            rawError: {},
        };
        const res = pipeable_1.pipe(dbError, errors_1.databaseError.decode, E.chainW((either) => E.right(either)), E.fold(function_1.constVoid, (e) => e));
        expect(res).toBe(dbError);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvX190ZXN0c19fL2Vycm9ycy50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkNBQW9DO0FBQ3BDLDhDQUFvRjtBQUNwRixzQ0FBc0M7QUFDdEMsNkNBQXlDO0FBQ3pDLHFDQUFtRDtBQUVuRCxRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ2hDLEVBQUUsQ0FBQywrQ0FBK0MsbUJBQVUsR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hFLE1BQU0sT0FBTyxHQUFrQjtZQUMzQixJQUFJLEVBQUUsZUFBZTtZQUNyQixZQUFZLEVBQUUsU0FBUztZQUN2QixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxlQUFJLENBQ1osT0FBTyxFQUNQLGtCQUFTLENBQUMsTUFBTSxFQUNoQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzlCLENBQUM7UUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLCtDQUErQyxzQkFBYSxHQUFHLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDM0UsTUFBTSxPQUFPLEdBQWE7WUFDdEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsZUFBSSxDQUNaLE9BQU8sRUFDUCxrQkFBUyxDQUFDLE1BQU0sRUFDaEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO1FBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw2Q0FBNkMsc0JBQWEsR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3pFLE1BQU0sT0FBTyxHQUFrQjtZQUMzQixJQUFJLEVBQUUsVUFBaUI7WUFDdkIsWUFBWSxFQUFFLFNBQVM7WUFDdkIsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO1FBQ0YsTUFBTSxHQUFHLEdBQUcsZUFBSSxDQUNaLE9BQU8sRUFDUCxzQkFBYSxDQUFDLE1BQU0sRUFDcEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM5QixDQUFDO1FBQ0YsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQyw2Q0FBNkMsbUJBQVUsR0FBRyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3RFLE1BQU0sT0FBTyxHQUFrQjtZQUMzQixJQUFJLEVBQUUsZUFBZTtZQUNyQixZQUFZLEVBQUUsU0FBUztZQUN2QixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7UUFDRixNQUFNLEdBQUcsR0FBRyxlQUFJLENBQ1osT0FBTyxFQUNQLHNCQUFhLENBQUMsTUFBTSxFQUNwQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQ3JDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzlCLENBQUM7UUFDRixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==