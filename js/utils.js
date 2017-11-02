function createWalls(x, y, z) {

  var walls = []

  // floor
  var wallGeometry = new THREE.PlaneGeometry(x, z);
  var wallMesh = new THREE.Mesh( wallGeometry, new THREE.MeshLambertMaterial( { color: "white"} ));
  wallMesh.rotation.x = -Math.PI / 2;
  wallMesh.position.x = x / 2;
  wallMesh.position.z = z / 2;
  wallMesh.castShadow = false;
  wallMesh.receiveShadow = true;

  // wall1
  var wallGeometry1 = new THREE.PlaneGeometry(x, y);
  var wallMesh1 = new THREE.Mesh( wallGeometry1, new THREE.MeshLambertMaterial( { color: "white"} ));
  wallMesh1.position.x = x / 2
  wallMesh1.position.y = y / 2;
  wallMesh1.castShadow = false;

  // wall2
  var wallGeometry2 = new THREE.PlaneGeometry(z, y);
  var wallMesh2 = new THREE.Mesh( wallGeometry2, new THREE.MeshLambertMaterial( { color: "white"} ));
  wallMesh2.rotation.y = Math.PI / 2;
  wallMesh2.position.y = y / 2;
  wallMesh2.position.z = z / 2;
  wallMesh2.castShadow = false;

  // floor
  var wallGeometry3 = new THREE.PlaneGeometry(x, z);
  var wallMesh3 = new THREE.Mesh( wallGeometry3, new THREE.MeshLambertMaterial( { color: "white"} ));
  wallMesh3.rotation.x = Math.PI / 2;
  wallMesh3.position.x = x / 2;
  wallMesh3.position.z = z / 2;
  wallMesh3.position.y = y;
  wallMesh3.castShadow = false;

  walls.push(wallMesh);
  walls.push(wallMesh1);
  walls.push(wallMesh2);
  walls.push(wallMesh3);

  return walls
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
