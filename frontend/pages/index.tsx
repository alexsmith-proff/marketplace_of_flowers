import { gql } from '@apollo/client';
import React, { FC } from 'react'
import TopInfo from '../components/TopInfo/TopInfo';
import { GET_TEXTBLOCK_BY_SLUG } from '../graphql/section.graphql';
import MainLayout from '../layouts/MainLayout/MainLayout'
import { GetImgByBlock, GetTextByBlock } from '../services/core/requests';

import client from '../util/apollo-client'

import s from './index.module.scss'


interface IndexProps {
  text: string,
  img_filename: string
}

const Index: FC<IndexProps> = ({ text, img_filename }) => {

  

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
        <TopInfo />
      </MainLayout>
    </div>
  )
}


export async function getServerSideProps() {
  const text = await GetTextByBlock('main_text')
  const img_filename = await GetImgByBlock('capt_im')

  return {
      props: { text, img_filename }
  }
}


export default Index