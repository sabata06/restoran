import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:"Bearer kpekbLB3KssY5ca44snqtVjs0Y0Oyy26eA4m9SdW1hsO99rFWeTGBGlxEsQByi-qLKDHQ0LPlD_BEqmPEtAnYNVIINAl-lp2FbXruMXtib6UCmMeNXil5lFooH1jZXYx"
    }
})