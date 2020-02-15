var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

    /*

    display "all" message to a certain number


*/
  },

  render: function(data) {
    // /data.length
    for (var i = 0; i < data.length; i += 1) {
      if (data[i].text !== undefined) {
        var html = MessageView.render(data[i]);
        $('#chats').append(html);
      }
    }


  }

};