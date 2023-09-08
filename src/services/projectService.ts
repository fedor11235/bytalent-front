import projectApi from "@/api/projectApi";
import { createFormData } from "@/utils/formData";
import { useRootStore } from "@/store";

export default {
  async getActiveProjects() {
    try {
      const { data } = await projectApi.getActiveProjects();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async getAllNumberProjects() {
    try {
      const { data } = await projectApi.getAllNumberProjects();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async getBackgrounds() {
    try {
      const { data } = await projectApi.getBackgrounds();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async postBackgrounds(payload: any) {
    const rootStore = useRootStore();
    rootStore.loadPercentage = 0;
    rootStore.loaderFile = true;
    return new Promise((resolve, reject) => {

      const urlBase =
        process.env.NODE_ENV === "production"
          ? "https://bytalent.ru/api/"
          : "http://localhost:3000/";

      const formData = createFormData(payload);
      const token = window.localStorage.getItem("token");

      const req = new XMLHttpRequest();

      req.onprogress = function (event) {
        console.log(
          "Получено с сервера " + event.loaded + " байт из " + event.total
        );
      };
      req.onerror = function (event) {
        reject("ошибка");
      };
      req.onreadystatechange = reqChange;

      req.open("POST", `${urlBase}project/backgrounds`);
      req.setRequestHeader("Authorization", "Bearer " + token);
      req.send(formData);

      function reqChange() {
        if (req.readyState === 2 || req.readyState === 3) {
          rootStore.loadPercentage = req.readyState * 25;
        } else if (req.readyState === 4) {
            rootStore.loadPercentage = req.readyState * 25;
            setTimeout(() => {
              rootStore.loaderFile = false;
              rootStore.loadPercentage = 0;
              const result = JSON.parse(req.response);
              resolve(result);
            }, 1000);
        }
      }
    });
  },
  async selectBackground(projectId: number, backgroundId: number) {
    try {
      await projectApi.selectBackground(projectId, backgroundId);
    } catch (e) {
      console.error(e);
    }
  },
  async uploadFileProject(projectId: number, payload: any) {
    try {
      const formData = new FormData();
      for (const index in payload) {
        formData.append("files", payload[index]);
      }
      const { data } = await projectApi.uploadFileProject(projectId, formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async deleteBackgrounds(id: number) {
    try {
      const { data } = await projectApi.deleteBackgrounds(id);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async createProject(payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await projectApi.createProject(formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async getAllProjects() {
    try {
      const { data } = await projectApi.getAllProjects();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  async updateProject(projectId: any, payload: any) {
    try {
      const formData = createFormData(payload);
      const { data } = await projectApi.updateProject(projectId, formData);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};

// async postBackgrounds(payload: any) {
//   // try {
//   //   const formData = createFormData(payload);
//   //   const { data } = await projectApi.postBackgrounds(formData);
//   //   return data;
//   // } catch (e) {
//   //   console.error(e);
//   // }

//   const urlBase = process.env.NODE_ENV === "production"
//     ? "https://bytalent.ru/api/"
//     : "http://localhost:3000/";

//   const formData = createFormData(payload);
//   const token = window.localStorage.getItem("token");

//   const req = new XMLHttpRequest();

//   req.addEventListener("load", reqLoadFile);
//   // req.addEventListener("progress", updateProgress);
//   // req.onload = reqOnloadFile;
//   req.onprogress = function(event) {
//     console.log( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
//   }
//   req.onreadystatechange  = reqChange

//   req.open("POST", `${urlBase}project/backgrounds`);
//   req.setRequestHeader("Authorization", "Bearer " + token)
//   req.send(formData);

//   function reqChange() {
//     console.log('req-change: ', req.readyState)

//   }

//   // function updateProgress(progress: any) {
//   //   console.log('req-progres: ', req.responseText)
//   //   // console.log('progres: ', progress)
//   // }

//   // function reqOnloadFile(progress: any) {
//   //   console.log('req-onload: ', req.responseText)
//   //   // console.log('onload: ', progress)
//   // }

//   function reqLoadFile(progress: any) {
//     console.log('req-finish: ', req.responseText)
//     // console.log('finish: ', progress)
//   }
// },
