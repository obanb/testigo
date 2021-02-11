"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TE = require("fp-ts/lib/TaskEither");
const E = require("fp-ts/lib/Either");
exports.taskEitherLeftConcat = (semi) => ({
    URI: TE.URI,
    _E: undefined,
    map: TE.taskEither.map,
    of: TE.taskEither.of,
    ap: (mab, ma) => () => Promise.all([mab(), ma()]).then(([f, val]) => E.isLeft(f) ? (E.isLeft(val) ? E.left(semi.concat(f.left, val.left)) : f) : E.isLeft(val) ? val : E.right(f.right(val.right))),
    chain: TE.taskEither.chain,
});
exports.getSemigroupArray = () => ({
    concat: (x, y) => [...x, ...y],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnBVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2R1bGVzL2NvbW1vbi9mcFV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkNBQTJDO0FBQzNDLHNDQUFzQztBQUV6QixRQUFBLG9CQUFvQixHQUFHLENBQVMsSUFBeUIsRUFBb0MsRUFBRSxDQUFDLENBQUM7SUFDMUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHO0lBQ1gsRUFBRSxFQUFFLFNBQWdCO0lBQ3BCLEdBQUcsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUc7SUFDdEIsRUFBRSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtJQUNwQixFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxFQUFFLENBQ3pDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDaEk7SUFDTCxLQUFLLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLO0NBQzdCLENBQUMsQ0FBQztBQUVVLFFBQUEsaUJBQWlCLEdBQUcsR0FBc0IsRUFBRSxDQUFDLENBQUM7SUFDdkQsTUFBTSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUNqQyxDQUFDLENBQUMifQ==