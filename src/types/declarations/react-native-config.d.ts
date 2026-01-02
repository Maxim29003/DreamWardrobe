declare module 'react-native-config' {
  export interface NativeConfig {
      ENDPOINT: string;
      PROJECT_ID: string;
      DREAM_WARDROBE_DB: string;
      PRODUCTS: string;
  }
  
  export const Config: NativeConfig
  export default Config
}