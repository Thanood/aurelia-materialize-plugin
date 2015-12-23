System.register([], function (_export) {
  'use strict';

  _export('fireEvent', fireEvent);

  function createEvent(name) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);
    return event;
  }

  function fireEvent(element, name) {
    var event = createEvent(name);
    element.dispatchEvent(event);
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9ldmVudHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxXQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDekIsUUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMxQyxTQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDbEMsV0FBTyxLQUFLLENBQUM7R0FDZDs7QUFFTSxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ3ZDLFFBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixXQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0dBQzlCIiwiZmlsZSI6ImNvbW1vbi9ldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7ICBcclxuICB2YXIgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICBldmVudC5pbml0RXZlbnQobmFtZSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgcmV0dXJuIGV2ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmlyZUV2ZW50KGVsZW1lbnQsIG5hbWUpIHsgIFxyXG4gIHZhciBldmVudCA9IGNyZWF0ZUV2ZW50KG5hbWUpO1xyXG4gIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
