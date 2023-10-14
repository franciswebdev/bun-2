export default function RootLayout({
  children, header, body
}: {
  children: React.ReactNode
  header: React.ReactNode
  body: React.ReactNode
}) {
  return (
    <html lang="en">
      This is layout
      <header>{header}</header>
      <div>{children}</div>
      <main>{body}</main>
    </html>
  )
}