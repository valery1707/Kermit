"use strict";(self.webpackChunktouchlab=self.webpackChunktouchlab||[]).push([[19],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>c});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),d=u(r),c=o,m=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return r?n.createElement(m,l(l({ref:t},g),{},{components:r})):n.createElement(m,l({ref:t},g))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:20},l="LogWriter",a={unversionedId:"details/LOG_WRITER",id:"details/LOG_WRITER",title:"LogWriter",description:"LogWriter takes care of deciding where to log the messages.",source:"@site/docs/details/LOG_WRITER.md",sourceDirName:"details",slug:"/details/LOG_WRITER",permalink:"/docs/details/LOG_WRITER",draft:!1,editUrl:"https://github.com/touchlab/Kermit/tree/main/website/docs/details/LOG_WRITER.md",tags:[],version:"current",lastUpdatedBy:"Kevin Galligan",lastUpdatedAt:1677950217,formattedLastUpdatedAt:"Mar 4, 2023",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Technical Details",permalink:"/docs/details/"},next:{title:"Custom API",permalink:"/docs/details/CUSTOM_API"}},s={},u=[{value:"Prebuilt LogWriters",id:"prebuilt-logwriters",level:3},{value:"Custom LogWriter",id:"custom-logwriter",level:3},{value:"isLoggable",id:"isloggable",level:4}],g={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logwriter"},"LogWriter"),(0,o.kt)("p",null,"LogWriter takes care of deciding where to log the messages."),(0,o.kt)("h3",{id:"prebuilt-logwriters"},"Prebuilt LogWriters"),(0,o.kt)("p",null,"By default ",(0,o.kt)("inlineCode",{parentName:"p"},"Kermit")," provides default ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," for each platform"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CommonWriter")," - Uses println to send logs in Kotlin"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LogcatWriter")," - Uses LogCat to send logs in Android"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"NSLogWriter")," - Uses NSLog to send logs in iOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ConsoleWriter")," - Uses console to log in JS")),(0,o.kt)("p",null,"These can be created and passed into the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logger")," object during initialization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"Logger.setLogWriters(listOf(LogcatWriter(), CommonWriter())\n")),(0,o.kt)("h3",{id:"custom-logwriter"},"Custom LogWriter"),(0,o.kt)("p",null,"If you want to have a custom implementation to send logs to your own server, or a 3rd party tool or simply because default implementation doesn't fit your need, then you would need to extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," class and provide your own instance."),(0,o.kt)("p",null,"For a simple ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," you only need to implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," method, which handles all logs of every Severity."),(0,o.kt)("p",null,"Simple implementation would look like below,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"class YourCustomWriter : LogWriter() {\n\n    override fun log(severity: Severity, message: String, tag: String, throwable: Throwable?) {\n        // Handle logging here\n    }\n}\n")),(0,o.kt)("p",null,"You can optionally override the severity convenience functions if desired."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun v(message: String, tag: String, throwable: Throwable?) {\n    Log.v(tag, message, throwable)\n}\n")),(0,o.kt)("h4",{id:"isloggable"},"isLoggable"),(0,o.kt)("p",null,"Custom loggers may also override ",(0,o.kt)("inlineCode",{parentName:"p"},"fun isLoggable(severity: Severity): Boolean"),". Kermit will check this value before logging to this LogWriter."),(0,o.kt)("p",null,"Simple example of that would be: If on your Android build, you have your own ",(0,o.kt)("inlineCode",{parentName:"p"},"LogWriter")," and you want to handle logs only on ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," build then you could do that using ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoggable")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"// Custom Implementation\nclass YourCustomWriter(private val shouldLog: Boolean) : LogWriter() {\n\n    override fun isLoggable(severity: Severity): Boolean {\n        return shouldLog\n    }\n\n    override fun log(severity: Severity, message: String, tag: String, throwable: Throwable?) {\n        // Handle logging here\n    }\n}\n\n// Usage \nval logWriter = YourCustomWriter(shouldLog = BuildConfig.DEBUG)\nval logger = Logger(LoggerConfig.default.copy(logWriterList = listOf(logWriter)))\n")))}p.isMDXComponent=!0}}]);