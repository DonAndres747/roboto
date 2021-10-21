function main() {
    const scene= new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    camera.position.z = 20;
     
    
    const cuerpo = new THREE.Mesh(new THREE.CylinderGeometry( 2.5, 2.5, 7,50), new THREE.MeshBasicMaterial({color:"#e3e4e5"}));
    cuerpo.position.z=-1;

    const cabeza = new THREE.Mesh(new THREE.SphereGeometry( 5, 32, 15 ), new THREE.MeshBasicMaterial({color:"#e3e4e5"}))
    cabeza.position.y=7

    const ojo1 = new THREE.Mesh(new THREE.SphereGeometry( 1, 32, 15 ), new THREE.MeshBasicMaterial({color:"#0000ff"}))
    ojo1.position.y=8;
    ojo1.position.z=5;
    ojo1.position.x=2;

    const ojo2 = new THREE.Mesh(new THREE.SphereGeometry( 1, 32, 15 ), new THREE.MeshBasicMaterial({color:"#0000ff"}))
    ojo2.position.y=8;
    ojo2.position.z=5;
    ojo2.position.x=-2;

    const antena = new THREE.Mesh(new THREE.CylinderGeometry( 0.3, 0.3, 7,50), new THREE.MeshBasicMaterial({color:"#e3e4e5"}));
    antena.position.y=10;

    const antena1 = new THREE.Mesh(new THREE.SphereGeometry( 0.5, 32, 15 ), new THREE.MeshBasicMaterial({color:"red"}))
    antena1.position.y=14;
    
    const boca = new THREE.Mesh(new THREE.CylinderGeometry( 5, 5, 0.1,50), new THREE.MeshBasicMaterial({color:"black"}));
    boca.position.y=6.5;

    const pierna1 = new THREE.Mesh(new THREE.CylinderGeometry( 1, 1, 5,50), new THREE.MeshBasicMaterial({color:"#e3e4e5"}));
    pierna1.position.y=-6;
    pierna1.position.x=-1.3;

    const pierna2 = new THREE.Mesh(new THREE.CylinderGeometry( 1, 1, 5,50), new THREE.MeshBasicMaterial({color:"#e3e4e5"}));
    pierna2.position.y=-6;
    pierna2.position.x=1.3;

    const brazo1 = new THREE.Mesh(new THREE.CylinderGeometry( 0.8, 0.8, 7,50), new THREE.MeshBasicMaterial({color:"#e3e4e5"}));
    brazo1.position.y=1;
    brazo1.position.x=3.5;
    brazo1.rotation.z=10;

    const brazo2 = new THREE.Mesh(new THREE.CylinderGeometry( 0.8, 0.8, 7,50), new THREE.MeshBasicMaterial({color:"#e3e4e5"}));
    brazo2.position.y=1;
    brazo2.position.x=-3.5;
    brazo2.rotation.z=15.2;

    const mano1 = new THREE.Mesh(new THREE.SphereGeometry( 1.2, 32, 15 ), new THREE.MeshBasicMaterial({color:"#ff8000"}))
    mano1.position.x=5;
    mano1.position.y=-1.5;
    
    const mano2 = new THREE.Mesh(new THREE.SphereGeometry( 1.2, 32, 15 ), new THREE.MeshBasicMaterial({color:"#ff8000"}))
    mano2.position.x=-5;
    mano2.position.y=-1.5;

    const pie1 = new THREE.Mesh(new THREE.ConeGeometry( 1.3, 2, 30 ), new THREE.MeshBasicMaterial( {color: "#e3e4e5"} ))
    pie1.position.y=-8;
    pie1.position.x=1.3;

    const pie2 = new THREE.Mesh(new THREE.ConeGeometry( 1.3, 2, 30 ), new THREE.MeshBasicMaterial( {color: "#e3e4e5"} ))
    pie2.position.y=-8;
    pie2.position.x=-1.3;

    const centro = new THREE.Mesh(new THREE.SphereGeometry( 1.2, 32, 10 ), new THREE.MeshBasicMaterial({wireframe:  true, color:"#00CA15"}))
    centro.position.z=1.5
    centro.position.y=1
    

    function animate() {
      requestAnimationFrame( animate );
      renderer.render( scene, camera );
    }
    scene.add(cuerpo, cabeza, ojo1, ojo2, antena, antena1, boca, pierna1, pierna2, brazo1, brazo2, mano1, mano2, pie1, pie2, centro);
  
    animate();
    
}

main();
