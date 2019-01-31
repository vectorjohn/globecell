import World from '../model/world';
import Triangle from '../model/triangle';

export default class WorldService {
    //TODO: Move the icosahedron part to its own method
    generateIcosahedron(): World {
        const w = {
            mesh: []
        };

        // generate a regular icosahedron as for rows, top to bottom.
        // There may be some pattern here for simplifying, but I don't see it.
        // https://en.wikipedia.org/wiki/Regular_icosahedron#/media/File:Icosahedron_flat.svg
        // First "row"
        const rows: Triangle[][] = [[], [], [], []];
        for (let i = 0; i < 5; i++) {
            const tri = triangle();
            w.mesh.push(tri);
            rows[0].push(tri);
            if (i > 0) {
                tri.left = rows[0][i - 1];
                rows[0][i - 1].right = tri;
            }
        }
        rows[0][0].left = rows[0][4];
        rows[0][4].right = rows[0][0];

        for (let i = 0; i < 5; i++) {
            const tri = triangle();
            w.mesh.push(tri);
            rows[1].push(tri);
            rows[0][i].bottom = tri;
            tri.bottom = rows[0][i];    // dancing cheek to cheek
        }

        for (let i = 0; i < 5; i++) {
            const tri = triangle();
            w.mesh.push(tri);
            rows[2].push(tri);
            tri.left = rows[1][i];
            rows[1][i].left = tri;
            if (i < 4) {
                tri.right = rows[1][i + 1]
                rows[1][i + 1].right = tri;
            }
        }
        rows[1][0].right = rows[2][4];
        rows[2][4].right = rows[1][0];

        for (let i = 0; i < 5; i++) {
            const tri = triangle();
            w.mesh.push(tri);
            rows[3].push(tri);
            tri.bottom = rows[2][i];
            rows[2][i].bottom = tri;
            if (i > 0) {
                tri.right = rows[3][i - 1];
                rows[3][i - 1].left = tri;
            }
        }
        rows[3][0].right = rows[3][4];
        rows[3][4].left = rows[3][0];

        return w;
    }

    traverse(fn: (Triangle) => any) {

    }
}

const triangle = (left?: Triangle, right?: Triangle, bottom?: Triangle) => ({
    left,
    right,
    bottom
});
