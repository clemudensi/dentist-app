import axios from 'axios';

const baseUrl = 'https://dentist-directory-1c7d3.firebaseio.com/';

let HTTP = {
  get: (url) => {
    return (
      axios.get(baseUrl + url)
      .then(response => {
        return response.data
      }).catch(err => {
        return err;
      })
    )
  },
  post: (url, payload) => {
    return (
      axios.post(baseUrl + url, payload)
      .then(response => {
        return response.data
      }).catch(err => {
        return err;
      })
    )
  }
}

export default HTTP;
