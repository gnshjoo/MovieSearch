(this.webpackJsonpnomfilx=this.webpackJsonpnomfilx||[]).push([[0],{29:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/noPosterSmall.cd867972.png"},77:function(e,t,n){"use strict";n.r(t);var r,a,i,c,s,o,l,u,d,p,j,b,h,g,x,O,m,v,f,y,w,_,k,S,T,R,M,U,C,z,I,P,F=n(1),N=n.n(F),V=n(38),B=n.n(V),D=n(12),A=n(13),L=n(15),q=n(14),J=n(19),E=n(5),H=n(10),K=n.n(H),G=n(17),Q=n(3),W=n(2),X=n(16),Y=n(0),Z=W.c.div(r||(r=Object(Q.a)(["\n    :not(:last-child){\n        margin-bottom: 50px;\n    }\n    \n"]))),$=W.c.span(a||(a=Object(Q.a)(["\n    font-size: 14px;\n    font-weight: 600;\n"]))),ee=W.c.div(i||(i=Object(Q.a)(["\n    margin-top: 25px;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 125px);\n    grid-gap: 20px;\n"]))),te=function(e){var t=e.title,n=e.children;return Object(Y.jsxs)(Z,{children:[Object(Y.jsx)($,{children:t}),Object(Y.jsx)(ee,{children:n})]})},ne=W.c.div(c||(c=Object(Q.a)(["\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    font-size: 50px;\n    margin-top: 20px;\n"]))),re=function(){return Object(Y.jsx)(ne,{children:Object(Y.jsx)("span",{role:"img","aria-label":"Loading",children:"\u23f0"})})},ae=W.c.div(s||(s=Object(Q.a)(["\n    width:100%;\n    display: flex;\n    justify-content: center;\n\n"]))),ie=W.c.span(o||(o=Object(Q.a)(["\n    color : ",";\n    font-weight: 600;  \n    font-size: 22px;\n"])),(function(e){return e.color})),ce=function(e){var t=e.text,n=e.color;return Object(Y.jsx)(ae,{children:Object(Y.jsx)(ie,{color:n,children:t})})},se=W.c.div(l||(l=Object(Q.a)(["\n    font-size:12px;\n"]))),oe=W.c.div(u||(u=Object(Q.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  background-position: center center;\n  transition: opacity 0.1s linear;\n"])),(function(e){return e.bgUrl})),le=W.c.span(d||(d=Object(Q.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n  transition: opacity 0.1s linear;\n"]))),ue=W.c.div(p||(p=Object(Q.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),oe,le),de=W.c.span(j||(j=Object(Q.a)(["\n  display: block;\n  margin-bottom: 3px;\n"]))),pe=W.c.span(b||(b=Object(Q.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.5);\n"]))),je=function(e){var t=e.id,r=e.imageUrl,a=e.title,i=e.year,c=e.rating,s=e.isMovie,o=void 0!==s&&s;return Object(Y.jsx)(J.b,{to:o?"/movie/".concat(t):"/show/".concat(t),children:Object(Y.jsxs)(se,{children:[Object(Y.jsxs)(ue,{children:[Object(Y.jsx)(oe,{bgUrl:r?"https://image.tmdb.org/t/p/w300".concat(r):n(29)}),Object(Y.jsxs)(le,{children:[Object(Y.jsx)("span",{role:"img","aria-label":"rating"}),"\ud83c\udf1f",c,"/10"]})]}),Object(Y.jsx)(de,{children:a.length>18?"".concat(a.substring(0,18),"..."):a}),Object(Y.jsx)(pe,{children:i})]})})},be=W.c.div(h||(h=Object(Q.a)(["\n    padding: 20px;\n"]))),he=function(e){var t=e.nowPlaying,n=e.popular,r=e.upComing,a=e.loading,i=e.error;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Moives | Nomflix"})}),a?Object(Y.jsx)(re,{}):Object(Y.jsxs)(be,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Now Playing",children:t.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(Y.jsx)(te,{title:"Upcoming Movies",children:r.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"Popular Movies",children:n.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date.substring(0,4)},e.id)}))}),i&&Object(Y.jsx)(ce,{color:"#e74c3c",text:i})]})]})},ge=n(44),xe=n.n(ge).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"3a4c8ca7b4e36850b8eb457138943222",language:"ko-KR"}}),Oe=function(){return xe.get("movie/now_playing")},me=function(){return xe.get("movie/upcoming")},ve=function(){return xe.get("movie/popular")},fe=function(e){return xe.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ye=function(e){return xe.get("search/movie",{params:{query:encodeURIComponent(e)}})},we=function(){return xe.get("tv/top_rated")},_e=function(){return xe.get("tv/popular")},ke=function(){return xe.get("tv/airing_today")},Se=function(e){return xe.get("tv/".concat(e),{params:{append_to_response:"videos"}})},Te=function(e){return xe.get("search/tv",{params:{query:encodeURIComponent(e)}})},Re=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(G.a)(K.a.mark((function e(){var t,n,r,a,i,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe();case 3:return t=e.sent,n=t.data.results,e.next=7,me();case 7:return r=e.sent,a=r.data.results,e.next=11,ve();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,upComing:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movie information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case 23:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upComing,r=e.popular,a=e.error,i=e.loading;return Object(Y.jsx)(he,{nowPlaying:t,upComing:n,popular:r,error:a,loading:i})}}]),n}(N.a.Component),Me=W.c.div(g||(g=Object(Q.a)(["\n  padding: 20px;\n"]))),Ue=W.c.form(x||(x=Object(Q.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]))),Ce=W.c.input(O||(O=Object(Q.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]))),ze=function(e){var t=e.movieResults,n=e.tvResults,r=e.loading,a=e.searchTerm,i=e.handleSubmit,c=e.error,s=e.updateTerm;return Object(Y.jsxs)(Me,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Search | nomflix"})}),Object(Y.jsx)(Ue,{onSubmit:i,children:Object(Y.jsx)(Ce,{placeholder:"Search Movies or TV Shows...",value:a,onChange:s})}),r?Object(Y.jsx)(re,{}):Object(Y.jsxs)(Y.Fragment,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Movie Results",children:t.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.title,imageUrl:e.poster_path,isMovie:!0,rating:e.vote_average,year:e.release_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"TV Show Results",children:n.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))})]}),c&&Object(Y.jsx)(ce,{color:"#e74c3c",text:c}),t&&n&&0===n.length&&0===t.length&&Object(Y.jsx)(ce,{text:"Noting Found",color:"#95a5a6"})]})},Ie=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieResults:null,tvResults:null,searchTerm:"",loading:!1,error:null},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.searchTerm&&e.searchByTerm()},e.updateTerm=function(t){var n=t.target.value;e.setState({searchTerm:n})},e.searchByTerm=Object(G.a)(K.a.mark((function t(){var n,r,a,i,c;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.searchTerm,e.setState({loading:!0}),t.prev=2,t.next=5,ye(n);case 5:return r=t.sent,a=r.data.results,t.next=9,Te(n);case 9:i=t.sent,c=i.data.results,e.setState({movieResults:a,tvResults:c}),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),e.setState({error:"Can't find results."});case 17:return t.prev=17,e.setState({loading:!1}),t.finish(17);case 20:case"end":return t.stop()}}),t,null,[[2,14,17,20]])}))),e}return Object(A.a)(n,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,r=e.searchTerm,a=e.loading,i=e.error;return Object(Y.jsx)(ze,{movieResults:t,tvResults:n,loading:a,error:i,searchTerm:r,handleSubmit:this.handleSubmit,updateTerm:this.updateTerm})}}]),n}(N.a.Component),Pe=W.c.div(m||(m=Object(Q.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Fe=W.c.div(v||(v=Object(Q.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Ne=W.c.div(f||(f=Object(Q.a)(["\n  display: flex;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n"]))),Ve=W.c.div(y||(y=Object(Q.a)(["\n  width: 30%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  height: 100%;\n  border-radius: 5px;\n"])),(function(e){return e.bgImage})),Be=W.c.div(w||(w=Object(Q.a)(["\n    width: 70%;\n    margin-left: 10px;\n"]))),De=W.c.h3(_||(_=Object(Q.a)(["\n    font-size: 32px;\n"]))),Ae=W.c.div(k||(k=Object(Q.a)(["\n    margin: 20px 0;\n"]))),Le=W.c.span(S||(S=Object(Q.a)([""]))),qe=W.c.span(T||(T=Object(Q.a)(["\n    margin: 0 10px;\n"]))),Je=W.c.p(R||(R=Object(Q.a)(["\n    font-size: 12px;\n    opacity: 0.7;\n    line-height: 2;\n    width: 60%;\n\n"]))),Ee=function(e){var t=e.result,r=e.loading;e.error;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"Loading | Nomflix"})}),r?Object(Y.jsx)(re,{}):Object(Y.jsxs)(Pe,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:t.title?t.title:t.name})}),Object(Y.jsx)(Fe,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),Object(Y.jsxs)(Ne,{children:[Object(Y.jsx)(Ve,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(29)}),Object(Y.jsxs)(Be,{children:[Object(Y.jsx)(De,{children:t.title?t.title:t.name}),Object(Y.jsxs)(Ae,{children:[Object(Y.jsx)(Le,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(Y.jsx)(qe,{children:"|"}),Object(Y.jsxs)(Le,{children:[t.runtime?t.runtime:t.episode_run_time[0],"mins"]}),Object(Y.jsx)(qe,{children:"|"}),Object(Y.jsx)(Le,{children:t.genres&&t.genres.map((function(e,n){return n+1===t.genres.length?e.name:" ".concat(e.name," / ")}))})]}),Object(Y.jsx)(Je,{children:t.overview})]})]})]})]})},He=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(e){var r;Object(D.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/")},r}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(G.a)(K.a.mark((function e(){var t,n,r,a,i,c,s,o;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,r=t.history.push,a=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",r("/"));case 5:if(c=null,e.prev=6,!a){e.next=14;break}return e.next=10,fe(i);case 10:s=e.sent,c=s.data,e.next=18;break;case 14:return e.next=16,Se(i);case 16:o=e.sent,c=o.data;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(6),this.setState({error:"Can't find anything."});case 23:return e.prev=23,this.setState({loading:!1,result:c}),e.finish(23);case 26:case"end":return e.stop()}}),e,this,[[6,20,23,26]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,r=e.loading;return Object(Y.jsx)(Ee,{result:t,error:n,loading:r})}}]),n}(N.a.Component),Ke=W.c.div(M||(M=Object(Q.a)(["\n    padding: 0px 100px;\n"]))),Ge=function(e){var t=e.topRated,n=e.popular,r=e.airingToday,a=e.loading,i=e.error;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(X.a,{children:Object(Y.jsx)("title",{children:"TVs | Nomflix"})}),a?Object(Y.jsx)(re,{}):Object(Y.jsxs)(Ke,{children:[t&&t.length>0&&Object(Y.jsx)(te,{title:"Top Rated TV Shows",children:t.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),r&&r.length>0&&Object(Y.jsx)(te,{title:"Upcoming TV Shows",children:r.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),n&&n.length>0&&Object(Y.jsx)(te,{title:"Popular TV Shows",children:n.map((function(e){return Object(Y.jsx)(je,{id:e.id,title:e.name,imageUrl:e.poster_path,isMovie:!1,rating:e.vote_average,year:e.first_air_date.substring(0,4)},e.id)}))}),i&&Object(Y.jsx)(ce,{color:"#e74c3c",text:i})]})]})},Qe=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,airingToday:null,popular:null,error:null,loading:!0},e}return Object(A.a)(n,[{key:"componentDidMount",value:function(){var e=Object(G.a)(K.a.mark((function e(){var t,n,r,a,i,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,we();case 3:return t=e.sent,n=t.data.results,e.next=7,ke();case 7:return r=e.sent,a=r.data.results,e.next=11,_e();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,airingToday:a,popular:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find tv information."});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case 23:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(Y.jsx)(Ge,{topRated:t,airingToday:n,popular:r,error:a,loading:i})}}]),n}(N.a.Component),We=W.c.header(U||(U=Object(Q.a)(["\n    color: white;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    padding: 0px 10px;\n    background-color: rgba(20, 20, 20, 0.8);\n    box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);\n"]))),Xe=W.c.ul(C||(C=Object(Q.a)(["\n    display:flex;\n"]))),Ye=W.c.li(z||(z=Object(Q.a)(["\n    width: 80px;\n    height: 50px;\n    text-align: center;\n    border-bottom: 3px solid ",";\n    transition: border-bottom 0.5s ease-in-out;\n"])),(function(e){return e.current?"#3498db":"transparent"})),Ze=Object(W.c)(J.b)(I||(I=Object(Q.a)(["\n    height: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),$e=Object(E.g)((function(e){var t=e.location.pathname;return Object(Y.jsx)(We,{children:Object(Y.jsxs)(Xe,{children:[Object(Y.jsx)(Ye,{current:"/"===t,children:Object(Y.jsx)(Ze,{to:"/",children:"Moives"})}),Object(Y.jsx)(Ye,{current:"/tv"===t,children:Object(Y.jsx)(Ze,{to:"/tv",children:"TV"})}),Object(Y.jsx)(Ye,{current:"/search"===t,children:Object(Y.jsx)(Ze,{to:"/search",children:"Search"})})]})})})),et=function(){return Object(Y.jsx)(J.a,{children:Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)($e,{}),Object(Y.jsxs)(E.d,{children:[Object(Y.jsx)(E.b,{path:"/",exact:!0,component:Re}),Object(Y.jsx)(E.b,{path:"/tv",component:Qe}),Object(Y.jsx)(E.b,{path:"/search",component:Ie}),Object(Y.jsx)(E.b,{path:"/movie/:id",component:He}),Object(Y.jsx)(E.b,{path:"/show/:id",component:He}),Object(Y.jsx)(E.a,{from:"*",to:"/"})]})]})})},tt=n(45),nt=Object(W.a)(P||(P=Object(Q.a)(["\n    ",";\n    a {\n        text-decoration:none;\n        color:inherit;\n    }\n    *{\n        box-sizing: border-box;\n    }\n    body{\n        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n        font-size:14px;\n        background-color:rgba(20, 20, 20, 1);\n        color: white;\n        padding-top: 50px;\n    }\n"])),tt.a),rt=function(e){Object(L.a)(n,e);var t=Object(q.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(et,{}),Object(Y.jsx)(nt,{})]})}}]),n}(F.Component);B.a.render(Object(Y.jsx)(rt,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.24756421.chunk.js.map