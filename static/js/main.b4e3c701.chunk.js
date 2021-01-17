(this.webpackJsonpmesto=this.webpackJsonpmesto||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a.n(c),o=a(5),i=a.n(o),r=(a(14),a(2)),p=a.p+"static/media/header_logo.a307e1c4.svg";var u=function(){return Object(n.jsx)("header",{className:"header",children:Object(n.jsx)("img",{className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f MestoRussia",src:p})})},l=a(4),d=a(8),j=a(6),_=a(7),m=new(function(){function e(t){Object(j.a)(this,e),this._url=t.url,this._headers=t.headers}return Object(_.a)(e,[{key:"getCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getProfileData",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getInitialData",value:function(){return Promise.all([this.getProfileData(),this.getCards()])}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editProfile",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"unLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"editAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-18/",headers:{authorization:"314f493f-d410-4af8-924a-085e955b4269","content-type":"application/json"}});var h=function(e){return Object(n.jsxs)("figure",{className:"card",children:[Object(n.jsx)("img",{className:"card__image",alt:e.title,src:e.src,onClick:function(){e.onCardClick(e)}}),Object(n.jsx)("button",{className:"card__recycle-bin",type:"button"}),Object(n.jsxs)("figcaption",{className:"card__figcaption",children:[Object(n.jsx)("h2",{className:"card__title",children:e.title}),Object(n.jsxs)("div",{className:"card__like-container",children:[Object(n.jsx)("button",{className:"card__like",type:"button"}),Object(n.jsx)("p",{className:"card__counter",children:e.count})]})]})]})};var b=function(e){var t=e.onEditProfile,a=e.onAddPlace,c=e.onEditAvatar,o=e.onCardClick,i=s.a.useState(""),p=Object(r.a)(i,2),u=p[0],j=p[1],_=s.a.useState(""),b=Object(r.a)(_,2),f=b[0],O=b[1],x=s.a.useState(""),g=Object(r.a)(x,2),v=g[0],N=g[1],y=s.a.useState([]),k=Object(r.a)(y,2),C=k[0],P=k[1];return s.a.useEffect((function(){m.getProfileData().then((function(e){j(e.name),O(e.about),N(e.avatar)}))}),[]),s.a.useEffect((function(){m.getCards().then((function(e){P(e.map((function(e){return{id:e._id,src:e.link,title:e.name,count:e.likes.length}})))}))}),[]),Object(n.jsxs)("main",{className:"page__content",children:[Object(n.jsxs)("section",{className:"profile page__profile",children:[Object(n.jsxs)("div",{className:"profile__container",children:[Object(n.jsx)("div",{className:"profile__container-avatar",style:{backgroundImage:"url(".concat(v,")")},children:Object(n.jsx)("div",{className:"profile__avatar-cover",children:Object(n.jsx)("button",{className:"profile__button-edit-avatar",type:"button",onClick:c})})}),Object(n.jsxs)("div",{className:"profile__info",children:[Object(n.jsx)("h1",{className:"profile__name",children:u}),Object(n.jsx)("button",{className:"profile__button",type:"button",onClick:t}),Object(n.jsx)("p",{className:"profile__job",children:f})]})]}),Object(n.jsx)("button",{className:"profile__button-add-images",type:"button",onClick:a})]}),Object(n.jsx)("section",{className:"cards page__cards",children:C.map((function(e){var t=e.id,a=Object(d.a)(e,["id"]);return Object(n.jsx)(h,Object(l.a)(Object(l.a)({},a),{},{onCardClick:o}),t)}))})]})};var f=function(){return Object(n.jsx)("footer",{className:"footer page__footer",children:Object(n.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var O=function(e){var t=e.title,a=e.name,c=e.titleButton,s=e.children,o=e.isOpen,i=e.onClose;return Object(n.jsx)("section",{className:"popup popup_".concat(a," ").concat(o),children:Object(n.jsxs)("form",{className:"popup__container",name:a,noValidate:!0,children:[Object(n.jsx)("button",{type:"button",className:"popup__close popup__close_profile",onClick:i}),Object(n.jsx)("h2",{className:"popup__title",children:t}),s,Object(n.jsx)("button",{type:"submit",className:"popup__button popup__button_save",children:c})]})})};var x=function(e){var t=e.onClose,a=e.card;return Object(n.jsx)("section",{className:"popup popup_view-images ".concat(a?"popup_opened":""),children:Object(n.jsxs)("figure",{className:"popup__picture-container",children:[Object(n.jsx)("button",{type:"button",className:"popup__close popup__close_view-image",onClick:t}),Object(n.jsx)("img",{className:"popup__picture",alt:"".concat(a?a.title:""),src:"".concat(a?a.src:"")}),Object(n.jsx)("figcaption",{className:"popup__picture-figcaption",children:Object(n.jsx)("h2",{className:"popup__picture-title",children:"".concat(a?a.title:"")})})]})})};var g=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),a=t[0],c=t[1],o=s.a.useState(!1),i=Object(r.a)(o,2),p=i[0],l=i[1],d=s.a.useState(!1),j=Object(r.a)(d,2),_=j[0],m=j[1],h=s.a.useState(null),g=Object(r.a)(h,2),v=g[0],N=g[1];function y(){c(!1),l(!1),m(!1),N(null)}return Object(n.jsx)("div",{className:"page",children:Object(n.jsxs)("div",{className:"page__container",children:[Object(n.jsx)(u,{}),Object(n.jsx)(b,{onEditProfile:function(){c(!0)},onAddPlace:function(){l(!0)},onEditAvatar:function(){m(!0)},onCardClick:function(e){N({src:e.src,title:e.title})}}),Object(n.jsxs)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"profile",titleButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:a?"popup_opened":"",onClose:y,children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{id:"input-name",type:"text",className:"popup__input popup__input_type_name",minLength:"2",maxLength:"40",name:"popup_name",autoComplete:"off",placeholder:"\u0418\u043c\u044f",required:!0}),Object(n.jsx)("span",{id:"input-name-error",className:"popup__input-error"})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{id:"input-job",type:"text",className:"popup__input popup__input_type_job",minLength:"2",maxLength:"200",name:"popup_job",autoComplete:"off",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0}),Object(n.jsx)("span",{id:"input-job-error",className:"popup__input-error"})]})]}),Object(n.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-images",titleButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:p?"popup_opened":"",onClose:y,children:[Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{id:"input-image-name",type:"text",className:"popup__input popup__input_type_image-name",minLength:"2",maxLength:"30",name:"popup_name",autoComplete:"off",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0}),Object(n.jsx)("span",{id:"input-image-name-error",className:"popup__input-error"})]}),Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{id:"input-url",type:"url",className:"popup__input popup__input_type_image-link",name:"popup_job",autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(n.jsx)("span",{id:"input-url-error",className:"popup__input-error"})]})]}),Object(n.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"delete-images",titleButton:"\u0414\u0430"}),Object(n.jsx)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",titleButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:_?"popup_opened":"",onClose:y,children:Object(n.jsxs)("div",{className:"popup__field",children:[Object(n.jsx)("input",{id:"input-avatar",type:"url",className:"popup__input popup__input_type_avatar",minLength:"2",name:"popup_avatar",autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(n.jsx)("span",{id:"input-avatar-error",className:"popup__input-error"})]})}),Object(n.jsx)(x,{card:v,onClose:y}),Object(n.jsx)(f,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.b4e3c701.chunk.js.map