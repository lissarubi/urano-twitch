function ban(message, user, client){
    if (message.split(' ')[0] == '!ban') {
      const banned = message.split(' ')[1]
      const random = Math.random() < 0.7

      if (random){
        client.timeout(url, banned, 10)
        client.action(url, `${banned}, Foi banido!`);
      }
      else{
        client.action(url, `${banned}, Não Foi banido!`);
      }
    }
  }

  module.exports = dd
