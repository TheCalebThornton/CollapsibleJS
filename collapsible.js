/* **PLEASE READ**
    JQuery.slideToggle does not work well with tables.
    Instead of a smooth slide it will wait... and then hide the whole element.
    Wrap your collapsible content in a <div></div> and use that element as the content param...
 */
 function toggleCollapse(event, targetId, iconImgId, extendImgSrc, retractImgSrc) {
     event.preventDefault(); //prevent href tag from taking you to the top of the page

   	function CollapsibleException(message) {
       this.message = message;
       this.name = 'CollapsibleException';
     }
     var $target = $(targetId);
     var $iconImg = $(iconImgId);

     if(!$target.length){
     	throw new CollapsibleException('Could not locate collapsible target element with id: ' + targetId);
       return;
     }
     if(!$iconImg.length){
       throw new CollapsibleException('Could not locate img icon element with id: ' + iconImgId);
       return;
     }

     $target.slideToggle('slow');
     $target.toggleClass('collapsed');
     if($target.hasClass('collapsed')){
         $iconImg.attr('src', extendImgSrc);
         $iconImg.attr('alt', 'Extend');
     }
     else{
         $iconImg.attr('src', retractImgSrc);
         $iconImg.attr('alt', 'Retract');
     }
 };
