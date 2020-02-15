var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    // App.username
    var messageString = $('#message').val();
    var postObj = {
      username: App.username,
      text: messageString
    };
    Parse.create(postObj, App.fetch()); // cb to refetch
    console.log(postObj);

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};