1/***Welcome to the menuLibrary.

functions

clear :: clears the screen
drawAllButtons :: passes an array of buttons to drawButton
drawButton :: draws one button on the screen
listChooser :: creates a special type of buttons

Menu functions

titleMenu :: the starting screen for the game.
singlePlayerMenu :: the menu for single player games.
multiPlayerMenu :: the menu for multi player games.
howToPlayMenu :: instructions for the game.
aboutThisGameMenu :: game credits.

Button types

null ::
button ::
chooser ::

//NGPF Orange is rgb(241,88,37)

*/
var menuNester = 180;
  var buttonDistance = 132;
var titleButtonData = { text:"NGPF Investing Arena" , length:520 , size:40 , x: menuNester , y:10};
var mainMenuButtonData = { text:"Main Menu" , length:165 , size:40 , x:10 , y:10 , action: function(){titleMenu()}};
var companyName = [
          "Christian's Coffee" ,
          "Tim's Ideas" ,
          "Laura's Pies",
          "Dan's Desserts",
          "Hammock by Yanely",
          "Sonia's Soup",
          "Rita's Reports",
          "Greg's Robotics",
          "JessCo",
          "Cheer Camp"];
var companySymbol = [ "ccgo" , "timm" , "lpi"];
var newsArray = [
          "facing strike calls." ,
          "having profitable quarter." ,
          "facing rising prices." ,
          "facing shutdown." ,
          "showing big profits.",
          "seeing declining sales.",
          "CEO has high hopes.",
          "coping with regulations",
          "leading in innovation",
          "market share rises"
        ];
var companyWheel = 0;
var optionsMenuButtonData;
var currentChoosers;
var market = [[ 50, 50, (Math.random()+1.5)*25 ],[ 50, 50, (Math.random()+1.5)*25 ],[ 50, 50, (Math.random()+1.5)*25]];
  var tester = 1;
  var market1 = market[0];
  var market2 = market[1];
  var market3 = market[2];
  var marketValuesCounter;
  var shares = 10000.00;
  var holdings = "Dollars";
  var status = "cash";
  var valuer = 1.0;
  var company = -1;
  var interval = null;
  var rounds = 3;
  var color = ["white", "#444e86","white","yellow","#808080","#A7226E","#EC2049","#F26B38"];
  var status = "cash";
  var valuer = 1.0;
  var company = -1;
    var newsCounter = 0;
    var newsRand1 = 0;
    var newsRand2 = 0;
    var valueTxt;
    var indexValue = 1.0;


  //color pallettes to try {
    //#fe4a49 • #2ab7ca • #fed766
//#3da4ab • #f6cd61 • #fe8a71
// #f37736  • #7bc043 • #0392cf
//#96ceb4 • #ff6f69 • #ffcc5c
//#00b159 • #00aedb • #f37735 •
//#eb6841  • #4f372d • #00a0b0


function companySwitch(){

if (companyWheel == 0){

      companyName.unshift("Hammock by Yanely") ;
      companyName.unshift("Dan's Desserts") ;
      companyName.unshift("Sonia's Soup") ;
      companySymbol.unshift("hammock") ;
      companySymbol.unshift("dess") ;
      companySymbol.unshift("soup") ;
      companyWheel = 1;}
    else if (companyWheel == 1){
      companyName.unshift("Rita's Reports") ;
      companyName.unshift("Cheer Camp") ;
      companyName.unshift("JessCo") ;
      companySymbol.unshift("rprt") ;
      companySymbol.unshift("abby") ;
      companySymbol.unshift("jess") ;
      companyWheel = 2;}
      else if (companyWheel == 2){
        companyName.unshift("Christian's Coffee") ;
        companyName.unshift("Tim's Ideas") ;
        companyName.unshift("Laura's Pies") ;
        companySymbol.unshift("ccgo") ;
        companySymbol.unshift("timm") ;
        companySymbol.unshift("lpi") ;
        companyWheel = 0;}

    

  titleMenu();
}

  var marketValuesCounter = 1;

function clear() {
    ctx.fillStyle=color[0];
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle="#888888";
    ctx.strokeRect(0,0,width,height);
}

function clickManager( x , y )
//menu buttons
{


  for ( var i = 0 ; i < 3 ; i++ ) {
      if ( x > menuNester + buttonDistance*i && x < menuNester + buttonDistance*(i+1) && y > 400)
      {
        if ( status == "cash" ) {

                    holdings = companySymbol[i];
                    var currentCompany = market[i];
                    shares = (shares / currentCompany[marketValuesCounter]);
                    status = "stock";
                    company = i;
                    detailsMenu();
                    buySymbol = [" "," " ," "]
                    buySymbol[i] = "Sell";
                  }
        else if (buySymbol[i] == "Sell") {
          var currentCompany = market[i];
          holdings = "Dollars";
          buySymbol = ["Buy","Buy" ,"Buy"];
          shares = (shares * currentCompany[marketValuesCounter]);
          status = "cash";
          company = -1;
          detailsMenu();

        }




      }

  }







  for ( var i = 0 ; i < currentButtons.length ; i ++ )
  {
    if ( x > currentButtons[i].x && x < currentButtons[i].x+ currentButtons[i].length && y > currentButtons[i].y && y < currentButtons[i].y + currentButtons[i].size)
    {
        currentButtons[i].action();
  }}

//chooser menu buttons
  for ( var i = 0 ; i < currentChoosers.length ; i++)
  {
    if ( y > currentChoosers[i].y &&  y < currentChoosers[i].size + 10 + currentChoosers[i].y )
    {
      if ( x > currentChoosers[i].x && x < currentChoosers[i].x + currentChoosers[i].length)
      {
          currentChoosers[i].action();
      }
      else if ( x > currentChoosers[i].x - 30 && x < currentChoosers[i].x-5)
      {
          currentChoosers[i].actionLeft();
      }
      else if ( x > currentChoosers[i].x +currentChoosers[i].length + 10 && x < currentChoosers[i].x + currentChoosers[i].length + 30)
      {
          currentChoosers[i].actionRight();
      }
}}

//buy sell buttonSize









}

function drawAllButtons ( buttons , currentChoosers ) {
    for ( var i = 0 ; i < buttons.length ; i++ ){
      drawButton (buttons[i]);
    }

}

function drawButton ( button ) {

  ctx.beginPath();
  ctx.fillStyle=color[1];
  ctx.rect( button.x , button.y , button.length , button.size );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[2];
  ctx.textAlign = "center";
  ctx.font = button.size - 10 + "px Arial";
  ctx.fillText(button.text, button.x + button.length*.5 , button.y + button.size -5 );
  ctx.closePath();



}

function drawChooser (  ){
/*
  var text = "rounds";
  var x = 50;
  var y = 300;
  var payload = companyArray;
  var length = 50;
  var size = 30;*/
/*  var action = function(){titleMenu()};
  var actionLeft = function(){decrement(self)};
  var actionRight() = function(){increment(sefl)};*/
 var chooserDataArray =  [ {text: tester,
                      length:200 ,
                      size:25 ,
                      x:400 ,
                      y:240 ,
                      payload:companyArray
/*                      action:function(){titleMenu()},
                      actionLeft:function(){decrement(self)},
                      actionRight:function(){increment(self)}*/}];
  var chooserData = chooserDataArray[0];


  ctx.beginPath();
  ctx.fillStyle=color[1];
  ctx.rect( chooserData.x , chooserData.y , chooserData.length , 10 + chooserData.size );
  ctx.fill();
  ctx.closePath();

//left arrow
    ctx.beginPath();
    ctx.fillStyle = color[1];
    ctx.moveTo( chooserData.x -30 , chooserData.y + 5 + ( chooserData.size / 2 ));
    ctx.lineTo ( chooserData.x-10 , chooserData.y );
    ctx.lineTo ( chooserData.x-10, chooserData.y + 10 + chooserData.size);
    ctx.fill();
    ctx.closePath();
//rightarrow
    ctx.beginPath();
    ctx.fillStyle = color[0];
    ctx.moveTo( chooserData.x + chooserData.length + 30 , chooserData.y + 5 + ( chooserData.size / 2 ));
    ctx.lineTo ( chooserData.x + chooserData.length + 10 , chooserData.y );
    ctx.lineTo ( chooserData.x + chooserData.length +   10, chooserData.y + 10 + chooserData.size);
    ctx.fill();
    ctx.closePath();


//The currently selected choice
  ctx.beginPath();
  ctx.fillStyle=color[2];
  ctx.font = chooserData.size *.7+ "px Arial";
  ctx.fillText("Coming Soon " + rounds, chooserData.x + chooserData.length*.5, chooserData.y + chooserData.size*1.2);
  ctx.closePath();
}

function titleMenu(){
  currentButtons = [ titleButtonData, mainMenuButtonData,
{text:"Companies" , length:200 , size:30 , x:400 , y:200 , action: function (){companySwitch()}},
{text:"BeginGame" , length:200 , size:30 , x:400 , y:160, action: function (){beginGame()}}
];

marketValuesCounter=1;
 shares = 10000.00;
 holdings = "Dollars";
 status = "cash";
 valuer = 1.0;
 company = -1;
  buySymbol = ["Buy","Buy" ,"Buy"];



 market = [[ 50, 50, (Math.random()+1.5)*25 ],[ 50, 50, (Math.random()+1.5)*25 ],[ 50, 50, (Math.random()+1.5)*25]];
   market1 = market[0];
   market2 = market[1];
   market3 = market[2];

   var randomNumber = Math.random();
   for ( var i = 0 ; i < 10 ; i++)
   if (randomNumber < i/10)
     {
       newsRand1 = i;
       i = 10;
 }
 var randomNumber2 = Math.random();
 for ( var i = 0 ; i < 10 ; i++)
 if (randomNumber2 < i/10)
   {
     newsRand2 = i;
     i = 10;
}

    clearInterval(interval);

clear();
loop();
drawGrid();
drawChooser();
drawAllButtons ( currentButtons );
}





function decrement(object){
  currentChoosers[2].text--;
  clear()
  drawAllButtons(currentButtons);

}

function increment(object){
  currentChoosers[2].text++;
  clear()
  drawAllButtons(currentButtons);

}

function singlePlayerMenu(){

    currentButtons = [ titleButtonData, mainMenuButtonData,
  {text:"New Game" , length:200 , size:30 , x:350 , y:200},
  {text:"Saved Game" , length:200 , size:30 , x:350 , y:240},
  ];





  clear()
  drawAllButtons(currentButtons );


 }


function drawGrid(){
 ctx.beginPath();
 ctx.strokeStyle = "black";
 ctx.moveTo( menuNester , 390 );
 ctx.lineTo ( menuNester , 60 );
 ctx.stroke();
 ctx.closePath();

 for ( var i = 1 ; i <= 10 ; i++){
 ctx.beginPath();
 ctx.strokeStyle = "black";
 ctx.moveTo( menuNester + (52*i) , 390 );
 ctx.lineTo ( menuNester + (52*i) , 60 );
 ctx.stroke();
 ctx.closePath();

 ctx.beginPath();
 ctx.fillStyle='black';
 ctx.font = "10px Arial";
 ctx.fillText( "Year " + i , menuNester-30 + (52*i) , 72 );
 ctx.closePath();
 }

 ctx.beginPath();
 ctx.strokeStyle = "black";
 ctx.moveTo( menuNester , 390 );
 ctx.lineTo ( 700 ,390 );
 ctx.stroke();
 ctx.closePath();

 ctx.beginPath();
 ctx.strokeStyle = "black";
 ctx.moveTo( menuNester  , 60 );
 ctx.lineTo ( 700  , 60 );
 ctx.stroke();
 ctx.closePath();

}

function beginGame(){
clear();
drawGrid();
interval =  setInterval(loop, 120);
drawButton(titleButtonData);
drawButton(mainMenuButtonData);

}



function detailsMenu(){
  ctx.beginPath();
  ctx.fillStyle=color[1];
  ctx.rect( 10 , 60 , 165 , 400 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[2];
  ctx.rect( 12 , 125 , 161 , 29 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[1];
  ctx.rect( 14 , 127 , 157 , 25 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[2];
  ctx.rect( 12 , 185 , 161 , 29 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[1];
  ctx.rect( 14 , 187 , 157 , 25 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[2];
  ctx.rect( 12 , 245 , 161 , 29 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[1];
  ctx.rect( 14 , 247 , 157 , 25 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[2];
  ctx.rect( 12 , 425 , 161 , 29 );
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.fillStyle=color[1];
  ctx.rect( 14 , 427 , 157 , 25 );
  ctx.fill();
  ctx.closePath();

  var sharesTxt = shares.toString();
  sharesTxt = sharesTxt.substring(0,8);

  if ( company == -1 ){
        valuer = 1;
  }
  else {
    var currentCompany = market[company];
    valuer = (currentCompany[marketValuesCounter]);
  }

  var valueTxt = shares * valuer;
  valueTxt = valueTxt.toString();
  valueTxt = valueTxt.substring(0,8);


//calculate index value

  var summer1 = 0;
  var summer2 = 0;
  for ( var i = 0 ; i < 3 ; i++ ){
    var counter = market[i];
    var adder1 = counter[2];
    summer1+=adder1;
    var adder2 = counter[marketValuesCounter];
    summer2+=adder2;
  }
  indexValue = ((10000 / summer1)*summer2);
  indexValueTxt = indexValue.toString();
  indexValueTxt = indexValueTxt.substring(0,8);



  ctx.beginPath();
  ctx.fillStyle=color[2];
  ctx.font = "18px Arial";
  ctx.textAlign = "center";
  ctx.fillText( "Week   " + marketValuesCounter, 175/2 , 85 );
  ctx.fillText( "Holdings" , 175/2 , 115 );
  ctx.fillText( holdings , 175/2 , 145 );
  ctx.fillText( "Quantity" , 175/2 , 175 );
  ctx.fillText( sharesTxt  , 175/2 , 205 );
  ctx.fillText( "Value" , 175/2 , 235 );
  ctx.fillText( "$" + valueTxt , 175/2 , 265 );
  ctx.fillText( "Index Value" , 175/2 , 420 );
  ctx.fillText( "$" + indexValueTxt , 175/2 , 445 );
  ctx.closePath();
}

function newsPaper(){

    ctx.beginPath();
    ctx.fillStyle=color[2];
    ctx.rect( 15 , 280 , 155 , 120 );
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle="lightgrey";
    ctx.rect( 25 , 305 , 125 , 90 );
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.rect( 45 , 325 , 77 , 30 );
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle="black";
    ctx.font = "18px Arial";
    ctx.textAlign = "center";
    ctx.fillText( "Latest News" , 175/2 , 300 );
    ctx.font = "14px Arial";
    ctx.fillText( "Market Quarterly" , 175/2 , 320 );
        ctx.font = "12px Arial";
    ctx.fillText( companyName[newsRand1] , 175/2 , 375 );
    ctx.fillText( newsArray[newsRand2] , 175/2 , 390 );
    ctx.closePath();

    newsCounter++;

    if (newsCounter > 24){
      newsCounter = 0;

      var randomNumber = Math.random();
      for ( var i = 0 ; i < 10 ; i++)
      if (randomNumber < i/10)
        {
          newsRand1 = i;
          i = 10;
    }
    var randomNumber2 = Math.random();
    for ( var i = 0 ; i < 10 ; i++)
    if (randomNumber2 < i/10)
      {
        newsRand2 = i;
        i = 10;
  }

  }




}
