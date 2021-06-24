
import axios from 'axios';
const fetchContent = async (url) => {
    const response = await axios.get(url);
    return response;
    
  };

  export default fetchContent;