import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";

export const testworkflow = inngest.createFunction(
  { id: "zapnode" },
  { event: "test/workflow" },
  async ({ event, step }) => {
    await step.sleep("transcribe", "5s");

    await step.sleep("editing", "5s");

    await step.sleep("upload to ai", "5s");

    await step.run('create-worflow', () => {
          return prisma.workflow.create({
            data : {
              name : "test-workflow"
            },
          });
    })
    
    return { message: `Hello ${event.data.email}!` };
  },
);