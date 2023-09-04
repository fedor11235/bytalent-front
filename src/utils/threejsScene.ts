import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib";

//сюда записывается массив кнопок
let btnsTexture: any;

let BTNS: any;
let LOADER: any;
let modelName: any;

const matsWithTex: any = []; // содержит name, mat, и массив текстур texVars
const matsWithTexNames: any = []; // содержит имена для поиска
const mainScene = new THREE.Scene();

//возвращает текстуру
const GiveMeTexture = (url: any) => {
  const loader = new THREE.TextureLoader();
  const texture = loader.load(url);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.flipY = false;
  return texture;
};

function clickTexture(event: any) {
  const textureActiveName = event.target.dataset.name;
  const textureActiveIndex = event.target.dataset.index;
  for (const btn of btnsTexture) {
    if (btn.dataset.name == textureActiveName) {
      btn.classList.remove("model-info__img_active");
    }
  }
  event.target.classList.add("model-info__img_active");
  const matActive = matsWithTex.filter(
    (mat: any) => mat.name === textureActiveName
  )[0];
  const textureActiveObj = matActive.texVars[Number(textureActiveIndex) - 1];
  matActive.mat.map = textureActiveObj;
  matActive.mat.needsUpdate = true;
}

function showMats(mats: any) {
  let btnsHtml = "";
  let btnsHtmlTemp = "";
  console.log("modelName", modelName);
  for (const mat of mats) {
    btnsHtmlTemp = `<div class="model-info__item"><div class="model-info__title">${mat.name}</div>`;
    for (let i = 1; i <= mat.texVars.length; i++) {
      if (i === 1) {
        btnsHtmlTemp += `<img class="model-info__img model-info__img_active" data-index="1" data-name="${mat.name}" src="models/${modelName}//textures/${mat.name}/${mat.name}_baseColor${i}.jpeg" height="24" width="24"/>`;
      } else {
        btnsHtmlTemp += `<img class="model-info__img" data-index="${i}" data-name="${mat.name}" src="models/${modelName}/textures/${mat.name}/${mat.name}_baseColor${i}.jpeg" height="24" width="24"/>`;
      }
    }
    btnsHtmlTemp += "</div>";
    btnsHtml += btnsHtmlTemp;
  }
  BTNS.innerHTML = btnsHtml;
  btnsTexture = BTNS.getElementsByClassName("model-info__img");
  for (const btn of btnsTexture) {
    btn.addEventListener("click", clickTexture);
  }
}

export async function init(name: any, btns: any, sceletron: any) {
  BTNS = btns;
  LOADER = sceletron;
  modelName = name;

  //сцена
  {
    mainScene.background = new THREE.Color("#E2DFE1");
    let plain; //пол
    {
      plain = new THREE.Mesh(
        new THREE.PlaneGeometry(1000, 1000),
        new THREE.MeshBasicMaterial({ color: "#E2DFE1" })
      );
      (plain as any).reciveShadow = true;
      plain.position.set(0, -1, 0);
      plain.rotateX(-Math.PI / 2);
      mainScene.add(plain);
    }
    //собираем инфу о модели и загружаем на сцену
    const loader = new GLTFLoader();
    await loader.load("models/" + modelName + "/scene.gltf", (gltf) => {
      const model = gltf.scene;
      LOADER.style.display = "none";
      model.traverse(async (child) => {
        if ((child as any).isMesh) {
          if (!matsWithTexNames.includes((child as any).material.name)) {
            matsWithTexNames.push((child as any).material.name);
            let find = true;
            let i = 1;
            const textureArray = [];
            //ищем все вариантики
            while (find) {
              if ((child as any).material.map != null) {
                const url =
                  "models/" +
                  modelName +
                  "/textures/" +
                  (child as any).material.name +
                  "/" +
                  (child as any).material.name +
                  "_baseColor" +
                  i +
                  ".jpeg";

                const request = new XMLHttpRequest();
                request.open("GET", url, false); // `false` makes the request synchronous
                request.send(null);

                if (request.status === 200) {
                  const tempTexture = GiveMeTexture(url);
                  i = i + 1;
                  textureArray.push(tempTexture);
                } else {
                  find = false;
                }
              } else {
                find = false;
              }
            }
            matsWithTex.push({
              name: (child as any).material.name,
              mat: (child as any).material,
              texVars: textureArray,
            });
          }
        }
      });

      showMats(matsWithTex);

      mainScene.add(model);
    });

    //освещение
    {
      {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(-2, 0, 10);
        light.lookAt(0, -1, 0);
        mainScene.add(light);
      }

      {
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, 0, 5);
        light.lookAt(0, 1, 0);
        mainScene.add(light);
      }

      RectAreaLightUniformsLib.init();
      {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(-10, 0, 0);
        rectLight.rotation.y = Math.PI + Math.PI / 4;
        mainScene.add(rectLight);
      }

      {
        const rectLight = new THREE.RectAreaLight(0xffffff, 1, 100, 100);
        rectLight.position.set(10, 0, 0);
        rectLight.rotation.y = Math.PI - Math.PI / 4;
        mainScene.add(rectLight);
      }
    }
  }

  //камера
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    3000
  );
  camera.position.set(0, 0.5, 1);

  //рендер
  const canvas: any = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  //OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 5;
  controls.enableDamping = true;

  function resizeRendererToDisplaySize(renderer: any) {
    const canvas = renderer.domElement;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const canvasPixelWidth = canvas.width / window.devicePixelRatio;
    const canvasPixelHeight = canvas.height / window.devicePixelRatio;
    const needResize =
      canvasPixelWidth !== width || canvasPixelHeight !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  // Animate
  function animate() {
    renderer.render(mainScene, camera);
    requestAnimationFrame(animate);

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    controls.update();
  }
  animate();
}
