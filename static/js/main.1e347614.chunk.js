(this.webpackJsonplwitter=this.webpackJsonplwitter||[]).push([[0],{49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(2),r=n.n(c),s=n(32),i=n.n(s),o=n(9),u=n(22),l=n(6),j=n(10),b=n.n(j),d=n(17),p=n(12),O=n(23),h=n(24);n(45),n(51),n(52);h.a.initializeApp({apiKey:"AIzaSyAmFJyKZTCODR8QJM8_sE2X1DNY5bIkezA",authDomain:"lwitter-2b6ee.firebaseapp.com",projectId:"lwitter-2b6ee",storageBucket:"lwitter-2b6ee.appspot.com",messagingSenderId:"304152928671",appId:"1:304152928671:web:7efa0b9676768c75ff5daa"});var f=h.a,m=h.a.auth(),x=h.a.firestore(),g=h.a.storage(),v=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),u=i[0],l=i[1],j=Object(c.useState)(!0),p=Object(o.a)(j,2),O=p[0],h=p[1],f=Object(c.useState)(""),x=Object(o.a)(f,2),g=x[0],v=x[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&l(a)},w=function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,m.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,m.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message),v(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:w,className:"container",children:[Object(a.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(a.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,className:"authInput",onChange:y}),Object(a.jsx)("input",{type:"submit",className:"authInput authSubmit",value:O?"Create Account":"Sign In"}),g&&Object(a.jsx)("span",{className:"authError",children:g})]}),Object(a.jsx)("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch",children:O?"Sign In":"Create Account"})]})},y=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new f.auth.GoogleAuthProvider:"github"===n&&(a=new f.auth.GithubAuthProvider),e.next=4,m.signInWithPopup(a);case 4:c=e.sent,console.log(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"authContainer",children:[Object(a.jsx)(p.a,{icon:O.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(a.jsx)(v,{}),Object(a.jsxs)("div",{className:"authBtns",children:[Object(a.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(a.jsx)(p.a,{icon:O.b})]}),Object(a.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(a.jsx)(p.a,{icon:O.a})]})]})]})},w=n(34),N=n(19),k=function(e){var t=e.lweetObj,n=e.isOwner,r=Object(c.useState)(!1),s=Object(o.a)(r,2),i=s[0],u=s[1],l=Object(c.useState)(t.text),j=Object(o.a)(l,2),O=j[0],h=j[1],f=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Are you sure you want to delete this lweet?")){e.next=7;break}return e.next=4,x.doc("lweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,g.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return u((function(e){return!e}))},v=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,x.doc("lweets/".concat(t.id)).update({text:O});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"lweet",children:i?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{onSubmit:v,className:"container lweetEidt",children:[Object(a.jsx)("input",{type:"text",placeholder:"Edit your lweet",value:O,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;h(t)}}),Object(a.jsx)("input",{type:"submit",value:"Update Lweet",className:"formBtn"})]}),Object(a.jsx)("span",{onClick:m,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(a.jsx)("img",{src:t.attachmentUrl,alt:""}),n&&Object(a.jsxs)("div",{className:"lweet__actions",children:[Object(a.jsx)("span",{onClick:f,children:Object(a.jsx)(p.a,{icon:N.d})}),Object(a.jsx)("span",{onClick:m,children:Object(a.jsx)(p.a,{icon:N.a})})]})]})})},S=n(54),I=function(e){var t=e.userObj,n=Object(c.useState)(""),r=Object(o.a)(n,2),s=r[0],i=r[1],u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],O=l[1],h=function(){var e=Object(d.a)(b.a.mark((function e(n){var a,c,r,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s){e.next=2;break}return e.abrupt("return");case 2:if(n.preventDefault(),a="",""===j){e.next=12;break}return c=g.ref().child("".concat(t.uid,"/").concat(Object(S.a)())),e.next=8,c.putString(j,"data_url");case 8:return r=e.sent,e.next=11,r.ref.getDownloadURL();case 11:a=e.sent;case 12:return o={text:s,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a},e.next=15,x.collection("lweets").add(o);case 15:i(""),O("");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("form",{onSubmit:h,className:"factoryForm",children:[Object(a.jsxs)("div",{className:"factoryInput__container",children:[Object(a.jsx)("input",{className:"factoryInput__input",value:s,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(a.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(a.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(a.jsx)("span",{children:"Add photos"}),Object(a.jsx)(p.a,{icon:N.b})]}),Object(a.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;O(t)},n.readAsDataURL(t)},style:{opacity:0}}),j&&Object(a.jsxs)("div",{className:"factoryForm__attachment",children:[Object(a.jsx)("img",{src:j,style:{backgroundImage:j},alt:"",id:"img"}),Object(a.jsxs)("div",{className:"factoryForm__clear",onClick:function(){O("")},children:[Object(a.jsx)("span",{children:"Remove"}),Object(a.jsx)(p.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(c.useState)([]),r=Object(o.a)(n,2),s=r[0],i=r[1];return Object(c.useEffect)((function(){x.collection("lweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(I,{userObj:t}),Object(a.jsx)("div",{style:{marginTop:30},children:s.map((function(e){return Object(a.jsx)(k,{lweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.refreshUser,n=e.userObj,r=Object(l.f)(),s=Object(c.useState)(n.displayName),i=Object(o.a)(s,2),u=i[0],j=i[1],p=function(){var e=Object(d.a)(b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("form",{onSubmit:p,className:"profileForm",children:[Object(a.jsx)("input",{onChange:function(e){var t=e.target.value;j(t)},type:"text",autoFocus:!0,placeholder:"Display name",value:u,className:"formInput"}),Object(a.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(a.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){m.signOut(),r.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(a.jsx)("nav",{children:Object(a.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(a.jsx)("li",{children:Object(a.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(a.jsx)(p.a,{icon:O.c,color:"#04AAFF",size:"2x"})})}),Object(a.jsx)("li",{children:Object(a.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(a.jsx)(p.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(a.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"'s Profile"):"Profile"})]})})]})})},U=function(e){var t=e.refreshUser,n=e.isLoggedIn,c=e.userObj;return Object(a.jsxs)(u.a,{children:[n&&Object(a.jsx)(F,{userObj:c}),Object(a.jsx)(l.c,{children:n?Object(a.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(C,{userObj:c})}),Object(a.jsx)(l.a,{exact:!0,path:"/profile",children:Object(a.jsx)(A,{userObj:c,refreshUser:t})})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(l.a,{exact:!0,path:"/",children:Object(a.jsx)(y,{})})})})]})};var _=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),i=Object(o.a)(s,2),u=i[0],l=i[1];return Object(c.useEffect)((function(){m.onAuthStateChanged((function(e){l(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),r(!0)}))}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(U,{refreshUser:function(){var e=m.currentUser;l({displayName:e.displayName})},isLoggedIn:Boolean(u),userObj:u}):"Initializing..."})};n(49);i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(_,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.1e347614.chunk.js.map