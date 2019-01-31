import WorldService from './world-service';
import World from '../model/world';
import Triangle from '../model/triangle';

// expect.extend({
//     toHaveDefinedTriangleDirection()
// })
describe('WorldService', () => {
    it('Basically doesn\'t suck', () => {
        const service = new WorldService();
        const w = service.generateIcosahedron();
        expect(w.mesh).toBeTruthy();
        expect(w.mesh.length).toBe(20);
        const triangleSet: Set<Triangle> = new Set(w.mesh);
        expect(triangleSet.size).toBe(20);
    });

    it('All triangles are neighbors to three other triangles', () => {
        const service = new WorldService();
        const w = service.generateIcosahedron();
        const tmap: Map<Triangle, number> = new Map();
        w.mesh.forEach((t, i) => {
            const directions: Array<keyof Triangle> = ['left', 'right', 'bottom'];
            directions.forEach(dir => {
                // all directions should be defined for every triangle
                //console.log('wow', t, i, dir);
                expect(t[dir]).toBeTruthy();
                if (!tmap.has(t[dir])) {
                    tmap.set(t[dir], 0);
                }
                tmap.set(t[dir], tmap.get(t[dir]) + 1);
            });
        });

        expect(tmap.size).toBe(20);
        tmap.forEach(neighborCount => {
            expect(neighborCount).toBe(3);
        })
    });
});
