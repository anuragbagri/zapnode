import { LoginForm } from "@/features/auth/components/login-form";
import { requireAuth } from "@/lib/auth-utils";

export default async function Page(){
    await requireAuth(); 
    return (
        <div>
            <LoginForm/>
        </div>
    )
};