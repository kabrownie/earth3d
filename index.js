import * as THREE from 'three';
const scene = new THREE.Scene();
const w = window.innerWidth;
const h = window.innerHeight;


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.z = 5;
const geo = new THREE.IcosahedronGeometry(1.0,2);
const mat =new THREE.MeshBasicMaterial({color: 0x00ff});
const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);
const wiremat=new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true});
const wiremesh = new THREE.Mesh(geo, wiremat);
scene.add(wiremesh);
function animate(t=0) {
    requestAnimationFrame(animate);
renderer.render(scene, camera);}
animate();