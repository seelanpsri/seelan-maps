import { Share } from "react-native"
const SharePlace=(place)=>{
      Share.share({
        
            title:"Share Business",
            message:"Its a wonderfull place that is "+place.name+'\n'+"Address: "+place.vicinity
      
      })
}
export default{
    SharePlace
}