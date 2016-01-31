function frontEnd () {

	function regex() {
	}

	function Javascript_language() {

		function pitfall() {

		}

		function useful_code_snippets() {
		}

		function quiz() {
		}
	}

	function Browser() {



		function mobile_browser() {
			function safari_ios6_caching_ajax_result () {
				var source = "http://stackoverflow.com/questions/12506897/is-safari-on-ios-6-caching-ajax-results";
				// the problem is true if you use phoneGap
				// solution:
				
				// 1. javascript:
				var xhr = new XMLHttpRequest();
				xhr.open("post", 'uploader.php', true);
				xhr.setRequestHeader("pragma", "no-cache"); // prevent ajax caching

				// 2. jquery:
				//Check for iOS 6.0 and set Ajax header like this:
				$.ajaxSetup({ cache: false });
				// 3. jquery only no cache POST
				$.ajaxSetup({
				    type: 'POST',
				    headers: { "cache-control": "no-cache" }
				});
				// 4. server side solution also works: java
				httpResponse.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
				// 5. change request url
				var currentTime = new Date();
				var n = currentTime.getTime();
				postUrl = "http://www.example.com/test.php?nocache="+n;
				$.post(postUrl, callbackFunction);

				// summary
				// adding [cache-control: no-cache] in the request headers
				// adding a variable URL parameter such as the current time
				// adding [pragma: no-cache] in the response headers
				// adding [cache-control: no-cache] in the response headers
			}

			function detect_mobile_browser() {
				var source = "http://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device-in-jquery";

				// user agent detect
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 					// some code..
				}
				// here is another ua detect choice:
				// http://detectmobilebrowsers.com/
				
				// css way:
				/*
					@media only screen and (max-width: 760px) {
					  #some-element { display: none; }
					}
				*/
			}
		}
		function dom_api() {

			function file_api() {

			}
			function localStorage() {

			}
			function desktopNotification() {

			}
			function drag_drop() {

			}
		}

		function dom_event() {
			var eventReference = 'https://developer.mozilla.org/en-US/docs/Web/Events';
			var list_of_events = "http://www.w3schools.com/jsref/dom_obj_event.asp"
		}

		function IE_problem() {

		}

		function jsonp() {

		}

		function cors() {

			var explanation = "http://www.html5rocks.com/en/tutorials/cors/";
			// browser plugin is not limited by Same Origin Policy, so POSTMAN 
			// will work fine for testing ajax request.
		}
	}

	function Libraries () {
		function jquery() {

			function throttle_and_debounce() {
				var source = "http://benalman.com/projects/jquery-throttle-debounce-plugin/";
				var github = "https://github.com/cowboy/jquery-throttle-debounce/";

				// They all take in a function and a param, then returns a function.
				// Debounce absorb limited the number of calls.
				// Throttle absort time intervals. 
				$(window).resize( $.throttle( 250, resize_2 ) ); // This is the line you want!
				$('input:text').keyup( $.debounce( 250, ajax_lookup ) );
			}

			function remove_all_classes() {
				$("#item").removeClass(); 
				// if no param, all classes will be removed
			}

			function assign_many_css_properties() {
				$("#message").css({
				  'font-size' : '10px',
				  'width' : '30px',
				  'height' : '10px'
				});
				// or you can put css atributes in an class, and use .addClass(). 
				// addClass() could be better solution.
			}

			function select_select_option_by_text() {
				// not by value

				// <select>
				//     <option value="0">One</option>
				//     <option value="1">Two</option>
				// </select>

				$("#myselect option:contains('YourTextHere')").attr("selected","selected");
				// tested
			}

			function replace_inner_html() {
				document.all.regTitle.innerHTML = 'Hello World';
				$("#regTitle").html("Hello World");
			}

			function select_value_from_dropdown_list() {
				var source = "http://stackoverflow.com/questions/499405/change-the-selected-value-of-a-drop-down-list-with-jquery";
				$("._statusDDL").val('2');
				$( "#multiple" ).val([ "Multiple2", "Multiple3" ]);
			}

			function remove_multiple_css_classes() {
				var source = "http://stackoverflow.com/questions/1485647/removing-multiple-classes-jquery";
				$('element').removeClass('class1').removeClass('class2');
			}

			function set_important_use_css() {
				var source = "http://stackoverflow.com/questions/2655925/how-to-apply-important-using-css";
				var $elem = $('#someDiv').style('color', 'blue', 'important');
				// or 
				$('#elem').attr('style', 'width: 100px !important'); // this will delete all other
				// style on this element
				// or you can use this function to fix:
				function addStyleAttribute($element, styleAttribute) {
				  $element.attr('style', $element.attr('style') + '; ' + styleAttribute);
				}
				addStyleAttribute($('#elem'), 'width: 100px !important');
				// example: http://jsbin.com/atulek/4/edit?html,js,output
			}

			function use_jquery_manipulate_pseudo_elements() {
				var source = "http://stackoverflow.com/questions/5041494/selecting-and-manipulating-css-pseudo-elements-such-as-before-and-after-usin";

				// css :after and :before rules aren't part of the DOM
				// and therefore can't be altered using jQuery's DOM methods.
				
				// method 1: predetermined class
				/*
				p:before {
				  content: "foo";
				}
				p.special:before {
				  content: "bar";
				}
				*/
			  $('p').on('click', function() {
				  $(this).toggleClass('special');
				});

				// method 2: add styles directly to document's style
				var str = "bar";
				document.styleSheets[0].addRule('p.special:before','content: "'+str+'";');
				// same
				var str = "bar";
				$('<style>p.special:before{content:"'+str+'"}</style>').appendTo('head');
				// method 3: Alter a different DOM attribute
				/*
				<p>This is a paragraph.</p>
				<p>This is another paragraph.</p>
				 */
				/*
					p:before {
					  content: attr(data-before);
					  color: red;
					  cursor: pointer;
					}
				*/
				$('p').on('click', function () {
				  $(this).attr('data-before','bar');
				});
			}
			function remove_style() {
				var source = "http://stackoverflow.com/questions/4036857/jquery-remove-style-added-with-css-function";
				if(color != '000000') {
					$("body").css("background-color", color); 
				} else {
					$("body").css("background-color", "");
					// set css attribute empty to remove the style
				}
			}

			function get_id_of_element_fired_event() {
				$(document).ready(function() {
				  $("a").click(function(event) {
				      alert(event.target.id);
				  });
				});

				// method 2:
				jQuery("classNameofDiv").click(function() {
				  var contentPanelId = jQuery(this).attr("id");
				  // in event handler, this always refers to the element that event is triggered on. 
				  alert(contentPanelId);
				});
			}

			function working_with_tabular_data() {
				var jQuery_plugin = "https://github.com/DataTables/DataTables";
			}

			function html_encode_decode() {
				var source = "http://stackoverflow.com/questions/1219860/html-encoding-in-javascript-jquery";
				/*
				what_is_html_encode;
				Encoding data converts potentially unsafe characters to their HTML-encoded equivalent. 
				If the string to be encoded is not DBCS, HTMLEncode converts characters as follows: 
				The less-than character (<) is converted to &lt; . The greater-than character (>) 
				is converted to &gt; 
				*/
				function htmlEncode(value){
  			//create a in-memory div, set it's inner text(which jQuery automatically encodes)
  			//then grab the encoded contents back out.  The div never exists on the page.
  			// "<>" will be converted to "&lt;&gt;"
				  return $('<div/>').text(value).html();
				}

				function htmlDecode(value){
					// "&lt;&gt;" will be converted to "<>"
				  return $('<div/>').html(value).text();
				}
			}

			function empty_add_new() {
				var source = "http://stackoverflow.com/questions/47824/how-do-you-remove-all-the-options-of-a-select-box-and-then-add-one-option-and-se";
				$('#mySelect')
				  .empty()
				  .append('<option selected="selected" value="whatever">text</option>');
			}

			function check_if_element_is_attached_to_dom() {
				$('#elemId').length;

			}

			function pre_load_images() {
				var source = "http://stackoverflow.com/questions/476679/preloading-images-with-jquery";
				function preload(arrayOfImages) {
				  $(arrayOfImages).each(function () {
				    $('<img />').attr('src',this).appendTo('body').css('display','none');
				  });
				}

			}

			function make_ajax_sync() {
				// noremally ajax should be async, but you can make it sync
				// doc: http://api.jquery.com/jQuery.ajax/
			  jQuery.ajax({
          url: 'http://example.com/catalog/create/' + targetNode.id + '?name=' + encode(to.inp[0].value),
          success: function (result) {
            if (result.isOk == false) alert(result.message);
          },
          async: false // make it false to enable sync
			    });

			}

			function dollar_sign() {
				var $email = $("#email"); // refers to the jQuery object representation of the dom object
				var email_field = $("#email").get(0); // refers to the dom object itself
			}

			function check_if_element_is_visible() {
				var source = "http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling";
				// 1. native javascript way
				// Element.getBoundingClientRect() :  returns the size of an element and its position relative to the viewport
				
				function isScrolledIntoView(el) {
			    var elemTop = el.getBoundingClientRect().top;
			    var elemBottom = el.getBoundingClientRect().bottom;

			    var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
			    return isVisible;
				}	
			 
				// 2. jquery way
				function isScrolledIntoView(elem) {
			    var $elem = $(elem);
			    var $window = $(window);

			    var docViewTop = $window.scrollTop();  // always >=0, number of px above viewport
			    var docViewBottom = docViewTop + $window.height(); // not include padding and border: http://api.jquery.com/height/

			    var elemTop = $elem.offset().top; // offset relative to document, not window
			    var elemBottom = elemTop + $elem.height();

			    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); 
			    // in the comparsion, all these cordinates are relative to the document
				}
			}

			function use_jquery_center_div() {
				var source = "http://stackoverflow.com/questions/210717/using-jquery-to-center-a-div-on-the-screen";
				var example = "http://jsfiddle.net/DerekL/GbDw9/";
				/*
				<div class="container">
				  <div class="target">1<br>parent</div>
				  <div class="target">2<br>window</div>
				</div>
				 */
				jQuery.fn.center = function(parent) {
			    if (parent) {
			      parent = this.parent();
			    } else {
			      parent = window;
			    }
			    this.css({
		        "position": "absolute",
		        // use this.outerHeight() and this.outerWidth() instead of just 
		        // this.height() and this.width(). Otherwise, if the object has a 
		        // border or padding, it will end up slightly off-center.
		        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
		        "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollLeft() + "px")
			    });
					return this;
				}
				$("div.target:nth-child(1)").center(true);
				$("div.target:nth-child(2)").center(false);
			}
			function style_iframe() {

				var source = "http://stackoverflow.com/questions/217776/how-to-apply-css-to-iframe";
				var head = jQuery("#iframe").contents().find("head");
				var css = '<style type="text/css">' +
				          '#banner{display:none}; ' +
				          '</style>';
				jQuery(head).append(css);
			}
			function load_page_from_server_append() {
				/*
				<html>
				  <header>
				    <script src="/js/jquery.js" type="text/javascript"></script>
				  </header>
				  <body>
				    <div id='include-from-outside'></div>
				    <script type='text/javascript'>
				      $('#include-from-outside').load('http://example.com/included.html');
				    </script> 
				  </body>
					</html>
				*/
				// $( "#result" ).load( "ajax/test.html" );
				// $( "#result" ).load( "ajax/test.html", function() {
				//   alert( "Load was performed." );
				// });
			}

			function hide_jquery_ui_dialog_close_button() {
				var source = "http://stackoverflow.com/questions/896777/how-to-remove-close-button-on-the-jquery-ui-dialog";
				$("#div2").dialog({
				  closeOnEscape: false,
				  open: function(event, ui) {
				  	$(this).closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();}
				});
			}
			function bind_event_on_dynamic_created_element() {
				var source = "http://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements";
				$(staticAncestors).on(eventName, dynamicChild, function() {});
				$(document).on( eventName, selector, function(){} );
				// jQuery event delegation 
				$("#dataTable tbody").on("click", "tr", function(event){
				    alert($(this).text());
				});

				// note: when you binding, elements in the selector must exist, 
				// because event is bound to the selected elements. 
				
				// Note: Delegated events do not work for SVG.
				
				// pure native javascript way for event delegation
				document.addEventListener( 'click', function ( e ) {
			    if ( hasClass( e.target, 'bu' ) ) {            
			        // .bu clicked
			        // do your thing
			    } else if ( hasClass( e.target, 'test' ) ) {
			        // .test clicked
			        // do your other thing
			    }   
				}, false ); 
				function hasClass( elem, className ) {
				    return elem.className.split( ' ' ).indexOf( className ) > -1;
				}
			}

			function press_enter_key_then_trigger_button_click() {
				var source = "http://stackoverflow.com/questions/155188/trigger-a-button-click-with-javascript-on-the-enter-key-in-a-text-box";
				// html
				/*
				<input type="text" id="txtSearch" />
				<input type="button" id="btnSearch" value="Search" onclick="doSomething();" />
				*/
				// 1. jquery method
				$("#id_of_textbox").keyup(function(event){
				  if(event.keyCode == 13){
				    $("#id_of_button").click();
				  }
				  // 1. keycode list: http://www.w3schools.com/charsets/ref_html_utf8.asp
				  // 2. use this
				  var x = event.which || event.keyCode;  // Use either which or keyCode, depending on browser support
				  // 3. If you want to convert the returned Unicode value into a character, use the fromCharCode() method.
				  // 4. Both the keyCode and which property is provided for compatibility only. 
				  //    The latest version of the DOM Events Specification recommend using the key 
				  //    property instead (if available).
				  // 5. If you want to find out whether the "ALT", "CTRL", "META" or "SHIFT" key was 
				  //    pressed when a key event occured, use the altKey, ctrlKey, metaKey or shiftKey property.
				  // 6. check printable char, best use onkeypress
				  //    check "F1", "CAPS LOCK" or "Home", best use onkeydown or onkeyup event.
				  // 7. detail explanation: http://www.w3schools.com/jsref/event_key_keycode.asp


				});
				// 2. native javascript embeded
				/*
				<input type="text" id="txtSearch" onkeydown="if (event.keyCode == 13) document.getElementById('btnSearch').click()"/>
				<input type="button" id="btnSearch" value="Search" onclick="doSomething();" />
				*/
			}

			function click_toggle_class() {

				$('button').on('click', function(e) { 
			    e.preventDefault();
			    $('.inner').toggleClass('open');
				});

				var example = "http://jsfiddle.net/n5XfG/2596/";
			}

			function diff_between_onload_and_doc_ready() {
				var source = "http://stackoverflow.com/questions/3698200/window-onload-vs-document-ready";
				/*
				The "ready" is specific to jquery, occurs after the HTML document has been loaded, 
				while the onload event, standard DOM event, occurs later, when all content (e.g. images) 
				also has been loaded.

				The onload event is a standard event in the DOM, while the ready 
				event is specific to jQuery. The purpose of the ready event is that 
				it should occur as early as possible after the document has loaded, 
				so that code that adds functionality to the elements in the page 
				doesn't have to wait for all content to load.

				 */
			}
			function get_window_document_screen_dimension() {
				var source = "http://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window";

				// 1. screen dimension
				screen.width;
				screen.height;
				// 2. document dimension
				$(document).width();
				$(document).height();
				// 3. viewport/window dimension
				$(window).width();
				$(window).height();
			}

			function select_option() {
				var source = "http://stackoverflow.com/questions/196684/jquery-get-specific-option-tag-text";
				/*
				<select id='list'>
				    <option value='1'>Option A</option>
				    <option value='2'>Option B</option>
				    <option value='3'>Option C</option>
				</select>
				*/
				
				// get text of 2nd
				$("#list option[value='2']").text();

				// get selected
				$('#list option:selected').text();
				// or
				$('#list').val(); // give you the selected value, not text
			}
			function select_by_name_attr() {
				// <td name="tcol1" class="bold"> data2</td>
				$('td[name=tcol1]') // matches exactly 'tcol1'

				$('td[name^=tcol]') // matches those that begin with 'tcol'
			}

			function build_select_option_from_array() {
				var source = "http://stackoverflow.com/questions/170986/what-is-the-best-way-to-add-options-to-a-select-from-an-array-with-jquery";
				var myOptions = {
					"Value 1" : "Text 1",
					"Value 2" : "Text 2",
					"Value 3" : "Text 3"
				}
				$.each(selectValues, function(key, value) {   
		      $('#mySelect')
		        .append($("<option></option>")
		        	.attr("value",key)
		        	.text(value)); 
				});

				// or you can use this plug in:
				var jquery_plugin = "http://www.texotela.co.uk/code/jquery/select/";
			}

			function check_element_is_off_screen() {
				var source = "http://stackoverflow.com/questions/8897289/how-to-check-if-an-element-is-off-screen";
				// to be done
			}
			function move_element_into_another_element() {
				var source = "http://stackoverflow.com/questions/1279957/how-to-move-an-element-into-another-element";
				$("#source")
    			.appendTo("#destination");

    		$("#source")
    			.prependTo("#destination");
			}

			function check_click_outside_element() {
				var source = "http://stackoverflow.com/questions/152975/how-to-detect-a-click-outside-an-element?page=1&tab=active#tab-top";

				$(document).click(function(event) { 
				    if(!$(event.target).closest('#menucontainer').length) {
				        if($('#menucontainer').is(":visible")) {
				            $('#menucontainer').hide()
				        }
				    }        
				})
			}

			function cancel_ajax_request() {
				// how can I cancel/abort an Ajax request that 
				// I have not yet received the response from?
				var source = "http://stackoverflow.com/questions/446594/abort-ajax-requests-using-jquery";
				var xhr = $.ajax({
				    type: "POST",
				    url: "some.php",
				    data: "name=John&location=Boston",
				    success: function(msg){
				       alert( "Data Saved: " + msg );
				    }
				});

				//kill the request
				xhr.abort();

				/*
					As of jQuery 1.5 the returned object is a wrapper for the 
					native XMLHttpRequest object called jqXHR. This object appears
					to expose all of the native properties and methods so the above 
					example still works. See The jqXHR Object (jQuery API documentation).
				*/
			}

			function get_selected_text_option() {
				var source = "http://stackoverflow.com/questions/1643227/get-selected-text-from-a-drop-down-list-select-box-using-jquery";
 				$("#myselect option:selected").text();

				$("#myselect :selected").text();

 				$("#myselect").children(":selected").text();

				$("#myselect").find(":selected").text();

				$("#dropdownID").change(function(){
				  alert($('option:selected', $(this)).text());
				});
			}

			function add_color_console_log() {
				console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');

			}

			function disable_browser_plugin() {
				var source = "http://stackoverflow.com/questions/21692646/how-does-facebook-disable-the-browsers-integrated-developer-tools/21692733#21692733";
				// The logic is 
				// 1. redefine the console to be unwritable, 
				// 2. redefine the "_commandLineAPI" plugin api object, which
				
				Object.defineProperty(window, "console", {
				    value: console,
				    writable: false,
				    configurable: false
				});

				var i = 0;
				function showWarningAndThrow() {
				    if (!i) {
				        setTimeout(function () {
				            console.log("%cWarning message", "font: 2em sans-serif; color: yellow; background-color: red;");
				        }, 1);
				        i = 1;
				    }
				    throw "Console is disabled";
				}

				var l, n = {
				        set: function (o) {
				            l = o;
				        },
				        get: function () {
				            showWarningAndThrow();
				            return l;
				        }
				};
				Object.defineProperty(console, "_commandLineAPI", n);
				Object.defineProperty(console, "__commandLineAPI", n);
			}

			function selector_usage() {
				jQuery(this).find("img"); // under this object, find img tags

			}

			function append_table_row() {
				var source = "http://stackoverflow.com/questions/171027/add-table-row-in-jquery";
				/*
					jQuery since version 1.4(?) automatically detects if the element 
					you are trying to insert (using any of the append(), prepend(), before(), 
					or after() methods) is a <tr> and inserts it into the first <tbody> in 
					your table or wraps it into a new <tbody> if one doesn't exist.
				 */
				$('#myTable').append('<tr><td>my data</td><td>more data</td></tr>');
			}

			function this_in_Each_loop() {

			}
			function check_if_visible() {
				var source = "http://stackoverflow.com/questions/178325/checking-if-an-element-is-hidden?page=2&tab=active#tab-top";

				// best way: use css selector
				$('element:hidden');
				$('element:visible');

				$('element').is(":visible"); // jquery way
				// or check css directly
				if ($(this).css("display") == "none" || $(this).css("visibility") == "hidden") {
				    // The element is not visible
				} else {
				    // The element is visible
				}
			}
			function select_dom_contain_text() {
				var source = "http://api.jquery.com/contains-selector/";
				$( "div:contains('John')" ).css( "text-decoration", "underline" );
			}

			function return_false () {
				// don't use return false in jQquery or dom event handler
				// It is best to explicitely call e.preventDefault(), or 
				// e.stopPropagation()
				var source = "http://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false";
			}
		}
		function d3js() {
		}

		function Raphael() {
			var website = "http://raphaeljs.com/";

		}

		function html2canvas() {
			var github = "https://github.com/niklasvh/html2canvas";
			// take a screenshot with javascript
		}
		function cytoscape() {
			var website = "http://cytoscape.github.io/cytoscape.js/";
			// library for analysis and visualisation
			var source = "http://stackoverflow.com/questions/8308516/multigraphs-with-javascript";
			var other_visulation_lib = "http://stackoverflow.com/questions/7034/graph-visualization-library-in-javascript";
			var data_visulation_compare = "http://selection.datavisualization.ch/";
		}
		function requirejs() {

		}
		function momentjs() {

		}
		function lowdash() {

		}
	}

	function components() {

		function radial_menu() {
			var source = "http://creative-punch.net/2014/02/making-animated-radial-menu-css3-javascript/";

		}
		function scroll() {
			// one page scroll: https://github.com/peachananr/onepage-scroll
			// 
		}

		function scroll_dependent_menu_bar() {
			var source = "http://creative-punch.net/2014/03/making-scroll-dependent-menu-bar-css3-javascript/";
			// it uses scrollMonitor to detect element is out of viewport
			// https://github.com/sakabako/scrollMonitor
		}

		function type_ahead() {
			
		}

		function file_upload() {
			var source = "http://stackoverflow.com/questions/166221/how-can-i-upload-files-asynchronously";
			var gitHub_repo = "https://github.com/FineUploader/fine-uploader";
			// simple ajax uploader
			var gitHub_repo2 = "https://github.com/LPology/Simple-Ajax-Uploader";
		}

		function image_cropper() {

		}

		function code_editor() {

		}

		function bootstrap() {
			function Bootsnipp() {
				var website = "http://bootsnipp.com/";
				// Design elements, playground and code snippets for Bootstrap
				
			}

			function Bootstrap_theme() {
				var website = "http://bootswatch.com/";

			}
		}

		function image_maginify() {
			// like those on nike
		}

		function promise() {
			function jquery() {}
			function async() {

			}
			function angular() {



			}
		}

		function input_validation () {

		}

		function socketIO() {

		}
	}

	function Frameworks() {
		function angularJS() {

			function angular_recipe() {
				var source = "https://leanpub.com/recipes-with-angular-js/read";

			}


			function what_is_controller_as() {
				var source = "https://docs.angularjs.org/api/ng/directive/ngController";
				// <div id="ctrl-as-exmpl" ng-controller="SettingsController1 as settings">
				// then you can use:
				// 	 <div>{{settings.name}}</div>
				// to access view model variables
				// then attach method this way:
				SettingsController1.prototype.greet = function() {
				  alert(this.name);
				  // doen't miss the prototype, since settings is created using 'new' operator
				};

				// in $routeProvider you also can use controllerAs
				function config($routeProvider) {
			    $routeProvider
		        .when('/avengers', {
	            templateUrl: 'avengers.html',
	            controller: 'Avengers',
	            controllerAs: 'vm'
	            // vm is short for View Model
		        });
				}
			}
			function angular_style_guide() {
				var github = "https://github.com/johnpapa/angular-styleguide";
				// comprehensive guide for angular best practice, endosed by Angular team. 
				
			}

			function service() {
				var source = "https://docs.angularjs.org/guide/services";
				// service are 
				// - Lazily instantiated
				// - Singletons
			}

			function bootstrap_app() {
				// Normally below is what bootstraps the app using your module
				// <div ng-app="myApp"> </div>
				/*
					While the example above is simple, it will not scale to large applications. Instead we recommend that you break your application to multiple modules like this:

					A module for each feature
					A module for each reusable component (especially directives and filters)
					And an application level module which depends on the above modules and contains any initialization code.

					Here is the best way to organize angular app:
					http://angularjs.blogspot.com/2014/02/an-angularjs-style-guide-and-best.html
				*/ 
				
				 
				// you can use ngApp to bootstrap(start) angularjs application
				// but you can also manually bootstrap your app. 
				var source = "https://docs.angularjs.org/api/ng/function/angular.bootstrap";
				/*
				<!doctype html>
				<html>
					<body>
						<div ng-controller="WelcomeController">
						  {{greeting}}
						</div>

						<script src="angular.js"></script>
						<script>
						  var app = angular.module('demo', [])
						  .controller('WelcomeController', function($scope) {
						      $scope.greeting = 'Welcome!';
						  });
						  angular.bootstrap(document, ['demo']);
						  // or you can do this:
						  //angular.element(document).ready(function() {
					    //  angular.bootstrap(document, ['myApp']);
					    //});
						</script>
					</body>
				</html>
				*/
			}

			function what_is_angular_module() {
				var source = "https://docs.angularjs.org/guide/module";
				var angular_app_recommended_structure = "https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub";

				/* 
					module is container for different part of the app:
						- controllers
						- services
						- filters
						- directives
						- etc..
				*/
			
				// example: angular app organization 
				angular.module('xmpl.directive', []);

				angular.module('xmpl.filter', []);

				angular.module('xmpl', ['xmpl.service', 'xmpl.directive', 'xmpl.filter'])

				  .run(function(greeter, user) {
				    // This is effectively part of the main method initialization code
				    greeter.localize({
				      salutation: 'Bonjour'
				    });
				    user.load('World');
				  })

				  .controller('XmplController', function($scope, greeter, user){
				    $scope.greeting = greeter.greet(user.name);
				  });
				  /*
					  Beware that using angular.module('myModule', []) will create 
					  the module myModule and overwrite any existing module named myModule. 
					  Use angular.module('myModule') to retrieve an existing module.
				  */
			}

			function protect_against_minification() {
				// classic way
				app.controller('MyController', ['$scope', function($scope) {
				  $scope.greeting = 'hello';
				}]);

				// new way
				angular
					.controller('AvengersController', AvengersController);

					AvengerController.$inject = ['movieService', '$delegate'];

					function AvengerController(movieService, $delegate) {
						// do the work
					}
			}

			function what_is_$delegate_service() {
				//$delegate
			}

			function what_is_$get_service() {
				// $get
			}

			function how_to_use_$provide_decorator() {
				var doc = "https://docs.angularjs.org/api/auto/service/$provide#decorator";
				// $provide.decorator
				// what is it for?
				// real world example? 
			}

			function angular_animations()  {
				var source = "https://docs.angularjs.org/guide/animations";
				var ngAnimate_doc = "https://docs.angularjs.org/api/ngAnimate";
				var Remastered_Animation = "http://www.yearofmoo.com/2013/08/remastered-animation-in-angularjs-1-2.html";


				// use animate.css for conventional animations
				var animate_css = "http://daneden.github.io/animate.css/";
			}

			function handle_route_change_error() {
				var source = "https://github.com/johnpapa/angular-styleguide#style-y112";

				/* recommended */
				var handlingRouteChangeError = false;

				function handleRoutingErrors() {
			    /**
			     * Route cancellation:
			     * On routing error, go to the dashboard.
			     * Provide an exit clause if it tries to do it twice.
			     */
			    $rootScope.$on('$routeChangeError',
			        function(event, current, previous, rejection) {
		            if (handlingRouteChangeError) { return; }
		            handlingRouteChangeError = true;
		            var destination = (current && (current.title ||
		                current.name || current.loadedTemplateUrl)) ||
		                'unknown target';
		            var msg = 'Error routing to ' + destination + '. ' +
		                (rejection.msg || '');

		            /**
		             * Optionally log using a custom service or $log.
		             * (Don't forget to inject custom service)
		             */
		            logger.warning(msg, [current]);

		            /**
		             * On routing error, go to another route/state.
		             */
			          $location.path('/');
			          handlingRouteChangeError = false;

				        }
				    );
				}
			}

			function default_filter_behavior() {
				var source = "https://docs.angularjs.org/api/ng/filter/filter";
				// in template:
				// {{ filter_expression | filter : expression : comparator}}
				// in javascript:
				$filter('filter')(array, expression, comparator);

				// expression can be string, hash object, or function(value, index, array)
				// comparator is function to check if two input are equal. 
			}

			function use_default_uppercase_filter() {
				var source = "https://docs.angularjs.org/api/ng/service/$filter";
				// this is also angularjs provided.
				angular.module('filterExample', [])
					.controller('MainCtrl', function($scope, $filter) {
					  $scope.originalText = 'hello';
					  $scope.filteredText = $filter('uppercase')($scope.originalText);
					});
			}

			function filter_components_provided_in_ng() {
				var source = "https://docs.angularjs.org/api/ng/filter";
				/*
				*** Usage in javascript:
				$filter('filterName')(...)
				usage in template
				
				*** Usage in template
				inputs | filterName: [params]
				
					filter
					currency
					number
					date
					json
					lowercase
					uppercase
					limitTo
					orderBy
				*/
			}

			function customize_filter() {
				// filter should take input and return a output, filtered value. 
				// In Angular, filter definition should return a function which does the filtering. 
				var source = "https://docs.angularjs.org/guide/filter";
				angular.module('myReverseFilterApp', [])
				.filter('reverse', function() {
				  return function(input, uppercase) {
				  	// in template, input is value before '|', e.g.:
				  	// {{greeting | reverse:true}}
				  	// so input is greeting, uppercase is true
				    input = input || '';
				    var out = "";
				    for (var i = 0; i < input.length; i++) {
				      out = input.charAt(i) + out;
				    }
				    // conditional based on optional argument
				    if (uppercase) {
				      out = out.toUpperCase();
				    }
				    return out;
				  };
				})
				.controller('MyController', ['$scope', function($scope) {
				  $scope.greeting = 'hello';
				}]);	

				// usage:
				/*
				<div ng-controller="MyController">
				  <input ng-model="greeting" type="text"><br>
				  No filter: {{greeting}}<br>
				  Reverse: {{greeting|reverse}}<br>
				  Reverse + uppercase: {{greeting|reverse:true}}<br>
				</div>
				*/				
			}

			function filter_usage() {
				var app = angular.module("demoApp", ['ngResource']);

				app.filter("sanitize", ['$sce', function($sce) {
				  return function(htmlCode){
				    return $sce.trustAsHtml(htmlCode);
				  }
				}]);
				// <div ng-bind-html="whatever_needs_to_be_sanitized | sanitize"></div>
			}

			function output_as_html_not_string() {
				// For Angular 1.3, use ng-bind-html in the HTML (2 steps):
				// <div ng-bind-html="thisCanBeusedInsideNgBindHtml"></div>
				var SomeController = function () {
				  this.thisCanBeusedInsideNgBindHtml = '<ul><li>render me please</li></ul>';
				}
				// and use $sce.trustAsHtml() in the controller to convert the html string.
				$scope.thisCanBeusedInsideNgBindHtml = $sce.trustAsHtml(this.thisCanBeusedInsideNgBindHtml);

				// for Angular 1.2, use:
				// <div ng-bind-html-unsafe="expression"></div>
			}

			function transclude_usage(){
			}

			function ngValue_usage() {
				var source = "https://docs.angularjs.org/api/ng/directive/ngValue";
			}

			function timeout_usage() {

			}
			function watch_usage() {

			}

			function special_symbol_in_directive() {
				// &, = #
			}

			function service_provider_factory_difference() {
			}

			function difference_ngIf_ngShow() {

			}

			function what_is_myApp_value() {
				//value(obj) - registers a value/object that can only be accessed by services, not providers.
				// value(name, value);
				// It is mentioned here: https://docs.angularjs.org/api/ng/type/angular.Module
				// and here: https://docs.angularjs.org/api/auto/service/$provide#value
				$provide.value('a', 123);	
				myApp.value('decoration', {symbol: '*'});


				angular.module('myModule', []).
				  value('a', 123).
				  factory('a', function() { return 123; }).
				  directive('directiveName', '...').
				  filter('filterName', '...');

				// is same as

				angular.module('myModule', []).
				  config(function($provide, $compileProvider, $filterProvider) {
				    $provide.value('a', 123);
				    $provide.factory('a', function() { return 123; });
				    $compileProvider.directive('directiveName', '...');
				    $filterProvider.register('filterName', '...');
				  });
			}

			function q_defer_usage() {

			}

			function $routeProvider_service() {
				// make sure to load ['ngRoute'] to module before using $route, $routeProvider
				// e.g.:
				angular.module('ngRouteExampleApp', ['ngRoute'])
					.controller(/* ... */);

				// example configure the route using $routeProvider
				angular.module('ngRouteExampleApp')
					.config(function($routeProvider, $locationProvider) {
					  $routeProvider
					    .when('/Book/:bookId', {
					    templateUrl: 'book.html',
					    controller: 'BookController',
					    controllerAs: 'vm',
					    resolve: {
					      // I will cause a 1 second delay
					      delay: function($q, $timeout) {
					        var delay = $q.defer();
					        $timeout(delay.resolve, 1000);
					        return delay.promise;
					      }
					    }
					  })
					  .when('/Book/:bookId/ch/:chapterId', {
					    templateUrl: 'chapter.html',
					    controller: 'ChapterController'
					  });

					  // configure html5 to get links working on jsfiddle
					  $locationProvider.html5Mode(true);
					});
			}

			function $routeParams_service() {
				var source = "https://docs.angularjs.org/api/ngRoute/service/$route#";
				// e.g.:
				//    /Book/Gatsby/ch/4
				//    $routeParams will be {"key":"value","bookId":"Gatsby","chapterId":"4"}
				//    since route is defined as follow:
				//    .when('/Book/:bookId/ch/:chapterId', {
				//			    templateUrl: 'chapter.html',
				//			    controller: 'ChapterController'
				//			  });
				//    
			}

			function $route_service() {

				var source = "https://docs.angularjs.org/api/ngRoute/service/$route#";

				$route.current; // holds the current route
				$route.routes; // holds the route definition object
				$route.reload(); // reload current route
				// events fired
				$routeChangeStart
				$routeChangeSuccess
				$routeChangeError
				$routeUpdate
				// example for catching events
				angular('myApp')
					.run(function($rootScope, $location) {
				    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
				      if ($rootScope.loggedInUser == null) {
				        // no logged user, redirect to /login
				        if ( next.templateUrl === "partials/login.html") {
				        } else {
				          $location.path("/login");
				        }
				      }
				    });
				  });
			}

			function html5mode() {
				var what_is_html5mode = "https://docs.angularjs.org/guide/$location";

				module.config(function($locationProvider){
					$locationProvider.html5Mode(true);
					// will enable html5Mode
					// also need to add <base href="/"> to index.html
				});

				// Server side
				// Using HTML5 mode requires URL rewriting on server side
				// basically you have to rewrite all your links to entry point 
				// of your application (e.g. index.html)
				
			}

			function ui_router() {
				var source = "https://angular-ui.github.io/ui-router/site/#/api/ui.router";
				var guide = "https://github.com/angular-ui/ui-router/wiki";

				// 1. simple state
				$stateProvider.state('contacts', {
				  template: '<h1>{{contact.title}}</h1>',
				  controller: function($scope, simpleObj){
				    this.title = 'My Contacts';
				  },
				  controllerAs: 'contact',
				  resolve: {
				  	simpleObj: function() {return {value: 'simple'}}
				  }
				});

				/* 2. 
				When the application is in a particular state—when a state is 
				"active"—all of its ancestor states are implicitly active as well. 
				Below, when the "contacts.list" state is active, the "contacts" state 
				is implicitly active as well, because it's the parent state to "contacts.list".
				 */
				
				/* 3. 
				Child states DO inherit the following from parent states:

					- Resolved dependencies via resolve
					- Custom data properties
				*/
			
				// 4. with named view, you can target parent view in ui_router
				var example_nexted_view = "https://github.com/angular-ui/ui-router/wiki/Multiple-Named-Views";

				// 5. get URL paramaters
				$stateProvider.state('contacts.detail', {
			    url: '/contacts/:contactId',   
			    controller: function($stateParams){
			      $stateParams.contactId  //*** Exists! ***//
			    }
				}).state('contacts.detail.subitem', {
				  url: '/item/:itemId', 
				  controller: function($stateParams){
				    $stateParams.contactId //*** Watch Out! DOESN'T EXIST!! ***//
				    // you can use resolve in parent state to resolve this
				    // https://github.com/angular-ui/ui-router/wiki/URL-Routing
				    $stateParams.itemId //*** Exists! ***//  
				   }
				});

				// 6. use otherwise()
				app.config(function($urlRouterProvider){
				    // if the path doesn't match any of the urls you configured
				    // otherwise will take care of routing the user to the specified url
				    $urlRouterProvider.otherwise('/index');

				    // Example of using function rule as param
				    $urlRouterProvider.otherwise(function($injector, $location){
				        // some advanced code...
				    });
				})

			}

			function user_input_validation() {

			}

			function ng_select_usage() {

			}

			function avoid_flashing() {

			}

			function http_request() {

			}

			function send_event() {
				// broadcast event down to decendents
				function firstCtrl($scope) {
				  $scope.$broadcast('someEvent', [1,2,3]);
				}
				// emit up to ancestor
				function secondCtrl($scope){
				  $scope.$emit('someEvent', [1,2,3]);
				}
				// if element at same level, get rootScope and then broadcast
				function firstCtrl($rootScope){
	  			$rootScope.$broadcast('someEvent', [1,2,3]);
				}
			}
	}

		function backboneJS() {

			function router() {
				var source = "http://backbonejs.org/#Router";

				var Workspace = Backbone.Router.extend({
				  routes: {
				    "help":                 "help",    // #help
				    "search/:query":        "search",  // #search/kiwis
				    "search/:query/p:page": "search"   // #search/kiwis/p7
				  },
				  help: function() {
				  },
				  search: function(query, page) {
				  }
				});
			}
			function route_param_example() {
				// 1. :param, which match a single URL component between slashes
				// 2. *splat, which can match any number of URL components
				// 3. Part of a route can be made optional by surrounding it 
				//    in parentheses (/:optional)
				
				var route_example1= "search/:query/p:page";
				// => #search/obama/p2, passing "obama" and "2"
				
				var route_example2 = "file/*path";
				// => match #file/nested/folder/file.txt
				// , passing "nested/folder/file.txt" to the action
				
				var route_example3 = "docs/:section(/:subsection)";
				// will match #docs/faq, and #docs/faq/installing
				// passing "faq" to the action in the first case, and 
				// passing "faq" and "installing" to the action in the second
				
				var route_example4 = "docs";
				var route_example5 = "docs/";
				// example 4 and 5 are different path
				var route_example6 = "docs(/)"; 
				// example 6 will capture both cases of 4 and 5
			}
			function route_change_event() {
				// listen to route match event
				var routes = {
				  "help/:page":         "help",
				  "download/*path":     "download",
				  "folder/:name":       "openFolder",
				  "folder/:name-:mode": "openFolder"
				}

				router.on("route:help", function(page) {
				  ///...
					});
			}
			function trigger_route_func() {
				router.navigate("help/troubleshooting", {trigger: true});
				// trigger route function
				router.navigate("help/troubleshooting", {trigger: true, replace: true});
				// replace current histry entry (not creating new entry)
			}
			function route_execute_func() {
				// when 1. route is matched, and 
				// 2. callback is about to be executed (not executing)
				// execute function is triggered. 
				// Return false stops the route transition and route func will not triggered.
				
				// you can use execute fun to 
				//   1. parse query string
				//   2. check login
				
				var Router = Backbone.Router.extend({
				  execute: function(callback, args, name) {
				    if (!loggedIn) {
				      goToLogin();
				      return false;
				    }
				    args.push(parseQueryString(args.pop()));
				    if (callback) callback.apply(this, args);
				  }
				});
			}

			function view_component() {

				var DocumentRow = Backbone.View.extend({

				  tagName: "li",

				  className: "document-row",

				  events: {
				    "click .icon":          "open",
				    "click .button.edit":   "openEditDialog",
				    "click .button.delete": "destroy"
				  },

				  initialize: function() {
				    this.listenTo(this.model, "change", this.render);
				  },

				  render: function() {
				    //...
				  }

				});
			}

			function view_render_func() {

				var Bookmark = Backbone.View.extend({
				  template: _.template('...'),
				  render: function() {
				    this.$el.html(this.template(this.model.attributes));
				    return this;
				  }
				});
			}
			function view_event_func() {
				var ENTER_KEY = 13;
				var InputView = Backbone.View.extend({

				  tagName: 'input',

				  events: {
				    "keydown" : "keyAction",
				  },

				  render: function() { '...' },

				  keyAction: function(e) {
				    if (e.which === ENTER_KEY) {
				      this.collection.add({text: this.$el.val()});
				    }
				  }
				});
			}

			function extend_object_mixin() {
				var source = "http://addyosmani.com/backbone-fundamentals/#routers";
				// Mixin
				_.extend(ourObject, Backbone.Events);

				function dancing (msg) { console.log("We started " + msg); }

				// Add namespaced custom events
				ourObject.on("dance:tap", dancing);
				ourObject.on("dance:break", dancing);

				// Trigger the custom events
				ourObject.trigger("dance:tap", "tap dancing. Yeah!");
				ourObject.trigger("dance:break", "break dancing. Yeah!");

				// This one triggers nothing as no listener listens for it
				ourObject.trigger("dance", "break dancing. Yeah!");


			}


		}
	}

	function html5() {

		function pitfall() {
			function self_closing_script_tag_wrong() {
				// wrong:
				// <script src="foobar.js" /> <!-- self-closing script tag -->
				// 
				// right:
				// <script src="foobar.js"></script>
			}
		}
		function quiz() {

			function quiz1() {
				var question = "Is <keygen> a valid HTML5 tag?";
				// answer: yes
				// explanation:
				// The <keygen> element is new in HTML5.

			}

			function quiz2() {
				var question = "Does the <bdo> tag change the direction of text?";
				// answer: yes
				// explanation:
				// bdo stands for Bi-Directional Override.
				// <p><bdo dir="rtl">123456This paragraph will go right-to-left.</bdo></p>  

			}

			function quiz3() {
				var question = "If you have a page of search results and want to highlight the search term, what HTML tag would you use?"
				// answer: <mark>, not <strong>, <em>, or <highlight>(no such tag)
				// explanation: http://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_mark
			}

			function quiz4() {
				var question = "What does the scoped attribute do?";
				/*
				
				<article>
				    <h1>Hello World</h1>
				    <style scoped>
				        p {
				            color: #FF0;
				        }
				    </style>
				    <p>This is my text</p>
				</article>
				 
				<article>
				    <h1>This is awesome</h1>
				    <p>I am some other text</p>
				</article>
				 */
				 // answer: Applies style rules to all children of the scoped parent element
			}

			function quiz5() {
				var question = "Does main1.css have to be downloaded and parsed before Hello World is alerted?";

				/*
					<head>
					    <link href="main1.css" rel="stylesheet">
					    <script>
					        alert('Hello World');
					    </script>
					</head>
				 */
				// answer: yes
				// questionable...
			}

			function quiz6() {
				var question = "Does main1.css have to be downloaded and parsed before main2.css can be fetched?";
				/*
				<head>
				    <link href="main1.css" rel="stylesheet">
				    <link href="main2.css" rel="stylesheet">
				</head>
				 */
				// answer: no
				// explanation: 1) HTML is donloaded first
				// 2) HTML is parsed, and download all other resources as long as browser encounters them
				//    3 css files can start downloading parallelly 
				// 3) inline script is executed as long as browser encounters it. 
				// 4) external javascript is ensured to execute in their appearence order, except async is added
				//    in script tag
			}
		}

		function snippet() {

			function tag_in_before_body(){
				var book = "http://www.amazon.com/dp/1449363261//ref=cm_sw_su_dp?tag=nethta-20";
				var source = "http://www.newthinktank.com/2014/12/html-5-tutorial/";
				/*
				<html lang="en">
				<meta charset="UTF-8">

				<!-- Description for your page. Shouldn't be longer then 200 characters -->
				<meta name="description"
				content="Learn everything you want to know about HTML5 in this video tutorial. 
				Tags, content sections, embedding media, forms, canvas and more will be covered."/>
				
				<!-- Keywords are used to define your content for search engines. Shouldn't be longer then 1,000 characters -->
				<meta name="keywords"
				content="html5 canvas,html5 tutorial,html5 tutorial, html5 doctype, html5 tags,html5 video,learn html5"/>

				//<!-- Defines how search engines should index your content.
				index / noindex : indicates if search engines should index the page
				follow / nofollow : indicates if hyperlinks should be followed and indexed
				archive / noarchive : indicates whether the page should be archived
				-->
				<meta name="robots" content="index,follow"/> 

				<!-- Must come before any other link tags -->
				<!-- Defines a default location for all links on a page for browsers -->
				<base href="http://localhost/html5/"/>

				<link rel="icon" href="favicon.ico"/>
				<title>HTML5 Tutorial</title>
				*/
			}

			function tag_in_body() {
				/*

				<!-- onunload is not supported in browsers other then IE -->
				<body onload="alert('Hello')" onunload="alert('Bye Bye')">

				<!-- Message that is displayed if the browser has JavaScript disabled -->
				<noscript>Please Enable JavaScript</noscript>

				<!-- <blockquote> indents the surrounding text and cite defines where the quote came from -->
				<blockquote cite="http://epicquotes.org/view.php?id=151">
				Never, under any circumstances, take a sleeping pill and a laxative on the same night.
				</blockquote>

				<!-- <q> surrounds text with quotes -->
				<q cite="http://www.brainyquote.com/quotes/quotes/h/hennyyoung128883.html">If at first you don’t succeed ... so much for skydiving.</q><br><br>


				<!-- <pre> preserves white space, but tabs can get messed up -->
				<pre>
			                  _          _
			                 (.&lt;        &gt;.)
			                \(_)________( \
			                 (___________)\\
			                    (     )     \
			                     |   |
			                     |   |
			                     |   |
			                    _|   |_
			                   (_______)
				</pre>

				<!-- Use pre and code to surround code -->
				<!-- var is used to emphasive important variables -->
				<pre>
					<code>
						function init(){
							var <var>h1tags</var> = document.getElementsByTagName("h1");
							<var>h1tags[0]</var>.onclick = changeColor;
						}
					</code>
				</pre>

					<!-- 4 ways to emphasize text without a line break -->
					<b>Bold : Bold Font</b><br>
					<strong>Strong : Bold Font</strong><br>
					<em>Emphasis : Italic Font</em><br>
					<i>Italic : Italic Font</i><br>

					<!-- 3 ways to format text for special purposes -->
					<small>Small : Short Comment</small><br>
					<ins>Insert : Added to Document</ins><br>
					<del>Delete : Strike</del><br>
					<samp>Sample Programming Output</samp><br><br>

					<!-- Advisory tags -->
					<!-- dfn adds emphasis to a word without title and a popup with title -->
					<!-- kbd is used to emphasis input expected from a user -->
					This is an abbreviation <abbr title="abbreviation">abbrv.</abbr><br>
					<dfn>Definition: </dfn>the formal statement of the meaning or significance of a word<br>
					<dfn title="the formal statement of the meaning or significance of a word">Definition</dfn><br>
					<kbd>Enter something here</kbd>

					<!-- Character Entities : http://dev.w3.org/html5/html-author/charref -->
					&cent;
					&pound;
					&yen;
					&copy;
					&reg;
					&deg;
					&frac14;
					&frac12;
					&frac34;
					&sup2;<br>

					<!-- Superscript / Subscript -->
					4<sup>2</sup><br>
					
					CO<sub>2</sub><br>

					<!-- You can define the direction of text with rtl or ltr -->
					<bdo dir="rtl">أين هو مطعم</bdo><br>
					
					<!-- You can provide ruby annotation for pronunciation -->
					<ruby>飯店<rt>hanten</rt></ruby><br>

					<!-- HYPERLINKS -->
					<!-- Contains the referenced link with an optional title -->
					<!-- A hyperlink has 3 interactive states hover, active, visited -->
					<a href="http://youtube.com/" title="YouTube">YouTube</a>

					<!-- You can open the mail software to send a message -->
					<a href="mailto:derekbanas@verizon.net">Send an Email</a>
					
					<!-- You can also dynamically call for a JavaScript function to execute -->
					<a href="javascript:toggleImg()">Toggle Image</a><br>

					<!-- You can define hot spot links in images with image maps. 
					Import your image into Gimp and Filters → Web → ImageMap -->
					<img src="http://localhost/html5/imagemap.png" alt="imagemap example" width="600" height="125" usemap="#map" />

					<map name="map">
					<area shape="circle" coords="57,62,39" alt="Yahoo" title="Go to Yahoo" href="http://yahoo.com" />
					<area shape="poly" coords="192,20,166,45,232,105,301,42,272,20,192,19,195,20" alt="Diamonds" title="Go to Diamonds" href="http://diamonds.com" />
					<area shape="rect" coords="332,8,595,115" alt="Google" title="Go to Google" href="http://google.com" />
					</map>

					<!-- Embed a PDF -->
					<object data="SmallBusinessPresentation.pdf" type="application/pdf" 
						width="750" height="400">
					</object>

					<!-- Embed a HTML file -->
					<object data="html52.html" type="text/html" 
						width="750" height="400">
					</object>

					<!-- Embed a WAV file -->
					<object data="http://www.wavsource.com/snds_2014-11-23_3967152387108926/animals/bird.wav" type="audio/x-wav">
					
						<!-- Used to pass parameters to an embedded object 
						attributes consist of a name and value -->
						<param name="autoplay" value="true">
						<param name="controller" value="true">
					
					</object>

					<!-- You can embed MP3 and Wav (Not IE) files using audio 
					mp3 uses audio/mpeg -->
					
					<audio controls autoplay loop preload>
						<source src="comingtotake.wav" type="audio/wav">
						Browser doesn't support the audio tag
					</audio>
						
					<!-- You can embed MP4s with video -->
					<video controls autoplay loop preload>
						<source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
					</video>



				*/
			}

			function canvas_api() {
				// in html
				// <canvas id = "my_canvas" width="800" height="400">
				// </canvas>
				function init() {
					var canvas = document.getElementById('my_canvas');
					if(canvas.getContext) {
						var ctx = canvas.getContext("2d");

						// 1. draw rect
						ctx.fillStyle = "#FAEBD7"; // color used to fill a shape
						ctx.fillRect(0, 0, canvas.width, canvas.height);
						// draw a rect from top left 0, 0 to width and height
						
						ctx.fillStyle = "#AF002A";
						// every time you draw new shape, you have to change this value
						// or new shape will use previous color and you will not see if
						// it is overlaps with existing shape. 
						ctx.fillRect(100, 100, 50, 50);
						// fillRect are border less
						
						// 2. stroke rect
						// border is called stroke in canvas, here is how you add border
						ctx.lineWidth = 5; // border width
						ctx.strokeStyle = "#A4C639"; // border color
						ctx.strokeRect(100, 100, 50, 50); // draw border around the rect

						// 3. draw circle (path)
						ctx.beginPath(); // call this func to begin drawing a path
							ctx.arc(200 /* center X */, 200 /* center Y */, 
								50 /* radius */, 0 /* starting angle */, 
								Math.PI*2 /* ending angle */, 
								true /* anticlockwise */);
							// this line draws a circle
							ctx.fill(); // execute
						ctx.closePath();

						// 4. draw polygon
						ctx.beginPath();
							ctx.fillStyle = "#3B444";
							ctx.moveTo(350, 200);
							ctx.lineTo(400, 50); // draw a line to this point from prevous point
							// new point stops at end of this line
							ctx.lineTo(450, 200);
						ctx.closePath();

						// 4. draw stroke to polygon
						ctx.strokeStyle = "#A4C639";
						ctx.beginPath();
							ctx.lineWidth = 5;
							ctx.moveTo(350, 200);
							ctx.lineTo(400, 50); 
							ctx.lineTo(450, 200);
						ctx.closePath();
						ctx.stroke();

						// 6. linear gradient fill
						var linGrad = ctx.createLinearGradient(400, 100, 500, 500);
						// top left, bottom right
						linGrad.addColorStop(0, "#8DB600");
						linGrad.addColorStop(0.5, "#9966CC");
						linGrad.addColorStop(1, "#7C0A02");
						ctx.fillStyle = linGrad;
						//ctx.fillStyle = "rgba(10, 150, 255, 0.5)";
						// this also works
						ctx.fillRect(400, 100, 100, 100);

						// 7. radial gradient fill
						var radGrad = ctx.createRadialGradient(275, 250, 5, 290, 260, 100)
						radGrad.addColorStop(0, "red");
						radGrad.addColorStop(1, "white");
						ctx.fillStyle = radGrad;
						ctx.arc(250, 250, 50, 0, Math.PI*2, true);
						ctx.fill();

						// 8. draw text
						ctx.font = "bold 40px Arial";
						ctx.fillStyle = "#8db600";
						ctx.fillText("Hello", 100, 100);

						// 9. stroke text (add border to text)
						ctx.strokeStyle = "black";
						ctx.lineWidth = 2;
						ctx.strokeText("Hello", 100, 100);

						// 10. add shadow to text
						ctx.shadowOffsetX = 2;
						ctx.shadowOffsetY = 2;
						ctx.shadowBlur    = 3;
						ctx.shadowColor   = "black";
						ctx.fillText("Hello", 100, 100);

						// 11. lineCap
						ctx.lineWidth = 20;
						ctx.strokeStyle = "purple";
						ctx.beginPath();
							ctx.moveTo(200, 150);
							ctx.lineCap = "round"; // "square"
							ctx.lineTo(200, 250);
							ctx.stroke();
						ctx.closePath();

						// 12. draw curve
						ctx.arc(270, 270, 50, 0, Math.PI, true);
						ctx.stroke();

						// 13. draw bezier curve
						ctx.strokeStyle = "blue";
						ctx.beginPath();
						ctx.moveTo(450, 250);
						ctx.bezierCurveTo(550, 250, 450, 100, 550, 100);
						ctx.stroke();
						ctx.closePath();

						// 14. scale & rotate
						ctx.fillStyle = "purple";
						ctx.fillRect(200, 200, 100, 100);
						ctx.rotate(Math.PI / 4);
						ctx.scale(0.5, 1);
						ctx.fillRect(400, 500, 100, 100);
						
					}
				}
				onload = init;
			}

			function geolocation_api() {

				navigator.geolocation.getCurrentPosition(successFunc, errorFunc);
			}

			function local_storage() {
				var my_name = "Nicolas Xu";
				localStorage.setItem("name", my_name);
				localStorage.getItem("name");
				localStorage.removeItem("name");

			}

			function message_api() {

			}
		}
	}

	function security() {
		function ssl() {

		}

		function https() {

		}

		function csrf() {

		}

		function xss ()  {
			/* 
			Cross-Site Scripting (XSS) attacks are a type of injection, 
			in which malicious scripts are injected into otherwise benign and 
			trusted web sites. XSS attacks occur when an attacker uses a web 
			application to send malicious code, generally in the form of a 
			browser side script, to a different end user.

			*/

		}

		function json_hijacking() {
			var source = "http://haacked.com/archive/2009/06/25/json-hijacking.aspx/";
			var stackoverflow = "http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses";
			// if the site request is 
			// 1) GET
			// 2) return [] of json
			// it is vulnerable
			// adding while(1); will stop it, since legitimate will parse out the real array
			//  
		}
	}

	function css() {

		function snippets() {
	
			
	

	

			function force_reload_cached_css_file() {
				var source = "http://stackoverflow.com/questions/118884/what-is-an-elegant-way-to-force-browsers-to-reload-cached-css-js-files?page=1&tab=votes#tab-top";
				// use file version
				//<script src="/myJavascript.js?version=4"></script>
				// version should be a hash number
			}
			function hide_close_button_jquery_ui_css() {
				var source = "http://stackoverflow.com/questions/896777/how-to-remove-close-button-on-the-jquery-ui-dialog";
				// howver, this will affect all the dialog, please refer to the jquery way to do it.
				// css way
				/*
				.ui-dialog-titlebar-close{
				  display: none;
				}

				*/
			}

			function use_css_to_style_select_tag() {
				var source = "http://stackoverflow.com/questions/1895476/how-to-style-a-select-dropdown-with-css-only-without-javascript";
				var code = "http://jsfiddle.net/danield770/YvCHW/4232/";
			}



			function show_bootstrap_dropdown_on_hover() {
				var source = "http://stackoverflow.com/questions/8878033/how-to-make-twitter-bootstrap-menu-dropdown-on-hover-rather-than-click";
				/*
				ul.nav li.dropdown:hover > ul.dropdown-menu {
				  display: block;    
				}
				<a class="dropdown-toggle" data-toggle="dropdown" href="#">
				    Dropdown
				    <b class="caret"></b>    <-- remove this line
				</a>


				 */
			}

			function align_label_checkbox() {
				// <div>
    		// 			<input type="checkbox" id="cb" /> <label for="cb">Label text</label>
  			// 	</div>
  			// 	input[type="checkbox"] {
				// 	vertical-align: middle;
				// }
			}

		}

		function quiz() {

		}
	}

	function taskRunner() {
		function gulp() {

		}

		function grunt() {

		}

		function webpack() {
			var source = "http://www.shmck.com/webpack-angular-part-1/";
			// simple webpack config
			'use strict';

			var webpack = require('webpack'),
			path = require('path');


			var baseDirectory = __dirname + '/app';

			console.log(baseDirectory);

			module.exports = {
				// config goes here
				context: baseDirectory, 
				// The base directory (absolute path!) for resolving the entry option. 
				// Default: process.cwd()
				entry: {
					app: './app.js'
				},
				output: {
					path: baseDirectory,
					filename: 'bundle.js'
				}
			};
		} // end of webpack
	}

	function git_command() {
		// 1. update git user name
		// git config --global user.name "Your Actual Name"
		// 
		// 2. update git user email
		// git config --global user.email "Your Actual Email"
		// Your email address should be the same one associated with your GitHub account.
		// 
		// 3. verify git global configuration
		// git config -l

	}
}