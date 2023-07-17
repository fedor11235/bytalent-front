import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: (): HomeStore => ({
    uploadProject: false,
    popupOrder: false,
    secondPage: false,
    infoPage: false,
  })
})

type HomeStore = {
  uploadProject: boolean
  popupOrder: boolean
  secondPage: boolean
  infoPage: boolean
}
