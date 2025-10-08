export default function Footer(){
  return (
    <footer id="contact">
      <div className="container">
        <div style={{display:"flex",justifyContent:"space-between",gap:"10px",flexWrap:"wrap"}}>
          <p>© {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
          <p>Contact: contact@monsite.com</p>
        </div>
      </div>
    </footer>
  );
}
