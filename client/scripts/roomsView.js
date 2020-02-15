var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  objToAccess: {},

  initialize: function(data) {
    var temp = [];
    // console.log(data);
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

    // RoomsView.$select.on('click', RoomsView.render);

  },

  render: function() {
    // event.preventDefault();
    var selectedName = this.$select.val();
    // RoomsView.objToAccess[selectedName] = undefined;

    var filterbyRoomName = function(data) {
      var roomArr = [];
      for (var i = 0; i < data.length; i += 1) {
        // console.log(data[i]);
        if (data[i].roomname === selectedName) {
          roomArr.push(data[i]);
        }
      }
      return roomArr;
      // console.log('callbacksuccess', data);
    };


    App.fetch(filterbyRoomName);
    console.log('array to access: ', RoomsView.objToAccess);

    // console.log('click!');
  },

  gatherArr: function(arr) {
    // console.log(arr[0]);
    var key = arr[0].roomname;
    RoomsView.objToAccess[key] = arr;
  }

};
// <option value="American">American flamingo</option>
