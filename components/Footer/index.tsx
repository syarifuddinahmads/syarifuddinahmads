import Image from "next/image"
import * as Icon from "phosphor-react";


const Footer = () => {

  const socialIconSize = 36

  return <>
    <footer className='text-center'>
      <div className="pt-5 pb-5">
        <a href="https://www.linkedin.com/in/syarifuddinahmads/" className="m-2" target="_blank" rel="noopener noreferrer">
          <Icon.LinkedinLogo size={socialIconSize} />
        </a>
        <a href="https://github.com/syarifuddinahmads" className="m-2" target="_blank" rel="noopener noreferrer">
          <Icon.GithubLogo size={socialIconSize} />
        </a>
        <a href="https://twitter.com/mas_udinnn" className="m-2" target="_blank" rel="noopener noreferrer">
          <Icon.TwitterLogo size={socialIconSize} />
        </a>
        <a href="https://www.youtube.com/@syarifuddinahmads" className="m-2" target="_blank" rel="noopener noreferrer">
          <Icon.YoutubeLogo size={socialIconSize} />
        </a>
        <a href="https://www.instagram.com/syarifuddinahmads/" className="m-2" target="_blank" rel="noopener noreferrer">
          <Icon.InstagramLogo size={socialIconSize} />
        </a>
      </div>
      <div>
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
      </div>
    </footer>
  </>
}

export default Footer