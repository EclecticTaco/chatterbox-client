var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  render: function(data) {
    // /data.length
    for (var i = 0; i < 10; i += 1) {
      if (data[i].text !== undefined) {
        var html = MessageView.render(data[i]);
        $('#chats').append(html);
      }
    }


  }

};