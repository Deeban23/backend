"use strict";(self.webpackChunkangular_routing=self.webpackChunkangular_routing||[]).push([[632],{3632:(T,d,s)=>{s.r(d),s.d(d,{AdminModule:()=>A});var c=s(6814),l=s(6469),i=s(594),t=s(9468),u=s(1022);let g=(()=>{class e{constructor(n,o){this.router=n,this.auth=o,this.userName=null,this.sideNavToggled=new t.vpe,this.menuStatus=!1;const r=localStorage.getItem("userDetails");if(r){const p=JSON.parse(r);this.userName=p.userName,console.log("User Name:",this.userName)}}onLogoutClick(){this.auth.logout()}ngOnInit(){}sideNavToggle(){this.menuStatus=!this.menuStatus,this.sideNavToggled.emit(this.menuStatus)}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.F0),t.Y36(u.e))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-header"]],outputs:{sideNavToggled:"sideNavToggled"},decls:33,vars:1,consts:[[1,"navbar","navbar-expand","navbar-dark","bg-primary","px-2"],[1,"side-nav-button","p-2","me-3","text-light",3,"click"],[1,"fa-solid","fa-bars"],["href","#",1,"navbar-brand","px-4"],[1,"navbar-collapse"],[1,"navbar-nav","me-auto"],["routerLinkActive","active",1,"nav-item","active"],["routerLink","./home",1,"nav-link"],[1,"sr-only"],["routerLinkActive","active",1,"nav-item"],["routerLink","./features",1,"nav-link"],["href","#",1,"nav-link"],["routerLink","./about",1,"nav-link"],[1,"d-flex","me-5"],[1,"profile-container"],[1,"profile-info"],[1,"profile-name"],["src","https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg","alt","Profile Image",1,"profile-image"],[1,"dropdown-content"],["href","#",1,"dropdown-item"],["href","#"],[2,"cursor","pointer",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"nav",0)(1,"div",1),t.NdJ("click",function(){return o.sideNavToggle()}),t._UZ(2,"i",2),t.qZA(),t.TgZ(3,"a",3),t._uU(4,"Angular"),t.qZA(),t.TgZ(5,"div",4)(6,"ul",5)(7,"li",6)(8,"a",7),t._uU(9,"Home "),t._UZ(10,"span",8),t.qZA()(),t.TgZ(11,"li",9)(12,"a",10),t._uU(13,"Features"),t.qZA()(),t.TgZ(14,"li",9)(15,"a",11),t._uU(16,"Pricing"),t.qZA()(),t.TgZ(17,"li",9)(18,"a",12),t._uU(19,"About"),t.qZA()()()(),t._UZ(20,"form",13),t.TgZ(21,"div",14)(22,"div",15)(23,"span",16),t._uU(24),t.qZA(),t._UZ(25,"img",17),t.qZA(),t.TgZ(26,"div",18)(27,"a",19),t._uU(28,"Settings"),t.qZA(),t.TgZ(29,"a",20),t._uU(30,"Profile Settings"),t.qZA(),t.TgZ(31,"a",21),t.NdJ("click",function(){return o.onLogoutClick()}),t._uU(32,"Logout"),t.qZA()()()()),2&n&&(t.xp6(24),t.Oqu(o.userName))},dependencies:[i.rH,i.Od],styles:["nav[_ngcontent-%COMP%]{height:100%}.side-nav-button[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;font-size:1.5rem;cursor:pointer}.side-nav-button[_ngcontent-%COMP%]:hover{background-color:#fff3;border-radius:30%}.profile-container[_ngcontent-%COMP%]{position:relative;display:inline-block}.profile-info[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.profile-name[_ngcontent-%COMP%]{margin-right:8px;color:#ddd}.profile-image[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;top:100%;right:5;background-color:#f9f9f9;box-shadow:0 0 5px #0003;min-width:160px;z-index:1}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:12px;text-decoration:none;color:#333}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#ddd}.profile-container[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%]{display:block}"]}),e})();const f=function(e){return{"nav-list-open":e}};let h=(()=>{class e{constructor(n){this.router=n,this.sideNavStatus=!1}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-side-nav"]],inputs:{sideNavStatus:"sideNavStatus"},decls:37,vars:3,consts:[[1,"side-nav-content","bg-dark"],[1,"nav-list",3,"ngClass"],[1,"nav-list-item","home"],[1,"fa-solid","fa-house"],["routerLink","./home"],[1,"nav-list-item","analytics"],[1,"fa-solid","fa-chart-line"],["routerLink","./analytics"],[1,"nav-list-item","products"],[1,"fa-solid","fa-box"],["href","#"],[1,"nav-list-item","order"],[1,"fa-solid","fa-cart-shopping"],[1,"nav-list-item","settings"],[1,"fa-solid","fa-gear"],[1,"nav-list-item","about"],[1,"fa-solid","fa-circle-info"],[1,"nav-list-item","contact"],[1,"fa-solid","fa-phone"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"ul",1)(2,"li",2),t._UZ(3,"i",3),t.TgZ(4,"span")(5,"a",4),t._uU(6,"Home"),t.qZA()()(),t.TgZ(7,"li",5),t._UZ(8,"i",6),t.TgZ(9,"span")(10,"a",7),t._uU(11,"Analytics"),t.qZA()()(),t.TgZ(12,"li",8),t._UZ(13,"i",9),t.TgZ(14,"span")(15,"a",10),t._uU(16,"Products"),t.qZA()()(),t.TgZ(17,"li",11),t._UZ(18,"i",12),t.TgZ(19,"span")(20,"a",10),t._uU(21,"Order"),t.qZA()()(),t.TgZ(22,"li",13),t._UZ(23,"i",14),t.TgZ(24,"span")(25,"a",10),t._uU(26,"Settings"),t.qZA()()(),t.TgZ(27,"li",15),t._UZ(28,"i",16),t.TgZ(29,"span")(30,"a",10),t._uU(31,"About"),t.qZA()()(),t.TgZ(32,"li",17),t._UZ(33,"i",18),t.TgZ(34,"span")(35,"a",10),t._uU(36,"Contact"),t.qZA()()()()()),2&n&&(t.xp6(1),t.Q6J("ngClass",t.VKq(1,f,o.sideNavStatus)))},dependencies:[c.mk,i.rH],styles:[".border-white[_ngcontent-%COMP%]{border:1px solid black}.side-nav-content[_ngcontent-%COMP%]{color:#000;width:230px;height:663px;margin-left:0;margin-right:10px;margin-top:-100px}.nav-list[_ngcontent-%COMP%]{list-style:none;height:100%;padding:0%;margin-bottom:0%}.nav-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;height:70px}.nav-list-item.home[_ngcontent-%COMP%]{position:relative;top:90px}.nav-list-item.analytics[_ngcontent-%COMP%], .nav-list-item.products[_ngcontent-%COMP%], .nav-list-item.order[_ngcontent-%COMP%], .nav-list-item.settings[_ngcontent-%COMP%], .nav-list-item.about[_ngcontent-%COMP%], .nav-list-item.contact[_ngcontent-%COMP%]{position:relative;top:80px}.nav-list-open.nav-list-item[_ngcontent-%COMP%]:hover{background-color:#ffffff4d;border-radius:10px}.nav-list-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;height:25px;width:25px;color:#fff;margin-right:15px;margin-left:10px;text-align:center;line-height:25px}.nav-list-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:170px;text-transform:capitalize}a[_ngcontent-%COMP%]{text-decoration:none;color:#fff;font-weight:700}"]}),e})();const v=function(e){return{"app-side-nav-open":e}},C=function(e){return{"display-area-shrink":e}};let _=(()=>{class e{constructor(){this.sideNavStatus=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-admin-dashboard"]],decls:6,vars:7,consts:[[1,"container-fluid","g-0"],[3,"sideNavToggled"],[3,"sideNavStatus","ngClass"],[1,"display-area","p-3",3,"ngClass"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"app-header",1),t.NdJ("sideNavToggled",function(p){return o.sideNavStatus=p}),t.qZA(),t.TgZ(2,"main"),t._UZ(3,"app-side-nav",2),t.TgZ(4,"div",3),t._UZ(5,"router-outlet"),t.qZA()()()),2&n&&(t.xp6(3),t.Q6J("sideNavStatus",o.sideNavStatus)("ngClass",t.VKq(3,v,o.sideNavStatus)),t.xp6(1),t.Q6J("ngClass",t.VKq(5,C,o.sideNavStatus)))},dependencies:[c.mk,i.lC,g,h],styles:[".app-side-nav-open[_ngcontent-%COMP%]{width:250px}"]}),e})(),Z=(()=>{class e{constructor(){this.lineChart=new l.kL({chart:{type:"line"},title:{text:"Patients"},credits:{enabled:!1},series:[{name:"Patients admitted",data:[10,2,3,6,9,17,20,10,5,2,16]}]}),this.pieChart=new l.kL({chart:{type:"pie",plotShadow:!1},credits:{enabled:!1},plotOptions:{pie:{innerSize:"99%",borderWidth:10,borderColor:"",slicedOffset:10,dataLabels:{connectorWidth:0}}},title:{verticalAlign:"middle",floating:!0,text:"Diseases"},legend:{enabled:!1},series:[{type:"pie",data:[{name:"COVID 19",y:1,color:"#eeeeee"},{name:"HIV/AIDS",y:2,color:"#393e46"},{name:"EBOLA",y:3,color:"#00adb5"},{name:"DISPORA",y:4,color:"#eeeeee"},{name:"DIABETES",y:5,color:"#506ef9"}]}]})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-graphs"]],decls:3,vars:2,consts:[[1,"charts"],[1,"pie",3,"chart"],[1,"line",3,"chart"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div",1)(2,"div",2),t.qZA()),2&n&&(t.xp6(1),t.Q6J("chart",o.pieChart),t.xp6(1),t.Q6J("chart",o.lineChart))},dependencies:[l.Dm],styles:[".charts[_ngcontent-%COMP%]{position:absolute;left:220px;display:flex;margin:20px}.pie[_ngcontent-%COMP%]{width:520px;margin-right:20px;box-shadow:10px 10px 5px #aaa}.line[_ngcontent-%COMP%]{width:520px;box-shadow:10px 10px 5px #aaa}"]}),e})(),m=(()=>{class e{constructor(){this.userName=null;const n=localStorage.getItem("userDetails");if(n){const o=JSON.parse(n);this.userName=o.userName,console.log("User Name:",this.userName)}}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],decls:2,vars:0,consts:[[1,"display-area"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"app-graphs"),t.qZA())},dependencies:[Z],styles:[".display-area[_ngcontent-%COMP%]{position:absolute;left:10px;width:calc(100%-250px);margin-top:-40%}"]}),e})();const y=[{path:"",component:_,children:[{path:"home",component:m},{path:"analytics",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-analytics"]],decls:2,vars:0,consts:[[1,"fs-1","fw-bold","fst-italic",2,"margin-top","-30%","margin-left","30%"]],template:function(n,o){1&n&&(t.TgZ(0,"p",0),t._uU(1," Analytics Component\n"),t.qZA())}}),e})()},{path:"features",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-features"]],decls:2,vars:0,consts:[[1,"fs-1","fw-bold","fst-italic",2,"margin-top","-30%","margin-left","30%"]],template:function(n,o){1&n&&(t.TgZ(0,"p",0),t._uU(1," Features Component\n"),t.qZA())}}),e})()},{path:"home",component:m},{path:"",redirectTo:"/admin/home",pathMatch:"full"}]}];let x=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.Bz.forChild(y),i.Bz]}),e})(),A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,x,l.SD]}),e})()}}]);