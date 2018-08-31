(async () => {
    function waitSeconds(millSeconds) {
        return new Promise(resolve => setTimeout(resolve, millSeconds))
    }
    async function triggerDragAndDrop (elemDrag, elemDrop) {

  // function for triggering mouse events
  var fireMouseEvent = function (type, elem, centerX, centerY) {
    var evt = document.createEvent('MouseEvents');
    evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, false, false, false, false, 0, elem);
    elem.dispatchEvent(evt);
  };

  // fetch target elements
  if (!elemDrag || !elemDrop) {
      console.log('elem not found!')
      return
    };

  // calculate positions
  var pos = elemDrag.getBoundingClientRect();
  var center1X = Math.floor((pos.left + pos.right) / 2);
  var center1Y = Math.floor((pos.top + pos.bottom) / 2);
  pos = elemDrop.getBoundingClientRect();
  var center2X = Math.floor(pos.right);
  var center2Y = Math.floor((pos.top + pos.bottom) / 2);
  
  // mouse over dragged element and mousedown
  fireMouseEvent('mousemove', elemDrag, center1X, center1Y);
  fireMouseEvent('mouseenter', elemDrag, center1X, center1Y);
  fireMouseEvent('mouseover', elemDrag, center1X, center1Y);
  fireMouseEvent('mousedown', elemDrag, center1X, center1Y);

  // start dragging process over to drop target
  fireMouseEvent('dragstart', elemDrag, center1X, center1Y);
  fireMouseEvent('drag', elemDrag, center1X, center1Y);
  fireMouseEvent('mousemove', elemDrag, center1X, center1Y);
  fireMouseEvent('drag', elemDrag, center2X, center2Y);
  let destXPos = center2X
  while (destXPos > 0) {
    fireMouseEvent('mousemove', elemDrop, center2X - destXPos, center2Y - (Math.floor(Math.random() * 10)));
    await waitSeconds(5)
    destXPos = destXPos - (Math.floor(Math.random() * 10))
  }
  if (destXPos > 0) {
      fireMouseEvent('mousemove', elemDrop, center2Xs, center2Y - (Math.floor(Math.random() * 10)));
  }
  // trigger dragging process on top of drop target
  fireMouseEvent('mouseenter', elemDrop, center2X, center2Y);
  fireMouseEvent('dragenter', elemDrop, center2X, center2Y);
  fireMouseEvent('mouseover', elemDrop, center2X, center2Y);
  fireMouseEvent('dragover', elemDrop, center2X, center2Y);
  
  // release dragged element on top of drop target
  fireMouseEvent('drop', elemDrop, center2X, center2Y);
  fireMouseEvent('dragend', elemDrag, center2X, center2Y);
  fireMouseEvent('mouseup', elemDrag, center2X, center2Y);

  return true;
};
    const $ = document.querySelector.bind(document)
    const phoneNum = '15551202989'
const loginBtn = $('.login_phone > span')
const phoneForm = $('input#phone')
loginBtn.click()
await waitSeconds(2000)
console.log('fill phone num!')
phoneForm.value = phoneNum
const sliderIndex = $('div#loginVerify').dataset.ncIdx
// drag
triggerDragAndDrop($(`#nc_${sliderIndex}_n1z`), $(`#nc_${sliderIndex}__scale_text`))
await waitSeconds(1000)

})()
