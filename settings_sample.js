/* ----------------------------------------------------------------------------
	the uid and token can easily be found using the chrome dev tools in 
	chrome or firebug for firefox.
-----------------------------------------------------------------------------*/

// automatically log in via kongregate api? (required for setting logged_in_as)
var auto_login = true;

// displays in the top right corner on the char select screen, set to anything you want
var logged_in_as = 'Hello YouTube!';
// your kongregate user id
var kong_uid = '';
// your kongregate auth token
var token = '';

// default width, height and quality of flash object
var gameWidth = '800'; //px
var gameHeight = '600'; //px
var gameQuality = 'low'; // low, medium, high