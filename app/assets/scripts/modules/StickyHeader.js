import $ from 'jquery';
import '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor(){
    this.lazyImages = $('.lazyload');
    this.siteHeader = $('.site-header');
    this.pageSections = $('.page-section');
    this.headerTrigger = $('.large-hero__title');
    this.headerLinks = $('.primary-nav a');
    this.events();
  }

  refreshWaypoints(){
    this.lazyImages.on('load', () => {
      Waypoint.refreshAll();
    })
  }

  events(){
    this.createHeaderWayPoint();
    this.createWaySectionsWayPoints();
    this.smoothScrolling();
    this.refreshWaypoints();
  }

  createHeaderWayPoint(){
    let el = this.headerTrigger;
    new Waypoint({
      element: el[0],
      handler: (direction) => {
        // this.siteHeader.toggleClass('site-header--dark');
        // or
        if(direction === "up"){
          this.siteHeader.removeClass('site-header--dark');
        }else{
          this.siteHeader.addClass('site-header--dark');
        }
      }
    });
  }

  createWaySectionsWayPoints(){
    this.pageSections.each((index, el) => {
      //DOWN waypoint
      new Waypoint({
        element: el,
        handler: (direction) => {
          if(direction === 'down'){
            var matchingID = $(el).attr('data-matching-link');
            this.headerLinks.removeClass('link-active');
            $(matchingID).addClass('link-active');
          }
        },
        offset: '20%'
      });
      //UP waypoint
      new Waypoint({
        element: el,
        handler: (direction) => {
          if(direction === 'up'){
            var matchingID = $(el).attr('data-matching-link');
            this.headerLinks.removeClass('link-active');
            $(matchingID).addClass('link-active');
          }
        },
        offset: '-70%'
      });
    });
  }

  smoothScrolling(){
    this.headerLinks.smoothScroll({
      easing: 'swing',
      speed: 600
    });
  }
}

export default StickyHeader;
