### LineControl Editor
LineControl allows you to add a beautiful, responsive and fast online Text Editor to your web application/site. LineControl is designed to work with Twitter Bootstrap and as a Jquery Plugin. To add the plugin to your project, just include the JS and CSS files to your HTML template:
```
<script src="editor.js"></script>
<link type="text/css" href="editor.css" rel="stylesheet"/>
```
and then in your script section just call:

```
var editor = $("#placeHolder").Editor();
```

### Dependencies
LineControl is built as a JQuery Plugin and supports Jquery 2.1.0. LineControl is also built for responsiveness and uses Twitter Bootstrap and Font-Awesome icons to render its Interface. The following is required for your LineControl to function perfectly
* Jquery (2.1.0)
* Twitter Bootstrap (3.1.1)
* Font-Awesome (4.0.3)

###Browser Support
LineControl uses HTML5 for some of its functions to deliver a faster user experience. LineControl works well for most Modern browsers:
* Google Chrome
* Mozilla Firefox
* Safari
* Internet Explorer (>=10)

### Adding Custom Options
If you want to add custom Options to the editor just do:
```
editor('createMenuItem', {"text": "TouchGlasses", //Text replaces icon if its not available
                          "icon":"fa fa-glass", //This is a Font-Awesome Icon 
                          "tooltip": "Touch Glasses",
                          "custom": function(button, parameters){ 
                                        //Your Custom Function.
                                      alert("Cheers!!!");
                                    },
                          "params": {'option1':"value1"} //Any custom parameters you want to pass
                                                           //to your custom function.
 });
```

Read more about extending LineControl [here](https://github.com/suyati/line-control/wiki)

### Authors and Contributors
LineControl is developed by [Suyati Technologies](http://suyati.com/products).
It is written and maintained by their Open Source Development Team:
* Krishnanunni P N (@kpnunni)
* Arun V B (@abalakrishnan)
* Naveen Bos TM (@naveenbos)
* Sujith Panikkam (@spanikkam)

### Support or Contact
Have Suggestions? Want to give us something to do? Contact us at : **support@suyati.com**
