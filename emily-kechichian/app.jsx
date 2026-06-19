import emily from "./images/emilyImg.jpeg"

export default function Main()  {
  return (
    <>
    <header><h1>Emily Kechichian</h1></header>
    <main>
      <img src={emily} />
      <div className="description">
        <h1>Emily Kechichian 🔥</h1>
        <h2>insta: <a href="https://www.instagram.com/emilykechichian/"  target="_blank">emilykechichian</a></h2>
        <h2>Tiktok: <a href="https://www.tiktok.com/@emilykechichian"  target="_blank">emilykechichian</a></h2>
        <h2>Phone Number: <a style={{textDecoration: "underline"}} href="#">+961 76 634  586</a></h2>
        <h4>Credits to Jeffry for the website</h4>
      </div>
      
    </main>
    </>
  )
}