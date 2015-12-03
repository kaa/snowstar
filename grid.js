function Grid() {
	THREE.Object3D.call(this);
	this.add(new THREE.Mesh(
		new THREE.PlaneGeometry( 1, 1, 3, 3 ),
		new THREE.MeshBasicMaterial({ wireframe: true, color: 0x888888 })
	));
	this.add(new THREE.Mesh(
		new THREE.PlaneGeometry( 1, 1, 30, 30 ),
		new THREE.MeshBasicMaterial({ wireframe: true, color: 0xdddddd })
	));
}
