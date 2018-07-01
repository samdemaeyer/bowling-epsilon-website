/* eslint-disable func-names */
export default function megaMenu(jQuery) {
  const $ = jQuery;

  // default settings
  const defaultSettings = {
    // DESKTOP MODE SETTINGS
    logo_align: 'left', // align the logo left or right. options (left) or (right)
    links_align: 'left', // align the links left or right. options (left) or (right)
    socialBar_align: 'left', // align the socialBar left or right. options (left) or (right)
    searchBar_align: 'right', // align the search bar left or right. options (left) or (right)
    trigger: 'hover', // show drop down using click or hover. options (hover) or (click)
    effect: 'fade', // drop down effects. options (fade), (scale), (expand-top), (expand-bottom), (expand-left), (expand-right)
    effect_speed: 400, // drop down show speed in milliseconds
    sibling: true, // hide the others showing drop downs if this option true. this option works on if the trigger option is 'click'. options (true) or (false)
    outside_click_close: true, // hide the showing drop downs when user click outside the menu. this option works if the trigger option is 'click'. options (true) or (false)
    top_fixed: false, // fixed the menu top of the screen. options (true) or (false)
    sticky_header: false, // menu fixed on top when scroll down down. options (true) or (false)
    sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    menu_position: 'horizontal', // change the menu position. options (horizontal), (vertical-left) or (vertical-right)
    full_width: true, // make menu full width. options (true) or (false)
    // MOBILE MODE SETTINGS
    mobile_settings: {
      collapse: false, // collapse the menu on click. options (true) or (false)
      sibling: true, // hide the others showing drop downs when click on current drop down. options (true) or (false)
      scrollBar: true, // enable the scroll bar. options (true) or (false)
      scrollBar_height: 400, // scroll bar height in px value. this option works if the scrollBar option true.
      top_fixed: false, // fixed menu top of the screen. options (true) or (false)
      sticky_header: false, // menu fixed on top when scroll down down. options (true) or (false)
      sticky_header_height: 200, // sticky header height top of the screen. activate sticky header when meet the height. option change the height in px value.
    },
  };
  // extend function
  $.fn.megaMenu = function (s) {
    let settings = s;
    settings = $.extend({}, defaultSettings, settings || {});
    return this.each(function () {
      // variables
      const $this = $(this);
      const $ul = 'ul';
      const $li = 'li';
      const $a = 'a';
      const menuLogo = $this.find('.menu-logo');
      const menuLogoLi = menuLogo.children($li);
      const menuLinks = $this.find('.menu-links');
      const menuLinksLi = menuLinks.children($li);
      const menuSocialBar = $this.find('.menu-social-bar');
      const menuSearchBar = $this.find('.menu-search-bar');
      const mobileTriggerButton = '.menu-mobile-collapse-trigger';
      const mobileDropDownTrigger = '.mobileTriggerButton';
      const desktopDropDownTrigger = '.desktopTriggerButton';
      const activeClass = 'active';
      const activeTrigger = 'activeTrigger';
      const activeTriggerMobile = 'activeTriggerMobile';
      const dropDown = '.drop-down-multilevel, .drop-down, .drop-down-tab-bar';
      const desktopTopFixed = 'desktopTopFixed';
      const mobileTopFixed = 'mobileTopFixed';
      const fullWidth = 'menuFullWidth';

      // Main Object
      const Canvas = {
        // menu full width function
        menu_full_width() {
          // check if the full_width options true
          if (settings.full_width === true) {
            // add class menu full width
            $this.addClass(fullWidth);
          }
        },
        // logo align function
        logo_Align() {
          // check is the logo align right
          if (settings.logo_align === 'right') {
            // add class menu align right
            menuLogo.addClass('menu-logo-align-right');
          }
        },
        // menu links align right
        links_Align() {
          // check if the links align right
          if (settings.links_align === 'right') {
            // add class menu menu links align
            menuLinks.addClass('menu-links-align-right');
          }
        },
        // menu social bar align right
        social_bar_Align() {
          // check if the social bar align right
          if (settings.socialBar_align === 'right') {
            // add class menu social bar align
            menuSocialBar.addClass('menu-social-bar-right');
          }
        },
        // menu search bar align right
        search_bar_Align() {
          // check if the search bar align right
          if (settings.searchBar_align === 'left') {
            // add class menu search bar align
            menuSearchBar.addClass('menu-search-bar-left');
          }
        },
        // mobile collapse trigger button
        collapse_trigger_button() {
          // check if the collapse true
          if (settings.mobile_settings.collapse === true) {
            // append the mobile collapse trigger button
            menuLogoLi.append('<div class="menu-mobile-collapse-trigger">' +
                              '<span></span>' +
                              '</div>');
            // hide the menu links, menu social bar
            const drop_down = menuLinks.add(menuSocialBar);
            drop_down.hide(0);
            // apply css
            menuSearchBar.addClass(activeClass);
            // add the click trigger
            $this.find(mobileTriggerButton).on('click', function() {
              // check if the menu links and menu social bar hide
              if (drop_down.is(':hidden')) {
                // show the drop down
                $(this).addClass(activeClass);
                drop_down.show(0);
              } else {
                // hide the drop down
                $(this).removeClass(activeClass);
                drop_down.hide(0);
              }
              return false;
            });
          }
        },
        // switch effects
        switch_effects() {
          switch (settings.effect) {
            case 'fade':
              $this.find(dropDown).addClass('effect-fade');
              break;
            case 'scale':
              $this.find(dropDown).addClass('effect-scale');
              break;
            case 'expand-top':
              $this.find(dropDown).addClass('effect-expand-top');
              break;
            case 'expand-bottom':
              $this.find(dropDown).addClass('effect-expand-bottom');
              break;
            case 'expand-left':
              $this.find(dropDown).addClass('effect-expand-left');
              break;
            case 'expand-right':
              $this.find(dropDown).addClass('effect-expand-right');
              break;
          }
        },
        // transition delay
        transition_delay() {
          // add the effects class on drop down
          $this.find(dropDown).css({
            webkitTransition: 'all ' + settings.effect_speed + 'ms ease ',
            transition: 'all ' + settings.effect_speed + 'ms ease '
          });
        },
        // hover trigger for desktop mode
        hover_trigger() {
          // check if the trigger hover
          if (settings.trigger === 'hover') {
            // add the effects class on drop down
            Canvas.transition_delay();
            // add hover trigger
            $this
              .find(dropDown)
              .parents($li)
              .addClass('hoverTrigger');
            // switch effects
            Canvas.switch_effects();
          }
        },
        // click trigger for mobile mode
        mobile_trigger() {
          // append the mobile trigger div
          $this
            .find(dropDown)
            .prev($a)
            .append('<div class="mobileTriggerButton"></div>');
          // add the click trigger on mobile trigger div
          $this.find(mobileDropDownTrigger).on('click', function() {
            // variables
            var elem = $(this),
              parents = elem.parents($a),
              drop_down = parents.next(dropDown);
            // check if the drop down is hidden
            if (drop_down.is(':hidden')) {
              // check if the sibling true
              if (settings.mobile_settings.sibling === true) {
                // hide the others opens drop downs
                elem
                  .parents($this)
                  .siblings($ul + ',' + $li)
                  .find(dropDown)
                  .hide(0);
                // remove active class
                elem
                  .parents($this)
                  .siblings($li)
                  .removeClass(activeTriggerMobile);
                elem
                  .parents($this)
                  .siblings($ul)
                  .find($li)
                  .removeClass(activeTriggerMobile);
              }
              // add active class
              parents.parent($li).addClass(activeTriggerMobile);
              // show drop down
              drop_down.show(0);
            } else {
              // remove active class
              parents.parent($li).removeClass(activeTriggerMobile);
              // hide drop down
              drop_down.hide(0);
            }
            // stop a tag going to anywhere
            return false;
          });
          // stop icons click behaviour
          $this.find('i.fa.fa-indicator').on('click', function() {
            return false;
          });
        },
        // click trigger for desktop mode
        click_trigger() {
          // check if the trigger click
          if (settings.trigger === 'click') {
            // append the desktop trigger div
            $this
              .find(dropDown)
              .prev($a)
              .append('<div class="desktopTriggerButton"></div>');
            // add click trigger div
            $this
              .find(dropDown)
              .parents($li)
              .addClass('ClickTrigger');
            // add the transition on drop down
            Canvas.switch_effects();
            Canvas.transition_delay();
            // add the click trigger on desktop trigger div
            $this.find(desktopDropDownTrigger).on('click', function(event) {
              event.stopPropagation();
              event.stopImmediatePropagation();
              // variables
              var elem = $(this),
                parents = elem.parents($a),
                drop_down = parents.next(dropDown);
              // check if the drop down is hidden
              if (!drop_down.hasClass(activeClass)) {
                // check if the sibling true
                if (settings.sibling === true) {
                  // hide the others opens drop downs
                  elem
                    .parents($this)
                    .siblings($ul + ',' + $li)
                    .find(dropDown)
                    .removeClass(activeClass);
                  // remove active class
                  elem
                    .parents($this)
                    .siblings($li)
                    .removeClass(activeTrigger);
                  elem
                    .parents($this)
                    .siblings($ul)
                    .find($li)
                    .removeClass(activeTrigger);
                }
                // add active class
                parents.parent($li).addClass(activeTrigger);
                // show drop down
                drop_down.addClass(activeClass);
              } else {
                // remove active class
                parents.parent($li).removeClass(activeTrigger);
                // hide drop down
                drop_down.removeClass(activeClass);
              }
              // stop a tag going to anywhere
              //return false;
            });
          }
        },
        // outside click to close drop downs
        /*outside_close() {
                  // check if the outside close setting true for desktop
                  if (settings.outside_click_close === true
                      && settings.trigger === 'click'
                      && $this.find(dropDown).is(':visible')) {
                      // add the click trigger on document
                      $(document).off('click').on('click', function (event) {
                          if (!$this.is(event.target) && $this.has(event.target).length === 0) {
                              $this.find(dropDown).removeClass(activeClass);
                              menuLinksLi.removeClass('activeTrigger');
                          }
                      });
                  } else {
                      // on mobile mode off the click trigger
                      $(document).off('click');
                  }
              },*/
        // scroll bar for mobile mode
        scroll_bar() {
          // check if the scroll bar true
          if (settings.mobile_settings.scrollBar === true) {
            // add the css on menu links
            menuLinks.css({
              maxHeight: settings.mobile_settings.scrollBar_height + "px",
              overflow: "auto"
            });
          }
        },
        // menu fixed on top
        top_Fixed() {
          // check if the top fixed true for desktop mode
          if (settings.top_fixed === true) {
            $this.addClass(desktopTopFixed);
          }
          // mobile mode top fixed
          if (settings.mobile_settings.top_fixed) {
            $this.addClass(mobileTopFixed);
          }
        },
        // sticky header
        sticky_Header() {
          // variable
          var $window = $(window),
            scrollFlag = true,
            scrollFlagMobile = true;
          // media query
          if (!$this.find(dropDown).is(':hidden')) {
            // off the scroll
            $window.off('scroll');
            // check if the sticky header true
            if (
              settings.sticky_header === true &&
              settings.menu_position === 'horizontal' &&
              settings.top_fixed === false
            ) {
              // scroll function
              $window.on('scroll', function () {
                if ($window.scrollTop() > settings.sticky_header_height) {
                  // check if flag true
                  if (scrollFlag === true) {
                    // fade out
                    $this.fadeOut(200, function() {
                      // add class and fade in
                      $(this)
                        .addClass(desktopTopFixed)
                        .fadeIn(200);
                    });
                    // scroll flag false
                    scrollFlag = false;
                  }
                } else {
                  // check if flag false
                  if (scrollFlag === false) {
                    // fade out
                    $this.fadeOut(200, function() {
                      // add class and fade in
                      $(this)
                        .removeClass(desktopTopFixed)
                        .fadeIn(200);
                    });
                    // scroll flag true
                    scrollFlag = true;
                  }
                }
              });
            }
          } else {
            // off the scroll
            $window.off('scroll');
            // check if the mobile sticky true
            if (
              settings.mobile_settings.sticky_header === true &&
              settings.top_fixed === false
            ) {
              // on the scroll
              $window.on('scroll', function() {
                if (
                  $window.scrollTop() >
                  settings.mobile_settings.sticky_header_height
                ) {
                  // check if flag true
                  if (scrollFlagMobile === true) {
                    // add class
                    $this.addClass(mobileTopFixed);
                    // flag false
                    scrollFlagMobile = false;
                  }
                } else {
                  // check if flag false
                  if (scrollFlagMobile === false) {
                    // remove class
                    $this.removeClass(mobileTopFixed);
                    // scroll flag true
                    scrollFlagMobile = true;
                  }
                }
              });
            }
          }
        },
        // position change
        position() {
          // check if the position left
          if (settings.menu_position === 'vertical-left') {
            $this.addClass('vertical-left');
          } else if (settings.menu_position === 'vertical-right') {
            $this.addClass('vertical-right');
          }
        }
      };

      // call functions
      Canvas.menu_full_width();
      Canvas.logo_Align();
      Canvas.links_Align();
      Canvas.social_bar_Align();
      Canvas.search_bar_Align();
      Canvas.collapse_trigger_button();
      Canvas.hover_trigger();
      Canvas.mobile_trigger();
      Canvas.click_trigger();
      // Canvas.outside_close();
      Canvas.scroll_bar();
      Canvas.top_Fixed();
      Canvas.sticky_Header();
      Canvas.position();
      // window resize function used for update the function on windows resize
      $(window).resize(() => {
        // Canvas.outside_close();
        Canvas.sticky_Header();
      });
    });
  };
}
