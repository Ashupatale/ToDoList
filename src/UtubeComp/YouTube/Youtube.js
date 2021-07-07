import axios from "axios";

const KEY="vi94HR9aDYW9o00VtGF9H6RNe3RpIKs7"

export default axios.create({
    baseURL:"api.giphy.com/v1/gifs/random",
    params:{
        part:"snippet",
        limit:5,
        api_key:KEY
    }
})