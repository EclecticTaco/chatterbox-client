var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function(data) {
    var temp = [];
    console.log(data);
    for (var i = 0; i < data.length; i += 1 ) {
      if ( data[i].roomname !== undefined && (!temp.includes(data[i].roomname))) {
        temp.push(data[i].roomname);
      }
    }
    var template = _.template(
      `
      <option value= <%= roomName %> > <%= roomName %> </option>
      `
    );
    temp.forEach(function(name) {
      var rendered = template({
        roomName: name,
      });
      $('select').append(rendered);
    });
  },

  render: function() {
  }

};
// <option value="American">American flamingo</option>
