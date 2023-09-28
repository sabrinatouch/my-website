import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'

export function loadGLTFModel(
    scene,
    glbPath,
    options = { receiveShadow: true, castShadow: true }
) {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();

        // Optional: Provide a DRACOLoader instance to decode compressed mesh data
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath( "/examples/jsm/libs/draco/" );
        loader.setDRACOLoader( dracoLoader );

        loader.load(
            '/room.gltf',
            function (gltf) {
                scene.add(gltf.scene);

                gltf.animations;
                gltf.scene;
                gltf.scenes;
                gltf.cameras;
                gltf.asset
            },
            function(xhr){
                console.log( (xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function(error){
                console.log('An error happened');
            }
        )

        // loader.load(
        //     '/room.gltf',
        //     gltf => {
        //         const obj = gltf.scene
        //         obj.name = 'dog'
        //         obj.position.y = 0
        //         obj.position.x = 0
        //         obj.receiveShadow = receiveShadow
        //         obj.castShadow = castShadow
        //         scene.add(obj)

        //         obj.traverse(function (child) {
        //             if(child.isMesh) {
        //                 child.castShadow = castShadow
        //                 child.receiveShadow = receiveShadow

        //             }
        //         })

        //         resolve(obj)
        //     },
        //     undefined,
        //     function (error) {
        //         reject(error)
        //     }
        // )
    })
}