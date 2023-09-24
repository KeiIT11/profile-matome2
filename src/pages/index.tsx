import HomeNavbar from '@/components/Header/navbar'
import Layout from '@/components/Layouts/RootLayout';
import Head from 'next/head'
import { ReactElement } from 'react';

// const appintroduction: string = `
// Profileまとめは、簡単におしゃれなプロフィール画面が作れるWebサイトです。

// SNSアカウントをまとめたり、QRコードでシェアすることもできます。

// イベントを募集したり参加することができるので、初対面に仲を深めるのに役立ちます。



// `

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default function Home() {
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <div className="max-w-md mx-auto py-10 md:max-w-2xl">
        <p className="whitespace-pre-wrap">aaa</p>
        <p className="whitespace-pre-wrap">イベントリスト</p>
      </div>
    </>
  )
}
