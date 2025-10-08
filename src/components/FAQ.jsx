import { useState } from "react";

function Item({q,a}){
  const [open,setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open":""}`}>
      <div className="faq-q" onClick={()=>setOpen(!open)}>{q}</div>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

export default function FAQ(){
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 style={{margin:"0 0 10px"}}>FAQ</h2>
        <div className="card">
          <Item q="Comment déployer le site ?"
                a="Généralement via Netlify, Vercel ou GitHub Pages. On push le repo et on connecte la plateforme."/>
          <Item q="Puis-je changer les couleurs ?"
                a="Oui, modifiez les variables CSS dans :root (index.css)."/>
          <Item q="Le site est-il rapide ?"
                a="Oui, Vite + React et CSS léger pour de très bonnes perfs."/>
        </div>
      </div>
    </section>
  );
}
