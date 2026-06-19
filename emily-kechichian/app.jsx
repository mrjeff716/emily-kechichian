import emily from "./images/emilyImg.jpeg"

export default function Main()  {
  return (
    <>
    <header><h1>Emily Kechichian</h1></header>
    <main>
      <img src={emily} />
      <div className="description">
        <h1>Emily Kechichian 🔥</h1>
        <h3 style={{fontWeight:"700"}}>insta: <a href="https://www.instagram.com/emilykechichian/"  target="_blank">emilykechichian</a></h3>
        <h3>Tiktok: <a href="https://www.tiktok.com/@emilykechichian"  target="_blank">emilykechichian</a></h3>
        <h3>Phone Number: <a style={{textDecoration: "underline"}} href="#">+961 76 634  586</a></h3>
        <h5>Credits to Jeffry for the website</h5>
      </div>
      
    </main>
    </>
  )
}