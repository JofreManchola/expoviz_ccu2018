// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Grafisk gitterreference",newGRGFromAreaButtonLabel:"Defin\u00e9r et gitter ud fra et omr\u00e5de",newGRGFromPointButtonLabel:"Defin\u00e9r et gitter ud fra et punkt",newGRGFromAreaTitle:"Defin\u00e9r et gitter ud fra et omr\u00e5de",newGRGFromPointTitle:"Defin\u00e9r et gitter ud fra et punkt",newGRGBySizeButtonLabel:"Efter dimension",newGRGFromRefSystemButtonLabel:"Efter referencesystem",newGRGByTimeLabel:"Efter tid og hastighed",
newGRGFromNonStandardButtonLabel:"Defin\u00e9r et gitter, der ikke er standard",newGRGAreaBySizeTitle:"GRG ud fra et omr\u00e5de efter dimension",newGRGAreaBySizeDefineAreaLabel:"GRG-omr\u00e5de",addGRGAreaPolygonToolTip:"Tegn GRG-omr\u00e5de ved hj\u00e6lp af en polygon",addGRGAreaExtentToolTip:"Tegn GRG-omr\u00e5de ved hj\u00e6lp af udstr\u00e6kning",rotation:"Gitter-rotation",numberRowsColumnsLabel:"Defin\u00e9r antallet af r\u00e6kker og kolonner",newGRGAreaByRefSystemTitle:"GRG ud fra et omr\u00e5de efter referencesystem",
gridSize:"Gitterst\u00f8rrelse",UTMZoneandBand:"Gitterzone","100000m":"100000 meter","10000m":"10000 meter","1000m":"1000 meter","100m":"100 meter","10m":"10 meter",clipGrid:"Klip gitter til GRG-omr\u00e5de",newGRGAreaFromNonStandardTitle:"Ny NRG",newGRGPointBySizeTitle:"GRG ud fra punkt efter dimension",newGRGPointByRefSystemTitle:"GRG ud fra et punkt efter referencesystem",newGRGPointByTimeTitle:"GRG ud fra et punkt ved brug af tid og hastighed",time:"Tid",rate:"Hastighed",hours:"Timer",minutes:"Minutter",
seconds:"Sekunder",ftPerSec:"Fod / sekund",ftPerHour:"Fod / time",kmPerSec:"Kilometer / sekund",kmPerHour:"Kilometer / time",mPerSec:"Meter / sekund",mPerHour:"Meter / time",miPerSec:"Mil / sekund",miPerHour:"Mil / time",nMPerSec:"S\u00f8mil / sekund",nMPerHour:"S\u00f8mil / time",settingsTitle:"Indstillinger",labelSettingsLabel:"Etiketindstillinger",labelSettingsButtonLabel:"Konfigurer etiketindstillinger",gridSettingsLabel:"Gitterindstillinger",gridSettingsButtonLabel:"Konfigurer gitterindstillinger",
transparency:"Gennemsigtighed",labelStyle:"Etikettypografi",font:"Skrifttype",textSize:"Tekstst\u00f8rrelse",textColor:"Tekstfarve",halo:"Ring",show:"Vis",lockSettings:"Indstillingerne er l\u00e5st af applikationens ejer",gridSettings:{cellShape:"Celleform",cellUnits:"Celleenheder",cellOutline:"Indstillinger for cellekontur",cellFill:"Indstillinger for cellefyld",gridReferenceSystem:"Referencesystem",gridDatum:"Datum: WGS84",labelStartPosition:"Etiketoprindelse",labelType:"Etikettype",labelDirection:"Etiketretning",
gridOrigin:"Gitteroprindelse","default":"Rektangel",hexagon:"Sekskant",miles:"Miles",kilometers:"Kilometer",feet:"Fod",meters:"Meter",yards:"Yards","nautical-miles":"S\u00f8mil",lowerLeft:"Nederst til venstre",lowerRight:"Nederst til h\u00f8jre",upperLeft:"\u00d8verst til venstre",upperRight:"\u00d8verst til h\u00f8jre",center:"Midt",alphaNumeric:"Alfa-numerisk",alphaAlpha:"Alfa-alfa",numeric:"Numerisk",horizontal:"Vandret",vertical:"Lodret",MGRS:"MGRS",USNG:"USNG",showLabels:"Vis etiketter"},publishTitle:"Public\u00e9r GRG p\u00e5 portalen",
publishGRGBtn:"Public\u00e9r",GRGLayerName:"Navn p\u00e5 publiceret GRG-lag",invalidGRGLayerName:"Lagnavnet m\u00e5 kun indeholde alfanumeriske tegn og understregninger",missingGRGLayerName:"Du skal indtaste et navn til GRG\u2019en",publishingFailedLayerExists:"Publicering mislykkedes: Du har allerede en featuretjeneste med navnet {0}. V\u00e6lg et andet navn.",checkService:"Kontroller tjeneste: {0}",createService:"Opret tjeneste: {0}",unableToCreate:"Kan ikke oprette: {0}",addToDefinition:"Tilf\u00f8j til definition: {0}",
successfullyPublished:"Weblag er oprettet{0}Administr\u00e9r weblaget",userRole:"Kan ikke oprette tjenesten, fordi brugeren ikke har tilladelser",createGRGBtn:"Opret GRG",clearGRGBtn:"Ryd",labelFormat:"Etiketformat",helpIconTooltip:"Z: Gitterzonebetegnelse (GZD)\nS: 100.000-meter identifikation af gitterfirkant (GSID)\nX: \u00d8st/vest-afl\u00e6sning (X-koordinat)\nY: Nord/syd-afl\u00e6sning (Y-koordinat)\n\nEksempler:\nZSXY er 15SWC8081751205\nZS X,Y er 15SWC 80817,51205",addPointToolTip:"Tilf\u00f8j GRG-oprindelse",
cellWidth:"Cellebredde (x)",cellHeight:"Celleh\u00f8jde (y)",invalidNumberMessage:"Den indtastede v\u00e6rdi er ikke gyldig",invalidRangeMessage:"V\u00e6rdien skal v\u00e6re st\u00f8rre end 0",gridAngleInvalidRangeMessage:"V\u00e6rdi skal v\u00e6re mellem -89,9 og 89,9",formatIconTooltip:"Formatangivelse",coordInputLabel:"GRG-oprindelse (DD)",setCoordFormat:"Indstil koordinatformat-streng",prefixNumbers:"Tilf\u00f8j \u2019+/-\u2019 pr\u00e6fikset til positive og negative tal",cancelBtn:"Annuller",
applyBtn:"Anvend",comfirmInputNotation:"Bekr\u00e6ft input-notation",notationsMatch:"notationer matcher dit input. Bekr\u00e6ft, hvilken du vil bruge:",numberOfCellsHorizontal:"# Horisontale celler",numberOfCellsVertical:"# Vertikale celler",gridAngle:"Gitter-rotation",tooManyCellsErrorMessage:"Du fors\u00f8ger at oprette et gitter best\u00e5ende af mere end 2000 celler. Det anbefales at reducere antallet af celler, der oprettes ved at \u00e6ndre gitterst\u00f8rrelsen eller gitteromr\u00e5det.",missingParametersMessage:"\x3cp\x3eFormularen til oprettelse af GRG har manglende eller ugyldige parametre. Kontroll\u00e9r f\u00f8lgende:\x3c/p\x3e\x3cul\x3e\x3cli\x3eDer er tegnet et GRG-omr\u00e5de.\x3c/li\x3e\x3cli\x3eCellebredden og -h\u00f8jden indeholder gyldige v\u00e6rdier.\x3c/li\x3e\x3c/ul\x3e",
missingOriginParametersMessage:"\x3cp\x3eFormularen til oprettelse af GRG har manglende eller ugyldige parametre. Kontroll\u00e9r f\u00f8lgende:\x3c/p\x3e\x3cul\x3e\x3cli\x3eDer er angivet en GRG-oprindelse.\x3c/li\x3e\x3cli\x3eTid, hastighed og vinkel indeholder gyldige v\u00e6rdier.\x3c/li\x3e\x3c/ul\x3e",invalidWidthHeightParametersMessage:"\x3cp\x3eFormularen til oprettelse af GRG har manglende eller ugyldige parametre. Kontroll\u00e9r, at cellebredden og -h\u00f8jden indeholder gyldige v\u00e6rdier.\x3c/p\x3e",
invalidHorizontalVerticalParametersMessage:"\x3cp\x3eFormularen til oprettelse af GRG har manglende eller ugyldige parametre. Kontroll\u00e9r, at antallet af celler og deres horisontale og vertikale input indeholder gyldige v\u00e6rdier.\x3c/p\x3e",drawPointToolTip:"Klik for at tilf\u00f8je GRG-oprindelsespunkt",missingLayerNameMessage:"Du skal indtaste et gyldigt lag-navn, f\u00f8r du kan publicere.",parseCoordinatesError:"Kan ikke analysere koordinater. Kontroll\u00e9r dit input.",grgPolarRegionError:"GRG-udstr\u00e6kningen ligger i polare omr\u00e5der. Celler, der ligger i polare omr\u00e5der, oprettes ikke.",
grgPolarOriginError:"GRG-oprindelsespunktet m\u00e5 ikke v\u00e6re i et polart omr\u00e5de, n\u00e5r du opretter et GRG-referencesystem.",deleteBtn:"Slet",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Decimalgrader - Breddegrad/L\u00e6ngdegrad",DDLongLatNotation:"Decimalgrader - L\u00e6ngdegrad/Breddegrad",DDMLatLongNotation:"Grader Decimal Minutter - Breddegrad/L\u00e6ngdegrad",
DDMLongLatNotation:"Grader Decimal Minutter - L\u00e6ngdegrad/Breddegrad",DMSLatLongNotation:"Grader Minutter Sekunder - Breddegrad/L\u00e6ngdegrad",DMSLongLatNotation:"Grader Minutter Sekunder - L\u00e6ngdegrad/Breddegrad",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - B\u00e5nd Bogstav",UTMHemNotation:"UTM - Hemisf\u00e6re (N/S)",_localized:{}}});