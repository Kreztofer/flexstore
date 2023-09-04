"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[106],{3106:(B,m,s)=>{s.r(m),s.d(m,{CheckoutModule:()=>j});var u=s(6895),l=s(6949),r=s(433),e=s(1571),h=s(9479),k=s(5053),p=s(6875);function C(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"li",4)(1,"div",5)(2,"button",6),e.NdJ("click",function(){const a=e.CHM(t).index,d=e.oxw();return e.KtG(d.onClick(a))}),e._uU(3),e.qZA()()()}if(2&o){const t=c.$implicit,n=c.index,i=e.oxw();e.xp6(2),e.ekj("active",i.selectedIndex===n),e.xp6(1),e.hij(" ",t.label," ")}}function b(o,c){if(1&o&&(e.TgZ(0,"div"),e.GkF(1,7),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.selected.content)}}let x=(()=>{class o extends p.B8{constructor(){super(...arguments),this.linearModeSelected=!0}ngOnInit(){this.linear=this.linearModeSelected}onClick(t){this.selectedIndex=t}}return o.\u0275fac=function(){let c;return function(n){return(c||(c=e.n5z(o)))(n||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["app-stepper"]],inputs:{linearModeSelected:"linearModeSelected"},features:[e._Bn([{provide:p.B8,useExisting:o}]),e.qOj],decls:4,vars:2,consts:[[1,"stepper"],[1,"nav","nav-pills","nav-justified"],["class","nav-item",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"nav-item"],[1,"d-grid"],[1,"nav-link","text-uppercase","fw-bold",3,"click"],[3,"ngTemplateOutlet"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"ul",1),e.YNc(2,C,4,3,"li",2),e.qZA(),e.YNc(3,b,2,1,"div",3),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngForOf",n.steps),e.xp6(1),e.Q6J("ngIf",n.selected))},dependencies:[u.sg,u.O5,u.tP],styles:["button.nav-link[_ngcontent-%COMP%]{background-color:#e9ecef;border-radius:0;border:none;color:#333}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background-color:var(--color-black)}"]}),o})();var g=s(7185),Z=s(4015);function _(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",6)(1,"div",7)(2,"h4"),e._uU(3,"Shipping address"),e.qZA(),e.TgZ(4,"button",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.saveUserAddress())}),e._uU(5," Save as default address "),e.qZA()(),e.TgZ(6,"div",9)(7,"div",10),e._UZ(8,"app-text-input",11),e.qZA(),e.TgZ(9,"div",10),e._UZ(10,"app-text-input",12),e.qZA(),e.TgZ(11,"div",10),e._UZ(12,"app-text-input",13),e.qZA(),e.TgZ(13,"div",10),e._UZ(14,"app-text-input",14),e.qZA(),e.TgZ(15,"div",10),e._UZ(16,"app-text-input",15),e.qZA(),e.TgZ(17,"div",10),e._UZ(18,"app-text-input",16),e.qZA()()()}if(2&o){const t=e.oxw();let n;e.Q6J("formGroup",t.checkoutForm),e.xp6(4),e.Q6J("disabled",!(null!=(n=t.checkoutForm.get("addressForm"))&&n.valid&&null!=(n=t.checkoutForm.get("addressForm"))&&n.dirty)),e.xp6(4),e.Q6J("label","First name"),e.xp6(2),e.Q6J("label","Last name"),e.xp6(2),e.Q6J("label","Street"),e.xp6(2),e.Q6J("label","City"),e.xp6(2),e.Q6J("label","State"),e.xp6(2),e.Q6J("label","Zip code")}}let y=(()=>{class o{constructor(t,n){this.accountService=t,this.toastr=n}saveUserAddress(){this.accountService.updateUserAddress(this.checkoutForm?.get("addressForm")?.value).subscribe({next:()=>{this.toastr.success("Address saved"),this.checkoutForm?.get("addressForm")?.reset(this.checkoutForm?.get("addressForm")?.value)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.B),e.Y36(g._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-address"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:1,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["routerLink","/basket",1,"btn-black_primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn-black"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],[1,"d-flex","justify-content-between","align-items-center"],[1,"btn","btn-outline-success","mb-3",3,"disabled","click"],["formGroupName","addressForm",1,"row"],[1,"form-group","col-6"],["formControlName","firstName",3,"label"],["formControlName","lastName",3,"label"],["formControlName","street",3,"label"],["formControlName","city",3,"label"],["formControlName","state",3,"label"],["formControlName","zipCode",3,"label"]],template:function(t,n){1&t&&(e.YNc(0,_,19,8,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to basket "),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Go to Delivery "),e._UZ(7,"i",5),e.qZA()()),2&t&&e.Q6J("ngIf",n.checkoutForm)},dependencies:[u.O5,l.rH,r.JJ,r.JL,r.sg,r.u,r.x0,Z.t,p.st]}),o})();var F=s(2340),T=s(4004),A=s(529);let f=(()=>{class o{constructor(t){this.http=t,this.baseUrl=F.N.apiUrl}createOrder(t){return this.http.post(this.baseUrl+"orders",t)}getDeliveryMethods(){return this.http.get(this.baseUrl+"orders/deliveryMethods").pipe((0,T.U)(t=>t.sort((n,i)=>i.price-n.price)))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(A.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=s(5866);function M(o,c){if(1&o){const t=e.EpF();e.TgZ(0,"div",9)(1,"input",10),e.NdJ("click",function(){const a=e.CHM(t).$implicit,d=e.oxw(2);return e.KtG(d.setShipppingPrice(a))}),e.qZA(),e.TgZ(2,"label",11)(3,"strong"),e._uU(4),e.ALo(5,"currency"),e._UZ(6,"br"),e.TgZ(7,"span",12),e._uU(8),e.qZA()()()()}if(2&o){const t=c.$implicit;e.xp6(1),e.s9C("value",t.id),e.s9C("id",t.id),e.xp6(1),e.s9C("for",t.id),e.xp6(2),e.AsE("",t.shortName," -",e.lcZ(5,6,t.price)," "),e.xp6(4),e.Oqu(t.description)}}function O(o,c){if(1&o&&(e.TgZ(0,"div",6)(1,"div",7),e.YNc(2,M,9,8,"div",8),e.qZA()()),2&o){const t=e.oxw();e.Q6J("formGroup",t.checkoutForm),e.xp6(2),e.Q6J("ngForOf",t.deliveryMethods)}}let U=(()=>{class o{constructor(t,n){this.checkoutService=t,this.basketService=n,this.deliveryMethods=[]}ngOnInit(){this.checkoutService.getDeliveryMethods().subscribe({next:t=>this.deliveryMethods=t})}setShipppingPrice(t){this.basketService.setShippingPrice(t)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(f),e.Y36(v.v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-delivery"]],inputs:{checkoutForm:"checkoutForm"},decls:8,vars:1,consts:[["class","mt-4",3,"formGroup",4,"ngIf"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn-black_primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn-black"],[1,"fa","fa-angle-right"],[1,"mt-4",3,"formGroup"],["formGroupName","deliveryForm",1,"row"],["class","col-6 form-group",4,"ngFor","ngForOf"],[1,"col-6","form-group"],["type","radio","formControlName","deliveryMethod",1,"form-check-input",3,"value","id","click"],[1,"form-check-label","ms-2","mb-3",3,"for"],[1,"label-description"]],template:function(t,n){1&t&&(e.YNc(0,O,3,2,"div",0),e.TgZ(1,"div",1)(2,"button",2),e._UZ(3,"i",3),e._uU(4," Back to address "),e.qZA(),e.TgZ(5,"button",4),e._uU(6," Go to Review "),e._UZ(7,"i",5),e.qZA()()),2&t&&e.Q6J("ngIf",n.checkoutForm)},dependencies:[u.sg,u.O5,r.Fj,r._,r.JJ,r.JL,r.sg,r.u,r.x0,p.st,p.po,u.H9]}),o})();var S=s(8795);let P=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-review"]],decls:9,vars:1,consts:[[1,"mt-4"],[3,"isBasket"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn-black_primary"],[1,"fa","fa-angle-left"],["cdkStepperNext","",1,"btn-black"],[1,"fa","fa-angle-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-basket-summary",1),e.qZA(),e.TgZ(2,"div",2)(3,"button",3),e._UZ(4,"i",4),e._uU(5," Back to delivery "),e.qZA(),e.TgZ(6,"button",5),e._uU(7," Go to Payment "),e._UZ(8,"i",6),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("isBasket",!1))},dependencies:[p.st,p.po,S.b]}),o})(),w=(()=>{class o{constructor(t,n,i,a){this.basketService=t,this.checkOutService=n,this.toastr=i,this.router=a}submitOrder(){const t=this.basketService.getCurrentBasketValue();if(!t)return;const n=this.getOrderToCreate(t);n&&this.checkOutService.createOrder(n).subscribe({next:i=>{this.toastr.success("Order created successfully"),this.basketService.deleteLocalBasket(),this.router.navigate(["checkout/success"],{state:i})}})}getOrderToCreate(t){const n=this.checkoutForm?.get("deliveryForm")?.get("deliveryMethod")?.value,i=this.checkoutForm?.get("addressForm")?.value;if(n&&i)return{basketId:t.id,deliveryMethodId:n,shipToAddress:i}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.v),e.Y36(f),e.Y36(g._W),e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-payment"]],inputs:{checkoutForm:"checkoutForm"},decls:24,vars:0,consts:[[1,"payment"],[1,"input"],["type","text","name","name"],["type","number","name","name","placeholder","0000 0000 0000 0000"],[1,"fa","fa-credit-card",2,"color","gray"],[1,"date"],["type","date"],[1,"d-flex","justify-content-between","flex-row","mb-5"],["cdkStepperPrevious","",1,"btn-black_primary"],[1,"fa","fa-angle-left"],[1,"btn-black",3,"click"],[1,"fa","fa-angle-right"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div")(2,"label"),e._uU(3,"NAME ON CARD"),e.qZA(),e.TgZ(4,"div",1),e._UZ(5,"input",2),e.qZA()(),e.TgZ(6,"div")(7,"label"),e._uU(8,"CARD NUMBER"),e.qZA(),e.TgZ(9,"div",1),e._UZ(10,"input",3)(11,"i",4),e.qZA()(),e.TgZ(12,"div")(13,"label"),e._uU(14,"END DATE"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",6),e.qZA()()(),e.TgZ(17,"div",7)(18,"button",8),e._UZ(19,"i",9),e._uU(20," Back to review "),e.qZA(),e.TgZ(21,"button",10),e.NdJ("click",function(){return n.submitOrder()}),e._uU(22," Submit order "),e._UZ(23,"i",11),e.qZA()())},dependencies:[p.po],styles:["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}label[_ngcontent-%COMP%]{font-weight:600;font-size:14px}.input[_ngcontent-%COMP%]{display:flex;border:1px solid #e6e5e5;align-items:center;width:40%;justify-content:space-between;padding:5px 10px}.date[_ngcontent-%COMP%]{border:1px solid #e6e5e5;padding:5px 10px;width:160px}.payment[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-bottom:30px;margin-top:20px}"]}),o})();function q(o,c){if(1&o&&(e.TgZ(0,"button",7),e._uU(1," View your order "),e.qZA()),2&o){const t=e.oxw();e.MGl("routerLink","/orders/",t.order.id,"")}}function N(o,c){1&o&&(e.TgZ(0,"button",8),e._uU(1," View your orders "),e.qZA())}const I=[{path:"",component:(()=>{class o{constructor(t,n){this.fb=t,this.accountService=n,this.checkoutForm=this.fb.group({addressForm:this.fb.group({firstName:["",r.kI.required],lastName:["",r.kI.required],street:["",r.kI.required],city:["",r.kI.required],state:["",r.kI.required],zipCode:["",r.kI.required]}),deliveryForm:this.fb.group({deliveryMethod:["",r.kI.required]}),paymentForm:this.fb.group({nameOnCard:["",r.kI.required]})})}ngOnInit(){this.getAddressFormValues()}getAddressFormValues(){this.accountService.getUserAddress().subscribe({next:t=>{t&&this.checkoutForm.get("addressForm")?.patchValue(t)}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(h.B))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout"]],decls:15,vars:10,consts:[[1,"checkout"],[1,"display"],[1,"items"],[3,"linearModeSelected"],["appStepper",""],[3,"completed","label"],[3,"checkoutForm"],[3,"label"],[1,"summary"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"app-stepper",3,4)(5,"cdk-step",5),e._UZ(6,"app-checkout-address",6),e.qZA(),e.TgZ(7,"cdk-step",5),e._UZ(8,"app-checkout-delivery",6),e.qZA(),e.TgZ(9,"cdk-step",7),e._UZ(10,"app-checkout-review"),e.qZA(),e.TgZ(11,"cdk-step",7),e._UZ(12,"app-checkout-payment",6),e.qZA()()(),e.TgZ(13,"div",8),e._UZ(14,"app-order-totals"),e.qZA()()()),2&t){let i,a;e.xp6(3),e.Q6J("linearModeSelected",!1),e.xp6(2),e.Q6J("completed",null==(i=n.checkoutForm.get("addressForm"))?null:i.valid)("label","Address"),e.xp6(1),e.Q6J("checkoutForm",n.checkoutForm),e.xp6(1),e.Q6J("completed",null==(a=n.checkoutForm.get("deliveryForm"))?null:a.valid)("label","Delivery"),e.xp6(1),e.Q6J("checkoutForm",n.checkoutForm),e.xp6(1),e.Q6J("label","Review"),e.xp6(2),e.Q6J("label","Payment"),e.xp6(1),e.Q6J("checkoutForm",n.checkoutForm)}},dependencies:[k.S,x,p.be,y,U,P,w],styles:[".checkout[_ngcontent-%COMP%]{width:85%;margin:auto}.checkout[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media screen and (min-width: 1200px){.checkout[_ngcontent-%COMP%]   .display[_ngcontent-%COMP%]{flex-direction:row}}.items[_ngcontent-%COMP%]{width:900px;margin:auto}@media screen and (min-width: 1200px){.items[_ngcontent-%COMP%]{width:100%}}"]}),o})()},{path:"success",component:(()=>{class o{constructor(t){this.router=t;const n=this.router.getCurrentNavigation();this.order=n?.extras?.state}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-checkout-success"]],decls:12,vars:2,consts:[[1,"success-container","mt-5"],[1,"item-container"],[1,"fa","fa-check-circle","fa-5x",2,"color","#198754"],["class","btn btn-outline-success",3,"routerLink",4,"ngIf"],["routerLink","/orders","class","btn btn-outline-success",4,"ngIf"],[1,"img-container"],["src","../../../assets/images/congrats.jpg","alt",""],[1,"btn","btn-outline-success",3,"routerLink"],["routerLink","/orders",1,"btn","btn-outline-success"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div"),e._UZ(3,"i",2),e.qZA(),e.TgZ(4,"h2"),e._uU(5,"Thank You, Your Order is confirmed"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Note, order has not been shipped as this is a project and not a real ecommerce store, but feel free to enjoy all the functionalities available \u{1f60a}. "),e.qZA(),e.YNc(8,q,2,1,"button",3),e.YNc(9,N,2,0,"button",4),e.qZA(),e.TgZ(10,"div",5),e._UZ(11,"img",6),e.qZA()()),2&t&&(e.xp6(8),e.Q6J("ngIf",n.order),e.xp6(1),e.Q6J("ngIf",!n.order))},dependencies:[u.O5,l.rH],styles:[".success-container[_ngcontent-%COMP%]{width:900px;display:flex;justify-content:center;margin-bottom:200px;margin-left:25px}@media screen and (min-width: 1200px){.success-container[_ngcontent-%COMP%]{width:87%;margin:auto}}.success-container[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;width:43%;height:380px;padding-top:100px}.success-container[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px}.success-container[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:150px;border-radius:0;height:50px;margin-top:30px;background-color:#198754;color:#fff}.success-container[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:transparent;color:#198754}.success-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{width:55%}.success-container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:100%}"]}),o})()}];let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[l.Bz.forChild(I),l.Bz]}),o})();var Y=s(4466);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,Q,Y.m]}),o})()}}]);