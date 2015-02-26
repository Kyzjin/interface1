// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#0000ff');

//
// create base UI tab and root window
//
var win1 = Ti.UI.createWindow({  
    title:'Window 1',
    backgroundColor:'#00ffff',
     orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.PORTRAIT ]
     
});


var win2 = Ti.UI.createWindow({  
    title:'Window 2',
    backgroundColor:'#0000ff',
    orientationModes: [ Ti.UI.LANDSCAPE_LEFT, Ti.UI.PORTRAIT ]
    
});


var label1 = Ti.UI.createLabel({
	color:'#7fffd4',
	text:'I am Window 1',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var label2 = Ti.UI.createLabel({
	color:'#7fffd4',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

// start button



var button1 = Ti.UI.createButton({
   title: 'Hello',
   top: 10,
   width: 100,
   height: 50
});


var button2 = Ti.UI.createButton({
   title: 'Hello',
   top: 10,
   width: 100,
   height: 50
});


button1.addEventListener('click',function(a)
{
	win2.add(label2);
	win2.add(button2);
	win2.add(landscape);
	win2.open();
	win1.close();
});




button2.addEventListener('click', function(e)
{
	
	
 win1.add(label1);
 win1.add(button1);
 win1.open();
 win2.close();
	
});

var landscape =Ti.UI.createButton({
   title: 'Landscape',
   top: 100,
   width: 100,
   height: 50
   
});

landscape.addEventListener('click', function(d)
{
	win2.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
});


//end
//end button

win1.add(label1);
win1.add(button1);

win1.open();
