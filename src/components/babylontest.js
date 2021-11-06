import React, {useRef, useEffect} from 'react'
import {Engine, Scene, ArcRotateCamera, HemisphericLight, MeshBuilder, Vector3} from '@babylonjs/core'

const mystyle = {
    width: "100vw",
    height: "100vh"
}

const ReactCanvas = props => {

    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const engine = new Engine(canvas, true);

        const createScene =  () => {
            const scene = new Scene(engine);
        
            const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0));
            camera.attachControl(canvas, true);
        
            const light = new HemisphericLight("light", new Vector3(0, 1, 0));
        
            const box = MeshBuilder.CreateBox("box", {height: 0.2, width: 0.2, depth: 0.2});
        
            const xr = scene.createDefaultXRExperienceAsync({
                uiOptions: {
                    sessionMode: "immersive-ar"
                },
            });

            return scene;
        }

        const scene = createScene(); 
        engine.runRenderLoop(function () {
            scene.render();
        });
        window.addEventListener("resize", function () {
            engine.resize();
        });
        
    },[])

    return <canvas style={mystyle} ref={canvasRef} {...props}></canvas>
}

export default ReactCanvas