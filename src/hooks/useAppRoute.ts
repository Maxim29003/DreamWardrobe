import { RouteProp, useRoute } from "@react-navigation/native"
import { SCREENS } from "@routes/navigations.types"
import { StackParamList } from "@routes/stackParams"

const useAppRoute = <SCREEN extends SCREENS>() => {
  return useRoute<RouteProp<StackParamList, SCREEN>>()
}

export default useAppRoute