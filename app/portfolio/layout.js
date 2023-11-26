// app\portfolio\layout.js
import Header from "../components/Header"

export default function PortfolioLayout({
  children, // will be a page or nested layout
}) {
  return (
    <> 
      <nav>
        <Header />
      </nav>
 
      {children}
    </>
  )
}