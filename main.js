import * as THREE from 'three';
import {MindARThree} from 'mindar-image-three';

const mindARThree = new MindARThree({
    container: document.querySelector("#container"),
    imageTargetSrc:'./assets/targets.mind'
});

const {renderer, scene, camera} = mindARThree;

const geometry = new THREE.PlaneGeometry(1,1);
const material = new THREE.MeshBasicMaterial({color:0x000fff, transparent:true, opacity:0.5});
const plane = new THREE.Mesh(geometry,material);

const anchor = mindARThree.addAnchor(0);
anchor.group.add(plane);

const start = async() => {
    await mindARThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
}

start();
