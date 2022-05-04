// jrscpInstSpcGlobal.js
//	Copyright 2022  James A. Rhodes
//  This file is "institution-specific":  there are multiple versions of jrscpInstSpcGlobal.js
//	This version of the file is for the "generic" Viewer

//	jrscpInstSpcGlobal.js is part of the "Multifocal-plane Virtual Microscope", which is an internet web-based program that
//		displays digitally-scanned microscopic specimens.
//	"Multifocal-plane Virtual Microscope" is free software:  you can redistribute it and/or modify it under the terms of
//		the GNU General Public License as published by the Free Software Foundation, either version 3
//		of the License, or any later version.  See <https://www.gnu.org/licenses/gpl-3.0.html>
//	"Multifocal-plane Virtual Microscope" is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
//		without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//		See the GNU Public License for more details.
//	The "Multifocal-plane Virtual Microscope" consists of two parts:  a Viewer and a SlideBox.  This file 
//		(jrscpInstSpcGlobal.js) is part of the Viewer.  Currently, the Viewer consists 
//		of 18 principal files and other supplementary files:
//		- one HTML file.
//		- two cascading style sheets
//		- 12 javascript files (including jrscpInstSpcGlobal.js)
//		- three PHP files
//	jrscpInstSpcGlobal.js contains global variables that differ between implementations of the Virtual Microscope at different
//		universities or other institutions.
//	Questions concerning "Multifocal-plane Virtual Microscope" may be directed to:
//		James Rhodes, PhD.
//		1923 S. 44th Avenue
//		Yakima, WA  98903

const glbInSSldBxURL = "";   // URL for slidebox

const glbInSTitle = "Virtual Microscope";
const glbInSFavIco = "..\\InstSpcImgChip\\GenIcon16.ico";

const glbInSIntroTitle = "Multifocal-plane<br>Virtual&nbsp;Microscope";
const glbInSIntroTop = 50;  // pixels at top of IntroPage (before curMargin above title)
const glbInSIntroBot = 10;  // pixels at bottom of IntroPage (after curMargin below logo)
const glbInSIntroLogo = "..\\InstSpcImgChip\\IntroLogo.jpg";
	// IntroLogo need not be square, but its height should be ~500px
const glbInSLogoHt = 500;
const glbInSLogoWdth = 980;
	// IntroLogo does can be off-center in the X-axis
const glbInsLogoCntr = 400;

const glbInSCpyRtTitle = "<span style='font-size: 38px'>Multifocal-plane Virtual Microscope</span>";
const glbInSCpyRtHdrTop = 16;
const glbInSCpyRtHdrLeft = 170;
const glbInSCpyRtHdrWd = 280;
const glbInSCpyRtLogo = "..\\InstSpcImgChip\\GenCpyRtLogo.png";
const glbInSCpyRtLogoHt = 180;
const glbInSCpyRtLogoWd = 350;
const glbInSCpyRtTxt = "<span style='font-size: 14px'>&nbsp;See (<span style='font-size:80%'>on menu</span>):"
			+ "<br>&nbsp;&nbsp;&nbsp;&nbsp;&quot;<span style='font-size:90%'>About</span>&quot;&rarr;&quot;<span style='font-size:90%'>About Virtual Microscope</span>&quot;"
			+ "<br>for copyright &amp; licensing information</span>";
const glbInSCpyRtTxtBot = 5;
const glbInSCpyRtTxtLeft = 202;
const glbInSCpyRtTxtWd = 248;
const glbInSisCpyRtShad = true;
const glbInSCpyRtTxtShad = "-1px -1px 4px rgb(248,253,255), "
			+ "-1px 1px 4px rgb(248,253,255), "
			+ "1px -1px 4px rgb(248,253,255), "
			+ "1px 1px 4px rgb(248,253,255), "
			+ "0px 0px 8px rgba(248,253,255,0.7)";
const glbInSCpyRtFadeBxBkg = "rgb(248,253,255)";
const glbInSCpyRtFadeBxBot = 3;
const glbInSCpyRtFadeBxHt = 59;
const glbInSCpyRtFadeBxLeft = 200;
const glbInSCpyRtFadeBxWd = 250;
const glbInSCpyRtFadeBxOpac = 0.15;

	//  icon used on special buttons ("Go to Slide Box", "Choose a new slide")
const glbInSBtnLogo = "..\\InstSpcImgChip\\GenIcon30.png";
	// optional background color (e.g. "rgba(255,255,255,0.4)") for special buttons that
	//	need a background-color offset for the button logo
const glbInSBtnBkgClr = null;

	
//  ****************************************************
//  ***  Title & Body text for Institution-Specific  ***
//  ***              "About" info boxes              ***
//  ****************************************************

			// About Microscope
//const glbInS_emailBugs = "MicroscopeBugs";
//const glbInS_emailComment = "Microscope.Virtual";
const glbInS_email = "microscope.virtual"
const glbInSAbtMicro_Title = "About this Virtual Microscope";
const glbInSCpyRtDate = "2022";
const glbInSCpyRtHolder = "James A. Rhodes";
var glbInSAbtMicro_Body = "<p style='text-align: center; font-size:20px; line-height: 0.95'>"
				// version, date, copyright
		+ "<b>Multifocal-plane Microscope Viewer, version " + viewerVersion + ".</b>"
		+ " (<span style='font-size: 18px'>" + viewerDate + "</span>)<span style='font-size: 14px'>"
		+ "<br>&copy;&nbsp;" + glbInSCpyRtDate + " &nbsp;" + glbInSCpyRtHolder + "</span></p>"
				//License => software license
		+ "<span class='aboutBodyTxtClass' style='text-indent: -10px; padding-top: 8px; border-top: 1px solid black'>"
		+ "<b>Copyright &amp; Licenses:</b> "
		+ "&nbsp;  The computer software comprising this Multifocal-plane Virtual Microscope, which is copyrighted ("
		+ "<span style='font-size:85%'>2019, 2020, 2022 by Pacific Northwest University of Health Sciences, "
		+ "and 2022 by James A. Rhodes, PhD.</span>"
		+ "), is free software: you may redistribute it and/or modify it under the terms of the "
		+ "<a href='https://www.gnu.org/licenses/gpl-3.0.html' target='_blank'>GNU General Public License</a>"
		+ ", either version 3 of the GNU License, or any later version, as published by the "
		+ "<a href='https://www.gnu.org/licenses/licenses.html' target='_blank'>Free Software Foundation</a>.&nbsp; "
		+ "This software is distributed WITHOUT ANY WARRANTY; without even the implied warranty of "
		+ "MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.</span>"
			//License => image license
		+ "<span class='aboutBodyTxtClass' style='padding-bottom: 10px'>"
		+ "The images of microscope specimens displayed by this Virtual Microscope "
		+ "may be copyrighted by the individual or institution providing that specific virtual slide.&nbsp; "
		+ "However, unless indicated otherwise, these images are free and may be downloaded &amp; used under a "
		+ "<a href='http://creativecommons.org/licenses/by-nc-sa/4.0/' target='_blank'>"
		+ "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>. &nbsp;"
		+ "When a virtual slide is loaded into the Multifocal-plane Virtual Microscope Viewer, you can use the "
		+ "\"<span style='font-size:85%'>View</span>\"&rarr;"
		+ "\"<span style='font-size:85%'>Show slide source</span>\" button on the menu "
		+ "to see the slide's source and licensing information.</span>"
			// authorship & credits
		+ "<span class='aboutBodyTxtClass' style='text-indent: -10px; padding-top: 8px; border-top: 1px solid black'>"
		+ "The computer code for this Virtual Microscope was written by James&nbsp;Rhodes, PhD, "
		+ "initially as part of a collaborative project with John&nbsp;DeVore, Director of Network Services, "
		+ "at Pacific Northwest University of Health Sciences (<span style='font-size:85%'>PNWU</span>) in Yakima, Washington, U.S.A., "
		+ "and more recently as an independent project.</span>"
		+ "<span class='aboutBodyTxtClass' style='padding-bottom: 8px'>"
		+ "This virtual microscope uses an image-tile architecture similar to that used by the Google Maps API.&nbsp; "
		+ "Virtual microscopes using this tiling architecture have been described previously "
		+ "(<span style='font-size:85%'>Triola&nbsp;MM, "
		+ "Holloway&nbsp;WJ. (2011) \"<i>Enhanced virtual microscopy for collaborative education</i>\" "
		+ "<u>BMC Med Educ</u>. 11:4:</span> <span style='font-size:80%; font-stretch: condensed'>"
		+ "<a href='http://www.biomedcentral.com/1472-6920/11/4' target='_blank'>"
		+  "http://www.biomedcentral.com/1472-6920/11/4</a></span>).</span>"
				// email info
		+ "<div style='padding: 0px 10px 20px'>Please report any programming errors (\"bugs\"), comments, or questions "
		+ "regarding this Multifocal-plane Virtual Microscope should be directed to:  "
		+ "<a href='mailto:" + glbInS_email + "@gmail.com'>"+ glbInS_email + "@gmail.com</a>.</div>";


			// About Virtual Slides
const glbInSAbtVirSld_Title = "Virtual slides used by the Virtual Microscope";
const glbInSAbtVirSld_Body = "<div style='margin-top: 4px; border-top: 1px solid black; padding: 10px 8px 8px 8px'>"
		+ "<div style='margin: 0px; padding: 0px 0px 5px 0px'>"
		+ "Virtual slides normally are created by using a (<span style='font-size:85%'>\"real\"</span>) microscope "
		+ "to digitally scan actual (<span style='font-size:85%'>\"real\"</span>) specimens that usually are sections "
		+ "of tissue mounted on glass microscope slides.&nbsp; "
		+ "The digital image (<span style='font-size:85%'>i.e., the virtual slide</span>) normally is owned by "
		+ "the person or organization that scanned the \"real\" slide, and may be protected by copyright.&nbsp; "
		+ "When this Virtual Microscope displays a virtual slide, the person and organization that provided "
		+ "the virtual slide normally is shown in the upper-right corner of the window; "
		+ "use \"View\" menu &rarr; \"Show slide source\" check-box to see this information."
		+ "</div>"
		+ "<div style='margin: 0px; padding: 0px 0px 8px 0px'>"
		+ "Virtual slides are stored in databases that can be shared, and the virtual slides displayed "
		+ "by this Virtual Microscope derive from shared databases:"
		+ "</div>"
		+ "<ul style='margin: 0px 0px 5px 18px; padding: 0px 5px 8px 8px'>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>PNWU:</b>&nbsp; A collection of virtual slides were created at Pacific Northwest University of "
		+ "Health Sciences (<span style='font-size:85%'>PNWU</span>) by James&nbsp;Rhodes, PhD, while he was on the PNWU faculty.&nbsp; "
		+ "This collection includes both multifocal-plane virtual slides (<span style='font-size:85%'>which can be focused up-and-down</span>) "
		+ "and single-focal-plane virtual slides.&nbsp; "
		+ "The origin of the \"real\" glass microscope slides used to create virtual slides in this collection can be seen by clicking on "
		+ "the \"About\" menu &rarr; \"About scanned slides\" menu item.</li>"
				// University of Michigan ... add this back if UM database is included on new server
//		+ "<li style='margin-bottom: 5px'>"
//		+ "<b>University of Michigan:</b>&nbsp; PNWU received a copy of the University of Michigan virtual slide "
//		+ "database through the generosity of "//
//		+ "J.&nbsp;Matthew&nbsp;Velkey, PhD, and Michael&nbsp;Hortsch, PhD, University of Michigan Medical School.&nbsp; "
//		+ "For more about this database of virtual slides, see:&nbsp; "
//		+ "<a href='https://histology.medicine.umich.edu/full-slide-list' target='_blank' style='font-size:85%'>"
//		+ "https://histology.medicine.umich.edu/full-slide-list</a>.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>VMD:</b>&nbsp; The American Association for Anatomy maintains the Virtual Microscopy Database "
		+ "(<span style='font-size:85%'>VMD</span>), "
		+ "which is a is a repository containing virtual slides contributed by many universities world-wide.&nbsp; "
		+ "This large collection consists of principally of single-focal-plane virtual slides.&nbsp; "
		+ "For more about this database, see:&nbsp; "
		+ "<a href='http://www.virtualmicroscopydatabase.org/' target='_blank' style='font-size:85%'>"
		+ "http://www.virtualmicroscopydatabase.org/</a>.</li>"
		+ "</ul></div>";
		
			// About Scanned Slides
const glbInSAbtScanSld_Title = "About slides scanned for this project";
const glbInSAbtScanSld_Body = "<div style='margin-top: 4px; border-top: 1px solid black; padding: 10px 8px 8px 8px'>"
		+ "<div style='margin: 0px; padding: 0px 0px 8px 0px'>"
		+ "In addition to creating a viewer that allows the user to focus up-and-down through a multifocal-plane virtual slide, "
		+ "a goal of the Virtual Microscope project was to create virtual slides that were scanned at "
		+ "(<span style='font-size:85%'>or close to</span>) the resolution limit of the light microscope, "
		+ " and that (<span style='font-size:85%'> in some case</span>) were scanned at multiple focal planes "
		+ "(<span style='font-size:85%'>which allows the user to look at different levels within the full thickness "
		+ "of the section of tissue</span>).&nbsp; We are indebted to the individuals and institutions who generously "
		+ "provided the \"real\" (<span style='font-size:85%'>glass</span>) microscope slides that were scanned "
		+ "to create \"virtual\" slides:"
		+ "</div>"
		+ "<ul style='margin: 0px 0px 5px 18px; padding: 0px 5px 8px 8px'>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>DCJR:</b>&nbsp; Diana C.J. Rhodes, DVM,PhD, Pacific Northwest University of Health Sciences.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>UCSF:</b>&nbsp; Steven Rosen, PhD, University of California, San Francisco.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>UM:</b>&nbsp; Michael Hortsch, PhD, University of Michigan</li>"
		+ "</ul></div>";
		
			// Using a mouse
const glbInSAbtMusCntrl_Title = "Using the Viewer with a Computer Mouse";
const glbInSAbtMusCntrl_Body = "<div style='margin-top: 4px; border-top: 1px solid black; padding: 10px 8px 8px 8px'>"
		+ "The Multifocal-plane Virtual Microscope\'s Viewer was designed to be controlled by a computer mouse.</div>"
		+ "<ul style='margin: 0px 0px 5px 18px; padding: 0px 5px 8px 8px'>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>X,Y coordinates:</b>&nbsp; the location of an object within "
		+ "the specimen can be determined by moving the computer's mouse "
		+ "(<span style='font-size:85%'>without depressing the mouse\'s buttons</span>) "
		+ "so that the mouse cursor is positioned over the object of interest.&nbsp; "
		+ "The coordinates of the mouse cursor (<span style='font-size:85%'>"
		+ "in pixels at the highest zoom-level</span>) relative to the upper-left "
		+ "corner of the specimen is displayed in the appropiate boxes on the menu.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Dragging the specimen:</b>&nbsp; the slide can be moved by using buttons "
		+ "on the navigator &amp; menu (<span style='font-size:85%'>see below</span>) "
		+ "or by dragging the specimen using the computer mouse.&nbsp;	"
		+ "To drag the specimen, position the mouse\'s cursor over the slide, depress the "
		+ "mouse\'s left button, and then move the mouse (<span style='font-size:85%'>"
		+ "with the mouse\'s left button depressed</span>).&nbsp; "
		+ "The specimen will be moved (<span style='font-size:85%'>"
		+ "dragged</span>) with the mouse cursor as the mouse moves across the field-of-view.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Changing zoom level or focal plane:</b>&nbsp; the magnification or focus "
		+ "(<span style='font-size:85%'>for multifocal-plane specimens</span>) "
		+ "of the specimen can be changed using the mouse\'s wheel "
		+ "(<span style='font-size: 12px'>or by \'clicking\' buttons on the \"View\" "
		+ "menu &amp; navigator</span>).&nbsp; "
		+ "The \"mouse-wheel control\" selector "
		+ "(<span style='font-size:85%'>on the \"View\" menu &amp; navigator</span>) "
		+ "determines whether rolling the mouse wheel changes the zoom level or focal plane.&nbsp; "
		+ "Rolling the mouse wheel forward (<span style='font-size:85%'>away from the "
		+ "user</span>) zooms-in or focuses down; rolling the mouse wheel "
		+ "backwards (<span style='font-size:85%'>towards from the user</span>) "
		+ "zooms-out or focuses up.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Moving the slide with buttons:</b>&nbsp; in addition to dragging the specimen "
		+ "(<span style='font-size:85%'>see above</span>), "
		+ "the slide also can be moved using the Up/Down/Left/Right buttons "
		+ "(<span style='font-size:85%'>arrows</span>) on the "
		+ "\"View\" menu and navigator.&nbsp; "
		+ "Depressing the button on the computer\'s mouse while the mouse cursor is "
		+ "located over one of these controls will cause the field-of-view to move "
		+ "repetitively (<span style='font-size:85%'>in the direction indicated by "
		+ "the arrow</span>) until the mouse\'s button is released.&nbsp; "
		+ "The buttons on the \"View\" menu and the single-arrow buttons on the "
		+ "navigator move the slide in smaller steps, while the triple-arrow buttons on the "
		+ "navigator move the slide in larger steps.&nbsp; "
		+ "If the &laquo;shift&raquo; key is depressed before depressing the mouse "
		+ "button, the size of each \'step\' is increased.&nbsp; "
		+ "The \"Settings\" menu &rarr; \"Make arrows MOVE SLIDE\" button can be used "
		+ "to change the direction of motion, so that depressing the arrow button causes "
		+ "the slide to \'step\' (<span style='font-size:85%'>in the direction indicated "
		+ "by the arrow</span>) across the \'fixed\' field-of-view "
		+ "(<span style='font-size: 12px'>instead of the field-of-view moving across the "
		+ "slide</span>).</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Other menu or navigator buttons:</b>&nbsp; except for the Up/Down/Left/Right "
		+ "buttons (<span style='font-size:85%'>see above</span>), the controls "
		+ "(<span style='font-size:85%'>buttons</span>) on the menu and navigator respond "
		+ "when the mouse button is \'clicked\' on one of these controls.&nbsp; "
		+ "Depressing the mouse button when the mouse cursor is positioned over a "
		+ "menu or navigator control \'cocks\' the menu/navigator button, "	
		+ "and releasing the mouse button actuates the \'click\' that causes "
		+ "the indicated action to occur.</li>";
		
			// Using a mouse
const glbInSAbtTchCntrl_Title = "Using the Viewer with a Touchscreen";
const glbInSAbtTchCntrl_Body = "<div style='margin-top: 4px; border-top: 1px solid black; padding: 10px 8px 8px 8px'>"
		+ "The Multifocal-plane Virtual Microscope\'s Viewer can be controlled by touching the screen "
		+ "of a touchscreen device, although it seems to work better with a computer mouse "
		+ "(<span style='font-size:85%'>because the mouse's cursor is more precise "
		+ "and obscures less of the field than a finger</span>).</div>"
		+ "<ul style='margin: 0px 0px 5px 18px; padding: 0px 5px 8px 8px'>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>X,Y coordinates:</b> &nbsp;<b>ONE</b> finger on the slide will display the x,y coordinates "
		+ "of the finger\'s location in the appropriate boxes on the menu.&nbsp; "
		+ "This is equivalent to moving the computer's mouse-cursor across the specimen "
		+ "without depreessing the buttons on the mouse.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Dragging the specimen:</b> &nbsp;moving <b>TWO</b> fingers in unison on the slide will drag "
		+ "the specimen across the field-of-view.&nbsp; This is equivalent to depressing the left button "
		+ "on the mouse, and then using the mouse to drag the specimen across the field of view.&nbsp; "
		+ "It is recommended that you do not touch the screen with more than two fingers.</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Changing zoom level or focal plane:</b> &nbsp;pinching or spreading <b>TWO</b> fingers "
		+ "on the slide will change the magnification or focus "
		+ "(<span style='font-size:85%'>depending on whether the \"mouse wheel\" is set to control "
		+ "the zoom level or focal plane</span>).&nbsp; "
		+ "Pinching two fingers together zooms-out or focuses up.&nbsp; "
		+ "Conversely, spreading two fingers apart zooms-in or focuses down.&nbsp; "
		+ "This is equvalent to rotating the mouse-wheel to change magnification or focus.&nbsp; "
		+ "Because of a computer-bug that we haven\'t yet been able to exterminate, "
		+ "pinching or spreading your fingers usually will only change one or two zoom levels or "
		+ "focal planes; you then must lift BOTH of your fingers off of the screen before proceeding "
		+ "(<span style='font-size:85%'>e.g., placing both fingers back on the screen for another "
		+ "pinch or spread</span>).</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Moving the slide with buttons:</b> &nbsp;placing a finger on one of the Up/Down/Left/Right "
		+ "buttons (<span style='font-size:85%'>on the \"View\" menu or navigator</span>) will cause the "
		+ "field-of-view to move repetitively (<span style='font-size:85%'>in the "
		+ "indicated direction</span>) until the finger is lifted.&nbsp; "
		+ "This is equivalent to depressing the mouse-button on these controls.&nbsp; "
		+ "The \"Settings\" menu &rarr; \"Make arrows MOVE SLIDE\" button can be used "
		+ "to change the direction of motion, so that depressing the arrow button causes "
		+ "the slide to \'step\' (<span style='font-size:85%'>in the direction indicated "
		+ "by the arrow</span>) across the \'fixed\' field-of-view "
		+ "(<span style='font-size:85%'>instead of the field-of-view moving across the "
		+ "slide</span>).</li>"
		+ "<li style='margin-bottom: 5px'>"
		+ "<b>Other menu or navigator buttons:</b>&nbsp; the other controls on the menu and navigator "
		+ "respond to a \'click\':&nbsp; touching the control \'cocks\' the button and raising your "
		+ "finger causes the indicated action to occur.&nbsp; "
		+ "This is equivalent to clicking the mouse-button on the control.</li>";


// glbInSAbtLst[] is an array of objects that specify the contents
//	of the main menu's "About" drop-down menu
//	Each object consists of:
//	 - mnuTxt = text string (can contain HTML tags) for content of drop-down menu item.
//	 - mnuId = id of the menu drop-down item 
//	 - mnuCls = text string for className=""
//	 - mnuClk = text string for onClick=""

var glbInSAbtLst = [
	{	mnuTxt: "About the Virtual Microscope <b>...</b>",
		mnuId: "menuAboutMicroscope",
		mnuCls: "menuClickable menuDrpDwnSubItem",
		mnuClk: function () {aboutDispBx(glbInSAbtMicro_Title,glbInSAbtMicro_Body);}
		},
	{	mnuTxt: "About virtual slides <b>...</b>",
		mnuId: "menuAbtVirSlides",
		mnuCls: "menuClickable menuDrpDwnSubItem",
		mnuClk: function () {aboutDispBx(glbInSAbtVirSld_Title,glbInSAbtVirSld_Body);}
		},
	{	mnuTxt: "About scanned slides <b>...</b>",
		mnuId: "menuAbtScanSlides",
		mnuCls: "menuClickable menuDrpDwnSubItem",
		mnuClk: function () {aboutDispBx(glbInSAbtScanSld_Title,glbInSAbtScanSld_Body);}
		},
				// divider
	{	mnuTxt: "",
		mnuId: "",
		mnuCls: "menuDrpDwnSubItem menuDivider",
		mnuClk: null
		},
	{	mnuTxt: "Using a computer mouse <b>...</b>",
		mnuId: "menuAbtMusCntrl",
		mnuCls: "menuClickable menuDrpDwnSubItem",
		mnuClk: function () {aboutDispBx(glbInSAbtMusCntrl_Title,glbInSAbtMusCntrl_Body);}
		},
	{	mnuTxt: "Using a touchscreen <b>...</b>",
		mnuId: "menuAbtTchScr",
		mnuCls: "menuClickable menuDrpDwnSubItem",
		mnuClk: function () {aboutDispBx(glbInSAbtTchCntrl_Title,glbInSAbtTchCntrl_Body);}
		},
	];

