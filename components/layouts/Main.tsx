import Footer from "./Footer";
import Header from "./Header";

export default function Main({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}