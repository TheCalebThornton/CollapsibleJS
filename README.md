# CollapsibleJS
Simple library for making collapsible sections on an HTML page


## Dependencies
This library relies on JQuery-1.4.4 or greater to work


## USAGE
Consider the following HTML code:
``` html
<script type="text/javascript" src="*rootContextPath*/lib/Collapsible-1.0.0.js"></script>

<a id="collapsibleLink" href="#">
  <h1 id="sectionHeader">
    <img id="collapsibleIcon" src="*rootContextPath*/images/minus-symbol.jpg" alt="Retract"/>
    My Collapsible Section
  </h1>
</a>
<br/>
<div id="targetCollapsibleSection">
  <p>Some stuff about things</p>
</div>
```
*Note that you will need to add a Minus symbol and a Plus symbol to your project*

In order to make this div collapsible, add the following Javascript to your page:
``` javascript
//set these to the path of your collapsible images
var extendImgSrc = '*rootContextPath*/images/plus-symbol.jpg';
var retractImgSrc = '*rootContextPath*/images/minus-symbol.jpg';
$('#collapsibleLink').bind("click", function(event){
    return toggleCollapse(event, '#targetCollapsibleSection', '#collapsibleIcon', extendImgSrc, retractImgSrc)
  });
```

And that's it! You will now have a collapsible HTML section on your page.

Please note that you can choose to have your section start in a collapsed state
OR an expanded state. CollapsibleJS will determine which state it is in and adjust accordingly.
If you choose to start in a collapsed state, your HTML might look like this:
``` html
<a id="collapsibleLink" href="#">
  <h1 id="sectionHeader">
    <img id="collapsibleIcon" class='collapsed' src="*rootContextPath*/images/plus-symbol.jpg" alt="Extend"/>
    My Collapsible Section
  </h1>
</a>
...
```
*Note the differences with 'alt', 'src' and 'class' attributes on the img tag.*


## Future enhancements:
- Remove dependency on JQuery
- Allow the user to pass in a class OR Id attribute identifier for target
- Support Module Loaders
- More elegant error handling


## License
Copyright (c) the UMD contributors

Licensed under the MIT License.
