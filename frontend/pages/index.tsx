﻿import React, { FC } from 'react'
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
import { GetMenu, GetSection } from '../services/core/requests';

import s from './index.module.scss'


interface IndexProps {
  topMenu :IMenu,
  headerMenu: IMenu,
  bigSlider: ISection,
  smallSlider: ISection,
  privilege: ISection,
  mainCard: ISection,
  partition: ISection,
  gallery: ISection,
  reviews: ISection,
  news: ISection,
  seoOne: ISection,
  seoTwo: ISection,
  footerMenu: IMenu,
  footerMenuInfo: IMenu,
  footerMenuCoordinates: ISection,
  footerMenuEmail: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, bigSlider, smallSlider, privilege, mainCard, partition, gallery, reviews, news, seoOne, seoTwo, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }) => {

  

  return (
    <div>
      <MainLayout>
        <TopInfo menu={topMenu} />
        <Header />
        <TopMenu menu={headerMenu} />
        <MainSlider bigSliderSection={bigSlider} smallSliderSection={smallSlider}/>
        <Privileges privilegeSection={privilege} />
        <MainCards mainCardSection={mainCard} />
        <Partitions partitionSection={partition}/>
        <Gallery gallerySection={gallery}/>
        <Reviews reviewSection={reviews}/>
        <News newsSection={news} />
        <SeoOne seoSection={seoOne}/>
        <SeoTwo seoSection={seoTwo} />
        <Footer menu={footerMenu} menuInfo={footerMenuInfo} menuCoordinates={footerMenuCoordinates} menuEmail={footerMenuEmail} />
      </MainLayout>
    </div>
  )
}


export async function getServerSideProps() {
  const topMenu = await GetMenu('verkhnee-menyu') 

  const headerMenu = await GetMenu('menyu-v-khedere') 
  const bigSlider = await GetSection('bigSlider')
  const smallSlider = await GetSection('smallSlider')
  const privilege = await GetSection('privilegii')
  const mainCard = await GetSection('mainCard')
  const partition = await GetSection('partition')
  const gallery = await GetSection('gallery')
  const reviews = await GetSection('reviews')
  const news = await GetSection('novosti')
  const seoOne = await GetSection('seo-1')
  const seoTwo = await GetSection('seo-2')
  const footerMenu = await GetMenu('menyu-v-futere')
  const footerMenuInfo = await GetMenu('menyu-informaciya')
  const footerMenuCoordinates = await GetSection('nashi-koordinaty')
  const footerMenuEmail = await GetSection('e-mail')

  return {
      props: { topMenu, headerMenu, bigSlider, smallSlider, privilege, mainCard, partition, gallery, reviews, news, seoOne, seoTwo, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }
  }
}


export default Index