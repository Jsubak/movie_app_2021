(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},63:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(30),s=n.n(a),i=n(0),r=n.n(i),c=(n(39),n(9)),o=n(2),l=(n(40),n(1));var u=function(e){return console.log(e),Object(l.jsx)("div",{className:"about__container",children:Object(l.jsx)("h1",{children:"Hello About!"})})},j=n(19),m=n.n(j),d=n(31),b=n(13),v=n(14),p=n(16),h=n(15),O=n(32),x=n.n(O),y=n(6),f=n.n(y);n(63);function g(e){var t=e.title,n=e.year,a=e.summary,s=e.poster,i=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(c.b,{to:{pathname:"/movie-detail",state:{year:n,title:t,summary:a,poster:s,genres:i}},children:[Object(l.jsx)("img",{src:s,alt:t,title:t}),Object(l.jsxs)("div",{className:"movie-data",children:[Object(l.jsx)("h3",{className:"movie-title",children:t}),Object(l.jsx)("h5",{className:"movie-year",children:n}),Object(l.jsx)("ul",{className:"movie-genres",children:i.map((function(e,t){return Object(l.jsx)("li",{className:"movie=genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie-summary",children:[a.slice(0,180),"..."]})]})]})})}g.ProTypes={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var N=g,_=(n(67),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(m.a.mark((function t(){var n,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loaderText",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return console.log(e),Object(l.jsx)(N,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(r.a.Component));n(68);var k=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(c.b,{to:"/",children:"Home"}),Object(l.jsx)(c.b,{to:"/about",children:"About"})]})},q=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(l.jsx)("span",{children:e.state.title}):null}}]),n}(r.a.Component);var w=function(){return Object(l.jsxs)(c.a,{children:[Object(l.jsx)(k,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(l.jsx)(o.a,{path:"/about",component:u}),Object(l.jsx)(o.a,{path:"/movie-detail",component:q})]})};s.a.render(Object(l.jsx)(w,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.0edb70ba.chunk.js.map