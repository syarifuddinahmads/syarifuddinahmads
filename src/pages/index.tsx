import Footer from '@/components/Footer'
import Introduction from '@/components/Introduction'
import Writing from '@/components/Writing'
import MainLayout from '@/layouts/main'
import type { ReactElement } from 'react'

const Page = () => {
  return <>
    <Introduction />
    <Writing/>
    <Footer/>
  </>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}


export default Page