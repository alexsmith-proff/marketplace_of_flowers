import React, { FC } from 'react'
import Gallery from '../components/Gallery/Gallery';
import MainCards from '../components/MainCards/MainCards';
import MainSlider from '../components/MainSlider/MainSlider';
import News from '../components/News/News';
import Partitions from '../components/Partitions/Partitions';
import Privileges from '../components/Privileges/Privileges';
import Reviews from '../components/Reviews/Reviews';
import SeoOne from '../components/SeoOne/SeoOne';
import SeoTwo from '../components/SeoTwo/SeoTwo';
import { IMenu } from '../interfaces/menu.interface';
import { ISection } from '../interfaces/section.interface';
import MainLayout from '../layouts/MainLayout/MainLayout'
import { GetMenu, GetSection } from '../services/core/requests';
import MapYandex from '../components/MapYandex/MapYandex';
import { getTextInTextBlockFromSection } from '../services/core/parse';
import ReviewsMainPage from '../components/ReviewsMainPage/ReviewsMainPage';

interface IndexProps {
  topMenu: IMenu,
  footerMenu: IMenu,
  headerMenu: IMenu,
  bigSlider: ISection,
  smallSlider: ISection,
  privilege: ISection,
  mainCards: ISection,
  partition: ISection,
  gallery: ISection,
  reviews: ISection,
  news: ISection,
  seoOne: ISection,
  seoTwo: ISection,
  footerMenuInfo: IMenu,
  footerMenuCoordinates: ISection,
  footerMenuEmail: ISection
}

const Index: FC<IndexProps> = ({ topMenu, headerMenu, bigSlider, smallSlider, privilege, mainCards, partition, gallery, reviews, news, seoOne, seoTwo, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }) => {

  return (
    <div>
      <MainLayout topMenu={topMenu} headerMenu={headerMenu} footerMenu={footerMenu} footerMenuInfo={footerMenuInfo} footerMenuCoordinates={footerMenuCoordinates} footerMenuEmail={footerMenuEmail}>
        <MainSlider bigSliderSection={bigSlider} smallSliderSection={smallSlider} />
        <Privileges privilegeSection={privilege} />
        <MainCards cards={mainCards} />
        <Partitions partitionSection={partition} />
        <Gallery gallerySection={gallery} />
        <ReviewsMainPage reviewSection={reviews} />
        <News newsSection={news} />
        <SeoOne seoSection={seoOne} />
        <SeoTwo seoSection={seoTwo} />
        <MapYandex
          defaultState={{
            center: [51.670554, 39.192204],
            zoom: 13
          }}
          shops={[{
            name: 'ул. Революции 1905 года, 80',
            lat: 51.667596,
            long: 39.185905,
          }]}
          height={'500px'}
          hintPhoneNumber={getTextInTextBlockFromSection(footerMenuCoordinates, 'koord-elem', 'telefon')}
          hintWorkDays={`Пн-Сб: 8:00–20:00\nВс: 9:00–20:00`}
          hintEmail={getTextInTextBlockFromSection(footerMenuEmail, 'e-mail', 'soderzhimoe')}
          hintVisible={true}
        />
      </MainLayout>
    </div >
  )
}


export async function getServerSideProps() {
  const topMenu = await GetMenu('verkhnee-menyu')
  const headerMenu = await GetMenu('menyu-v-khedere')
  const bigSlider = await GetSection('bigSlider')
  const smallSlider = await GetSection('smallSlider')
  const privilege = await GetSection('privilegii')
  const mainCards = await GetSection('mainCard')
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
    props: { topMenu, headerMenu, bigSlider, smallSlider, privilege, mainCards, partition, gallery, reviews, news, seoOne, seoTwo, footerMenu, footerMenuInfo, footerMenuCoordinates, footerMenuEmail }
  }
}


export default Index