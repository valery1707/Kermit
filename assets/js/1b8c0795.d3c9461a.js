"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[710],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),g=a,h=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:27},o="Crash Reporting",s={unversionedId:"crashreporting/index",id:"crashreporting/index",title:"Crash Reporting",description:'Crash reporting is primarily handled with CrashKiOS. Kermit provides LogWriter instances to write breadcrumb/log statements to the crash reporting tools, and sending soft "handled" exceptions when Throwable instances are logged, based on configuration.',source:"@site/docs/crashreporting/index.md",sourceDirName:"crashreporting",slug:"/crashreporting/",permalink:"/docs/crashreporting/",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/crashreporting/index.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1677950217,formattedLastUpdatedAt:"Mar 4, 2023",sidebarPosition:27,frontMatter:{sidebar_position:27},sidebar:"tutorialSidebar",previous:{title:"Testing",permalink:"/docs/TESTING"},next:{title:"Crashlytics",permalink:"/docs/crashreporting/CRASHLYTICS"}},l={},p=[{value:"Crashlytics",id:"crashlytics",level:2},{value:"Bugsnag",id:"bugsnag",level:2},{value:"Configuring crash log writers",id:"configuring-crash-log-writers",level:2},{value:"<code>minSeverity: Severity</code>",id:"minseverity-severity",level:3},{value:"<code>minCrashSeverity: Severity?</code>",id:"mincrashseverity-severity",level:3},{value:"<code>messageStringFormatter: MessageStringFormatter</code>",id:"messagestringformatter-messagestringformatter",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"crash-reporting"},"Crash Reporting"),(0,a.kt)("p",null,"Crash reporting is primarily handled with ",(0,a.kt)("a",{parentName:"p",href:"https://crashkios.touchlab.co/"},"CrashKiOS"),". Kermit provides ",(0,a.kt)("inlineCode",{parentName:"p"},"LogWriter"),' instances to write breadcrumb/log statements to the crash reporting tools, and sending soft "handled" exceptions when ',(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," instances are logged, based on configuration."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Earlier versions of Kermit implemented crash reporting directly, but logging and crash reporting are really different domains. Crash reporting support was moved back into CrashKiOS, and Kermit simply provides a logging interface into those tools.")),(0,a.kt)("p",null,"Kermit and CrashKiOS currently support ",(0,a.kt)("a",{parentName:"p",href:"https://firebase.google.com/"},"Firebase Crashlytics")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.bugsnag.com/"},"Bugsnag"),"."),(0,a.kt)("h2",{id:"crashlytics"},"Crashlytics"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"CRASHLYTICS"},"Crashlytics Setup")),(0,a.kt)("h2",{id:"bugsnag"},"Bugsnag"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"BUGSNAG"},"Bugsnag Setup")),(0,a.kt)("h2",{id:"configuring-crash-log-writers"},"Configuring crash log writers"),(0,a.kt)("p",null,"Both crash ",(0,a.kt)("inlineCode",{parentName:"p"},"LogWriter")," implementations take 3 parameters:"),(0,a.kt)("h3",{id:"minseverity-severity"},(0,a.kt)("inlineCode",{parentName:"h3"},"minSeverity: Severity")),(0,a.kt)("p",null,"This is the minimum severity that will be logged to the crash reporter's breadcrumb cache. The default severity is ",(0,a.kt)("inlineCode",{parentName:"p"},"Info"),". That means ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Verbose")," statements will be ignored."),(0,a.kt)("h3",{id:"mincrashseverity-severity"},(0,a.kt)("inlineCode",{parentName:"h3"},"minCrashSeverity: Severity?")),(0,a.kt)("p",null,"All log statements can take a ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable"),". If you send a ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," to a crash ",(0,a.kt)("inlineCode",{parentName:"p"},"LogWriter"),", if the log statement itself is equal to or above ",(0,a.kt)("inlineCode",{parentName:"p"},"minCrashSeverity"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," will be sent as a soft/handled exception."),(0,a.kt)("p",null,"The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"Warn"),", so all log statements with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable"),", with log severity of ",(0,a.kt)("inlineCode",{parentName:"p"},"Warn")," or higher, will create an exception report."),(0,a.kt)("p",null,"To disable sending exception reports, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,a.kt)("h3",{id:"messagestringformatter-messagestringformatter"},(0,a.kt)("inlineCode",{parentName:"h3"},"messageStringFormatter: MessageStringFormatter")),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/MESSAGE_FORMATTING"},"Message Formatting")," for details of how to format log message strings. ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultFormatter")," is the default value."))}d.isMDXComponent=!0}}]);