import { StyleSheet, Dimensions } from "react-native"

interface IStylesBottomSheet {
  sheetOverDrag: number
}

const DIMENSIONS = Dimensions.get("window")

const styles = ({ sheetOverDrag  }: IStylesBottomSheet) => {
  return StyleSheet.create({
    container: {
      width: DIMENSIONS.width,
      backgroundColor: "#1E1F23",
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
  
      position: "absolute",
      zIndex: 1,
      bottom: -sheetOverDrag * 1.8,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
    },
    contentBottomSheet: {
      backgroundColor: "#FFFFFF",
      justifyContent: "center", 
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: "80%"
    }
  })
}

export default styles