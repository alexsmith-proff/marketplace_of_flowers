import React, { FC } from 'react'
import TopInfo from '../components/TopInfo/TopInfo';
import MainLayout from '../layouts/MainLayout/MainLayout'
import { GetImgByBlock, GetMenu, GetTextByBlock } from '../services/core/requests';

import s from './index.module.scss'


interface IndexProps {
  text: string,
  img_filename: string,
  topMenu,
}

const Index: FC<IndexProps> = ({ text, img_filename, topMenu }) => {

  

  return (
    <div>
      <MainLayout>
        Test string
        <div>
          {text}
        </div>
        <div>
          {img_filename}
        </div>
        <img src={process.env.SERVER_URL + '/' + img_filename} alt={img_filename} />
        <TopInfo menu={topMenu} />
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