AFRAME.registerComponent('trigger-on-look-behind', {
  schema: {type: 'string'},

  init: function () {
    var eventName = this.data;
    this.el.addEventListener('componentchanged', function (evt) {
      if (evt.name !== 'rotation') { return; }
        console.log(eventName)
    });
  }
});