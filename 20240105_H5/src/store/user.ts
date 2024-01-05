import { ref } from 'vue'
import { defineStore } from 'pinia'
import { apiGetProfile } from '@/api/loginApi'

export const userStore = defineStore('user', () => {
  const profile = ref()

  const getProfile = async () => {
    const res = await apiGetProfile()
    profile.value = res.data
  }

  const clearProfile = () => {
    profile.value = null
  }

  return { profile, getProfile, clearProfile }
}, {
  persist: true
})