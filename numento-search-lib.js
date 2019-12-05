var QYXXS=null;
var tUhUg="";
var rmmIp=0;
var BBWPV=0;
var WQGjO=new Array();
var gbjdX=new Array();
var LckJY=-1;
function isMobileDevice()
{
if(navigator.userAgent.match(/iPad/i)!=null)return true;
if(navigator.userAgent.match(/iPhone/i)!=null)return true;
return false;
}
function onLoadListingPage()
{
uKQdv();
startSearchEngine();
}
function TKncG()
{
var ruwhT=window.location.search;
if(ruwhT.substr(0,1)=="?")ruwhT=ruwhT.substr(1);
if(ruwhT.length==0)return new Array();
var Qecdi=new Array();
var CgCab=ruwhT.split("&");
for(var i=0;i<CgCab.length;i++)
{
var GHvQN=CgCab[i].split("=");Qecdi[GHvQN[0]]=GHvQN[1];
}
return Qecdi;
}
function numento_refreshSearch()
{
onTimerSearchInput1()
}
function TboMu(ljoHV)
{
return CONST_NUMENTO_ID_ARRAY[ljoHV*2]
}
function FkDAv(ljoHV)
{
var gufPa=TboMu(ljoHV)
return IHBJU=CONST_NUMENTO_ID_TABLE_ARRAY[gufPa]
}
function ikEhp(ljoHV)
{
return CONST_NUMENTO_ID_ARRAY[ljoHV*2+1]
}
function KNCSU(ljoHV)
{
var Kpbtw=ikEhp(ljoHV)
var IHBJU=FkDAv(ljoHV)
return "../db/it_"+IHBJU+"_"+Kpbtw+".js";
}
function naPbL(ljoHV)
{
var Kpbtw=ikEhp(ljoHV)
var IHBJU=FkDAv(ljoHV)
return "../db/it_"+IHBJU+"_"+Kpbtw+".jpg";
}
function numento_loadMaskInfos()
{
document.item_datas=new Array()
var rZdws=TKncG();
var ljoHV=rZdws["id"]
var kcuTg=rZdws["search"];
var lLlUB=parseInt(rZdws["page"]);
if(kcuTg)
{
kcuTg=unescape(kcuTg);
}
tUhUg=kcuTg;
QYXXS=lLlUB;
var xqXUp=KNCSU(ljoHV)+"?v="+UqLMO()
$.getJSON(xqXUp,function(ZRwet)
{
var gufPa=TboMu(ljoHV)
var XNgXw=array_pattern_mask[gufPa];
XNgXw=ooMwT(XNgXw,ljoHV,gufPa,ZRwet) 
var Kpbtw=ikEhp(ljoHV)
var XgCCI=XNgXw;

if(ZRwet.images.length>0)
{
XgCCI+="<hr>"
XgCCI+="<div>"
for(var i=0;i<ZRwet.images.length;i++)
{
var wwxGX=ZRwet.images[i]
var JhAbR="../db/it_"+IHBJU+"_"+Kpbtw;
var EUxlk=Math.ceil(($(document).width()-35)/3)-3;
EUxlk=Math.min(EUxlk,80)
XgCCI+="<a href=\""+JhAbR+"_img_b_"+wwxGX+"\"><img border=0 src=\""+JhAbR+"_img_t_"+wwxGX+"\" style='margin:1px;width:"+EUxlk+"px;height:"+EUxlk+"px;'></a>"
}
XgCCI+="</div>"
}
if(ZRwet.files.length>0)
{
XgCCI+="<hr>"
for(var i=0;i<ZRwet.files.length;i++)
{
var wwxGX=ZRwet.files[i]
var EUxlk=50;
var JhAbR="../db/it_"+IHBJU+"_"+Kpbtw;
XgCCI+="<a href=\""+JhAbR+"_file_"+wwxGX+"\"><img border=0 src=\"../icon_res.png\" style='margin:0px;width:"+EUxlk+"px;height:"+EUxlk+"px;'>"+wwxGX+"</a><br><br>"
}
}
$("#mask_content").html(XgCCI)
});
}
function goToNumentoIndex()
{
var ruwhT="../index.html";
window.location=(ruwhT);
}
function goToNumentoCurrentListing()
{
var ruwhT=CONST_NUMENTO_LISTING_FILENAME+"?v="+UqLMO();
ruwhT+=deWFN()
ruwhT+=JaveC()
window.location=(ruwhT);
}
function JaveC()
{
if(QYXXS!=null)
{
return "&page="+QYXXS;
}
return "";
}
function deWFN()
{
if(tUhUg!=null)
{
return "&search="+escape(tUhUg);
}
return "";
}
function numento_onClickItem(o,Kpbtw)
{
var ruwhT=CONST_NUMENTO_MASK_FILENAME+"?id="+Kpbtw+JaveC()+"&v="+UqLMO();
ruwhT+=deWFN()
window.location=(ruwhT);
}
function kuoxH()
{
document.item_datas=new Array()
for(var PJlBN=0;PJlBN<array_search_index.length;PJlBN++)
{
var BdvUP=array_search_index[PJlBN];
var OlYha=BdvUP[0];
gbjdX[OlYha]=BdvUP;
}
}
var mnfJr=[
{acc:"e",l:["é","è","ë"]},{acc:"a",l:["à","ä","â"]},{acc:"u",l:["ü","û"]},{acc:"c",l:["ç"]},{acc:"i",l:["î"]},{acc:"o",l:["ö","ô"]}
];
function PNnJg(s)
{
var res=s.toLowerCase();
for(var i=0;i<mnfJr.length;i++)
{
var array2=mnfJr[i].l;
for(var i2=0;i2<array2.length;i2++)
{
var reg=new RegExp(array2[i2],"g");
res=res.replace(reg,mnfJr[i].acc)
}
}
return res;
}
function jWHRd(str)
{
return str.replace(/^\s*|\s*$/g,"");
}
function xFxiO()
{
hZEuV("")
}
function hZEuV(NfwsR)
{
$('#numento-search-result').html(NfwsR)
}
function rSuRY()
{
numento_timeout("onTimerSearchInput1()",200);
}
function qHgWd()
{
LckJY=numento_timeout("onTimerSearchInput2()",200);
}
function startSearchEngine()
{
kuoxH();
rSuRY();
}
function currentSearch()
{
if(tUhUg==null) return "";
return tUhUg;
}
function uKQdv()
{
var SIYfM=document.getElementById('numento-search-input');
var rZdws=TKncG()
if(currentSearch()=="")
{
var kcuTg=rZdws["search"]
if(kcuTg)
{
kcuTg=unescape(kcuTg);
if(SIYfM!=null)
{
SIYfM.value=kcuTg
}
}
}
if(QYXXS==null)
{
var lLlUB=parseInt(rZdws["page"]);
if(isNaN(lLlUB)==false)
{
QYXXS=lLlUB;
}
}
}
function onTimerSearchInput1()
{
var SIYfM=document.getElementById('numento-search-input');
var OqpoF=jWHRd(SIYfM.value)
if(OqpoF!=currentSearch())
{
tUhUg=OqpoF;
QYXXS=0;
clearTimeout(LckJY);
LckJY=-1;
qHgWd();
xFxiO();
}
else
{
if((BBWPV==0)&&(currentSearch().length==0))
{
CSeKM("")
}
}
rSuRY();
}
function onTimerSearchInput2()
{
var NfwsR=currentSearch();
NfwsR=jWHRd(NfwsR);
CSeKM(NfwsR)
}
function Edcxv(a,b)
{
if(a.length<b.length) return-1;
else
if(a.length>b.length) return 1;
return 0;
}
function mIdMN(hGpWf)
{
hGpWf=PNnJg(hGpWf);
hGpWf=jWHRd(hGpWf);
var eixeI=[",",";","\\.","'",":","/","`","\\?"];
for(var c=0;c<eixeI.length;c++)
{
var reg=new RegExp(eixeI[c],"g");
hGpWf=hGpWf.replace(reg," ")
}
var CGRhI=hGpWf.toLowerCase().split(" ");
var OPKkV=new Array();
for(var i=0;i<CGRhI.length;i++)
{
var w=jWHRd(CGRhI[i]);
if((w!=undefined)&&(w.length>0))
{
OPKkV.push(w);
}
}
OPKkV=OPKkV.sort(Edcxv);
var AoUQg=new Array()
for(var i=0;i<OPKkV.length;i++)
{
var w=OPKkV[i];
var XHtRh=w
AoUQg.push(XHtRh);
}

var DLmrW=new Array();
for(var i=0;i<AoUQg.length;i++)
{
var YEUZX=AoUQg[i];
var vbPgd_valid=true;
for(var i2=i+1;i2<AoUQg.length;i2++)
{
var XHtRh=AoUQg[i2];
if(XHtRh.indexOf(YEUZX)>-1)
{
vbPgd_valid=false;
break;
}
}
if(vbPgd_valid) DLmrW.push(YEUZX);
}
return DLmrW;
}
function UqLMO(PRUpB)
{
if(PRUpB==undefined)PRUpB=0;
var CDJWk=PRUpB*60;
var rYbmI=new Date();
var QCnMa=0;
QCnMa+=rYbmI.getYear()*12*31*24*60*60;
QCnMa+=rYbmI.getMonth()*31*24*60*60;
QCnMa+=rYbmI.getDate()*24*60*60;
QCnMa+=rYbmI.getHours()*60*60;
QCnMa+=rYbmI.getMinutes()*60;
QCnMa+=rYbmI.getSeconds();
if(CDJWk!=0)
{
QCnMa=Math.floor(QCnMa/CDJWk)*CDJWk
}
return "-"+QCnMa;
}
function jbxYa(ljoHV)
{
var xqXUp=KNCSU(ljoHV)+"?v="+UqLMO();
$.getJSON(xqXUp,function(ZRwet)
{
var PsBfW=ZRwet.values
var NXgLR=TboMu(ljoHV);
var XNgXw=array_pattern_result[NXgLR];
$('#item_'+ljoHV).html(ooMwT(XNgXw,ljoHV,NXgLR,ZRwet))
});
}
function ooMwT(XNgXw,ljoHV,NXgLR,PsBfW)
{
var jtHJu=ljoHV;
var Kpbtw=PsBfW.id;
var NfwsR=XNgXw;
var rIhmZ=array_mapping_field[NXgLR];
var OWUJw=naPbL(jtHJu)+"?v="+NXgLR+"_"+PsBfW.id+"_"+PsBfW.modif_id;
if(PsBfW.image_size[0]>0)
{
NfwsR=NfwsR.replace("@NUMENTO:field_main_image",OWUJw);
}
else
{
NfwsR=NfwsR.replace("@NUMENTO:field_main_image","");
}
NfwsR=NfwsR.replace("@NUMENTO:item_id",""+jtHJu);
var kTEJp=new RegExp("@NUMENTO:image_scaled_size_style\\(([0-9]+),([0-9]+)\\)","g");
var cscon;;
while((cscon=kTEJp.exec(XNgXw))!=null)
{
var oxdLt=cscon[0];
var IPXfv=cscon[1];
var Uqtid=cscon[2];
var WkZjF=PsBfW.image_size[0];
var aprHX=PsBfW.image_size[1];
if((IPXfv<WkZjF)||(Uqtid<aprHX))
{
if((WkZjF>IPXfv)||(aprHX>Uqtid))
{
if(WkZjF>aprHX)
{
Uqtid=IPXfv*(aprHX/WkZjF)
}
else
{
IPXfv=Uqtid*(WkZjF/aprHX)
}
}
}
else
{
IPXfv=WkZjF;
Uqtid=aprHX;
}
IPXfv=Math.round(IPXfv);
Uqtid=Math.round(Uqtid);
if(PsBfW.image_size[0]>0)
{
NfwsR=NfwsR.replace(oxdLt,"width:"+IPXfv+"px;height:"+Uqtid+"px;")
}
else
{
NfwsR=NfwsR.replace(oxdLt,"width:0px;height:0px;")
}
}
var rx=new RegExp("@NUMENTO:field\\((\\w+)\\)","g");
var myArray;
while((myArray=rx.exec(XNgXw))!=null)
{
var oxdLt=myArray[0];
var oUVmg=myArray[1];
var SLCVB=rIhmZ[oUVmg];
var vField="";
if(typeof(SLCVB)!="undefined")
{
vField=PsBfW.values[SLCVB];
}
if(vField.toLowerCase().indexOf("http://")==0)
{
vField=vField.replace("\"","'");
vField="<a href=\""+vField+"\" target=_blank>"+vField+"</a>";
}
NfwsR=NfwsR.replace(oxdLt,vField);
}
return NfwsR;
}
function BDDlq(CfSib)
{
WQGjO=CfSib;
BBWPV=0;
rmmIp=0;
for(var PldEs in WQGjO)
{
if(WQGjO[PldEs]!=false)
{
BBWPV++;
}
}
rmmIp=Math.ceil(BBWPV/CONST_NUMENTO_NB_MAX_PER_PAGE);
vvuMT();
}
function iZNVP(EBEkt)
{
if(typeof(EBEkt)=="string")return document.getElementById(EBEkt);
return EBEkt;
}
function IvxDN(EBEkt,vbPgd){EBEkt=iZNVP(EBEkt);EBEkt.style.display=(vbPgd)?"table":"none";}
function nMtpb(BlXpj)
{
var HlxtD=iZNVP('arrow-pages-layout'+BlXpj);
if(HlxtD)
{
IvxDN(HlxtD,rmmIp>1);
}
var VHYEW=iZNVP("html-arrow-pages"+BlXpj);
if(VHYEW&&(rmmIp>1))
{
var utfZc=2;
var NNdkc=Math.max(0,QYXXS-utfZc);
var JMZNC=Math.min(rmmIp-1,NNdkc+2*utfZc);
if(JMZNC-NNdkc<2*utfZc)
{
NNdkc=Math.max(0,JMZNC-2*utfZc);
}
var NfwsR=""
if(NNdkc>0)
{
var CuHES=Math.max(0,NNdkc-2*utfZc)
NfwsR+="<div class='div-listing-arrow-btn-pagedown' onclick=\"numento_goToPage("+CuHES+")\">&nbsp;</div>"
}
else
{
NfwsR+="<div class='div-listing-arrow-btn-empty'>&nbsp;</div>"
}
for(var PJlBN=NNdkc;PJlBN<=JMZNC;PJlBN++)
{
NfwsR+="";
if((PJlBN==QYXXS)||((PJlBN==0)&&(QYXXS==null)))
{
NfwsR+="<div class='div-listing-arrow-btn-page-current' ";
}
else
{
NfwsR+="<div class='div-listing-arrow-btn-page' onclick=\"numento_goToPage("+PJlBN+")\" ";
}
NfwsR+=">"
NfwsR+=(PJlBN+1);
NfwsR+="</div>"
}
if(JMZNC<rmmIp-1)
{
var CuHES=Math.min(rmmIp-1,JMZNC+2*utfZc)
NfwsR+="<div class='div-listing-arrow-btn-pageup' onclick=\"numento_goToPage("+CuHES+")\">&nbsp;</div>"
}
else
{
NfwsR+="<div class='div-listing-arrow-btn-empty'>&nbsp;</div>"
}
VHYEW.innerHTML=NfwsR;
}
}
function vvuMT()
{
var bKXnH=QYXXS*CONST_NUMENTO_NB_MAX_PER_PAGE;
var aFrcX=bKXnH+CONST_NUMENTO_NB_MAX_PER_PAGE-1;
if(aFrcX>BBWPV-1)
{
aFrcX=BBWPV-1;
}
nMtpb(0)
nMtpb(1)
var YIfmq=bKXnH;
xFxiO();
var vcEgn=$('#numento-search-result')
var  n=0;
for(var PldEs in WQGjO)
{
if(WQGjO[PldEs]!=false)
{
if((n>=bKXnH)&&(n<=aFrcX))
{
var jtHJu=PldEs;
var Kpbtw=jtHJu;
var JjYpo="<div id='item_"+Kpbtw+"' ><div class='cell-result-loading'><img class='loading-result-image' src='../loading.gif' border=0 ></div></div>"
vcEgn.append(JjYpo)
jbxYa(Kpbtw);
}
n++;
}
}
}
function VuVUW()
{
xFxiO();
var gLaYN=new Array();
for(var PJlBN=0;PJlBN<CONST_NUMENTO_NB_TOTAL_FILTERS_ITEMS;PJlBN++)
{
gLaYN[PJlBN]=true;
}
BDDlq(gLaYN);
}
function CSeKM(NfwsR)
{
xFxiO();
var gDqov=200;
var Irdhl=mIdMN(NfwsR);
if(Irdhl.length==0)
{
VuVUW();
return;
}
var CfSib=new Array();
var QXhYe=false;
for(var i=0;i<Irdhl.length;i++)
{
var YEUZX=Irdhl[i];
if(YEUZX.length>0)
{
var MVHrF=0;
CfSib=new Array();
for(var index in gbjdX)
{
var bAkHB=index.indexOf(YEUZX);
if(bAkHB!=-1)
{
var BdvUP=gbjdX[index];
var mRhCq=BdvUP[1];
for(var YAgej in mRhCq)
{
var jtHJu=mRhCq[YAgej];
CfSib[jtHJu]=true;
MVHrF++;
if(MVHrF>=gDqov)
{
break;
}
}
}
}
if(QXhYe)
{
var GTrVd=new Array();
for(var PldEs in CfSib)
{
if(QXhYe[PldEs]!=true)
{
CfSib[PldEs]=false;
}
else
{
GTrVd[PldEs]=true;
}
}
QXhYe=GTrVd;
}
else
{
QXhYe=CfSib;
}
}
}

BDDlq(CfSib);
}
function numento_goToPage(PJlBN)
{
if(PJlBN<0) return;
if(PJlBN>rmmIp-1) return;
QYXXS=PJlBN;
vvuMT()
}
function numento_goNextPage()
{
if(QYXXS<rmmIp-1)
{
numento_goToPage(QYXXS+1)
}
}
function numento_goPreviousPage()
{
if(QYXXS>0)
{
numento_goToPage(QYXXS-1)
}
}
