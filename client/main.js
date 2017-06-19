import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


// Template.showBanner.rendered({
// // $("#myModal").modal("show");
// alert("fff");
// });
//

Template.showBanner.events({
  'click button'(event, instance) {

  },
});

Template.showBanner.rendered = function() {
    if(!this._rendered) {
      this._rendered = true;
      console.log('Template onLoad');
      // alert("fff");
      $("#myModal").modal("show");
    }
}
