import{_ as p,r as m,y as v,o as e,c as s,a as n,F as a,b as c,n as f,d as h,t as l,e as j,f as b}from"./index.2ffc4a97.js";const y={data(){return{projects:[]}},async mounted(){(await m(v(h,"projects"))).forEach(o=>{console.log(o.id,o.data()),this.projects.push(o.data())})}},x={class:"tab"},g={class:"line_up"},k={class:"line_up"},B={class:"line_up"},$={class:"line_up"};function D(u,o,_,i,r,d){return e(),s("div",x,[n("div",{class:f(r.projects.statut?"statut_true":"statut_false")},[(e(!0),s(a,null,c(r.projects,t=>(e(),s("div",g,[n("p",null," Nom du projet: "+l(t.name),1)]))),256)),(e(!0),s(a,null,c(r.projects,t=>(e(),s("div",k,[n("p",null," Description: "+l(t.description),1)]))),256)),(e(!0),s(a,null,c(r.projects,t=>(e(),s("div",B,[n("p",null," statut: "+l(t.statut),1)]))),256)),(e(!0),s(a,null,c(r.projects,t=>(e(),s("div",$,[n("p",null," retour du projet: "+l(t.feedbacks),1)]))),256)),n("ul",null,[(e(!0),s(a,null,c(r.projects,t=>(e(),s("li",null," D\xE9veloppeur: "+l(t.developers),1))),256))])],2)])}var S=p(y,[["render",D],["__scopeId","data-v-3942b179"]]);const q={name:"App",components:{tab:S}};function w(u,o,_,i,r,d){const t=j("tab");return e(),b(t)}var E=p(q,[["render",w]]);export{E as default};
