if (Meteor.isClient) {
  qrScanner.on('scan', function (err, message) {
    if (message) {
      alert(message);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
