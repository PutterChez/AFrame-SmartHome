var cameraEl = document.querySelector('#camera');

cameraEl.addEventListener('componentchanged', function (evt) {
  if (evt.detail.name !== 'position') { return; }
  console.log(evt.detail.newData);
});