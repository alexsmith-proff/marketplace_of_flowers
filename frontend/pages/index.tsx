import React, { FC } from 'react'
import Header from '../components/Header/Header';
import MainSlider from '../components/MainSlider/MainSlider';
import Privileges from '../components/Privileges/Privileges';
import TopInfo from '../components/TopInfo/TopInfo';
import TopMenu from '../components/TopMenu/TopMenu';
import MainLayout from '../layouts/MainLayout/MainLayout'
import { GetImgByBlock, GetMenu, GetTextByBlock } from '../services/core/requests';

import s from './index.module.scss'


interface IndexProps {
  text: string,
  img_filename: string,
  topMenu,
}

const Index: FC<IndexProps> = ({ topMenu }) => {

  

  return (
    <div>
      <MainLayout>
        <TopInfo menu={topMenu} />
        <Header />
        <TopMenu />
        <MainSlider />
        <Privileges />
      </MainLayout>
    </div>
  )
}


export async function getServerSideProps() {
  const text = await GetTextByBlock('main_text')
  const img_filename = await GetImgByBlock('capt_im')
  const topMenu = await GetMenu('verkhnee-menyu') 

  return {
      props: { text, img_filename, topMenu }
  }
}


export default Index