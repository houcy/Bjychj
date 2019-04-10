// Do not edit this file; automatically generated by build.py.
'use strict';

Blockly.Arduino=new Blockly.Generator("Arduino");
Blockly.Arduino.addReservedWords("setup,loop,if,else,for,switch,case,while,do,break,continue,return,goto,define,include,HIGH,LOW,INPUT,OUTPUT,INPUT_PULLUP,true,false,interger, constants,floating,point,void,bookean,char,unsigned,byte,int,short,word,long,float,double,string,String,static, volatile,const,sizeof,pinMode,digitalWrite,digitalRead,analogReference,analogRead,analogWrite,tone,noTone,shiftOut,shitIn,pulseIn,millis,micros,delay,delayMicroseconds,min,max,abs,constrain,map,pow,sqrt,sin,cos,tan,randomSeed,random,lowByte,highByte,bitRead,bitWrite,bitSet,bitClear,bit,attachInterrupt,detachInterrupt,interrupts,noInterrupts,A0,A1,A2,A3,A4,A5,A6,A7,A8,A9,A10,A11,A12,A13,A14,A15","ficube_");
Blockly.Arduino.ORDER_ATOMIC=0;Blockly.Arduino.ORDER_UNARY_POSTFIX=1;Blockly.Arduino.ORDER_UNARY_PREFIX=2;Blockly.Arduino.ORDER_MULTIPLICATIVE=3;Blockly.Arduino.ORDER_ADDITIVE=4;Blockly.Arduino.ORDER_SHIFT=5;Blockly.Arduino.ORDER_RELATIONAL=6;Blockly.Arduino.ORDER_EQUALITY=7;Blockly.Arduino.ORDER_BITWISE_AND=8;Blockly.Arduino.ORDER_BITWISE_XOR=9;Blockly.Arduino.ORDER_BITWISE_OR=10;Blockly.Arduino.ORDER_LOGICAL_AND=11;Blockly.Arduino.ORDER_LOGICAL_OR=12;Blockly.Arduino.ORDER_CONDITIONAL=13;
Blockly.Arduino.ORDER_ASSIGNMENT=14;Blockly.Arduino.ORDER_NONE=99;
var profile={softserial_select:[["SoftwareSerial","SoftwareSerial"],["SoftwareSerial1","SoftwareSerial1"],["SoftwareSeria2","SoftwareSeria2"],["SoftwareSerial3","SoftwareSerial3"]],arduino_standard:{description:"standard",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3",
"A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"]],pwm:[["3","3"],["5","5"],["6","6"],["9","9"],["10","10"],["11","11"]],interrupt:[["2","2"],["3","3"]],serial_select:[["Serial","Serial"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},arduino_mega:{description:"Mega",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12",
"12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"],["A8","A8"],["A9","A9"],["A10","A10"],["A11","A11"],["A12","A12"],["A13","A13"],["A14","A14"],["A15","A15"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"],["A8","A8"],["A9","A9"],["A10","A10"],["A11","A11"],["A12","A12"],["A13","A13"],["A14","A14"],["A15","A15"]],pwm:[["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],
["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["44","44"],["45","45"],["46","46"]],interrupt:[["2","2"],["3","3"]],serial_select:[["Serial","Serial"],["Serial1","Serial1"],["Serial2","Serial2"],["Serial3","Serial3"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},arduino_eightanaloginputs:{description:"eightanaloginputs",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],
["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"]],pwm:[["3","3"],["5","5"],["6","6"],["9","9"],["10","10"],["11","11"]],interrupt:[["2","2"],["3","3"]],serial_select:[["Serial","Serial"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2",
"mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},arduino_ethernet:{description:"ethernet",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],pwm:[["3","3"],["5","5"],["6","6"],["9","9"],["10","10"],["11","11"]],interrupt:[["2","2"],
["3","3"]],serial_select:[["Serial","Serial"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},arduino_gemma:{description:"gemma",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"]],pwm:[["0","0"],["1","1"]],interrupt:[["2","2"],["3","3"]],serial_select:[["Serial","Serial"],["SoftwareSerial",
"mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},arduino_leonardo:{description:"leonardo, micro, yun",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"],["A8","A8"],["A9","A9"],["A10","A10"],["A11","A11"]],analog:[["A0","A0"],["A1",
"A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"],["A8","A8"],["A9","A9"],["A10","A10"],["A11","A11"]],pwm:[["3","3"],["6","6"],["9","9"],["10","10"],["11","11"],["13","13"]],interrupt:[["0","0"],["1","1"],["2","2"],["3","3"],["7","7"]],serial_select:[["Serial","Serial"],["Serial1","Serial1"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},arduino_robot:{description:"robot",digital:[["0",
"0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"],["A8","A8"],["A9","A9"],["A10","A10"],["A11","A11"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"],["A6","A6"],["A7","A7"],["A8","A8"],["A9","A9"],["A10","A10"],["A11","A11"]],pwm:[["3","3"],["6","6"],["9","9"],["10","10"],["11",
"11"],["13","13"]],interrupt:[["0","0"],["1","1"],["2","2"],["3","3"],["7","7"]],serial_select:[["Serial","Serial"],["Serial1","Serial1"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},arduino_esp8266:{description:"esp8266",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"],["16",
"16"],["A0","A0"]],analog:[["A0","A0"]],pwm:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"],["16","16"]],interrupt:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["14","14"],["15","15"]],serial_select:[["Serial","Serial"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],
["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},"Arduino/Genuino 101":{description:"",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],pwm:[["3","3"],["5","5"],["6","6"],["9","9"]],interrupt:[["2","2"],["5","5"],
["7","7"],["8","8"],["10","10"],["11","11"],["12","12"],["13","13"]],serial_select:[["Serial","Serial"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2","mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600},mixio_xia:{description:"mixio",digital:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"],["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],
analog:[["A0","A0"],["A1","A1"],["A2","A2"],["A3","A3"],["A4","A4"],["A5","A5"]],pwm:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]],interrupt:[["0","0"],["1","1"],["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]],serial_select:[["Serial","Serial"],["SoftwareSerial","mySerial"],["SoftwareSerial1","mySerial1"],["SoftwareSeria2",
"mySerial2"],["SoftwareSerial3","mySerial3"]],serial:9600}};profile["Arduino Yun"]=profile["Arduino Yun Mini"]=profile["Arduino Leonardo"]=profile["Arduino Leonardo ETH"]=profile["Arduino Micro"]=profile["Arduino Esplora"]=profile["LilyPad Arduino USB"]=profile.arduino_leonardo;profile["Arduino Robot Control"]=profile["Arduino Robot Motor"]=profile.arduino_robot;profile["Arduino Mega or Mega 2560"]=profile["Arduino Mega ADK"]=profile.arduino_mega;profile["Arduino Ethernet"]=profile.arduino_ethernet;
profile["Arduino Gemma"]=profile.arduino_gemma;profile["Arduino Uno"]=profile["Arduino Duemilanove or Diecimila"]=profile["LilyPad Arduino"]=profile["Arduino NG or older"]=profile.arduino_standard;profile["Arduino Nano"]=profile["Arduino Mini"]=profile["Arduino Fio"]=profile["Arduino BT"]=profile["Arduino Pro or Pro Mini"]=profile.arduino_eightanaloginputs;
profile["Generic ESP8266 Module"]=profile["Adafruit HUZZAH ESP8266"]=profile["NodeMCU 0.9 (ESP-12 Module)"]=profile["NodeMCU 1.0 (ESP-12E Module)"]=profile["Olimex MOD-WIFI-ESP8266(-DEV)"]=profile["SparkFun ESP8266 Thing"]=profile["SweetPea ESP-210"]=profile.arduino_esp8266;
Blockly.Arduino.init=function(a){Blockly.Arduino.xml_=Object.create(null);Blockly.Arduino.system_=Object.create(null);Blockly.Arduino.function_=Object.create(null);Blockly.Arduino.setups_=Object.create(null);Blockly.Arduino.variableTypes_=Object.create(null);Blockly.Arduino.variableDB_?Blockly.Arduino.variableDB_.reset():Blockly.Arduino.variableDB_=new Blockly.Names(Blockly.Arduino.RESERVED_WORDS_)};
Blockly.Arduino.finish=function(a){a&&(a=Blockly.Arduino.prefixLines(a,Blockly.Arduino.INDENT));a='<ficube>\n<codes size="'+Blockly.Arduino.getXmlSize(a)+'">\n'+a+"</codes>\n</ficube>\n";var b=[],c;for(c in Blockly.Arduino.xml_)b.push(Blockly.Arduino.xml_[c]);return a};Blockly.Arduino.scrubNakedValue=function(a){return a+";\n"};Blockly.Arduino.quote_=function(a){a=a.replace(/\\/g,"\\\\").replace(/\n/g,"\\\n").replace(/\$/g,"\\$").replace(/'/g,"\\'");return'"'+a+'"'};
Blockly.Arduino.scrub_=function(a,b){var c;if(null===b)return"";var d="";if(!a.outputConnection||!a.outputConnection.targetConnection){(c=a.getCommentText())&&(d+=Blockly.Arduino.prefixLines(c,"// ")+"\n");for(var e=0;e<a.inputList.length;e++)a.inputList[e].type==Blockly.INPUT_VALUE&&(c=a.inputList[e].connection.targetBlock())&&(c=Blockly.Arduino.allNestedComments(c))&&(d+=Blockly.Arduino.prefixLines(c,"// "))}e=a.nextConnection&&a.nextConnection.targetBlock();e=Blockly.Arduino.blockToCode(e);return d+
b+e};Blockly.Arduino.getXmlSize=function(a){a="<x>\n"+a+"</x>\n";var b=(new DOMParser).parseFromString(a,"text/xml");a=b.getElementsByTagName("while");var c=b.getElementsByTagName("if");b=b.getElementsByTagName("code");b=a.length+c.length+b.length;for(var d=0;d<a.length;d++)b-=a[d].attributes.getNamedItem("param2").nodeValue;for(d=0;d<c.length;d++)b-=c[d].attributes.getNamedItem("param4").nodeValue;return b};Blockly.Arduino.air={};Blockly.Arduino.air_start=function(a){return Blockly.Arduino.statementToCode(a,"AIR_START_PARAM1")||""};Blockly.Arduino.air_pattern1=function(a){return'<code number="1" name="ctrl_mode" param1="'+a.getFieldValue("AIR_PATTERN1_PARAM1")+'"/>\n'};Blockly.Arduino.air_pattern2=function(a){return'<code number="2" name="yaw_mode" param1="'+a.getFieldValue("AIR_PATTERN2_PARAM1")+'"/>\n'};
Blockly.Arduino.air_pattern3=function(a){return'<code number="3" name="height_mode" param1="'+a.getFieldValue("AIR_PATTERN3_PARAM1")+'"/>\n'};Blockly.Arduino.air_pattern4=function(a){return'<code number="4" name="gravity_mode" param1="'+a.getFieldValue("AIR_PATTERN4_PARAM1")+'"/>\n'};Blockly.Arduino.air_get_state1=function(a){a=a.getFieldValue("AIR_GET_STATE1_PARAM1");return[""+(1073741829|parseInt(a)<<16),Blockly.Arduino.ORDER_ATOMIC]};
Blockly.Arduino.air_get_state2=function(a){a=a.getFieldValue("AIR_GET_STATE2_PARAM1");return[""+(1073741830|parseInt(a)<<16),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.air_get_state3=function(a){a=a.getFieldValue("AIR_GET_STATE3_PARAM1");return[""+(1073741831|parseInt(a)<<16),Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.air_set_delay=function(a){a=a.getFieldValue("AIR_SET_DELAY_PARAM1");return'<code number="25" name="delay" param1="'+1E3*Number(a)+'"/>\n'};
Blockly.Arduino.math_number=function(a){a=a.getFieldValue("MATH_NUMBER_PARAM1")||0;return[a,0>a?Blockly.Arduino.ORDER_UNARY_PREFIX:Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.air_set_loop=function(a){var b=a.getFieldValue("AIR_SET_LOOP_PARAM1");a=Blockly.Arduino.statementToCode(a,"AIR_SET_LOOP_PARAM2")||"";var c=Blockly.Arduino.getXmlSize(a);return'<while number="8" name="_while" param1="'+b+'" param2="'+c+'"/>\n'+a};
Blockly.Arduino.air_set_if_else=function(a){var b=Blockly.Arduino.valueToCode(a,"AIR_SET_IF_ELSE_PARAM1",Blockly.Arduino.ORDER_ADDITIVE),c=a.getFieldValue("AIR_SET_IF_ELSE_PARAM2"),d=Blockly.Arduino.valueToCode(a,"AIR_SET_IF_ELSE_PARAM3",Blockly.Arduino.ORDER_ADDITIVE);a=Blockly.Arduino.statementToCode(a,"AIR_SET_IF_ELSE_PARAM4");var e=Blockly.Arduino.getXmlSize(a);return'<if number="9" name="_if" param1="'+c+'" param2="'+b+'" param3="'+d+'" param4="'+e+'"/>\n'+a};
Blockly.Arduino.air_set_all_state=function(a){var b=a.getFieldValue("AIR_SET_ALL_STATE_PARAM2");a=a.getFieldValue("AIR_SET_ALL_STATE_PARAM3");return'<code number="10" name="move_time" param2="'+b+'" param3="'+1E3*Number(a)+'"/>\n'};Blockly.Arduino.air_set_all_light=function(a){var b=a.getFieldValue("AIR_SET_ALL_LIGHT_PARAM1");a=a.getFieldValue("AIR_SET_ALL_LIGHT_PARAM2");return'<code number="26" name="Air_led" param1="'+b+'" param2="'+a+'"/>\n'};Blockly.Arduino.buzzer={};Blockly.Arduino.buzzer_set_all_light=function(a){var b=a.getFieldValue("BUZZER_SET_ALL_LIGHT_PARAM1");a=a.getFieldValue("BUZZER_SET_ALL_LIGHT_PARAM2");return'<code number="22" name="note" param1="'+b+'" param2="'+1E3*Number(a)+'"/>\n'};Blockly.Arduino.buzzer_set_music=function(a){return'<code number="23" name="play" param1="'+a.getFieldValue("BUZZER_SET_MUSIC_PARAM1")+'"/>\n'};Blockly.Arduino.camera={};Blockly.Arduino.camera_set_state=function(a){return'<code number="11" name="picture" param1="'+a.getFieldValue("CAMERA_SET_STATE_PARAM1")+'"/>\n'};Blockly.Arduino.camera_set_video=function(a){return'<code number="12" name="video" param1="'+a.getFieldValue("CAMERA_SET_VIDEO_PARAM1")+'"/>\n'};Blockly.Arduino.camera_set_btn=function(a){a=a.getFieldValue("CAMERA_SET_BTN_PARAM1");return'<code number="13" name="record" param1="'+1E3*Number(a)+'"/>\n'};Blockly.Arduino.infrared={};Blockly.Arduino.infrared_set_sign=function(a){return'<code number="27" name="infrared" param1="'+a.getFieldValue("INFRARED_SET_SIGN_PARAM1")+'" />\n'};Blockly.Arduino.infrared_set_txt=function(a){return'<code number="27" name="infrared" param1="'+a.getFieldValue("INFRARED_SET_TXT_PARAM1")+'" />\n'};Blockly.Arduino.led={};Blockly.Arduino.led_set_all_light=function(a){var b=a.getFieldValue("LED_SET_ALL_LIGHT_PARAM1");a=a.getFieldValue("LED_SET_ALL_LIGHT_PARAM2");return'<code number="20" name="led" param1="'+b+'" param2="'+a+'"/>\n'};
Blockly.Arduino.led_set_gradual=function(a){var b=a.getFieldValue("LED_SET_ALL_LIGHT_PARAM1"),c=a.getFieldValue("LED_SET_ALL_LIGHT_PARAM2"),d=a.getFieldValue("LED_SET_ALL_LIGHT_PARAM3");a=a.getFieldValue("LED_SET_ALL_LIGHT_PARAM4");return'<code number="21" name="led_shadow" param1="'+b+'" param2="'+1E3*Number(c)+'" param3="'+d+'" param4="'+a+'"/>\n'};Blockly.Arduino.photosensitive={};Blockly.Arduino.photosensitive_get_value=function(a){return["1073741848",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.rgb={};Blockly.Arduino.rgb_set_all_light=function(a){var b=a.getFieldValue("RGB_SET_ALL_LIGHT_PARAM1");a=a.getFieldValue("RGB_SET_ALL_LIGHT_PARAM2");return'<code number="17" name="rgb_ring" param1="'+b+'" param2="'+a+'"/>\n'};Blockly.Arduino.rgb_set_color=function(a){a=a.getFieldValue("RGB_SET_COLOR_PARAM1");return'<code number="18" name="rgb_color" param1="'+Blockly.FieldColour.prototype.rgbColor(a)+'"/>\n'};
Blockly.Arduino.rgb_set_gradual=function(a){var b=a.getFieldValue("RGB_SET_GRADUAL_PARAM1"),c=a.getFieldValue("RGB_SET_GRADUAL_PARAM2");a=a.getFieldValue("RGB_SET_GRADUAL_PARAM3");return'<code number="19" name="rgb_color_shade" param1="'+1E3*Number(b)+'" param2="'+Blockly.FieldColour.prototype.rgbColor(c)+'" param3="'+Blockly.FieldColour.prototype.rgbColor(a)+'"/>\n'};Blockly.Arduino.ultra={};Blockly.Arduino.ultra_get_hight=function(a){return["1073741838",Blockly.Arduino.ORDER_ATOMIC]};Blockly.Arduino.ultra_set_hight=function(a){a=a.getFieldValue("ULTRA_SET_HIGHT_PARAM1");return'<code number="15" name="ctrl_height" param1="'+10*Number(a)+'"/>\n'};
Blockly.Arduino.ultra_set_direction_hight=function(a){var b=a.getFieldValue("ULTRA_SET_DIRECTION_HIGHT_PARAM1");a=a.getFieldValue("ULTRA_SET_DIRECTION_HIGHT_PARAM2");return'<code number="16" name="move_distance" param1="'+b+'" param2="'+10*Number(a)+'"/>\n'};