export default function trigger (el, type) {
  var e;
  if('createEvent' in document){
    e = document.createEvent('HTMLEvents');
    e.initEvent(type,false,true);
    el.dispatchEvent(e);
  } else {
    e = document.createEventObject();
    e.eventType = true;
    el.fireEvent('on'+e.eventType, e);
  }
}

