(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{270:(e,s,a)=>{Promise.resolve().then(a.bind(a,2915)),Promise.resolve().then(a.bind(a,3156)),Promise.resolve().then(a.bind(a,9278)),Promise.resolve().then(a.bind(a,2753)),Promise.resolve().then(a.bind(a,9e3)),Promise.resolve().then(a.bind(a,6766)),Promise.resolve().then(a.bind(a,7969))},2915:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});var l=a(5155),n=a(2863),i=a(5565),t=a(9214);function r(){let{t:e}=(0,t.Bd)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{id:"about",className:"py-20 bg-gray-100 text-black",children:(0,l.jsxs)("div",{className:"container mx-auto px-4 flex flex-col md:flex-row items-center",children:[(0,l.jsxs)(n.P.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{duration:.8},className:"md:w-1/2 text-xl text-gray-700 space-y-6",children:[(0,l.jsx)("h2",{className:"text-3xl font-black mb-6",children:e("about_me")}),(0,l.jsx)("p",{className:"mb-4",children:e("about_me_description")}),(0,l.jsx)("p",{className:"mb-4",children:e("about_me_description_2")}),(0,l.jsx)("p",{className:"mb-4",children:e("about_me_description_3")}),(0,l.jsx)(n.P.a,{href:"https://drive.google.com/file/d/1aDUU9n5-bAtFSs8jtni3ShynIjzCv4vq/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.05},whileTap:{scale:.95},className:"bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors inline-block mt-4",children:e("download_resume")})]}),(0,l.jsx)(n.P.div,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},className:"md:w-1/2 flex justify-center",children:(0,l.jsx)("div",{className:"bg-white border border-gray-200 rounded-lg shadow-xl p-6 ml-10 w-fit",children:(0,l.jsx)(i.default,{src:"/images/vinicius.jpeg",alt:"Vin\xedcius Lisboa",width:500,height:500})})})]})})})}},3156:(e,s,a)=>{"use strict";a.d(s,{default:()=>r});var l=a(5155),n=a(9214),i=a(2115),t=a(6367);function r(){let{t:e}=(0,n.Bd)(),[s,a]=(0,i.useState)(!1),[r,c]=(0,i.useState)(!1),[d,o]=(0,i.useState)(!1),[m,x]=(0,i.useState)({name:"",email:"",message:""}),h=async e=>{e.preventDefault(),a(!0),c(!1),o(!1);try{let e=await t.Ay.send("service_i0ycpfg","template_88p9v9r",{from_name:m.name,from_email:m.email,message:m.message,to_email:"viniciuslisboa1001@gmail.com"},"IUxuM6orB8i84GUZ7");console.log("Email enviado!",e.text),c(!0),x({name:"",email:"",message:""})}catch(e){console.error("Erro ao enviar:",e),o(!0)}finally{a(!1)}};return(0,l.jsx)("section",{id:"contact",className:"py-20 bg-gray-50",children:(0,l.jsxs)("div",{className:"container mx-auto px-6 text-center",children:[(0,l.jsx)("h2",{className:"text-4xl md:text-5xl font-black mb-12 text-center",children:e("work_together")}),(0,l.jsx)("p",{className:"text-2xl text-gray-700 pb-12",children:e("have_a_project_in_mind")}),(0,l.jsx)("div",{className:"flex justify-center",children:(0,l.jsxs)("form",{onSubmit:h,className:"flex flex-col gap-4 w-full bg-white md:p-8 border border-gray-200 rounded-lg md:w-1/2",children:[(0,l.jsxs)("div",{className:"flex flex-col gap-2 md:text-left",children:[(0,l.jsx)("label",{htmlFor:"name",className:"text-lg text-gray-700",children:e("name")}),(0,l.jsx)("input",{type:"text",id:"name",name:"name",value:m.name,onChange:e=>x({...m,name:e.target.value}),placeholder:e("name"),className:"border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2 md:text-left",children:[(0,l.jsx)("label",{htmlFor:"email",className:"text-lg text-gray-700",children:e("email")}),(0,l.jsx)("input",{type:"email",id:"email",name:"email",value:m.email,onChange:e=>x({...m,email:e.target.value}),placeholder:e("email"),className:"border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsxs)("div",{className:"flex flex-col gap-2 md:text-left",children:[(0,l.jsx)("label",{htmlFor:"message",className:"text-lg text-gray-700",children:e("message")}),(0,l.jsx)("textarea",{id:"message",name:"message",value:m.message,onChange:e=>x({...m,message:e.target.value}),placeholder:e("message"),className:"border border-gray-300 rounded-md p-2",required:!0})]}),(0,l.jsx)("button",{type:"submit",disabled:s,className:"bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors inline-block mt-4 disabled:bg-gray-400",children:e(s?"sending":"send")}),r&&(0,l.jsx)("div",{className:"mt-4 p-2 bg-green-100 text-green-800 rounded",children:e("message_sent")}),d&&(0,l.jsx)("div",{className:"mt-4 p-2 bg-red-100 text-red-800 rounded",children:e("message_error")})]})})]})})}},9278:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var l=a(5155),n=a(9214);function i(){let{t:e}=(0,n.Bd)();return(0,l.jsxs)("footer",{className:"bg-black py-6 text-center",children:[(0,l.jsxs)("p",{className:"text-gray-400",children:["\xa9 ",new Date().getFullYear()," Vin\xedcius Lisboa. ",e("all_rights_reserved")]}),(0,l.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,l.jsx)("a",{href:"https://www.linkedin.com/in/vin%C3%ADcius-lisboa-6347971a9/",className:"text-gray-400 hover:text-white underline",children:e("linkedin")}),(0,l.jsx)("a",{href:"https://wa.me/5541988073637",className:"text-gray-400 hover:text-white underline",children:e("whatsapp")}),(0,l.jsx)("a",{href:"https://github.com/ViniciusLisboa07",className:"text-gray-400 hover:text-white underline",children:e("github")})]})]})}},2753:(e,s,a)=>{"use strict";a.d(s,{default:()=>u});var l=a(5155),n=a(2115),i=a(2863),t=a(9214),r=a(3768),c=a(3479),d=a(7570);r.Ay.use(c.A).use(d.A).use(t.r9).init({supportedLngs:["en","pt"],fallbackLng:"en",debug:!1,ns:["common"],defaultNS:"common",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},react:{useSuspense:!1}});let o=r.Ay;function m(){let e=e=>{try{o.changeLanguage(e),console.log("Language changed to ".concat(e))}catch(e){console.error("Error changing language:",e)}};return(0,l.jsxs)("div",{className:"flex space-x-2",children:[(0,l.jsx)("button",{className:"px-2 py-1 rounded hover:bg-gray-100 text-black transition-colors",onClick:()=>e("en"),children:"EN"}),(0,l.jsx)("button",{className:"px-2 py-1 rounded hover:bg-gray-100 text-black transition-colors",onClick:()=>e("pt"),children:"PT"})]})}var x=a(8173),h=a.n(x),g=a(8199);function u(){let{t:e}=(0,t.Bd)(),[s,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{a(window.scrollY>50)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,l.jsx)(i.P.header,{className:"fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ".concat(s?"bg-white bg-opacity-90 backdrop-blur-md":"bg-white"),initial:{y:-100},animate:{y:0},transition:{duration:.5},children:(0,l.jsxs)("div",{className:"container mx-auto px-6 py-4 flex justify-between items-center",children:[(0,l.jsx)("div",{className:"flex items-center gap-2",children:(0,l.jsx)("span",{className:"font-bold text-xl",children:"Vinicius Lisboa"})}),(0,l.jsxs)("nav",{className:"hidden md:flex items-center gap-8",children:[(0,l.jsx)(h(),{href:"#about",className:"hover:underline",children:e("about")}),(0,l.jsx)(h(),{href:"#projects",className:"hover:underline",children:e("projects")}),(0,l.jsx)(m,{}),(0,l.jsx)(g.$,{className:"bg-green-600 hover:bg-green-700 text-white rounded-md font-medium",onClick:()=>window.location.href="#contact",children:e("get_in_touch")})]}),(0,l.jsx)(g.$,{className:"md:hidden",variant:"ghost",children:"Menu"})]})})}},9e3:(e,s,a)=>{"use strict";a.d(s,{default:()=>c});var l=a(5155),n=a(2863),i=a(2615),t=a(9214),r=a(8199);function c(){let{t:e}=(0,t.Bd)();return(0,l.jsx)("section",{id:"presentation",className:"h-screen flex flex-col items-center justify-center relative overflow-hidden",children:(0,l.jsx)("div",{className:"px-12 w-full flex justify-center",children:(0,l.jsxs)(n.P.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"max-w-6xl",children:[(0,l.jsxs)("h1",{className:"text-7xl md:text-7xl font-bold mb-4",children:[e("hello")," ",(0,l.jsx)("span",{className:"bg-yellow-300 px-2 py-0.5 font-bold",children:"Vinicius Lisboa"})]}),(0,l.jsxs)("h2",{className:"text-4xl md:text-4xl font-black mb-12",children:[e("i_am"),(0,l.jsx)(i.d,{sequence:[e("developer"),2e3,e("fullstack_developer"),2e3,e("rails_specialist"),2e3],wrapper:"span",speed:50,repeat:Number.POSITIVE_INFINITY,className:"text-gray-400"},e("developer")+e("fullstack_developer")+e("rails_specialist"))]}),(0,l.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4",children:[(0,l.jsx)(r.$,{className:"bg-green-600 hover:bg-green-700 text-white rounded-md font-medium text-lg py-6 px-8",onClick:()=>window.location.href="#projects",children:e("see_my_work")}),(0,l.jsx)(r.$,{className:"border-gray-300 text-gray-700 rounded-md font-medium text-lg py-6 px-8",variant:"outline",onClick:()=>window.location.href="#about",children:e("learn_more")})]})]})})})}a(2115)},6766:(e,s,a)=>{"use strict";a.d(s,{default:()=>t});var l=a(5155),n=a(2863),i=a(9214);function t(){let{t:e}=(0,i.Bd)(),s=[{title:e("agile_deck"),description:e("agile_deck_description"),image:"/images/card-game-656028_1280.jpg",link:"https://github.com/ViniciusLisboa07/agile-deck"},{title:e("nodejs_tts"),description:e("nodejs_tts_description"),image:"/images/microphone-2316268_1280.jpg",link:"https://github.com/ViniciusLisboa07/nodeJS-text-to-speech"},{title:e("lisb"),description:e("lisb_description"),image:"/images/1743724466504.jpeg",link:"https://github.com/ViniciusLisboa07/lisb"},{title:e("condogenius"),description:e("condogenius_description"),image:"/images/condo.jpg",link:"https://github.com/CondoGenius/condogenius"}];return(0,l.jsx)("section",{id:"projects",className:"py-20",children:(0,l.jsxs)("div",{className:"container mx-auto px-4",children:[(0,l.jsxs)("h2",{className:"text-3xl font-bold mb-12",children:[" ",e("projects_title")," "]}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:s.map((s,a)=>(0,l.jsxs)(n.P.div,{initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:.1*a},className:"bg-gray rounded-lg overflow-hidden shadow-lg",children:[(0,l.jsx)("img",{src:s.image||"/placeholder.svg",alt:s.title,className:"w-full h-48 object-cover"}),(0,l.jsxs)("div",{className:"p-6",children:[(0,l.jsx)("h3",{className:"text-xl font-semibold mb-2",children:s.title}),(0,l.jsx)("p",{className:"text-gray-400 mb-4",children:s.description}),(0,l.jsx)("a",{href:s.link,target:"_blank",rel:"noopener noreferrer",className:"inline-block bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors",children:e("view_project")})]})]},a))})]})})}},7969:(e,s,a)=>{"use strict";a.d(s,{default:()=>i});var l=a(5155),n=a(9214);function i(){let{t:e}=(0,n.Bd)();return(0,l.jsx)("section",{id:"toolbox",className:"py-20 bg-gray-100",children:(0,l.jsxs)("div",{className:"container mx-auto px-6",children:[(0,l.jsx)("h2",{className:"text-4xl md:text-5xl font-black mb-12",children:e("toolbox_title")}),(0,l.jsxs)("div",{className:"grid md:grid-cols-3 gap-8",children:[(0,l.jsxs)("div",{className:"bg-white p-8 border border-gray-200 rounded-lg",children:[(0,l.jsx)("h3",{className:"font-bold text-2xl mb-4",children:"Frontend"}),(0,l.jsxs)("ul",{className:"space-y-2",children:[(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"ReactJS"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"HTML5 & CSS3"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"JavaScript & TypeScript"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Tailwind CSS"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Responsive Design"})]})]})]}),(0,l.jsxs)("div",{className:"bg-white p-8 border border-gray-200 rounded-lg",children:[(0,l.jsx)("h3",{className:"font-bold text-2xl mb-4",children:"Backend"}),(0,l.jsxs)("ul",{className:"space-y-2",children:[(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Ruby on Rails"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"RESTful APIs"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"PostgreSQL & MySQL"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Docker"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Clean Code"})]})]})]}),(0,l.jsxs)("div",{className:"bg-white p-8 border border-gray-200 rounded-lg",children:[(0,l.jsx)("h3",{className:"font-bold text-2xl mb-4",children:"Tools & Methods"}),(0,l.jsxs)("ul",{className:"space-y-2",children:[(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Git & GitHub"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Agile Development"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"CI/CD Pipelines"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Testing & QA"})]}),(0,l.jsxs)("li",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"w-2 h-2 bg-green-600 rounded-full"}),(0,l.jsx)("span",{children:"Performance Optimization"})]})]})]})]})]})})}},8199:(e,s,a)=>{"use strict";a.d(s,{$:()=>d});var l=a(5155),n=a(2115),i=a(1027),t=a(3463),r=a(9795);let c=(0,i.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,s)=>{let{className:a,variant:i,size:d,asChild:o=!1,...m}=e,x=o?n.Fragment:"button";return(0,l.jsx)(x,{className:function(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,r.QP)((0,t.$)(s))}(c({variant:i,size:d,className:a})),ref:s,...m})});d.displayName="Button"}},e=>{var s=s=>e(e.s=s);e.O(0,[474,441,517,358],()=>s(270)),_N_E=e.O()}]);