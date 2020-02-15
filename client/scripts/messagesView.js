var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

  },

  render: function(data) {
    // /data.length
    for (var i = 0; i < 10; i += 1) {
      if (data[i].text !== undefined && data[i].username !== undefined) {
        var html = MessageView.render(data[i]);
        $('#chats').append(html);
      }
    }


  }

};