import axios from 'axios';

axios.get('http://localhost:8989/test_get_method?hour=23&minute=4')
  .then(function (response) {
    return response.data;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
})

function post_method(requestId){
    const time = new Date()
    axios.post('http://localhost:8989/test_get_method',{
            hour : time.getHours,    // 24h clock
            minute: time.getMinutes,
            requestId:requestId
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
}