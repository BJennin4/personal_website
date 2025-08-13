import Head from "next/head";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Welcome to BranDev!",
  description: "This is my homepage"
}

export default function Home() {
  return (

    // <div className="
    //   grid grid-rows-[20px_1fr_20px]
    //   items-center
    //   justify-items-center
    //   min-h-screen
    //   p-8
    //   pb-20
    //   gap-16
    //   sm:p-20
    //   font-[family-name:var(--font-geist-sans)]">

      <div className="
        grid grid-rows-[20px_1fr_20px]
        items-center
        justify-items-center
        min-h-screen
        p-8
        pb-20
        gap-16
        sm:p-20
        font-[family-name:var(--font-geist-sans)]">
    <Head>
      <title>BranDev</title>
    </Head>
      <main className="
        flex 
        flex-col 
        gap-8  
        row-start-2 
        items-center 
        sm:items-start">
        <div className="        
          rounded-xl
          shadow-lg 
          outline 
          outline-black/5
          dark:shadow-none 
          dark:outline-white/10
          p-20
          pt-10
          pb-10">
          <h1 className="text-xl">Welcome to BranDev!</h1>
          <p className="pt-6">Homepage In Progress</p>
          <a className="font-semibold" href="https://github.com/BJennin4/personal_website" target="_blank">Right Here</a>
        </div>
      </main>
      <footer className="
        row-start-3 
        flex 
        gap-6 
        flex-wrap 
        items-center 
        justify-center">
      </footer>
    </div>
  );
}
