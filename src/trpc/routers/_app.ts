import { email, z } from 'zod';
import { createTRPCRouter, protectedProcedure } from '../init';
import prisma from '@/lib/db';
import { inngest } from '@/inngest/client';
export const appRouter = createTRPCRouter({
  getWorkflows : protectedProcedure.query(({ctx}) => {
    return prisma.workflow.findMany();
  }),
  createWorkFlow : protectedProcedure.mutation(async () => {
    await inngest.send({
      name : "test/workflow",
      data : {
        email : "anuraganuapm@gmail.com"
      },
    });

   return { success: "true" , message : "job queued"}
  })
});
// export type definition of API
export type AppRouter = typeof appRouter;