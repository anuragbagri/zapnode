"use client";
import LogoutButton from "./logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const queryclient = useQueryClient();
  const { data } = useQuery(trpc.getWorkflows.queryOptions());
  const create = useMutation(
    trpc.createWorkFlow.mutationOptions({
      onSuccess: () => {
        toast.success("job queued");
      },
    })
  );
  return (
    <div className="min-h-screen text-2xl flex items-center justify-center">
      protected server components
      <div>
        {JSON.stringify(data, null, 2)}
        <LogoutButton />
        <Button
          disabled={create.isPending}
          onClick={() => {
            create.mutate();
          }}
        >
          create workflow
        </Button>
      </div>
    </div>
  );
}
