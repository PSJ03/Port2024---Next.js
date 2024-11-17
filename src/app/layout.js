export const metadata = {
  title: 'My Portfolio Site - Next.JS',
  description:
    'Next.JS 코딩 연습 및 차후 활용을 위해 제작하는 포트폴리오 사이트',
  keyword: ['portfolio', 'Next.JS', 'JBU', 'PSJ'],
}

export default function RootLayout({ children }) {
  return (
    <html lang='ko'>
      <link rel='icon' type='image/x-icon' href='image/favicon.ico'></link>
      <body>{children}</body>
    </html>
  )
}
