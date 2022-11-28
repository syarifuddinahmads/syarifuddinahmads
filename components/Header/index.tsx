import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return <>
    <Head>
      <div className="px-4 py-3 my-3 text-center">
        <img className='mb-3' src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png" width="100" height="100" alt={'Ahmad Syarifuddin'} />
        <h3 className="display-6 fw-bold">Ahmad Syarifuddin</h3>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Software Engineer</p>
        </div>
        <div className="container">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <Link className="nav-link" href="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="project">Project</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </Head>
  </>
}

export default Header