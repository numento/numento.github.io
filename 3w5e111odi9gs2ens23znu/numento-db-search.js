var CONST_NUMENTO_ID_TABLE_ARRAY = ["comics","magazine","other"];
var CONST_NUMENTO_ID_ARRAY = [0,136,0,137,0,138,0,139,0,140,0,142,0,143,0,144,0,147,0,149,0,150,0,154,0,155,0,156,0,157,0,158,0,159,0,160,0,161,0,166,0,167,0,169,0,174,0,175,0,176,0,177,0,178,0,179,0,180,0,181,0,182,0,183,0,184,0,185,0,186,0,187,0,188,0,189,0,190,0,191,0,192,0,193,0,194,0,195,0,196,0,197,0,198,0,199,0,200,0,201,0,202,0,203,0,204,0,205,0,206,0,207,0,208,0,209,0,210,0,211,0,212,0,213,0,214,0,216,0,217,0,218,0,219,0,220,0,221,0,222,0,223,0,224,0,225,0,227,0,228,0,229,0,230,0,231,0,232,0,233,0,234,0,235,0,236,0,238,0,239,0,240,0,241,0,242,0,243,0,244,0,245,0,246,0,247,0,248,0,250,0,251,0,252,0,253,0,254,0,255,0,256,0,257,0,258,0,259,0,261,0,262,0,263,0,264,0,265,0,266,0,267,0,268,0,269,0,270,0,272,0,273,0,274,0,275,0,276,0,277,0,278,0,279,0,280,0,281,0,283,0,284,0,285,0,286,0,287,0,288,0,289,0,290,0,291,0,292,0,294,0,295,0,296,0,297,0,298,0,299,0,300,0,301,0,302,0,303,0,305,0,306,0,307,0,308,0,309,0,310,0,311,0,312,0,313,0,314,0,316,0,317,0,318,0,319,0,320,0,321,0,322,0,323,0,324,0,325,0,327,0,328,0,329,0,330,0,331,0,332,0,333,0,334,0,335,0,336,0,338,0,339,0,340,0,341,0,342,0,343,0,344,0,345,0,346,0,347,0,349,0,350,0,351,0,352,0,353,0,354,0,355,0,356,0,357,0,358,0,359,0,361,0,362,0,363,0,364,0,365,0,366,0,367,0,368,0,369,0,370,0,372,0,373,0,374,0,379,0,385,0,386,0,423,0,424,0,425,0,427,0,428,0,429,0,430,0,431,0,432,0,433,0,434,0,435,0,436,0,438,0,439,0,440,0,441,0,442,0,443,0,444,0,445,0,459,0,492,0,507,0,508,0,509,0,510,0,511,0,512,0,513,0,515,0,516,0,517,0,518,0,519,0,520,0,521,0,522,0,523,0,524,0,525,0,526,0,527,0,528,0,529,0,530,0,531,0,532,0,533,0,534,0,535,0,536,0,537,0,538,0,539,0,540,0,541,0,542,0,543,0,544,0,545,0,546,0,547,0,548,0,549,0,550,0,551,0,552,0,553,0,554,0,555,0,556,0,557,0,558,0,560,0,561,0,562,0,563,0,564,0,565,0,566,0,567,0,569,0,570,0,571,0,572,0,573,0,574,0,575,0,576,0,577,0,578,0,579,0,581,0,583,0,584,0,585,0,586,0,587,0,589,0,590,0,591,0,592,0,593,0,594,0,595,0,596,0,597,0,598,0,599,0,600,0,601,0,602,0,603,0,604,0,605,0,606,0,607,0,608,0,609,0,610,0,611,0,612,0,613,0,614,0,615,0,616,0,617,0,618,0,619,0,620,0,621,0,622,0,623,0,624,0,625,0,626,0,627,0,628,0,629,0,630,0,631,0,632,0,633,0,634,0,635,0,636,0,637,0,638,0,639,0,640,0,642,0,643,0,644,0,645,0,646,0,648,0,649,0,659,0,670,0,681,0,692,0,707,0,712,0,713,0,714,0,715,0,716,0,717,0,718,0,719,0,720,0,721,0,722,0,723,0,724,0,726,0,727,0,728,0,729,0,730,0,732,0,733,0,736,0,737,0,739,0,740,0,741,0,742,0,743,0,744,0,745,0,746,0,747,0,748,0,749,0,750,0,751,0,752,0,753,0,754,0,755,0,756,0,757,0,758,0,759,0,760,0,761,0,763,0,764,0,765,0,770,0,772,0,773,0,774,0,781,0,785,0,786,0,787,0,790,0,792,0,793,0,796,0,799,0,801,0,802,0,803,0,804,0,805,0,806,0,807,0,808,0,809,0,810,0,812,0,813,0,814,0,816,0,817,0,818,0,821,0,824,0,825,0,826,0,827,0,828,0,829,0,835,0,836,0,837,0,841,0,842,0,843,0,844,0,845,0,846,0,847,0,851,0,852,0,853,0,855,0,857,0,858,0,859,0,860,0,861,0,862,0,863,0,864,0,865,0,866,0,867,0,868,0,869,0,870,0,871,0,872,0,873,0,876,0,877,0,878,0,879,0,880,0,881,0,882,0,883,0,884,0,885,0,886,0,889,0,890,0,892,0,893,0,894,0,895,0,896,0,897,0,898,0,899,0,900,0,902,0,903,0,904,0,905,0,906,0,907,0,908,0,909,0,910,0,911,0,912,0,913,0,914,0,915,0,916,0,917,0,918,0,919,0,920,0,921,0,922,0,923,0,924,0,925,0,926,0,927,0,928,0,929,0,930,0,931,0,932,0,933,0,934,0,935,0,936,0,937,0,938,0,939,0,940,0,941,0,942,0,943,0,944,0,945,0,946,0,947,0,948,0,949,0,950,0,951,0,952,0,953,0,954,0,955,0,956,0,957,0,958,0,959,0,960,0,961,0,962,0,963,0,964,0,965,0,966,0,967,0,968,0,970,0,971,0,972,0,973,0,974,0,975,0,976,0,977,0,978,0,979,0,981,0,982,0,983,0,984,0,985,0,986,0,989,0,990,0,991,0,992,0,993,0,994,0,995,0,996,0,997,0,998,0,999,0,1000,0,1001,0,1002,0,1003,0,1004,0,1005,0,1006,0,1007,0,1008,0,1009,0,1010,0,1011,0,1012,0,1013,0,1014,0,1015,0,1022,0,1023,0,1024,0,1025,0,1026,0,1027,0,1028,0,1029,0,1030,0,1031,0,1036,0,1037,0,1040,0,1041,0,1042,0,1043,0,1044,0,1045,0,1046,0,1047,0,1049,0,1050,0,1051,0,1052,0,1056,0,1057,0,1058,0,1061,0,1065,0,1066,0,1067,0,1068,0,1069,0,1070,0,1072,0,1073,0,1074,0,1075,0,1077,0,1078,0,1079,0,1080,0,1081,0,1082,0,1083,0,1084,0,1085,0,1086,0,1087,0,1088,0,1089,0,1090,0,1092,0,1093,0,1094,0,1095,0,1096,0,1097,0,1098,0,1099,0,1100,0,1101,0,1102,0,1103,0,1104,0,1105,0,1106,0,1107,0,1108,0,1109,0,1110,0,1111,0,1112,0,1113,0,1114,0,1115,0,1116,0,1117,0,1118,0,1119,0,1120,0,1121,0,1122,0,1123,0,1124,0,1125,0,1126,0,1127,0,1128,0,1129,0,1130,0,1131,0,1132,0,1133,0,1134,0,1135,0,1136,0,1137,0,1138,0,1139,0,1140,0,1141,0,1142,0,1143,0,1144,0,1145,0,1146,0,1147,0,1148,0,1149,0,1150,0,1151,0,1152,0,1153,0,1154,0,1155,0,1156,0,1157,0,1158,0,1159,0,1160,0,1161,0,1162,0,1163,0,1164,0,1165,0,1169,0,1170,0,1171,0,1172,0,1173,0,1176,0,1177,0,1178,0,1179,0,1180,0,1181,0,1182,0,1183,0,1184,0,1185,0,1186,0,1187,0,1188,0,1189,0,1190,0,1191,0,1192,0,1193,0,1194,0,1195,0,1196,0,1197,0,1198,0,1199,0,1200,0,1201,0,1202,0,1203,0,1204,0,1205,0,1206,0,1207,0,1208,0,1209,0,1210,0,1211,0,1212,0,1213,0,1214,0,1215,0,1216,0,1218,0,1219,0,1220,0,1221,0,1222,0,1223,0,1224,0,1225,0,1228,0,1232,0,1234,0,1236,0,1238,0,1239,0,1240,0,1241,0,1242,0,1243,0,1246,0,1247,0,1248,0,1251,0,1253,0,1258,0,1259,0,1260,0,1261,0,1262,0,1263,0,1264,0,1265,0,1266,0,1267,0,1268,0,1269,0,1270,0,1272,0,1273,0,1274,0,1275,0,1276,0,1280,0,1281,0,1282,0,1283,0,1284,0,1285,0,1286,0,1287,0,1288,0,1289,0,1290,0,1291,0,1292,0,1293,0,1294,0,1295,0,1296,0,1297,0,1298,0,1299,0,1300,0,1301,0,1302,0,1303,0,1304,0,1305,0,1306,0,1307,0,1308,0,1309,0,1310,0,1312,0,1313,0,1314,0,1315,0,1316,0,1317,0,1319,0,1320,0,1321,0,1322,0,1323,0,1324,0,1325,0,1326,0,1327,0,1328,0,1329,0,1330,0,1331,0,1332,0,1333,0,1334,0,1335,0,1336,0,1337,0,1338,0,1339,0,1340,0,1341,0,1342,0,1343,0,1344,0,1345,0,1346,0,1347,0,1348,0,1349,0,1350,0,1351,0,1352,0,1353,0,1354,0,1355,0,1356,0,1357,0,1358,0,1359,0,1360,0,1361,0,1362,0,1363,0,1364,0,1365,0,1366,0,1367,0,1369,0,1370,0,1371,0,1374,0,1375,0,1376,0,1377,0,1378,0,1379,0,1380,0,1383,0,1384,0,1385,0,1387,0,1388,0,1390,0,1391,0,1392,0,1393,0,1394,0,1395,0,1396,0,1397,0,1398,0,1399,0,1400,0,1401,0,1402,0,1403,0,1404,0,1405,0,1406,0,1407,0,1408,0,1409,0,1410,0,1411,0,1412,1,6,1,7,1,8,1,9,1,10,1,11,1,12,1,13,1,14,1,15,1,16,1,17,1,18,1,19,1,20,1,21,1,22,1,23,1,24,1,25,1,26,1,27,1,28,1,29,1,30,1,31,1,32,1,33,1,34,1,35,1,36,1,37,1,38,1,39,1,40,1,41,1,42,1,43,1,44,1,45,1,46,1,47,1,48,1,49,1,50,1,51,1,52,1,53,1,54,1,55,1,56,1,57,1,58,1,59,1,60,1,61,1,62,1,63,1,64,1,65,1,66,1,67,1,68,1,69,1,70,1,71,1,72,1,73,1,74,1,75,1,76,1,77,1,78,1,79,1,80,1,81,1,82,1,83,1,84,1,85,1,86,1,87,1,88,1,89,1,90,1,91,1,92,1,93,1,94,1,95,1,96,1,97,1,98,1,99,1,100,1,101,1,102,1,103,1,104,1,105,1,106,1,107,1,108,1,109,1,110,1,111,1,112,1,113,1,114,1,115,1,116,1,117,1,118,1,119,1,120,1,121,1,122,1,123,1,124,1,125,1,126,1,127,1,128,1,129,1,130,1,131,1,132,1,133,1,134,1,135,1,136,1,137,1,138,1,139,1,140,1,141,1,142,1,143,1,144,1,145,1,146,1,147,1,148,1,149,1,150,1,151,1,152,1,153,1,154,1,155,1,156,1,157,1,158,1,159,1,160,1,161,1,162,1,163,1,164,1,165,1,166,1,167,1,168,1,169,1,170,1,171,1,172,1,173,1,174,1,175,1,176,1,177,1,178,1,179,1,180,1,181,1,182,1,183,1,184,1,185];
var CONST_NUMENTO_NB_MAX_PER_PAGE = 10;
var CONST_NUMENTO_NB_TOTAL_FILTERS_ITEMS = 1138;
var CONST_NUMENTO_MASK_FILENAME='mask.html';
var CONST_NUMENTO_LISTING_FILENAME='listing.html';
var array_mapping_field = [{"title":0,"serie":1,"tome":2,"story":3,"drawing":4,"buy_price":5,"reserved_loan_enabled":6,"reserved_loan_borrower":7},{"name":0,"number":1,"parution_date":2,"periodicity":3,"editor":4,"sale_price":5},{"description":0,"serie":1,"editor":2,"issue_date":3,"buy_date":4,"material":5,"colors":6,"size":7}];
var array_pattern_result = ["\n<table onclick=\"numento_onClickItem(this,'@NUMENTO:item_id')\" id=\"cellItem\" class='table-result' style='height:80px;'  border=0>\n        <tr >\n            <td class='td-cell-result-zone1' >\n	<!--\n				<div class='cell-result-zone1'>\n				-->\n				<table class='table-result-inner' style='height:80px;' border=0>\n					<tr>\n						<td style='padding:0px;width:1px;'>\n							<img src='@NUMENTO:field_main_image' class='img-zone' style='@NUMENTO:image_scaled_size_style(60,60)'>\n						</td>\n						<td valign=top style='padding:0px;'>\n							<div style='text-align:left;margin:10px;'>\n							<div class='htmlResult0'>@NUMENTO:field(title)</div>\n							<div class='htmlResult1'>@NUMENTO:field(serie)</div>\n							</div>	\n						</td>\n					</tr>\n				</table>\n				<!--\n				</div>\n				-->\n			</td>\n            <td class='td-cell-result-zone2' valign=top align=center>\n		<!--\n				<div class='cell-result-zone2'>\n				-->\n						<img src='../right_arrow.png' class='result-zone2-img' border=0>\n						<!--\n				</div>\n				-->\n			</td>\n        </tr>\n</table>\n","\n<table onclick=\"numento_onClickItem(this,'@NUMENTO:item_id')\" id=\"cellItem\" class='table-result' style='height:80px;'  border=0>\n        <tr >\n            <td class='td-cell-result-zone1' >\n	<!--\n				<div class='cell-result-zone1'>\n				-->\n				<table class='table-result-inner' style='height:80px;' border=0>\n					<tr>\n						<td style='padding:0px;width:1px;'>\n							<img src='@NUMENTO:field_main_image' class='img-zone' style='@NUMENTO:image_scaled_size_style(60,60)'>\n						</td>\n						<td valign=top style='padding:0px;'>\n							<div style='text-align:left;margin:10px;'>\n							<div class='htmlResult0'>@NUMENTO:field(name)</div>\n							<div class='htmlResult1'>@NUMENTO:field(number)</div>\n							</div>	\n						</td>\n					</tr>\n				</table>\n				<!--\n				</div>\n				-->\n			</td>\n            <td class='td-cell-result-zone2' valign=top align=center>\n		<!--\n				<div class='cell-result-zone2'>\n				-->\n						<img src='../right_arrow.png' class='result-zone2-img' border=0>\n						<!--\n				</div>\n				-->\n			</td>\n        </tr>\n</table>\n","\n<table onclick=\"numento_onClickItem(this,'@NUMENTO:item_id')\" id=\"cellItem\" class='table-result' style='height:80px;'  border=0>\n        <tr >\n            <td class='td-cell-result-zone1' >\n	<!--\n				<div class='cell-result-zone1'>\n				-->\n				<table class='table-result-inner' style='height:80px;' border=0>\n					<tr>\n						<td style='padding:0px;width:1px;'>\n							<img src='@NUMENTO:field_main_image' class='img-zone' style='@NUMENTO:image_scaled_size_style(60,60)'>\n						</td>\n						<td valign=top style='padding:0px;'>\n							<div style='text-align:left;margin:10px;'>\n							<div class='htmlResult0'>@NUMENTO:field(description)</div>\n							<div class='htmlResult1'>@NUMENTO:field(serie)</div>\n							</div>	\n						</td>\n					</tr>\n				</table>\n				<!--\n				</div>\n				-->\n			</td>\n            <td class='td-cell-result-zone2' valign=top align=center>\n		<!--\n				<div class='cell-result-zone2'>\n				-->\n						<img src='../right_arrow.png' class='result-zone2-img' border=0>\n						<!--\n				</div>\n				-->\n			</td>\n        </tr>\n</table>\n"];
var array_pattern_mask = ["<img src='@NUMENTO:field_main_image' style='@NUMENTO:image_scaled_size_style(150,150);border: 0px;clear:left;float:left;position:relative;margin: 0px 10px 10px 0px;'><div class='htmlTitleDetail0'>@NUMENTO:field(title)</div>\n<div class='htmlTitleDetail1'>@NUMENTO:field(serie)</div>\n<br style='clear:left;'>\n<hr>\n<div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >No. : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(tome)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Story : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(story)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Drawings : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(drawing)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Purchase price : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(buy_price)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Loan : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(reserved_loan_enabled)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Borrower : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(reserved_loan_borrower)</span></div>\n","<img src='@NUMENTO:field_main_image' style='@NUMENTO:image_scaled_size_style(150,150);border: 0px;clear:left;float:left;position:relative;margin: 0px 10px 10px 0px;'><div class='htmlTitleDetail0'>@NUMENTO:field(name)</div>\n<div class='htmlTitleDetail1'>@NUMENTO:field(number)</div>\n<br style='clear:left;'>\n<hr>\n<div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Publication date : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(parution_date)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Frequency : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(periodicity)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Editor : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(editor)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Sale price : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(sale_price)</span></div>\n","<img src='@NUMENTO:field_main_image' style='@NUMENTO:image_scaled_size_style(150,150);border: 0px;clear:left;float:left;position:relative;margin: 0px 10px 10px 0px;'><div class='htmlTitleDetail0'>@NUMENTO:field(description)</div>\n<div class='htmlTitleDetail1'>@NUMENTO:field(serie)</div>\n<br style='clear:left;'>\n<hr>\n<div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Editor : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(editor)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Release date : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(issue_date)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Purchase date : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(buy_date)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Subject : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(material)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Color(s) : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(colors)</span></div><div class='htmlDetailLine'><span class='htmlDetailFieldTitle' >Dimensions (HxWxD) : </span><span class='htmlDetailFieldValue' >@NUMENTO:field(size)</span></div>\n"];
var array_search_index = [["(1987)",[681,680,679,678,677,676,675,674]],["(1992)",[365,364,363]],["(2000)",[683,682]],["(2001)",[689,688,687,686,685]],["(2003)",[821,820,819,818,817,54,53,51,50,49,48,47,46,45,44,43,42,40,39,38,37,36,35,34,33,32,31,29,28,27,26,25,24,23]],["(2004)",[722,721,720,719,718,716,715,714,713,712,711,710,709,708,707,705,704,703,702,701,700,699,698,697,696,694,693,692,691,690]],["(beyond",[220]],["(bttf",[870]],["(classic)",[468]],["(conduit)",[216]],["(copy)",[406,406]],["(deep",[213,212]],["(dynamic",[135]],["(fire)",[219]],["(hardcover)",[284]],["(ice)",[217]],["(mpi",[8]],["(october",[589]],["(pilot",[211]],["(platinum",[407]],["(shadows)",[221]],["(showbag",[652]],["(signed",[808,807,738,445]],["(signed)",[315]],["(space)",[218]],["(squeeze)",[215,214]],["00",[811,809,374,306,229,209]],["000",[517,517,515]],["001",[757,516]],["002",[759,518]],["003",[760,519]],["004",[762,520]],["005",[765,521]],["006",[766,522]],["007",[524]],["008",[525]],["009",[596,526]],["01",[945,935,862,848,738,731,690,685,682,633,471,461,429,427,398,375,211,52,23,3]],["01-06",[937]],["010",[527]],["011",[528]],["012",[529]],["013",[530]],["014",[531,283]],["015",[532]],["016",[533]],["017",[535]],["018",[536]],["019",[537]],["02",[946,849,691,686,683,634,462,399,377,213,212,24]],["020",[538]],["021",[773,539]],["022",[774,540]],["023",[775,541]],["024",[542]],["025",[543]],["026",[544]],["027",[546]],["028",[547]],["029",[548]],["03",[948,850,692,635,463,400,378,226,215,214,25]],["030",[549]],["031",[550]],["032",[551]],["033",[552]],["034",[553]],["035",[554]],["036",[555]],["037",[557]],["038",[558]],["039",[559]],["04",[949,851,693,636,464,401,379,216,26]],["040",[560]],["041",[561]],["042",[562]],["043",[563]],["044",[564]],["045",[565]],["046",[566]],["047",[568]],["048",[569]],["049",[570]],["05",[950,852,803,694,637,465,452,380,217,27]],["050",[571]],["051",[572,59]],["052",[573,60]],["053",[574,61]],["054",[575,62]],["055",[576,63]],["056",[577,64]],["057",[579,65]],["058",[66]],["059",[67]],["06",[951,853,696,638,466,454,381,307,218,28]],["060",[68]],["061",[69]],["062",[674,70]],["063",[71]],["064",[72]],["065",[73]],["066",[74]],["067",[75]],["068",[76]],["069",[77]],["07",[952,938,854,740,697,382,308,289,219,29]],["070",[78]],["071",[79]],["072",[80]],["073",[598,81]],["074",[599,82]],["075",[675,600,83]],["076",[601,84]],["077",[602,85]],["078",[603,86]],["079",[604,87]],["08",[953,939,855,698,383,220]],["080",[605,88]],["081",[606,89]],["082",[607,90]],["083",[609,91]],["084",[610,92]],["085",[676,94]],["086",[677,95]],["087",[678,96]],["088",[679,97]],["089",[98]],["09",[954,940,858,699,384,221]],["090",[99]],["091",[100]],["092",[101]],["093",[102]],["094",[103]],["095",[104]],["096",[105]],["097",[106]],["098",[107]],["099",[108]],["10",[955,941,890,883,859,741,700,455,385]],["100",[659,109]],["101",[110]],["102",[111]],["103",[680,112]],["1039",[652]],["104",[681,113]],["1040",[654]],["105",[114]],["106",[115]],["107",[116]],["108",[117]],["109",[118]],["11",[956,942,891,860,749,701,386]],["110",[119]],["111",[120]],["112",[121]],["113",[122]],["114",[611,123]],["115",[124]],["116",[125]],["117",[126]],["118",[127]],["119",[128]],["11th",[330,329]],["12",[957,943,892,884,861,751,702,641,387,367,232]],["120",[129]],["121",[130]],["122",[131]],["123",[132]],["124",[133]],["125",[135,134]],["126",[136]],["127",[137]],["128",[138]],["129",[139]],["13",[944,893,750,703,642,388]],["130",[140]],["131",[141]],["132",[142]],["133",[143]],["134",[144]],["135",[145]],["136",[146]],["137",[147]],["138",[148]],["139",[149]],["13th",[655,331]],["14",[894,704,389]],["140",[150]],["141",[151]],["142",[152]],["143",[153]],["144",[154]],["145",[155]],["146",[285,156]],["147",[286,157]],["148",[287,158]],["149",[159]],["14th",[332]],["15",[895,705,687,402,390,210,11]],["150",[160]],["151",[161]],["152",[162]],["153",[163]],["154",[649,164]],["155",[650]],["15th",[355]],["16",[896,707,688]],["16th",[334,333]],["17",[897,753,742,708,689,291]],["175",[165]],["176",[166]],["177",[167]],["178",[168]],["17th",[336]],["18",[898,811,709,406,403]],["181",[169]],["182",[170]],["183",[171]],["184",[172]],["185",[173]],["186",[174]],["187",[175]],["188",[176]],["189",[177]],["18th",[656,338,337]],["19",[900,810,710,644,292]],["1963",[466,465,464,463,462,461]],["1969",[293]],["1975",[476,472]],["1977",[814,656]],["1982",[356,19]],["1983",[475,355]],["1984",[662]],["1987",[802,655,643,337,298]],["1989",[353,352,350,347,345,342,339,338,333,330,328,326,325,321,319,316,303,302,20]],["1990",[349,344,340,336,331,322,318]],["1991",[622,354,351,348,343,341,334,332,327,323,317]],["1992",[329,320,300,299]],["1998)",[589]],["19th",[339]],["20",[901,863,711,428,31]],["2000",[856,767,662,232,194,93,1]],["2013",[482,194]],["2099",[723]],["20th",[340]],["21",[902,847,712,32]],["21st",[341]],["22",[903,713,33]],["22nd",[475,472]],["23",[904,743,714,34]],["23rd",[343,342]],["24",[905,799,798,744,715,500,445,35]],["242",[368]],["24th",[344]],["25",[906,745,716,592,501,227,222,36]],["25th",[345]],["26",[907,718,346,335,37]],["264",[511]],["26th",[348,347]],["27",[908,719,358,223,38]],["27th",[350,349]],["28",[909,720,39]],["281",[5]],["28th",[352,351]],["29",[911,721,40]],["29th",[476]],["2nd",[317,316]],["30",[912,864,722,42]],["300",[473,404,357,251,0]],["304",[6]],["30th",[372,354,353]],["31",[913,43]],["316",[394]],["31st",[356,19]],["32",[914,44]],["320",[7]],["33",[915,45]],["335",[468]],["34",[916,498,46]],["35",[488,252,47,13]],["36",[48]],["37",[49]],["374",[589,396]],["38",[499,50]],["39",[51]],["3rd",[319,318]],["40",[932,224,53]],["400",[405,366]],["41",[746,457,54]],["450",[623]],["464",[294]],["471",[416]],["472",[422]],["473",[426]],["474",[431]],["475",[437]],["476",[447]],["48",[225]],["484",[453]],["485",[459]],["486",[467]],["487",[474]],["488",[485]],["489",[494]],["49",[434]],["490",[502]],["491",[512]],["492",[523]],["493",[534]],["494",[545]],["495",[556]],["496",[567]],["497",[578]],["498",[588]],["499",[597]],["4th",[321,320]],["50",[21]],["500",[608,304,238]],["501",[619]],["502",[624]],["503",[631]],["504",[640,239]],["505",[647]],["506",[653]],["507",[663]],["508",[673]],["509",[684]],["51",[470]],["510",[695]],["511",[706]],["512",[717]],["513",[728]],["514",[739]],["515",[747]],["516",[756]],["517",[768,240]],["518",[779]],["519",[790]],["520",[800]],["521",[804]],["522",[812]],["523",[816]],["524",[827]],["525",[834]],["526",[845]],["527",[857,241]],["528",[867]],["529",[877]],["530",[888]],["531",[899]],["532",[910]],["533",[920]],["534",[929]],["535",[936]],["536",[947]],["537",[2]],["538",[9]],["539",[17]],["54",[449]],["56",[649]],["57",[650,632]],["61",[732]],["613",[242]],["614",[243]],["615",[244]],["616",[245]],["617",[246]],["618",[247]],["619",[248]],["62",[733]],["620",[249]],["621",[250]],["622",[253]],["623",[254]],["624",[255]],["625",[419,256]],["626",[257]],["627",[258]],["628",[259]],["629",[260]],["63",[734]],["630",[261]],["631",[262]],["632",[264]],["633",[265]],["64",[931,813,735]],["649",[420]],["695",[263]],["6th",[322]],["709",[274]],["776",[421]],["79",[736]],["7th",[325,323]],["80",[737]],["827",[767]],["828",[856]],["829",[1]],["830",[93]],["92",[208]],["93",[450]],["95",[488,448,313,252]],["97",[184]],["99",[799,798,752,644,455,445,434,292,291]],["9th",[328,327,326]],["a-team",[233]],["academy",[657]],["across",[252]],["action",[274,263]],["ad",[856,767,662,232,194,93,1]],["ads",[593]],["adventures",[916,915,914,913,912,911,909,908,907,906,905,904,903,902,901,900,898,897,896,895,894,893,892,891,890,889,887,886,885,397,304,294,266]],["age",[595]],["alan",[590,313,252]],["album",[639]],["alf",[358,346,335,324]],["aliens",[838,837,836,487,486,484,483,407,372,371,370,369,367,237,236]],["all",[376]],["amazing",[947,936,929,920,910,899,888,877,867,857,845,834,827,816,812,804,800,790,779,768,756,747,739,728,717,706,695,684,673,663,653,647,640,631,624,619,608,597,588,578,567,556,545,534,523,512,502,494,485,474,467,459,453,447,437,431,426,422,416,405,394,17,9,2]],["america",[366]],["and",[825,824,659,476,475,472,458,391,361,360,359,356,355,302,295,267]],["angel",[30]],["anniversary",[372]],["annual",[814,662,293,283,267,184,4,3]],["another",[41]],["archie",[917]],["armorines",[52]],["army",[432]],["audio",[8]],["august",[347,339,303,302,298]],["azrael",[290]],["back",[587,586,585,584,234]],["banshee",[235]],["bat",[289]],["batman",[846,844,843,842,841,840,839,292,291,290,289,288,287,286,285,284,283,282,281,280,279,278,277,276,275,273,272,271,270,269,268,267,266,265,264,262,261,260,259,258,257,256,255,254,253,250,249,248,247,246,245,244,243,242,241,240,239,238,237,236,8]],["bbc-tv",[293]],["beavis",[295]],["bed",[21]],["beetlejuice",[297,296]],["best",[303,302,301,300,299,298]],["beyond",[464]],["birthright",[861,860,859,858,855,854,853,852,851,850,849,848]],["black",[825,824,412]],["blooded",[373]],["bloodfire",[305]],["bloodshot",[308,307,306]],["bloodstrike",[309]],["blue",[413]],["boiled",[455]],["bone",[310]],["book",[799,798,657,593,466,465,464,463,462,461]],["born",[727,726,725,724]],["buffy",[314,312,311]],["bug",[315]],["buster",[361,360,359,356,355,354,353,352,351,350,349,348,347,345,344,343,342,341,340,339,338,337,336,334,333,332,331,330,329,328,327,326,325,323,322,321,320,319,318,317,316,300,299,298]],["butthead",[295]],["by",[808,807,738,445]],["cable",[362]],["cage",[365,364,363]],["campbell)",[445]],["captain",[366]],["casper",[368]],["cat",[825,824]],["cavendish",[969]],["cell",[729]],["chained",[581]],["chameleon",[373]],["child",[792]],["chips",[302]],["christmas",[582]],["chronicles",[12]],["classics",[482]],["claw",[510,397]],["cold",[373]],["comic",[657,642,641,621,593,372]],["comics",[611,610,609,607,606,605,604,603,602,601,600,599,598,596,446,421,420,419,406,403,402,401,400,399,398,313,274,263]],["commandos",[373]],["complete",[488]],["conan",[391,390,389,388,387,386,385,384,383,382,381,380,379,378,377,375,374]],["constantine",[477]],["contact",[828]],["convention",[583]],["corps",[454,452]],["count",[393,392]],["crate",[372]],["crisis",[232]],["crusade",[471]],["cyber",[395]],["daredevil",[396]],["dark",[510,407,406,403,402,401,400,399,398,397,287,286,285]],["daughters",[391]],["day",[919]],["days",[187,186,185]],["dc",[411,410,409,408,252]],["deadliest",[367]],["dealer",[434]],["death",[434,281]],["deathmate",[418,417,415,414,413,412]],["december",[353,351,342,341,333,332,326,323,316]],["deluxe",[434]],["demon",[822]],["detective",[421,420,419]],["dewey",[458]],["dinosaur",[935]],["dollar",[814]],["dracula",[435,425,424,423]],["dredd",[664,661,660,501,500,488,488,487,486,484,483,482,481,480,479,478]],["duck",[625,580]],["duckula",[393,392]],["dying",[282]],["eddie",[445]],["edition)",[652,407,8]],["end",[730,201,200,199,198,197,196]],["endgame",[921]],["enemy",[10]],["epilogue",[414]],["episode)",[211]],["eternal",[429,428,427]],["extraordinary",[590,508,507,506,505,504,503]],["fables",[430]],["falk",[509]],["family",[281]],["fcbd",[482,194]],["february",[344,336,318,299]],["fett",[833]],["fighter",[666,665,592]],["fightin",[432]],["files",[846]],["first",[828]],["fist",[659]],["flashback",[188]],["for",[313]],["force",[395]],["forces",[135]],["fraggle",[433]],["frank",[434]],["frankenstein",[435]],["fray",[444,443,442,441,440,439,438,436]],["frazetta",[434]],["from",[870,593,464,445]],["fun",[801,361,360,359]],["fury",[462]],["futurama",[446]],["future",[376,301,234,187,186,185]],["g616",[625]],["g666",[458]],["garfield",[448]],["generation",[829]],["genocide",[371]],["gentlemen",[508,507,506,505,504,503]],["ghost",[826,648,450,449]],["god",[815]],["godzilla",[451]],["gunfighter",[497]],["halloween",[292]],["hard",[455]],["hawkeye",[456]],["hc",[434]],["heathcliff",[457]],["heavy",[488]],["hell",[445]],["hellblazer",[477]],["holiday",[802,658,643,361,360,359,310,297,20]],["hooked",[477]],["horned",[815]],["horse",[407,406,403,402,401,400,399,398]],["horus",[465]],["huey",[458]],["hulk",[470,469,468,58,57,56,55]],["human",[460]],["hunter",[935]],["hush",[284]],["if",[21]],["ii",[754,276,275,273,272]],["iii",[808,280,279,278,277]],["image",[466,465,464,463,462,461]],["impaler",[425,424,423]],["in",[629,628,627,626,448,281]],["incorporated",[461]],["incredible",[470,469,468]],["infinity",[471]],["intergalactic",[231]],["iron",[659]],["jack",[476,475,472]],["jackpot",[356,355]],["jango",[833]],["january",[355,349,340,331,329,322,320,300]],["jerry",[930]],["jill",[476,475,472]],["jim",[808,807]],["john",[738,477]],["joke",[291]],["journal",[737,736,735,734,733,732,731]],["jr",[738]],["judge",[664,661,660,488,487,486,484,483,482,481,480,479,478]],["judgment",[919]],["july",[356,337,19]],["june",[656,655,319]],["junior",[458]],["jurassic",[496,495,493,492,491,490,489]],["kid",[497]],["killing",[291]],["knight",[287,286,285]],["knights",[617,616,615,614,613,612]],["last",[786,785,784,783,782]],["law",[501,500]],["league",[508,507,506,505,504,503]],["lee",[509]],["legend",[8]],["legends",[510,287,286,285]],["life",[590]],["light",[465]],["little",[826,511]],["lobo",[587,586,585,584,583,582,581,580,579,577,576,575,574,573,572,571,570,569,568,566,565,564,563,562,561,560,559,558,557,555,554,553,552,551,550,549,548,547,546,544,543,542,541,540,539,538,537,536,535,533,532,531,530,529,528,527,526,525,524,522,521,520,519,518,517,516,515,514,513]],["lonely",[282]],["long",[292]],["loot",[372]],["lord",[465]],["louie",[458]],["love",[21]],["lulu",[511]],["machine",[11]],["mad",[589]],["magazine",[806,805,589]],["magic",[590]],["magneto",[591]],["magnus",[666,665,592]],["mail-order",[593]],["man",[864,863,862,847,814,659,594]],["manowar",[229]],["march",[476,472]],["marshall",[969]],["marvel",[617,616,615,614,613,612,611,610,609,607,606,605,604,603,602,601,600,599,598,596,595,411,410,409,408]],["mary",[797,796,795,794]],["mask",[618,514,513]],["masters",[620]],["max",[183,182,181,180,179,178]],["may",[350]],["me",[21]],["meet",[917]],["men",[646]],["metal",[488]],["midora",[391]],["mighty",[623,622,621]],["million",[814]],["moby",[625]],["monster",[629,628,627,626,361,360,359]],["monsters",[630]],["montana",[497]],["monthly",[832,831,830,303,300,299,298]],["moore",[590,313,252]],["mutanimals",[622]],["mutant",[917,916,915,914,913,912,911,909,908,907,906,905,904,903,902,901,900,898,897,896,895,894,893,892,891,890,889,887,886,885]],["my",[629,628,627,626]],["mysteries",[593]],["mystery",[461]],["new",[632]],["next",[829]],["ninja",[917,916,915,914,913,912,911,909,908,907,906,905,904,903,902,901,900,898,897,896,895,894,893,892,891,890,889,887,886,885,231]],["ninjak",[638,637,636,635,634,633]],["nintendo",[639]],["nipper",[643,642,641]],["nobody",[644]],["noir",[228]],["novel",[811]],["november",[354,345,343,338,334,330,327,321,317]],["obscura",[922]],["october",[475,352,348,325]],["of",[927,926,925,924,923,921,864,863,862,847,838,837,836,833,808,799,798,797,796,795,794,791,789,788,787,786,785,784,783,782,781,780,778,777,776,748,671,670,669,668,667,666,665,664,661,660,620,618,594,594,590,514,513,510,508,507,506,505,504,503,501,500,496,495,493,492,491,490,489,487,486,484,483,473,465,463,435,425,424,423,404,391,371,370,369,367,367,357,304,303,302,301,300,299,298,294,290,289,287,286,285,282,280,279,278,277,276,275,273,272,271,270,269,252,251,237,236,206,205,204,203,202,195,193,192,191,190,189,187,186,185,30,8,0]],["official",[639]],["ojo",[645]],["old",[593]],["omega",[646]],["one",[221,220,219,218,217,216,215,214,213,212,211]],["origin",[314,312,311,195,193,192,191,190,189]],["original",[648,372]],["origins",[846,235]],["outsiders",[267]],["overdrive",[797,796,795,794]],["park",[496,495,493,492,491,490,489]],["parker",[650,649]],["past",[187,186,185]],["perdition",[752]],["peter",[651,650,649]],["phantom",[654,652,509]],["place",[282]],["plagues",[748]],["playhour",[656,655]],["pocket",[629,628,627,626]],["police",[657]],["popeye",[658]],["porker",[651]],["power",[869,868,866,865,659]],["predator",[671,670,669,668,667,666,665,664,661,660,370,369,367,280,279,278,277,276,275,273,272,271,270,269]],["premiere",[228]],["presents",[611,610,609,607,606,605,604,603,602,601,600,599,598,596,407,232]],["prime",[791,789,788,787,672]],["prog",[856,767,93,1]],["prologue",[415]],["punisher",[746,745,744,743,742,741,740,738,737,736,735,734,733,732,731,730,729,727,726,725,724,723,722,721,720,719,718,716,715,714,713,712,711,710,709,708,707,705,704,703,702,701,700,699,698,697,696,694,693,692,691,690,689,688,687,686,685,683,682,681,680,679,678,677,676,675,674]],["queen",[748]],["r1544",[826]],["r2515",[207]],["race",[671,670,669,668,667]],["raptor",[496]],["real",[593]],["red",[748,417]],["ren",[751,750,749]],["replica)",[870]],["returns",[268]],["rider",[648,450,449]],["road",[752]],["robin",[754,753]],["robocop",[792,791,789,788,787,786,785,784,783,782,781,780,778,777,776,775,774,773,772,771,770,769,766,765,764,763,762,761,760,759,758,757,755]],["robot",[666,665,592]],["rock",[433]],["rogue",[793]],["romance",[41]],["romita",[738]],["rough",[448]],["sabretooth",[797,796,795,794]],["saga",[799,798]],["school",[801]],["scream",[802]],["sea)",[220]],["season",[221,220,219,218,217,216,215,214,213,212,211]],["secret",[846,803]],["secrets",[288]],["september",[328]],["series",[372]],["sesame",[806,805]],["shadow",[289]],["shadowhawk",[808,807]],["shadowman",[810,809]],["shelley",[797,796,795,794]],["shocks",[376,301]],["shooting",[811]],["show",[751,750,749]],["silver",[813]],["six",[814]],["slaine",[815]],["slayer",[314,312,311]],["soldier",[835]],["sonja",[748]],["space",[870]],["special",[802,658,643,583,582,361,360,359,310,297,20]],["species",[367]],["spectacular",[821,820,819,818,817,651]],["speed",[822]],["spider-ham",[651]],["spider-man",[595]],["spiderboy",[823]],["spiderman",[947,936,929,920,910,899,888,877,867,857,845,834,827,825,824,821,820,819,818,817,816,812,804,800,790,779,768,756,747,739,728,717,706,695,684,673,663,653,650,649,647,640,631,624,619,608,597,588,578,567,556,545,534,523,512,502,494,485,474,467,459,453,447,437,431,426,422,416,405,394,17,9,2]],["spooky",[826]],["spring",[917]],["stand",[786,785,784,783,782]],["star",[833,832,831,830,829,828,376,293]],["steel",[864,863,862,847,594]],["sticker",[639]],["stickerbook",[620]],["still",[21]],["stimpy",[751,750,749]],["stories",[252]],["street",[806,805]],["stuff",[593]],["stump",[315]],["suburban",[41]],["super",[835]],["superman",[864,863,862,861,860,859,858,855,854,853,852,851,850,849,848,847,846,844,843,842,841,840,839,838,837,836,304,294]],["supreme",[869,868,866,865]],["surfer",[813]],["suspect",[791,789,788,787]],["swamp",[799,798]],["sword",[290]],["syndicate",[466]],["tales",[870,464,463]],["team",[884,883,882,881,880,879,878,876,875,874,873,872,871]],["teenage",[917,916,915,914,913,912,911,909,908,907,906,905,904,903,902,901,900,898,897,896,895,894,893,892,891,890,889,887,886,885]],["terminator",[921,919,918,781,780,778,777]],["terra",[922]],["tharg",[301]],["the",[957,956,955,954,953,952,951,950,949,948,947,946,945,944,943,942,941,940,939,938,937,936,932,929,921,920,918,910,899,888,877,867,864,863,862,857,847,845,834,829,827,826,825,824,821,820,819,818,817,816,815,813,812,804,800,799,798,790,781,780,779,778,777,768,756,751,750,749,747,746,745,744,743,742,741,740,739,738,737,736,735,734,733,732,731,730,730,729,729,728,727,726,725,724,723,722,721,720,719,718,717,716,715,714,713,712,711,710,709,708,707,706,705,704,703,702,701,700,699,698,697,696,695,694,693,692,691,690,689,688,687,686,685,684,683,682,681,680,679,678,677,676,675,674,673,663,657,654,653,652,651,648,647,646,644,640,632,631,624,623,620,619,618,608,597,594,590,588,580,578,567,556,545,534,523,514,513,512,510,509,508,507,506,505,504,503,502,501,500,494,488,485,474,471,470,469,468,467,466,463,462,459,454,453,452,448,447,437,435,431,426,425,424,423,422,416,405,394,391,372,367,367,314,314,312,312,311,311,304,303,302,301,300,299,298,294,292,291,289,287,286,285,281,267,266,252,252,234,233,221,220,220,219,218,217,216,215,214,213,212,211,210,209,201,200,199,198,197,196,21,17,12,10,9,8,8,7,6,5,4,3,2]],["thing",[799,798]],["thor",[927,926,925,924,923,623]],["throat)",[213,212]],["timber",[928]],["titans",[884,883,882,881,880,879,878,876,875,874,873,872,871,632]],["to",[752,234]],["tom",[930]],["tomorrow",[466]],["torch",[460]],["tpb",[937,430,290,288,282,281]],["transformers",[932,931]],["trek",[829,828,293]],["tribe",[933]],["troll",[934]],["trooper",[793]],["tuff",[826]],["turok",[935]],["turtles",[917,916,915,914,913,912,911,909,908,907,906,905,904,903,902,901,900,898,897,896,895,894,893,892,891,890,889,887,886,885]],["ultimates",[957,956,955,954,953,952,951,950,949,948,946,945,944,943,942,941,940,939,938,937,4,3]],["uncanny",[463,7,6,5]],["universe",[620,252,252]],["unleashed",[630]],["untold",[8]],["valentino)",[808,807]],["vampire",[314,312,311]],["variant",[215,213]],["variant)",[135]],["venom",[10]],["versus",[781,780,778,777,666,665,664,661,660,487,486,484,483,411,410,409,408,280,279,278,277,276,275,273,272,271,270,269]],["vikings",[927,926,925,924,923]],["vlad",[425,424,423]],["vol",[748,508,507,506,505,504,503,470,430,284]],["volume",[937,313]],["vs",[370,369]],["war",[811,746,745,744,743,742,741,740,738,737,736,735,734,733,732,731,671,670,669,668,667,435,11]],["warlock",[12]],["warrior",[429,428,427]],["wars",[833,832,831,830]],["watchmen",[13]],["weapon",[610,609,607,606,605,604,603,602,601,600,599,598,18,16,15,14]],["weapons",[803]],["wet",[21]],["whizzer",[302]],["whoopee",[303,20,19]],["wild",[792]],["will",[21]],["winter",[622]],["within",[10]],["wolf",[928]],["wolfpack",[22]],["wolverine",[611,596,206,205,204,203,202,201,200,199,198,197,196,195,193,192,191,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,169,168,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,125,124,123,122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,51,50,49,48,47,46,45,44,43,42,40,39,38,37,36,35,34,33,32,31,29,28,27,26,25,24,23]],["woodchucks",[458]],["woodpecker",[207]],["woody",[207]],["words",[590]],["writing",[313]],["x-factor",[208]],["x-files",[221,220,219,218,217,216,215,214,213,212,211,210,209]],["x-force",[224,223,222]],["x-man",[225]],["x-men",[228,227,226,7,6,5]],["x-o",[229]],["xisle",[206,205,204,203,202]],["yearbook",[429]],["yellow",[418]],["you",[21]],["youngblood",[230]],["zen",[231]],["zone",[746,745,744,743,742,741,740,738]]];
