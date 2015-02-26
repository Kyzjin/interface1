// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#0000ff');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#00ffff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#8B0000',
	text:'changing orientation',
	font:{
		fontSize:20,
		fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view1 = Ti.UI.createView({
	text:'Header',
	font:{
		fontSize: 40, 
		fontFamily:'Helvetica Neue'},
	top: 0,
	bottom:'20%',
	left: 0,
	right:'100%',
	backgroundColor: '#00008B'
});

var switchOrientation = Ti.UI.createButton({
	title:'Make Landscape',
	top: 10,
	left: 10
});
switchOrientation.addEventListener('click',rotateLayout);

win1.add(switchOrientation);

function rotateLayout() {
	win1.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
	switchOrientation.hide();
}

label1.add(view1);
win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#00ffff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#8B0000',
	text:'What are we to do now?',
	font:{
		fontSize:20,
		fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

var view2 = Ti.UI.createView({
	text:'Header',
	font:{
		fontSize: 40, 
		color:'#8B0000',
		fontFamily:'Helvetica Neue'},
	top: 0,
	bottom:'20%',
	left: 0,
	right:'100%',
	backgroundColor: '#00008B'
});

label2.add(view2);
win2.add(label2);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  

// open tab group
tabGroup.open();
