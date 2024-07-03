// app\portfolio\layout.js
import Header from "../components/Header"
// import Footer from "../components/Footer"

export default function PortfolioLayout({
  children, // will be a page or nested layout
}) {
  return (
    <> 
      <nav>
        <Header />
      </nav>
 
      {children}
      
      {/* to be used in future update */}
      {/* <Footer /> */}
    </>
  )
}