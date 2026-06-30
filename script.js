let state={mode:"learn",deck:[],i:0,ok:0,total:0,topic:"Alle"};
let stats=JSON.parse(localStorage.getItem("km_simple_stats")||'{"ok":0,"all":0,"byTopic":{}}');

function init(){
  const topics=["Alle",...new Set(QUESTIONS.map(q=>q.topic))].sort();
  topicSelect.innerHTML=topics.map(t=>`<option>${t}</option>`).join("");
  updateStatsLine();
}
function updateStatsLine(){
  const pct=stats.all?Math.round(stats.ok/stats.all*100):0;
  statsLine.textContent=`Gesamt: ${stats.ok}/${stats.all} richtig (${pct}%)`;
}
function saveStats(){localStorage.setItem("km_simple_stats",JSON.stringify(stats));}
function start(modeName){
  state.mode=modeName; state.topic=topicSelect.value; state.i=0; state.ok=0; state.total=0;
  let pool=state.topic==="Alle"?QUESTIONS:QUESTIONS.filter(q=>q.topic===state.topic);
  state.deck=[...pool].sort(()=>Math.random()-.5);
  if(modeName==="exam") state.deck=state.deck.slice(0,Math.min(20,state.deck.length));
  menu.classList.add("hidden"); result.classList.add("hidden"); quiz.classList.remove("hidden");
  draw();
}
function draw(){
  if(state.i>=state.deck.length){finish();return;}
  const q=state.deck[state.i];
  mode.textContent=(state.mode==="exam"?"Prüfung":"Lernen")+` · Frage ${state.i+1}/${state.deck.length}`;
  bar.style.width=Math.round(state.i/state.deck.length*100)+"%";
  topic.textContent=q.topic;
  question.textContent=q.q;
  answers.innerHTML=""; explain.textContent=""; next.classList.add("hidden");
  q.a.forEach((a,idx)=>{
    const b=document.createElement("button");
    b.className="answer";
    b.textContent=String.fromCharCode(65+idx)+") "+a;
    b.onclick=()=>answer(idx,b);
    answers.appendChild(b);
  });
}
function answer(idx,btn){
  const q=state.deck[state.i];
  [...answers.children].forEach(b=>b.disabled=true);
  answers.children[q.c].classList.add("correct");
  state.total++; stats.all++;
  if(!stats.byTopic[q.topic]) stats.byTopic[q.topic]={ok:0,all:0};
  stats.byTopic[q.topic].all++;
  if(idx===q.c){
    btn.classList.add("correct"); state.ok++; stats.ok++; stats.byTopic[q.topic].ok++;
    explain.textContent="✅ Richtig! "+q.e;
  }else{
    btn.classList.add("wrong");
    explain.textContent="❌ Falsch. Richtige Antwort: "+q.a[q.c]+". "+q.e;
  }
  saveStats();
  next.classList.remove("hidden");
}
function nextQuestion(){state.i++;draw();}
function finish(){
  quiz.classList.add("hidden"); result.classList.remove("hidden");
  const pct=state.total?Math.round(state.ok/state.total*100):0;
  let html=`<p><b>${state.ok}/${state.total}</b> richtig (${pct}%).</p>`;
  if(state.mode==="exam"){
    html+=pct>=50?"<p>✅ Bestanden.</p>":"<p>❌ Noch üben.</p>";
  }
  resultText.innerHTML=html;
  updateStatsLine();
}
function showStats(){
  menu.classList.add("hidden"); result.classList.remove("hidden");
  let html=`<p>Gesamt: ${stats.ok}/${stats.all} richtig (${stats.all?Math.round(stats.ok/stats.all*100):0}%).</p><hr>`;
  Object.entries(stats.byTopic).forEach(([t,v])=>{
    html+=`<p>${t}: ${v.ok}/${v.all} (${Math.round(v.ok/v.all*100)}%)</p>`;
  });
  resultText.innerHTML=html || "<p>Noch keine Statistik.</p>";
}
function resetStats(){
  if(confirm("Statistik löschen?")){
    stats={ok:0,all:0,byTopic:{}}; saveStats(); updateStatsLine();
  }
}
function goMenu(){
  quiz.classList.add("hidden"); result.classList.add("hidden"); menu.classList.remove("hidden"); updateStatsLine();
}
init();