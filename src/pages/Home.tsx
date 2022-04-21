import { useEffect, useState } from "react";

export default function Home() {
   const POSTS_URL: string = `https://jsonplaceholder.typicode.com/posts`;
   const USERS_URL: string = `https://jsonplaceholder.typicode.com/users`;
   const transition: string = `transition-all duration-300`
   const bannerStyle: string = `bg-green-500 py-6 text-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105`

   const [posts, setPosts] = useState([])
   const [filteredPosts, setFilteredPosts] = useState([])
   const [users, setUsers] = useState([])

   async function getPosts(){
      const response = await fetch(POSTS_URL)
      const data = await response.json()      
      setTimeout(() => {
         setPosts(data);
         setFilteredPosts(data);
      }, 2000);
   }

   async function getUsers(){
      const response = await fetch(USERS_URL)
      const data = await response.json()      
      setTimeout(() => {
         setUsers(data);
      }, 2000);
   }

  const handleFilterChange =  () => {
     
  }

   useEffect(() => { getPosts(); getUsers(); }, [])
   

   return <main className="bg-orange-300 flex min-h-screen">

      <nav className="bg-red-400 w-16 flex flex-col items-center pl-5 p-6">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
         </svg>
      </nav>

      <article className="p-7 w-full">

         <div className="flex gap-3 items-center mb-7">
            <img className="w-10 h-10 rounded-full shadow-lg" src="/images/cat.jpg" alt="Profile" />
            <h1 className="font-semibold text-xl">Hi Sugiono</h1>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
         </div>

         <div className="grid grid-cols-3 gap-4 mb-10">
            <section className={`${bannerStyle} ${transition}`}>
               <h3>total post</h3>
               <h5>100</h5>
            </section>
            <section className={`${bannerStyle} ${transition}`}>
               <h3>most active user</h3>
               <h5>100</h5>
            </section>
            <section className={`${bannerStyle} ${transition}`}>
               <h3>Active Users</h3>
               <h5>100</h5>
            </section>
         </div>

         <div className="col-span-2 bg-pink-400 p-5 rounded-lg shadow-lg">
               <div className="flex justify-between items-center">
                  <h1>JSON Posts</h1>
                  <input className="w-44 rounded-lg px-3 py-2" type="text" />
               </div>

               <div>
                  {filteredPosts.map(post => <p key={post[`id`]}>{post[`title`]}</p>)}
               </div>
            </div>

      </article>
   </main>
}