import { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode
}

export default function Layout(props: LayoutProps) {
  const { children } = props
  return (
    <>
      <Header />
      <main className='container'>
        <div className="pt-5 pb-5">{children}</div>
      </main>
      <Footer />
    </>
  )
}