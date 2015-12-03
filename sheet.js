function Sheet(imageUrl) {
	var texture = THREE.ImageUtils.loadTexture(imageUrl);
	texture.onUpdate = function(){
		texture.repeat.x = 1;
		texture.repeat.y = 2;
	};
	var geometry = new THREE.PlaneGeometry(1, 2);
	var material = new THREE.MeshLambertMaterial({ 
		transparent: true, color: 0xff00ff, map: texture
	});
	THREE.Mesh.call(this, geometry, material );
}
Sheet.prototype = Object.create(THREE.Mesh.prototype);
