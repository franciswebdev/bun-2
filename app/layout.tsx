export default function RootLayout({
  children, header, footer
}: {
  children: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <nav>future nav</nav>
      <main>
        This is main layout
        <header>{header}</header>
        <div>
          {children}</div>
      </main>
      {footer}
    </html>
  )
}