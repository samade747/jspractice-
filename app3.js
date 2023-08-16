// chapter 04

//01
var myName="Samad", myProfession= "PSX", myCourse= "Web and APP";
alert(myName + myProfession + myCourse)


// 02 five legal Variables formats 
var Myserver
var my_server
var _server 
var $myvserver

//03 five illegal Variables Formats
// var 2variable;        // Starts with a number
// var my-variable;      // Contains a hyphen
// var if;               // Reserved keyword
// var my variable;      // Contains a space
// var café;             // Contains non-ASCII characters

var Rules = "Rules for naming JS variables \n";
var b = " b) Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.\n";
var c = "c) Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.\n";
var d = "d) Variable names are case sensitive.\n";
var e = "e) Variable names should not be JavaScript reserved keywords\n";
document.write(Rules +  b + c + d + e)