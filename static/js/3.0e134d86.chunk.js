(this["webpackJsonpmy-project-react"]=this["webpackJsonpmy-project-react"]||[]).push([[3],{289:function(e,t,a){"use strict";var s=a(52),n=a(53),r=a(55),o=a(54),i=a(0),c=a.n(i),u=a(30),l=a(20),p=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){var t=function(t){Object(r.a)(i,t);var a=Object(o.a)(i);function i(){return Object(s.a)(this,i),a.apply(this,arguments)}return Object(n.a)(i,[{key:"render",value:function(){return this.props.isAuth?c.a.createElement(e,this.props):c.a.createElement(u.a,{to:"/login"})}}]),i}(c.a.Component);return Object(l.b)(p)(t)}},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var s=a(93);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],s=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(s=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);s=!0);}catch(c){n=!0,r=c}finally{try{s||null==i.return||i.return()}finally{if(n)throw r}}return a}}(e,t)||Object(s.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},292:function(e,t,a){e.exports={avatar:"Description_avatar__1ooIX",description:"Description_description__2IOa8",item:"Description_item__1Yqut",name:"Description_name__2LmLN",key:"Description_key__h-8G2",avatarImg:"Description_avatarImg__1p5IC"}},293:function(e,t,a){e.exports={post:"Post_post__17260",postItem:"Post_postItem__31BkN",quality:"Post_quality__1Uqxs"}},294:function(e,t,a){e.exports={posts:"Posts_posts__2pRkV",postItems:"Posts_postItems__1Rpgr"}},295:function(e,t,a){e.exports={sendMsg:"SendPost_sendMsg__vQ7oz"}},309:function(e,t,a){"use strict";a.r(t);var s=a(52),n=a(53),r=a(55),o=a(54),i=a(0),c=a.n(i),u=a(20),l=a(30),p=a(8),m=a(92),f=a(292),d=a.n(f),h=a(91),v=a(291),b=function(e){var t=Object(i.useState)(!1),a=Object(v.a)(t,2),s=a[0],n=a[1],r=Object(i.useState)(e.status),o=Object(v.a)(r,2),u=o[0],l=o[1];Object(i.useEffect)((function(){l(e.status)}),[e.status]);return c.a.createElement("div",null,!s&&c.a.createElement("div",null,c.a.createElement("span",{onClick:function(){n(!0)}},e.status||"---")),s&&c.a.createElement("div",null,c.a.createElement("input",{onBlur:function(){n(!1),e.updateUserStatus(u)},onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,value:u})))};var E=function(e){if(!e.profile)return c.a.createElement(h.a,null);var t=Object.entries(e.profile.contacts).map((function(e){return e[1]&&c.a.createElement("a",{className:d.a.contact,href:"https://"+e[1]}," ",e[0]," ")}));return c.a.createElement("div",{className:d.a.avatar},c.a.createElement("div",{className:d.a.avatarImg},c.a.createElement("img",{src:e.profile.photos.large||"https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"})),c.a.createElement("div",{className:d.a.description},c.a.createElement("div",{className:d.a.item},c.a.createElement("div",{className:d.a.name},"Name: "),c.a.createElement("div",{className:d.a.key},e.profile.fullName)),c.a.createElement("div",{className:d.a.item},c.a.createElement("div",{className:d.a.name},"Status: "),c.a.createElement("div",{className:d.a.key},c.a.createElement(b,{status:e.status,updateUserStatus:e.updateUserStatus}))),c.a.createElement("div",{className:d.a.item},c.a.createElement("div",{className:d.a.name},"Contacts: "),c.a.createElement("div",{className:d.a.key},t)),c.a.createElement("div",{className:d.a.item},c.a.createElement("div",{className:d.a.name},"LookingForAJob: "),c.a.createElement("div",{className:d.a.key},e.profile.lookingForAJobDescription))))},g=a(289),_=a(293),j=a.n(_);var y=function(e){return c.a.createElement("div",{className:j.a.post},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"}),c.a.createElement("div",{className:j.a.postItem},e.message),c.a.createElement("div",{className:j.a.quality},c.a.createElement("span",null,"Like ",e.like),c.a.createElement("span",null,"Dislike ",e.dislike)))},O=a(294),k=a.n(O),N=a(295),P=a.n(N),S=a(127),I=a(86),U=a(83),D=a(34),w=Object(U.a)(10),A=Object(S.a)({form:"posts"})((function(e){return c.a.createElement("form",{className:P.a.sendMsg,onSubmit:e.handleSubmit},c.a.createElement(I.a,{placeholder:"Your news...",component:D.a,name:"posts",validate:[U.b,w]}),c.a.createElement("button",null,"Send"))})),C=Object(u.b)((function(e){return{newPostText:e.profilePage.newPostText}}),(function(e){return{addpost:function(){e(Object(m.a)())},updateNewPostText:function(t){e(Object(m.e)(t))}}}))(A),x=c.a.memo((function(e){var t=e.postsData.map((function(e){return c.a.createElement(y,{message:e.message,like:e.like,dislike:e.dislike})}));return c.a.createElement("div",{className:k.a.posts},c.a.createElement(C,{onSubmit:function(t){e.sengPost(t.posts)}}),c.a.createElement("span",null,"My Posts"),c.a.createElement("div",{className:k.a.postItems},t))})),T=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,this.props.isFetching?c.a.createElement(h.a,null):null,c.a.createElement(x,{sengPost:this.props.sengPost,postsData:this.props.postsData}))}}]),a}(c.a.Component),q=Object(p.d)(Object(u.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{sengPost:function(t){e(Object(m.a)(t))}}})),g.a)(T),z=function(e){return c.a.createElement("div",null,c.a.createElement(E,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),c.a.createElement(q,{postsData:e.posts}))},F=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(n.a)(a,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizeUserId)||this.props.history.push("/login"),this.props.getProfileTC(e),this.props.getUserStatus(e),this.props.updateUserStatus(this.props.status)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){console.log(this.props),console.log(e),this.props.match.params.userId!=e.authorizeUserId&&this.props.getProfileTC(e.authorizeUserId)}},{key:"render",value:function(){return c.a.createElement(z,{posts:this.props.posts,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus})}}]),a}(c.a.Component);t.default=Object(p.d)(Object(u.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizeUserId:e.auth.id,isAuth:e.auth.isAuth,posts:e.profilePage.posts}}),{getProfileTC:m.c,getUserStatus:m.d,updateUserStatus:m.f}),l.f)(F)}}]);
//# sourceMappingURL=3.0e134d86.chunk.js.map