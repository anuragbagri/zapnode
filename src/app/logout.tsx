"use client";
import { Button } from "@/components/ui/button";
import { authclient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        authclient.signOut();
        router.push("/login");
      }}
    >
      logout
    </Button>
  );
}
