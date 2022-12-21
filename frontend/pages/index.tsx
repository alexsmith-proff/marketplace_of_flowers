import React, { FC } from 'react'
import Footer from '../components/Footer/Footer';
import Gallery from '../components/Gallery/Gallery';
import Header from '../components/Header/Header';
import MainCards from '../components/MainCards/MainCards';
import MainSlider from '../components/MainSlider/MainSlider';
import News from '../components/News/News';
import Partitions from '../components/Partitions/Partitions';
import Privileges from '../components/Privileges/Privileges';
import Reviews from '../components/Reviews/Reviews';
import SeoOne from '../components/SeoOne/SeoOne';
import SeoTwo from '../components/SeoTwo/SeoTwo';
import TopInfo from '../components/TopInfo/TopInfo';
import TopMenu from '../components/TopMenu/TopMenu';
import { IMenu } from '../interfaces/menu.interface';
import { ISection } from '../interfaces/section.interface';
import MainLayout from '../layouts/MainLayout/MainLayout'
import { GetImgByBlock, GetMenu, GetSection, GetTextByBlock } from '../services/core/requests';

import s from './index.module.scss'


interface IndexProps {
  topMenu :IMenu,
  headerMenu: IMenu,
  bigSlider: ISection,
  smallSlider: ISection,
  privilege: ISection,
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, bigSlider, smallSlider, privilege }) => {

  

  return (
    <div>
      <MainLayout>
        <TopInfo menu={topMenu} />
        <Header />
        <TopMenu menu={headerMenu} />
        <MainSlider bigSliderSection={bigSlider} smallSliderSection={smallSlider}/>
        <Privileges privilegeSection={privilege} />
        <MainCards />
        <Partitions />
        <Gallery />
        <Reviews />
        <News />
        <SeoOne />
        <SeoTwo />
        <Footer />
      </MainLayout>
    </div>
  )
}


export async function getServerSideProps() {
  // const text = await GetTextByBlock('main_text')
  // const img_filename = await GetImgByBlock('capt_im')

  const topMenu = await GetMenu('verkhnee-menyu') 

  const headerMenu = await GetMenu('menyu-v-khedere') 
  const bigSlider = await GetSection('bigSlider')
  const smallSlider = await GetSection('smallSlider')
  const privilege = await GetSection('privileges')

  return {
      props: { topMenu, headerMenu, bigSlider, smallSlider, privilege }
  }
}


export default Index