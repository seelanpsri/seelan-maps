import axios from "axios";
const BASE_URL="https://maps.googleapis.com/maps/api/place";
const API_KEY="AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg"

const nearByPlace=(lat,lng,required)=>axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location="+lat+","+lng+"&radius=150000&type="+required+"&key=AIzaSyCFgrivo6_Va0_t8BS8Mi2rfuFCC9cduQg")
const searchByText=(searchText)=>axios.get(BASE_URL+
    "/textsearch/json?query="+searchText+
"&key="+API_KEY)
export default{
    nearByPlace,
    searchByText
}