"use client"
import { Button } from "@/components/ui/button";
import { authclient } from "@/lib/auth-client";

export default function LogoutButton(){
    return (
        <Button onClick={() => authclient.signOut()}>

        </Button>
    )
}