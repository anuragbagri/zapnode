import { requireAuth } from "@/lib/auth-utils"
import { caller } from "@/trpc/server";
import LogoutButton from "./logout";

export default async function Home() {
  await requireAuth(); // protected server components
  const data = await caller.getUsers(); 
  return (
    <div className="min-h-screen text-2xl flex items-center justify-center">
       protected server components
     <div>
        {JSON.stringify(data)}
        <LogoutButton/>
     </div>
    </div>
  )
}
