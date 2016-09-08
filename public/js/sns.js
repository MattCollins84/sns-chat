var setupSNS = function(name) {
  
  SNS = new SNSClient({
    userData: {
      name: name,
      type: "chat"
    },
    userQuery: {
      type: "chat"
    }
  })

  SNS.on('connected', function() {
    app.users.push({
      name: name,
      type: "chat"
    })
  })

  SNS.on('currentUsers', function(users) {
    users.forEach(function(user) {
      app.users.push(user);
    })
  })

  SNS.on('connectedUser', function(user) {
    app.users.push(user)
  })

  SNS.on('disconnectedUser', function(user) {
    
    // find the index of the question in our array
    var index = app.users.findIndex(function(el, i, arr) { 
      return el.name == user.name 
    });

    // if this element is found - delete it!
    if (index !== -1) {
      app.users.splice(index, 1)
    }

  })

  SNS.on('notification', function(msg) {
    app.messages.push({
      name: msg.name,
      msg: msg.msg
    })
  })

  return SNS;

}