export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header= (
  <header >
  <div >
    <h1>Todo App By Shahid Mahmood</h1>
        <p>Assignment of Q2 Metaverse Web 3.0 Class</p>
    
  </div>
  </header>);
  
  const footer=(
    <footer>
      <div>
                <p>First NextJs Assignment</p></div>
    </footer>
  );

  return (
    <html>
      <head />
      <body>
        {header}
        <hr />
        <nav>
          
        </nav>
        
        {children}
        <hr />
        {footer}
        </body>
    </html>
  )
}
