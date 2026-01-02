import { RouteProp, useRoute } from "@react-navigation/native"
import { RootStackParamList } from "@routes/navigations.types"


const useAppRoute = <SCREEN extends keyof RootStackParamList>() => {
  return useRoute<RouteProp<RootStackParamList, SCREEN>>()
}

export default useAppRoute
