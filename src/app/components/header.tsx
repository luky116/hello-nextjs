'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// 所有菜单
const linkData = [
    { name:"Performance", href:"/performance"},
    { name:"Reliability", href:"/reliability"},
    { name:"Scale", href:"/scale"},
];

// const accessLink = ["/", "/performance", "/reliability", "/scale"];

export default function Header() {
  const pathname = usePathname();
  
  // 如果是非法路径，不展示 header
//   if(!accessLink.includes(pathname)) {
    // return null;
//   }

  return ( 
    // absolute 是为了让 header 悬浮在所有元素之上，不占用本层级的位置
    <div className="absolute w-full z-10">
        <div className="flex justify-between text-white container mx-auto  p-8 items-center">
            <Link className="text-3xl font-bold" href="/">
                Home
            </Link>
            <div className="text-xl space-x-4">
                {
                    linkData.map((link) => (
                        <Link 
                            key={link.name} 
                            className={pathname === link.href ? "text-purple-400 font-bold" : ""}
                            href={link.href}
                            >
                                {link.name}
                        </Link>
                    ))
                }
            </div>
        </div> 
    </div>
  )
}


// export default function Header() {
//   const pathname = usePathname();
//   return ( 
//     // 这里是为了让 header 悬浮在所有元素之上，不占用本层级的位置
//     <div className="absolute w-full z-10">
//         <div className="flex justify-between container mx-auto text-white p-8">
//             <Link className="text-3xl font-bold" href="/">Home</Link>
//             <div className="text-xl space-x-4">
//                 <Link className={pathname === "/performance" ? "text-purple-400": ""} href="/performance">Performance</Link>
//                 <Link className={pathname === "/reliability" ? "text-purple-400": ""} href="/reliability">Reliability</Link>
//                 <Link className={pathname === "/scale" ? "text-purple-400": ""} href="/scale">Scale</Link>
//             </div>
//         </div> 
//     </div>
//   )
// }
