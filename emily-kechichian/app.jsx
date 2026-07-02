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
        <h5>Credits to <a target="_blank" href="https://www.tiktok.com/@itsjeffry3">Jeffry</a> for the website</h5>
      </div>
      
    </main>
    </>
  )
}