import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(itemClass, offset){
    this.itemsToReveal = $(itemClass);
    this.offset = offset;
    this.hideInitially();
    this.createWayPoints();
  }

  hideInitially(){
    this.itemsToReveal.addClass('reveal-item');
  }

  createWayPoints(){
    let offset = this.offset;
    this.itemsToReveal.each(function(index, el){
      var item = this;
      new Waypoint({
        element: item,
        handler: () => {
          $(item).addClass('reveal-item--visible')
        },
        offset
      });
    });
  }
}

export default RevealOnScroll;
