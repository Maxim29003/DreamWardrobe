import { Storage } from 'redux-persist'
import { MMKV } from 'react-native-mmkv'

export const storage = new MMKV()

export const reduxStorage: Storage = {
  setItem: (key, value) => {
    console.log("Storage set",key, value)
    storage.set(key, value)
    return Promise.resolve(true)
  },
  getItem: (key) => {
   console.log("Storage get",key)
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    console.log("Storage delete",key)
    storage.delete(key)
    return Promise.resolve()
  },
}