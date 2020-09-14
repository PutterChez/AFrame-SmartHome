document.querySelector('[camera]').addEventListener('componentchanged', function (evt) {
  if (evt.name !== 'rotation') { return; }
      if (evt.newData.y < 180) {
        this.emit(eventName);
      }
});