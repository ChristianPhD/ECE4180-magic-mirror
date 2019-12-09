/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
        		module: 'MMM-page-indicator',
        		position: 'bottom_bar',
        		config: {
            			pages: 2,
        		}
    		},
		{
        		module: 'MMM-pages',
        		config: {
				//rotationTime: 10,
                		modules:
                    		[
					[ "compliments", "MMM-3Day-Forecast", "MMM-Spotify", "MMM-Reddit"],
					[ "MMM-JEOPARDY"]
                     		],
                		fixed: ["clock", "MMM-AlexaControl", "MMM-page-indicator"],
        		}
    		},		
		{
			module: 'MMM-Snow',
			position: 'fullscreen_above',
			config: { // See 'Configuration options' for more information.
				flakeCount: 100,
				theme: "winter"			
			}
		},		
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
    			module:     'MMM-3Day-Forecast',
    			position:   'top_right',
			config: {
				api_key:    'bf9c8af0343a421cb92faf4d8a77b2f2',
				lat:        33.7490,
				lon:        -84.3880,
				units:      'I',
				lang:       'en',
				interval:   900000
			}
		},
		{
   			module: 'MMM-JEOPARDY',
    			position: 'lower_third',                  // Works well anywhere
    			config: { 
	    			useHeader: false,              // true if you want a header
            			header: "This is Jeopardy!",   // Any text you want
	    			maxWidth: "500px",             // Stretch or constrain according to region
	    			animationSpeed: 2000,          // New clue fades in and out
    			}
		},
		{
  			module: "MMM-Spotify",
  			position: "bottom_left",
  			config: {
    				style: "mini", // "default" or "mini" available
    				control: "default", //"default", "hidden" available
    				updateInterval: 1000,
    				onStart: null, // disable onStart feature with `null`
    				allowDevices: [], //If you want to limit devices to display info, use this.
    				// allowDevices: ["RASPOTIFY", "My iPhoneX", "My Home speaker"],
  			}
		},
		{
			module: "MMM-Reddit",
			position: "bottom_right",
			config: {
    				subreddit: 'gamingnews',
				type: 'top',
				displayType: 'headlines',
				count: 10,
				show: 1,
				width: 500,
				rotateInterval: 5,
				colorText: false,
				showScore: false,
				showNumComments: true,
				showGilded: true,
			}
		},
		{
        		module: 'MMM-AlexaControl',
        		position: 'top_left',
        		config:{
            			image: true,
				height: 100,
				width: 100,
            			pm2ProcessName: "mm",
				pages: 2,
            			vcgencmd: true
        		}
    		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
