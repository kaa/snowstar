THREE.DodecahedronGeometry = function ( radius, detail ) {

        var vertices = [
            [0,0,1.070466],
            [0.7136442,0,0.7978784],
            [-0.3568221,0.618034,0.7978784],
            [-0.3568221,-0.618034,0.7978784],
            [0.7978784,0.618034,0.3568221],
            [0.7978784,-0.618034,0.3568221],
            [-0.9341724,0.381966,0.3568221],
            [0.1362939,1,0.3568221],
            [0.1362939,-1,0.3568221],
            [-0.9341724,-0.381966,0.3568221],
            [0.9341724,0.381966,-0.3568221],
            [0.9341724,-0.381966,-0.3568221],
            [-0.7978784,0.618034,-0.3568221],
            [-0.1362939,1,-0.3568221],
            [-0.1362939,-1,-0.3568221],
            [-0.7978784,-0.618034,-0.3568221],
            [0.3568221,0.618034,-0.7978784],
            [0.3568221,-0.618034,-0.7978784],
            [-0.7136442,0,-0.7978784],
            [0,0,-1.070466]
        ];

        var faces = [
            [0,1,4,7,2],
            [0,2,6,9,3],
            [0,3,8,5,1],
            [1,5,11,10,4],
            [2,7,13,12,6],
            [3,9,15,14,8],
            [4,10,16,13,7],
            [5,8,14,17,11],
            [6,12,18,15,9],
            [10,11,17,19,16],
            [12,13,16,19,18],
            [14,15,18,19,17]
        ];

        THREE.PolyhedronGeometry.call( this, vertices, faces, radius, detail );
};

THREE.DodecahedronGeometry.prototype = Object.create( THREE.Geometry.prototype );
