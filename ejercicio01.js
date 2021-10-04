// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();
var dim =  x,y,z;
var dim = new dim (10,10,10);

function cubo(dim, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(dim);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)

    // add the cube to the scene
    scene.add(cube);
    return(cube);
}
function init() {
    // create a scene, that will hold all our elements such as objects, cameras and lights.

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(10);
    scene.add(axes);

    Cubo = [];   // Definir un array unidimensional
    Cubo.push(cubo(dim, 0xFFDD00, 'Standard', false)); 
    Cubo.push(cubo(dim, 0xFF0000, 'Standard', false)); 
    Cubo.push(cubo(dim, 0x00FFFF, 'Standard', false)); 


    Cubo[0].position.set(0, 0, 0);
    scene.add(Cubo[0]);
    Cubo[0].translateX ( 2.0 ); //El metodo usado recibe como parametro el movimiento unicamente en el eje X
    scene.add(Cubo[0]);


    Cubo[1].position.set(0, 0, 0);
    scene.add(Cubo[1]);
     Cubo[1].translateY ( 2.0 ); //El metodo usado recibe como parametro el movimiento unicamente en el eje Y
    scene.add(Cubo[1]);

    Cubo[2].position.set(0, 0, 0);
    scene.add(Cubo[2]);
     Cubo[2].translateZ ( 2.0 ); //El metodo usado recibe como parametro el movimiento unicamente en el eje Z
    scene.add(Cubo[2]);


    //Luz (requerida para el material MeshLambertMaterial)
    light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, 
                                            //  semejante al sol.
    light.position.set( -20, 50, 60 );      //  Localización de la luz. (x, y, z).
    scene.add( light ); 

    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}