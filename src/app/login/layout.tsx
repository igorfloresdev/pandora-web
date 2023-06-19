export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <video
        className='w-full h-full object-cover absolute'
        src='/videos/bgvideo.mp4'
        autoPlay
        loop
        muted
      />
      <div className='w-full h-full absolute bg-black opacity-70'></div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content w-full flex-col-reverse lg:flex-row-reverse'>
          <div>{children}</div>
          <div className='text-center lg:text-left lg:pr-10'>
            <h1 className='text-5xl font-bold'>Pandora</h1>
            <p className='py-6 hidden lg:block lg:max-w-[700px]'>
              Abra a caixa de soluções com Pandora: o poderoso controle de
              estoque que revela a eficiência oculta.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
