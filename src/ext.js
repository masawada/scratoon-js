const ENDPOINT = 'https://scratoon.herokuapp.com/register'

let ext = {
  sendScore: function(name, point) {
    var data = new FormData()
    data.append('name', name)
    data.append('point', point)

    fetch(ENDPOINT, {
      method: 'post',
      body: data,
      credentials: 'cors'
    }).then(res => {
      alert('送信しました')
    })
  }
}

export { ext }
