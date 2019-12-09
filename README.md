# Home Automation Assistant Connected Smart Mirror

ECE-4180-A Fall 2019 Final Project

Developed and maintained by:
*   Christian Graham
*   Alex Mathis
*   Sergio Prudencio 
*   Steve Sung 

# Description

The idea behind this project is to build a device that functions as a mirror and allows users to connect with existing home automation assistant devices and software to provide relevant features and information. One could convert any mirror into a personal assistant. 

*   Features
    *   Time Display
    *   Date
    *   Weather Forecast
    *   Live Reddit Feed
    *   Spotify Integration
    *   Alexa Interface
    *   JEOPARDY Game Integration
    *   Pages Functionality
*   Parts List
    *   Two-Way Acrylic Mirror
    *   Mirror Frame
    *   Wood Planks
    *   Miter Saw
    *   Screws
    *   Drill
    *   Raspberry Pi 4
    *   Micro SD Card
    *   Micro HDMI Adapter Micro HDMI to 
    *   HDMI Female Cable
    *   LCD Display
    *   Extension Cord
    *   Alexa (optional)
*   Connections

    [Insert schematic here]

*   Demo Videos
    *   **ECE 4180 - Home Automation Assistant Connected Smart Mirror - Extended Look**
        *   [https://youtu.be/7e1zBRNagvM](https://youtu.be/7e1zBRNagvM)
    *   **ECE 4180 - Home Automation Assistant Connected Smart Mirror - Quick Look**
        *   [https://youtu.be/iA1w0tOCgMM](https://youtu.be/iA1w0tOCgMM)

# Software Setup

In this section we will focus on setting up all the necessary components and software to run the Magic Mirror software and install a few of the modules we have running in this version of the software. To do this, ensure you have access to the Raspberry Pi, a Micro SD Card, and all the necessary peripherals to interface with the Pi.

## Installing Rasbian (OS) to the Raspberry Pi 4

*   Necessary Components / Software
    *   Raspberry Pi 4*
    *   Micro SD Card
    *   Etcher (SD Imaging Software)
        *   [https://etcher.io/](https://etcher.io/)
1. First we’re going to download the latest version of Google’s AIY variant of the Raspbian Linux Distribution. Visit the following website and download the latest img.xy file.
    1. [https://github.com/google/aiyprojects-raspbian/releases](https://github.com/google/aiyprojects-raspbian/releases)
2. Next, use the Etcher SD Imaging Software to flash the img.xy file to your Micro SD Card.
3. Insert the Micro SD Card into your Raspberry Pi and boot the Pi. The Pi should boot directly into the AIY Raspbian OS.
4. Take a moment to familiarize yourself with the OS if you’ve never used Raspbian before. Set your date/time, create an account with user ID / password, and get connected to your network. The Raspberry Pi 4 supports both wired and wireless network connections.

## Installing the Magic Mirror Software

1. Installing the Magic Mirror software is as easy as cloning the projects GitHub repository. To do this, open up the terminal and paste the following string:
    1. ```bash -c "$(curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh)"```
    2. NOTE: Visit the official site for all documentation.
        1. [https://magicmirror.builders/](https://magicmirror.builders/)
2. I recommend pressing “y” when it asks you if you would like to install PM2 as this is the mirror softwares autoboot function. After installation it should boot directly into the mirror software.
    3. The mirror software can be closed with “ctrl+Q”.
3. At this point if the mirror software closes for any reason it will reboot itself every 10 seconds. To stop this, open up the terminal and enter the following string:
    - ```pm2 stop MagicMirror```
4. If you would like to restart the mirror software, type the following string:
    - ```pm2 start MagicMirror```

## Configuring the Config File (JavaScript)

1. To access the mirror software’s config file, visit the following file path:
    1. ```/home/pi/MagicMirror/config```
2. Here you should find a file called “config.js”. This is the mirror software’s configuration file. If, for any reason, you mess up your config file simply copy the sample config file (same folder) and rename it to “config.js”.
3. Open “config.js” with any text editor. Here you can change the mirror’s time format, default language, default units, modules, etc. This is where the majority of our time will be spent when editing the mirror’s functionality.
4. If you do not want a module to display on the mirror, simply comment it out or delete it (bracket to bracket). Remember to save your work before leaving the text editor.
    2. I removed the following modules:
      - Newsfeed
      - CurrentWeather
      - WeatherForecast
      - Calendar
      - UpdateNotification
      - Alert



### ----------------------------------------- ADD IMAGE -----------------------------------------




5. Further, I changed the default language to ```english``` (“```en```”), ```timeFormat``` (“```12```”), and ```units``` (“```imperial```”).

## Installing Additional Modules (Weather)

1. We’re going to start by installing a specific weather module called MMM-3Day-Forecast by nigel-daniels.
    1. Official Page:
        1. [https://github.com/nigel-daniels/MMM-3Day-Forecast](https://github.com/nigel-daniels/MMM-3Day-Forecast)
2. Open the terminal and navigate to your modules folder, you can do this by pasting the following string into the terminal:
    - ```cd ~/MagicMirror/modules```
3. Clone the GitHub repository by pasting the following string in the terminal:
    - ```git clone https://github.com/nigel-daniels/MMM-3Day-Forecast```
4. Once that’s done, to install additional dependencies paste the following strings into the terminal:
    - ```cd ~/MMM-3Day-Forecast```
    - ```npm install```
5. Make your way to the mirror softwares config.js file and paste the example module info below:
    6. NOTE: Please visit the official page for additional parameters modifications.

```
{
    module:     'MMM-3Day-Forecast',
    position:   'top_left',
	config: {
		api_key:    'xxxxxxxxxxxxxxxxxxxxxx',
		lat:        37.3397352,
		lon:        -121.894958,
		units:      'M',
		lang:       'en',
		interval:   900000
	}
},
```

1. You must now visit the following website, sign up for an account, and retrieve an API key in order to retrieve real time weather info.
    1. [Weatherbit.io](Weatherbit.io)
2. Once you have acquired the API key, return to the config.js file and paste your API key in the weather module you just created. Additionally, you may update the latitude and longitude of the location it’s polling weather.

## Installing Additional Modules (Spotify)

1. Next we’ll install a Spotify module that interacts with the Spotify API called MMM-Spotify by eouia.
    1. Official Page:
        1. [https://github.com/eouia/MMM-Spotify](https://github.com/eouia/MMM-Spotify)
2. Open the terminal and navigate to your modules folder, you can do this by pasting the following string into the terminal:
    - ```cd ~/MagicMirror/modules```
3. Clone the GitHub repository by pasting the following string in the terminal:
    - ```git clone https://github.com/eouia/MMM-Spotify```
4. Once that’s done, to install additional dependencies paste the following strings into the terminal:
    - ```cd ~/MMM-Spotify```
    - ```npm install```
5. Make your way to the mirror softwares config.js file and paste the example module info below:
    6. NOTE: Please visit the official page for additional parameters modifications.

```
{
  module: "MMM-Spotify",
  position: "bottom_left",
  config: {
    style: "default", // "default" or "mini" available
    control: "default", //"default", "hidden" available
    updateInterval: 1000,
    onStart: null, // disable onStart feature with `null`
    allowDevices: [], //If you want to limit devices to display info, use this.
    // allowDevices: ["RASPOTIFY", "My iPhoneX", "My Home speaker"],
  }
}
```

1. Before Spotify will work we’ll need to set up a Spotify developer account and retrieve the API key. Go to the following URL:
    1. [https://developer.spotify.com](https://developer.spotify.com/)
2. Once there, navigate to “dashboard” > “create an app”
3. Setup the app and hit “edit settings”
4. Change the redirect URI’s to the following:
    - ```http://localhost:8888/callback```
5. Now copy your Client ID and Client Secret. We will need these for the next few steps.
6. Make your way to the following path and rename spotify.config.json.example to spotify.config.json:
    - ```/MagicMirror/modules/MMM-Spotify```
7. Once you’ve done this, open the .json file and paste your Client ID and Client Secret. Save and close this file.
8. You can retrieve authorization by pasting the following strings in the terminal:
    - ```cd ~/MagicMirror/modules/MMM-Spotify```
    - ```node first_auth.js```

## Installing Additional Modules (AlexaControl)

1. Lastly, we're going to install a module that allows us to control the mirror directly through an Amazon Echo. This module is very powerful and can be used in a number of ways. The module is MMM_AlexaControl by JoChef2.
    1. Official Page:
        1. [https://github.com/JoChef2/MMM-AlexaControl](https://github.com/JoChef2/MMM-AlexaControl)
2. Open the terminal and navigate to your modules folder, you can do this by pasting the following string into the terminal:
    - ```cd ~/MagicMirror/modules```
3. Clone the GitHub repository by pasting the following string in the terminal:
    - ```git clone https://github.com/JoChef2/MMM-AlexaControl.git```
4. Once that’s done, to install additional dependencies paste the following strings into the terminal:
    - ```cd ~/MMM-AlexaControl```
    - ```npm install```
5. Make your way to the mirror softwares config.js file and paste the example module info below:
    6. NOTE: Please visit the official page for additional parameters modifications.

```
{
        module: 'MMM-AlexaControl',
        position: 'middle_center',
        config:{
            image: true,
            pm2ProcessName: "mm",
            vcgencmd: true
        }
    }
```


1. Once the mirror software is booted up, ensure your smart mirror and Amazon Echo are on the same network.
2. Search in the Alexa App for new devices or say: "Alexa, discover my devices".
    1. A list of new devices should populate as this module uses fake WEMOS devices to control certain aspects of the smart mirror.
3. Say “Alexa turn [device name] on/off.”
    2. Device Names are as follows:
      - Page #
      - Refresh
      - Restart pm2
      - Stop pm2
      - Reboot pi
      - Shutdown pi
      - Monitor

# Mirror Assembly Instructions

1. Remove the monitor stand from the LCD panel

### ----------------------------------------- ADD IMAGE -----------------------------------------

2. Trace the monitor on to the black styrofoam and cut with an exacto knife. The black styrofoam is used to fill and ensure the blank area surrounding the monitor also functions as a mirror. 

### ----------------------------------------- ADD IMAGE -----------------------------------------

3. Place the modified black styrofoam backing into the back of the mirror frame and position the monitor facing down (screen facing the front of the mirror). 

### ----------------------------------------- ADD IMAGE -----------------------------------------

4. Using a miter saw, create four 4”x10” and two 2”x4” wood pieces.

### ----------------------------------------- ADD IMAGE -----------------------------------------

5. Drill two 4”x10” pieces to the bottom of the mirror frame, bracing the bottom of the monitor.

### ----------------------------------------- ADD IMAGE -----------------------------------------

6. Drill two 2”x4” pieces to the bottom left and right of the monitor, bracing the sides.

### ----------------------------------------- ADD IMAGE -----------------------------------------

7. Drill the remaining 4”x10” pieces on the top, mirroring the bottom, to complete securing the monitor. Finish by drilling strips of thin wood to prevent the monitor from falling out backwards.

### ----------------------------------------- ADD IMAGE -----------------------------------------

8. At this point you must find some way to attach the Pi to the back of the wood frame, wire everything up, and project complete!

### ----------------------------------------- ADD IMAGE -----------------------------------------

[![Everything Is AWESOME](https://img.youtube.com/vi/StTqXEQ2l-Y/0.jpg)](https://www.youtube.com/watch?v=StTqXEQ2l-Y "Everything Is AWESOME")
