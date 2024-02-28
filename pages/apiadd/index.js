import { useState, useEffect } from 'react'
import Head from 'next/head'

const MapPage = () => {
  const [query, setQuery] = useState('Tokyo+Station')

  useEffect(() => {
    // ランダムな都道府県を生成する関数
    const getRandomPrefecture = () => {
      const prefectures = [
        'Tokyo',
        'Osaka',
        'Kyoto',
        'Hokkaido',
        'Fukuoka',
        'Aichi',
        'Kanagawa'
      ]
      const randomIndex = Math.floor(Math.random() * prefectures.length)
      return prefectures[randomIndex]
    }

    // ページが読み込まれた際にランダムな都道府県を設定
    setQuery(getRandomPrefecture())
  }, []) // 空の依存リストを渡すことで、コンポーネントが初回のみ実行されるようにする

  return (
    <div>
      <Head>
        <title>Google Map in Next.js</title>
        <meta name='description' content='Displaying Google Map in Next.js' />
      </Head>

      <main>
        <iframe
          width='600'
          height='450'
          frameBorder='0'
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${query}`}
          allowFullScreen
        ></iframe>
      </main>
    </div>
  )
}

export default MapPage
