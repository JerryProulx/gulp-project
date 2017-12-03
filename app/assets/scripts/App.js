import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

$(document).ready(function(){

  let mobileMenu = new MobileMenu();

  let revealFeatures = new RevealOnScroll('.feature-item', '85%');

  let revealTestimonial = new RevealOnScroll('.testimonial', '50%');

  let siteHeader = new StickyHeader();

  let modal = new Modal();

})
