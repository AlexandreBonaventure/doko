//	HYPE.documents["dashboard"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,true==!0&&(c="/hype"),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="dashboard.hyperesources",c="dashboard",e="dashboard_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("dashboard_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_526","HYPE_dtl_526",!0==(null!=a&&10>a||false==!0)?"HYPE-526.full.min.js":"HYPE-526.thin.min.js"),false==!0&&(a=a||l("HYPE_w_526","HYPE_wdtl_526","HYPE-526.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"AutoLoadScene",source:"function(hypeDocument, element, event) {\tvar _ = require('lodash');\n\thypeDocument.functions().LoadScene(hypeDocument, element, _.capitalize(_.camelCase(hypeDocument.currentSceneName())) + 'Scene')\n}",identifier:"107"},{name:"AutoUnloadScene",source:"function(hypeDocument, element, event) {\tvar _ = require('lodash');\n\thypeDocument.functions().UnloadScene(hypeDocument, element,  _.capitalize(_.camelCase(hypeDocument.currentSceneName())) + 'Scene')\n}",identifier:"108"},{name:"LoadScene",source:"function(hypeDocument, element, event) {\tvar scene_name = event;\n\tvar Scene = window.ModuleLoader.module('DecouvrezPage').get(scene_name);\n\tScene.init(hypeDocument, element);\n\t\n}",identifier:"109"},{name:"UnloadScene",source:"function(hypeDocument, element, event) {\tvar scene_name = event;\n\tvar Scene = window.ModuleLoader.module('DecouvrezPage').get(scene_name);\n\tScene.destroy();\n}",identifier:"110"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_526(c,e,{"3":{p:1,n:"PastedVector-2.svg",g:"61",t:"image/svg+xml"},"4":{p:1,n:"Screen%20Shot%202016-05-17%20at%2017.22.18.png",g:"67",t:"@1x"},"0":{p:1,n:"miam.svg",g:"11",t:"image/svg+xml"},"5":{p:1,n:"Screen%20Shot%202016-05-17%20at%2017.20.37.png",g:"69",t:"@1x"},"1":{p:1,n:"lait.svg",g:"25",t:"image/svg+xml"},"6":{p:1,n:"PastedVector-1.svg",g:"81",t:"image/svg+xml"},"2":{p:1,n:"PastedVector.svg",g:"28",t:"image/svg+xml"}},h,[],d,[{n:"Untitled Scene",o:"1",X:[0]},{n:"accueil",o:"86",X:[1]},{n:"mot",o:"130",X:[2]},{n:"expression",o:"16",X:[3]}],[{o:"3",p:"600px",x:0,a:100,Z:400,cA:false,Y:600,b:100,c:"#FFFFFF",L:[],bY:1,d:600,U:{},T:{kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:1.08,b:[],a:[{f:"c",y:0,z:0.09,i:"e",e:1,s:0,o:"142"},{f:"c",y:0,z:1.08,i:"e",e:1,s:0,o:"139"},{y:0.09,i:"e",s:1,z:0,o:"142",f:"c"},{f:"f",y:0.21,z:0.17,i:"cQ",e:1,s:0.80000000000000004,o:"139"},{f:"f",y:0.21,z:0.17,i:"cR",e:1,s:0.80000000000000004,o:"139"},{y:1.08,i:"cQ",s:1,z:0,o:"139",f:"c"},{y:1.08,i:"cR",s:1,z:0,o:"139",f:"c"},{y:1.08,i:"e",s:1,z:0,o:"139",f:"c"}],f:30}},bZ:180,O:["141","140","139","142","138","137"],v:{"138":{aA:{a:[{d:0.59999999999999998,p:1,g:2,f:1}]},x:"visible",k:"div",bS:45,c:542,d:300,z:2,a:35,aP:"pointer",j:"absolute",b:50},"140":{c:542,d:83,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,bF:"139",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"139":{x:"visible",a:0,b:104,j:"absolute",bF:"138",c:542,k:"div",z:2,d:83,cQ:0.80000000000000004,e:0,cR:0.80000000000000004},"141":{G:"#000000",aU:8,c:526,d:48,aV:8,r:"inline",cQ:1,s:"Helvetica,Arial,Sans-Serif",t:16,cR:1,Z:"break-word",w:"<p style=\"margin-top: 0px; margin-bottom: 28.7px; font-style: normal; font-variant-caps: normal; font-size: 37px; line-height: normal; font-family: 'Gotham Rounded';\"><b>Cuisine, cuisinons, cuisinez\u2009!</b></p><div><b><br></b></div>",bF:"139",j:"absolute",x:"visible",k:"div",y:"preserve",z:2,aS:8,aT:8,a:3,b:14},"137":{c:600,bS:54,d:400,I:"None",J:"None",K:"None",g:"#00EBE4",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"142":{h:"11",p:"no-repeat",x:"visible",a:115,q:"100% 100%",b:0,j:"absolute",bF:"138",z:1,k:"div",c:300,d:300,r:"inline",e:0}}},{o:"103",A:{a:[{p:4,h:"107"}]},p:"600px",x:1,a:100,Z:400,cA:false,Y:600,b:100,c:"#FFFFFF",B:{a:[{p:4,h:"108"}]},bY:1,d:600,L:[{a:[{b:"57",p:3,z:false,symbolOid:"17"}],B:"modal"},{a:[{b:"57",p:3,z:true,symbolOid:"17"}],B:"modal-off"}],U:{},T:{"102":{i:"102",n:"modal",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["144","143"],v:{"143":{c:600,bS:54,d:400,I:"None",J:"None",K:"None",g:"#00EBE4",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"144":{G:"#000000",aU:8,c:603,cP:"wrapper-hype",bS:55,d:412,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",i:"hype_accueil_scene",w:"<br>",j:"absolute",x:"scroll",k:"div",y:"preserve",z:2,aS:8,aT:8,a:2,b:0}}},{o:"135",A:{a:[{p:4,h:"107"}]},p:"600px",x:2,a:100,Z:400,cA:false,Y:600,b:100,c:"#FFFFFF",B:{a:[{p:4,h:"108"}]},bY:1,d:600,L:[{a:[{b:"57",p:3,z:false,symbolOid:"17"}],B:"modal"},{a:[{b:"57",p:3,z:true,symbolOid:"17"}],B:"modal-off"}],U:{},T:{"134":{i:"134",n:"modal",z:0,b:[],a:[],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["146","145"],v:{"145":{c:600,bS:54,d:400,I:"None",J:"None",K:"None",g:"#00EBE4",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"146":{G:"#000000",aU:8,c:603,cP:"wrapper-hype",bS:55,d:412,aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:16,Z:"break-word",i:"hype_mot_scene",w:"<br>",j:"absolute",x:"scroll",k:"div",y:"preserve",z:2,aS:8,aT:8,a:2,b:0}}},{o:"24",A:{a:[{p:0}]},p:"600px",x:3,a:100,Z:400,cA:false,Y:600,b:100,c:"#FFFFFF",L:[{a:[{b:"57",p:3,z:false,symbolOid:"17"}],B:"modal"},{a:[{b:"57",p:3,z:true,symbolOid:"17"}],B:"modal-off"}],bY:1,d:600,U:{"147":{V:{lait:"179",paille:"178","Main Timeline":"177"},W:"177",n:"modal"},"163":{V:{"Main Timeline":"180"},W:"180",n:"lait"},"167":{V:{"Main Timeline":"181"},W:"181",n:"paille"}},T:{"177":{c:"147",z:0,i:"177",n:"Main Timeline",a:[],f:30,b:[]},"180":{c:"163",z:0.14,i:"180",n:"Main Timeline",a:[{f:"c",y:0,z:0.14,i:"e",e:0.60000000000000009,s:0,o:"166"},{f:"c",y:0,z:0.14,i:"e",e:0,s:1,o:"165"},{y:0.14,i:"e",s:0.60000000000000009,z:0,o:"166",f:"c"},{y:0.14,i:"e",s:0,z:0,o:"165",f:"c"}],f:30,b:[]},"179":{c:"147",z:0,i:"179",n:"lait",a:[{y:0,i:"cY",s:"0",z:0,o:"151",f:"a"},{y:0,i:"cY",s:"1",z:0,o:"154",f:"a"}],f:30,b:[]},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:1,b:[{D:0,H:true,E:true,z:false,F:0,G:0,C:0,b:"177"}],a:[{f:"c",y:0,z:0.14,i:"e",e:1,s:0,o:"172"},{f:"c",y:0,z:1,i:"e",e:1,s:0,o:"162"},{y:0.14,i:"e",s:1,z:0,o:"172",f:"c"},{y:1,i:"e",s:1,z:0,o:"162",f:"c"}],f:30},"178":{c:"147",z:0,i:"178",n:"paille",a:[{y:0,i:"cY",s:"0",z:0,o:"154",f:"a"},{y:0,i:"cY",s:"1",z:0,o:"151",f:"a"}],f:30,b:[]},"181":{c:"167",z:0.17,i:"181",n:"Main Timeline",a:[{f:"c",y:0,z:0.17,i:"e",e:0,s:1,o:"170"},{f:"c",y:0,z:0.17,i:"e",e:0.60000000000000009,s:0,o:"169"},{y:0.17,i:"e",s:0,z:0,o:"170",f:"c"},{y:0.17,i:"e",s:0.60000000000000009,z:0,o:"169",f:"c"}],f:30,b:[]},"57":{i:"57",n:"modal",z:0.01,b:[],a:[{f:"c",y:0,z:0.01,i:"cY",e:"0",s:"1",o:"147"},{y:0.01,i:"cY",s:"0",z:0,o:"147",f:"c"}],f:30}},bZ:180,O:["156","155","154","152","153","151","150","149","157","148","147","176","175","174","160","159","158","171","170","169","168","167","165","166","164","163","162","172","161","173"],v:{"173":{c:600,bS:54,d:400,I:"None",J:"None",K:"None",g:"#00EBE4",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"165":{c:67,d:7,I:"None",e:1,J:"None",K:"None",L:"Dotted",M:0,N:0,bF:"164",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:3,D:"#FFFFFF",aC:{a:[{b:"180",p:8,z:true,symbolOid:"36",J:false}]},a:9,aD:{a:[{b:"180",p:3,z:false,symbolOid:"36"}]},b:49},"157":{c:600,bS:54,d:400,I:"None",J:"None",K:"None",g:"rgba(64, 63, 61, 0.680)",L:"None",M:0,N:0,bF:"148",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:1,P:0,D:"#D8DDE4",a:0,b:0},"149":{k:"div",x:"visible",bF:"148",c:489,d:320,z:2,a:55,j:"absolute",bS:45,b:40},"161":{k:"div",x:"visible",c:307,d:320,z:10,a:155,j:"absolute",bS:45,b:30},"153":{h:"69",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"151",c:428,k:"div",z:1,d:330,r:"inline"},"174":{x:"visible",bS:33,a:484,b:14,j:"absolute",aA:{a:[{j:"http://laclasse.grandducenligne.com",p:5,k:true}]},k:"div",z:14,d:45,c:105,cQ:0.90000000000000002,aP:"pointer",cR:0.90000000000000002},"166":{c:84,d:57,I:"None",e:0,J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:16,A:"#D8DDE4",x:"visible",O:0,j:"absolute",aJ:16,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:16,bF:"164",P:0,a:0,aL:16,b:0},"158":{x:"visible",a:9,b:14,j:"absolute",aA:{a:[{j:"http://dictionnaire.grandducenligne.com/fr/d/06DS58",p:5,k:true}]},k:"div",z:13,d:45,c:134,cQ:0.90000000000000002,aP:"pointer",cR:0.90000000000000002},"170":{c:123,d:27,I:"None",e:1,J:"None",K:"None",L:"Dotted",M:0,N:0,bF:"168",A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:3,D:"#FFFFFF",a:4,b:50},"162":{x:"visible",k:"div",c:312,d:110,z:2,e:0,a:0,j:"absolute",bF:"161",b:220},"154":{x:"visible",cY:"1",k:"div",c:429,d:263,z:3,a:30,j:"absolute",bF:"149",b:28},"175":{c:108,bS:33,d:45,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:0,aJ:10,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"174",P:0,a:-3,aL:10,b:0},"167":{x:"visible",a:185,cA:false,b:51,j:"absolute",bF:"162",aA:{a:[{p:14,B:"modal"},{p:14,B:"paille"}]},k:"div",c:127,d:59,z:2,bY:1,aP:"pointer",bZ:180,bX:false,cV:[]},"159":{c:134,d:45,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:0,aJ:10,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"158",P:0,a:0,aL:10,b:0},"150":{c:489,bS:45,d:320,I:"None",J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:10,A:"#D8DDE4",x:"visible",j:"absolute",O:0,aJ:10,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:10,bF:"149",P:0,a:0,aL:10,b:0},"171":{cN:"none",h:"28",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:12,j:"absolute",bF:"162",z:3,k:"div",c:307,d:88,r:"inline",e:1,aP:"auto"},"163":{x:"visible",a:173,cA:false,b:0,j:"absolute",bF:"162",aA:{a:[{p:14,B:"modal"},{p:14,B:"lait"}]},k:"div",c:84,d:59,z:1,bY:1,aP:"pointer",bZ:180,bX:false,cV:[]},"155":{h:"67",p:"no-repeat",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",bF:"154",c:429,k:"div",z:1,d:263,r:"inline"},"147":{x:"visible",a:0,bS:54,b:0,j:"absolute",cY:"1",c:600,k:"div",bY:1,d:400,z:15,cA:false,bX:false,bZ:180,cV:[{a:[{b:"179",p:3,z:false,symbolOid:"52"}],B:"lait"},{a:[{b:"178",p:3,z:false,symbolOid:"52"}],B:"paille"}]},"176":{w:"",h:"81",p:"no-repeat",x:"visible",a:19,q:"100% 100%",b:17,j:"absolute",bF:"174",z:2,k:"div",c:65,d:12,r:"inline"},"168":{x:"visible",k:"div",aD:{a:[{b:"181",p:3,z:false,symbolOid:"42"}]},bF:"167",c:127,d:59,z:7,a:0,aC:{a:[{b:"181",p:8,z:true,symbolOid:"42",J:false}]},j:"absolute",b:0},"151":{x:"hidden",cY:"1",k:"div",c:428,d:194,z:2,a:31,j:"absolute",bF:"149",b:63},"172":{h:"25",p:"no-repeat",x:"visible",a:38,q:"100% 100%",b:0,j:"absolute",bF:"161",z:1,k:"div",c:232,d:232,r:"inline",e:0},"164":{aD:{a:[{b:"180",p:3,z:false,symbolOid:"36"}]},x:"visible",a:0,b:0,j:"absolute",bF:"163",z:3,k:"div",c:84,d:59,aP:"pointer",aC:{a:[{b:"180",p:8,z:true,symbolOid:"36",J:false}]}},"156":{c:23,d:23,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"154",A:"#D8DDE4",x:"visible",aA:{a:[{p:14,B:"modal-off"}]},j:"absolute",O:1,k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",P:1,a:396,b:0},"148":{k:"div",x:"visible",bF:"147",c:600,d:400,z:12,a:0,j:"absolute",bS:54,b:0},"169":{c:127,d:62,I:"None",e:0,J:"None",K:"None",g:"#FFFFFF",L:"None",M:0,N:0,aI:16,A:"#D8DDE4",x:"visible",O:0,j:"absolute",aJ:16,k:"div",C:"#D8DDE4",z:1,B:"#D8DDE4",D:"#D8DDE4",aK:16,bF:"168",P:0,a:0,aL:16,b:0},"160":{h:"61",p:"no-repeat",x:"visible",a:15,q:"100% 100%",b:16,j:"absolute",bF:"158",c:104,k:"div",z:2,d:13,r:"inline"},"152":{c:23,d:23,I:"Solid",e:0,J:"Solid",K:"Solid",g:"#E8EBED",L:"Solid",aP:"pointer",M:1,N:1,bF:"151",A:"#D8DDE4",x:"visible",aA:{a:[{p:14,B:"modal-off"}]},j:"absolute",O:1,k:"div",C:"#D8DDE4",z:2,B:"#D8DDE4",D:"#D8DDE4",P:1,a:394,b:1}}}],{},g,{f:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]},null,false,true,-1,true,false,false,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
