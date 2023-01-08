import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  musicPlayer: {
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    position:'absolute',
    //backgroundColor:'blue',
    top:"24%",
    padding:38,

    
  },
  albumContainer: {
    height: 320,
    width: 280,
    marginBottom: 25,
    backgroundColor: "red",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },

  albumImage: {
    height: "100%",
    width: "100%",
    borderRadius: 6,
  },
  titleContainer: {
    width: 189,
    height: 52,
    marginBottom: 28,
    alignItems: "flex-start",
  },

  titleMusic: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  titleArtist: {
    fontSize: 19,
    color: "white",
  },

  sliderContainer: {
    alignItems: "center",
    //backgroundColor: "red",
  },

  slider: {
    width: 320,
    height: 42,
  },

  progressLabelContainer:{
    width:300,
    flexDirection:'row',
    justifyContent:'space-between'

  },

  progressLabelTxt:{
    color:'white'
  },

  musicControls:{
    flexDirection:'row',
    justifyContent:"space-between",
    width:'60%',
    marginTop:28

  },
 

});
