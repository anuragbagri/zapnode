import { inngest } from "@/inngest/client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    // this is job (these are all micro jobs)
    await step.sleep("wait-a-moment", "10s");

    // upload a video 
       await step.sleep("wait-a-moment", "1s");

       // transcribe the vedio 
          await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);