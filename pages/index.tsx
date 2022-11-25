import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function App() {
  return (
    <div>
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
      

      <main className='pt-4 pb-4'>
ddsd
      </main>

      <footer className='text-center'>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
