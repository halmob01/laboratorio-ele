// Motore originale (prima della separazione), estratto alla lettera da index.html.
// Serve solo come riferimento nei test di equivalenza: non modificare.
const COLORS={
  marrone:{n:'Marrone',base:'#8A5224'},
  nero:{n:'Nero',base:'#222222'},
  grigio:{n:'Grigio',base:'#9AA3A0'},
  blu:{n:'Blu',base:'#3D9BE9'},
  gv:{n:'Giallo-verde',base:'#E4C400',dash:'#2E8B3D'}
};
const PHASE_OK=['marrone','nero','grigio'];
const T=(f,s,l,n)=>({f,s,l,n});
const SRC=lv=>lv.src||{F:'Q.F',N:'Q.N',PE:'Q.PE'};
const LEVELS=[
{n:1,name:'Presa',title:'La presa di corrente',
 goal:'Collega la presa al quadro con i tre fili giusti, poi dai corrente con la levetta del quadro. La lampada sul tavolo deve accendersi.',
 loadName:'La lampada',
 comps:[
  {id:'Q',type:'quadro',short:'Quadro',title:'Quadro elettrico',x:20,y:0,w:380,h:100,terms:{F:T(.2,'b','FASE'),PE:T(.5,'b','TERRA'),N:T(.8,'b','NEUTRO')}},
  {id:'P',type:'presa',short:'Presa',title:'Presa bipasso 10/16 A',x:110,y:170,w:200,h:120,terms:{L:T(.2,'t','L'),PE:T(.5,'t','PE'),N:T(.8,'t','N')}}
 ],
 controls:[],load:['P.L','P.N'],earth:['Q.PE','P.PE'],pol:'P.L',room:'tavolo',
 solution:[['Q.F','P.L','marrone'],['Q.N','P.N','blu'],['Q.PE','P.PE','gv']],
 hints:['Il marrone è la fase: va dal quadro al morsetto L della presa.','Il blu è il neutro: va dal quadro al morsetto N della presa.','Il giallo-verde è la terra: va al morsetto PE, quello al centro.']},
{n:2,name:'Interrotto',title:'Punto luce interrotto',
 goal:'Accendi e spegni la lampada con un interruttore. L’interruttore interrompe la fase, mai il neutro.',
 loadName:'La lampada',
 comps:[
  {id:'Q',type:'quadro',short:'Quadro',title:'Quadro elettrico',x:20,y:0,w:380,h:100,terms:{N:T(.12,'b','NEUTRO'),F:T(.8,'b','FASE')}},
  {id:'S',type:'sw',short:'Interruttore',title:'Interruttore',x:190,y:140,w:210,h:120,terms:{a:T(.5,'t','1'),b:T(.5,'b','2')},plate:{x:344,y:122,l:'Parete'}},
  {id:'L',type:'lamp',short:'Lampada',title:'Portalampada',x:190,y:300,w:210,h:90,terms:{B:T(.25,'t','B'),A:T(.75,'t','A')}}
 ],
 controls:['S'],load:['L.A','L.B'],room:'soffitto',
 solution:[['Q.F','S.a','marrone'],['S.b','L.A','marrone'],['Q.N','L.B','blu']],
 hints:['Parti dalla fase: dal quadro va all’interruttore, non direttamente alla lampada.','Dall’altro morsetto dell’interruttore il filo va a un morsetto della lampada.','Il neutro (blu) va dal quadro all’altro morsetto della lampada, senza passare dall’interruttore.']},
{n:3,name:'Deviato',title:'Punto luce deviato',
 goal:'Comanda la stessa lampada da due punti con due deviatori. Premendo uno qualsiasi dei due, la luce deve cambiare.',
 loadName:'La lampada',
 comps:[
  {id:'Q',type:'quadro',short:'Quadro',title:'Quadro elettrico',x:20,y:0,w:380,h:100,terms:{N:T(.12,'b','NEUTRO'),F:T(.8,'b','FASE')}},
  {id:'D1',type:'dev',short:'Deviatore A',title:'Deviatore A',x:190,y:140,w:210,h:115,terms:{C:T(.5,'t','C'),'1':T(.28,'b','1'),'2':T(.72,'b','2')},plate:{x:56,y:122,l:'Ingresso'}},
  {id:'D2',type:'dev',flip:true,short:'Deviatore B',title:'Deviatore B',x:190,y:290,w:210,h:115,terms:{'1':T(.28,'t','1'),'2':T(.72,'t','2'),C:T(.5,'b','C')},plate:{x:344,y:122,l:'Fondo'}},
  {id:'L',type:'lamp',short:'Lampada',title:'Portalampada',x:190,y:440,w:210,h:90,terms:{B:T(.25,'t','B'),A:T(.75,'t','A')}}
 ],
 controls:['D1','D2'],load:['L.A','L.B'],room:'soffitto',
 solution:[['Q.F','D1.C','marrone'],['D1.1','D2.1','nero'],['D1.2','D2.2','grigio'],['D2.C','L.A','marrone'],['Q.N','L.B','blu']],
 hints:['La fase entra nel morsetto C (comune) del primo deviatore.','I morsetti 1 e 2 del primo deviatore vanno a 1 e 2 del secondo: 1 con 1 e 2 con 2.','Il comune C del secondo deviatore va alla lampada. Il neutro va dal quadro alla lampada, senza passare dai deviatori.']},
{n:4,name:'Invertito',title:'Punto luce invertito',
 goal:'Aggiungi un terzo punto di comando in mezzo, con l’invertitore. Premendo uno qualsiasi dei tre, la luce deve cambiare.',
 loadName:'La lampada',
 comps:[
  {id:'Q',type:'quadro',short:'Quadro',title:'Quadro elettrico',x:20,y:0,w:380,h:100,terms:{N:T(.12,'b','NEUTRO'),F:T(.8,'b','FASE')}},
  {id:'D1',type:'dev',short:'Deviatore A',title:'Deviatore A',x:190,y:140,w:210,h:112,terms:{C:T(.5,'t','C'),'1':T(.28,'b','1'),'2':T(.72,'b','2')},plate:{x:56,y:122,l:'Ingresso'}},
  {id:'I',type:'inv',short:'Invertitore',title:'Invertitore',x:190,y:286,w:210,h:112,terms:{'1':T(.28,'t','1'),'2':T(.72,'t','2'),'3':T(.28,'b','3'),'4':T(.72,'b','4')},plate:{x:200,y:122,l:'Camera'}},
  {id:'D2',type:'dev',flip:true,short:'Deviatore B',title:'Deviatore B',x:190,y:432,w:210,h:112,terms:{'1':T(.28,'t','1'),'2':T(.72,'t','2'),C:T(.5,'b','C')},plate:{x:344,y:122,l:'Fondo'}},
  {id:'L',type:'lamp',short:'Lampada',title:'Portalampada',x:190,y:578,w:210,h:90,terms:{B:T(.25,'t','B'),A:T(.75,'t','A')}}
 ],
 controls:['D1','I','D2'],load:['L.A','L.B'],room:'soffitto',
 solution:[['Q.F','D1.C','marrone'],['D1.1','I.1','nero'],['D1.2','I.2','grigio'],['I.3','D2.1','nero'],['I.4','D2.2','grigio'],['D2.C','L.A','marrone'],['Q.N','L.B','blu']],
 hints:['È come la deviata, ma in mezzo ai due fili di collegamento metti l’invertitore.','I morsetti 1 e 2 del deviatore A vanno ai morsetti 1 e 2 (in alto) dell’invertitore.','Dai morsetti 3 e 4 (in basso) dell’invertitore, due fili vanno a 1 e 2 del deviatore B. Il comune C del B va alla lampada.']}
];
function buildFull(base){
  const lv=JSON.parse(JSON.stringify(base));
  const pos=base.n===1?{F:.08,PE:.28,N:.48}:{N:.08,F:.28,PE:.48};
  const nm={F:'FASE',N:'NEUTRO',PE:'TERRA'};
  const K={id:'K',type:'cont',short:'Contatore',title:'Contatore',x:20,y:0,w:380,h:96,terms:{}};
  const Q={id:'Q',type:'quadro',full:true,bx:.78,short:'Quadro',title:'Quadro elettrico',x:20,y:140,w:380,h:130,terms:{}};
  Object.keys(pos).forEach(k=>{
    K.terms[k]=T(pos[k],'b',nm[k],nm[k]);
    Q.terms[k+'i']=T(pos[k],'t',nm[k],nm[k]+' (ingresso)');
    if(k!=='PE'||base.n===1)Q.terms[k]=T(pos[k],'b',nm[k],nm[k]+' (uscita)');
  });
  const others=lv.comps.filter(c=>c.id!=='Q');
  const shift=(Q.y+Q.h+44)-Math.min(...others.map(c=>c.y));
  others.forEach(c=>c.y+=shift);
  lv.comps=[K,Q].concat(others);
  lv.src={F:'K.F',N:'K.N',PE:'K.PE'};lv.full=true;
  lv.solution=[['K.F','Q.Fi','marrone'],['K.N','Q.Ni','blu'],['K.PE','Q.PEi','gv']].concat(base.solution);
  if(lv.earth)lv.earth=['K.PE',lv.earth[1]];else lv.mustEarth=['K.PE','Q.PEi'];
  lv.hints=['Parti dal contatore: la fase (marrone) va al morsetto FASE in alto sul quadro, il neutro (blu) al NEUTRO, la terra (giallo-verde) alla TERRA. Sono i morsetti in ingresso, quelli in alto.'].concat(base.hints);
  lv.goal=base.goal+' Parti dal contatore: collega anche i tre fili che portano la corrente fino al quadro.';
  return lv;
}
function makeUF(){const p={};function f(x){if(p[x]===undefined)p[x]=x;while(p[x]!==x){p[x]=p[p[x]];x=p[x];}return x}function u(a,b){p[f(a)]=f(b)}return{f,u}}
function contacts(c,st){
  if(c.type==='quadro')return c.full?[['Fi','F'],['Ni','N'],['PEi','PE']]:[];
  if(c.type==='sw')return st?[['a','b']]:[];
  if(c.type==='dev')return [['C',st?'2':'1']];
  if(c.type==='inv')return st?[['1','4'],['2','3']]:[['1','3'],['2','4']];
  return [];
}
function sim(lv,wires,states){
  const uf=makeUF();
  wires.forEach(w=>uf.u(w.a,w.b));
  lv.comps.forEach(c=>contacts(c,states[c.id]||0).forEach(([a,b])=>uf.u(c.id+'.'+a,c.id+'.'+b)));
  return uf;
}
function analyse(lv,wires,states){
  const uf=sim(lv,wires,states);
  const sr=SRC(lv);const F=uf.f(sr.F),N=uf.f(sr.N),PE=uf.f(sr.PE);
  let fault=null;
  if(F===N)fault='corto';else if(F===PE)fault='faseterra';
  const a=uf.f(lv.load[0]),b=uf.f(lv.load[1]);
  const lit=!fault&&((a===F&&b===N)||(a===N&&b===F));
  return{uf,F,N,PE,fault,lit,a,b};
}
function tname(lv,tid){
  const [cid,id]=tid.split('.');const c=lv.comps.find(k=>k.id===cid);
  return c.short+' · '+(c.terms[id].n||c.terms[id].l);
}
function evaluate(lv,wires){
  const ctl=lv.controls,combos=[];
  for(let m=0;m<(1<<ctl.length);m++){const st={};ctl.forEach((id,i)=>st[id]=(m>>i)&1);combos.push(st);}
  const res=combos.map(st=>analyse(lv,wires,st));
  const out={work:{ok:false,msgs:[]},color:{ok:false,msgs:[]},safe:{ok:false,msgs:[]}};
  const name=id=>{const c=lv.comps.find(k=>k.id===id);const t=c.short[0].toLowerCase()+c.short.slice(1);return (c.type==='dev'?'Il ':'L\u2019')+t;};
  if(!wires.length){
    out.work.msgs.push('Non hai ancora collegato nessun filo.');
    out.color.msgs.push('Collega prima qualche filo.');
    out.safe.msgs.push('Si controlla quando il circuito funziona.');
    out.stars=0;out.pass=false;return out;
  }
  /* funziona */
  const faults=res.filter(r=>r.fault);
  if(faults.length){
    out.work.msgs.push(faults[0].fault==='corto'?'Cortocircuito: la fase arriva al neutro attraverso i fili. Il magnetotermico scatta.':'La fase è finita sul filo di terra: scatta il differenziale.');
  }else if(!ctl.length){
    if(res[0].lit){out.work.ok=true;out.work.msgs.push('Dai corrente: la lampada si accende.');}
    else{
      const r=res[0];
      const anyF=r.a===r.F||r.b===r.F,anyN=r.a===r.N||r.b===r.N;
      if(!anyF)out.work.msgs.push('Alla presa non arriva la fase.');
      if(!anyN)out.work.msgs.push('Alla presa non arriva il neutro.');
      if(anyF&&anyN)out.work.msgs.push('Fase e neutro arrivano alla presa, ma non ai morsetti giusti.');
    }
  }else{
    const anyLit=res.some(r=>r.lit);
    if(!anyLit){
      const anyF=res.some(r=>r.a===r.F||r.b===r.F),anyN=res.some(r=>r.a===r.N||r.b===r.N);
      out.work.msgs.push(lv.loadName+' non si accende mai.');
      if(!anyF)out.work.msgs.push('Alla lampada non arriva mai la fase.');
      if(!anyN)out.work.msgs.push('Alla lampada non arriva il neutro.');
    }else{
      let allGood=true;
      ctl.forEach((id,i)=>{
        let flips=0;
        combos.forEach((st,m)=>{if(res[m].lit!==res[m^(1<<i)].lit)flips++;});
        if(flips===0){allGood=false;out.work.msgs.push(name(id)+' non comanda la lampada: cambiarlo non cambia niente.');}
        else if(flips<combos.length){allGood=false;out.work.msgs.push(name(id)+' comanda la lampada solo con alcune posizioni degli altri comandi.');}
      });
      if(allGood){out.work.ok=true;out.work.msgs.push('Ogni comando cambia la luce, in qualunque posizione si trovino gli altri.');}
    }
  }
  /* colori */
  const uw=makeUF();wires.forEach(w=>uw.u(w.a,w.b));lv.comps.filter(c=>c.type==='quadro').forEach(c=>contacts(c,0).forEach(([a,b])=>uw.u(c.id+'.'+a,c.id+'.'+b)));
  const sr2=SRC(lv);const Fn=uw.f(sr2.F),Nn=uw.f(sr2.N),Pn=uw.f(sr2.PE);
  const bad=[];
  wires.forEach(w=>{
    const k=uw.f(w.a);let role='fase';
    if(k===Nn&&k!==Fn)role='neutro';else if(k===Pn&&k!==Fn)role='terra';
    const okc=role==='neutro'?['blu']:role==='terra'?['gv']:PHASE_OK;
    if(!okc.includes(w.c)){
      const need=role==='neutro'?'blu':role==='terra'?'giallo-verde':'marrone, nero o grigio';
      const rn=role==='neutro'?'del neutro':role==='terra'?'di terra':'di fase';
      bad.push('Il filo '+tname(lv,w.a)+' → '+tname(lv,w.b)+' è un filo '+rn+': deve essere '+need+'.');
    }
  });
  if(!bad.length){out.color.ok=true;out.color.msgs.push(lv.earth?'Fase, neutro e terra hanno i colori giusti.':'Il blu è solo sul neutro, gli altri fili hanno colori da fase.');}
  else{out.color.msgs=bad.slice(0,3);if(bad.length>3)out.color.msgs.push('E altri '+(bad.length-3)+' fili con il colore sbagliato.');}
  /* sicurezza */
  if(!out.work.ok){out.safe.msgs.push('Si controlla quando il circuito funziona.');}
  else{
    const r0=res[0];let ok=true;
    if(lv.full&&(r0.uf.f('Q.Fi')===r0.N||r0.uf.f('Q.Ni')===r0.F)){ok=false;out.safe.msgs.push('Fase e neutro sono invertiti tra contatore e quadro.');}
    if(lv.earth){
      if(r0.uf.f(lv.earth[1])!==r0.uf.f(lv.earth[0])){ok=false;out.safe.msgs.push('La presa non ha il filo di terra: se un apparecchio si guasta, la carcassa può andare in tensione.');}
      if(r0.uf.f(lv.pol)!==r0.F){ok=false;out.safe.msgs.push('Fase e neutro sono invertiti sulla presa: L deve andare alla fase.');}
    }else{
      const alwaysN=lv.load.some(t=>res.every(r=>r.uf.f(t)===r.N));
      if(!alwaysN){ok=false;out.safe.msgs.push('Hai fatto passare il neutro dai comandi. Spenta la luce, i morsetti della lampada restano in tensione. L\u2019interruttore va sulla fase.');}
    }
    if(lv.mustEarth&&r0.uf.f(lv.mustEarth[0])!==r0.uf.f(lv.mustEarth[1])){ok=false;out.safe.msgs.push('Il quadro non è collegato alla terra: manca il filo giallo-verde che arriva dal contatore.');}
    if(ok){out.safe.ok=true;out.safe.msgs.push(lv.earth?'Terra collegata, fase e neutro al posto giusto.':(lv.full?'Il neutro arriva sempre alla lampada e il quadro è collegato a terra.':'Il neutro arriva sempre alla lampada: i comandi interrompono solo la fase.'));}
  }
  out.stars=(out.work.ok?1:0)+(out.color.ok?1:0)+(out.safe.ok?1:0);
  out.pass=out.stars===3;
  return out;
}
module.exports={COLORS,PHASE_OK,SRC,LEVELS,buildFull,makeUF,contacts,sim,analyse,tname,evaluate};
