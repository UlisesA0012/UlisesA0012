//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
var successes=0; successesMax=42; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=2; scoreDec=1
var typeGame=1;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="'Lucida Sans Unicode', 'Lucida Grande', sans-serif";
var fActi="";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Lo lograste"; messageTime=""; messageError="Resouesta equivocada"; messageAttempts="Se terminaron los intentos"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#00FF40"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var boardGame=[["0","0","0","0","0","0","0"],["0","0","0","0","0","0","0"],["0","0","0","0","0","0","0"],["0","0","0","0","0","0","0"],["0","0","0","0","0","0","0"],["0","0","0","0","0","0","0"]]; var imaSel=0; texSel=0;
var original="prueba_resources/media/original.jpg";
var board=[["prueba_resources/media/cGllY2UxXzE=.jpg","prueba_resources/media/cGllY2UyXzE=.jpg","prueba_resources/media/cGllY2UzXzE=.jpg","prueba_resources/media/cGllY2U0XzE=.jpg","prueba_resources/media/cGllY2U1XzE=.jpg","prueba_resources/media/cGllY2U2XzE=.jpg","prueba_resources/media/cGllY2U3XzE=.jpg"],["prueba_resources/media/cGllY2UxXzI=.jpg","prueba_resources/media/cGllY2UyXzI=.jpg","prueba_resources/media/cGllY2UzXzI=.jpg","prueba_resources/media/cGllY2U0XzI=.jpg","prueba_resources/media/cGllY2U1XzI=.jpg","prueba_resources/media/cGllY2U2XzI=.jpg","prueba_resources/media/cGllY2U3XzI=.jpg"],["prueba_resources/media/cGllY2UxXzM=.jpg","prueba_resources/media/cGllY2UyXzM=.jpg","prueba_resources/media/cGllY2UzXzM=.jpg","prueba_resources/media/cGllY2U0XzM=.jpg","prueba_resources/media/cGllY2U1XzM=.jpg","prueba_resources/media/cGllY2U2XzM=.jpg","prueba_resources/media/cGllY2U3XzM=.jpg"],["prueba_resources/media/cGllY2UxXzQ=.jpg","prueba_resources/media/cGllY2UyXzQ=.jpg","prueba_resources/media/cGllY2UzXzQ=.jpg","prueba_resources/media/cGllY2U0XzQ=.jpg","prueba_resources/media/cGllY2U1XzQ=.jpg","prueba_resources/media/cGllY2U2XzQ=.jpg","prueba_resources/media/cGllY2U3XzQ=.jpg"],["prueba_resources/media/cGllY2UxXzU=.jpg","prueba_resources/media/cGllY2UyXzU=.jpg","prueba_resources/media/cGllY2UzXzU=.jpg","prueba_resources/media/cGllY2U0XzU=.jpg","prueba_resources/media/cGllY2U1XzU=.jpg","prueba_resources/media/cGllY2U2XzU=.jpg","prueba_resources/media/cGllY2U3XzU=.jpg"],["prueba_resources/media/cGllY2UxXzY=.jpg","prueba_resources/media/cGllY2UyXzY=.jpg","prueba_resources/media/cGllY2UzXzY=.jpg","prueba_resources/media/cGllY2U0XzY=.jpg","prueba_resources/media/cGllY2U1XzY=.jpg","prueba_resources/media/cGllY2U2XzY=.jpg","prueba_resources/media/cGllY2U3XzY=.jpg"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[];letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="cHJ1ZWJh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
