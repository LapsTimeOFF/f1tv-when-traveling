import Footer from "./Footer"

export const metadata = {
  title: 'F1TV When Traveling Guide',
  description: 'fuck shitty graphs, hello interactive pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
