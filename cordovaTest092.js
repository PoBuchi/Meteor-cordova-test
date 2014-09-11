if (Meteor.isCordova) {

  Meteor.startup(function () {
    navigator.splashscreen.hide();  
    });
}


if (Meteor.isClient) {
  // counter starts at 0

  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log('%c Meteor.absoluteUrl()   ',  'background: #B3CC57; color: white; padding: 1px 15px 1px 5px;', Meteor.absoluteUrl());
    // code to run on server at startup
  });
}
