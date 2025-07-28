import { NavigationProp, useNavigation } from "@react-navigation/native"
import { SCREENS } from "@routes/navigations.types"
import { StackParamList } from "@routes/stackParams"

const useAppNavigation = <SCREEN extends SCREENS>() => {
  return useNavigation<NavigationProp<StackParamList, SCREEN>>()
}

export default useAppNavigation