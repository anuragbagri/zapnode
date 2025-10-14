"use client";
import {zodResolver} from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm} from "react-hook-form";
import { toast } from "sonner";
import {z} from "zod";
import { Button } from "@/components/ui/button";
import { Card , CardContent,CardDescription,CardHeader, CardTitle } from "@/components/ui/card";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { authclient } from "@/lib/auth-client";


const registerschema = z.object({
    email : z.email("please enter your email"),
    password : z.string().min(1, "password is required"),
    confirmPassword : z.string()
})
.refine((data) => data.password === data.confirmPassword, {
    message : "Passwords dont match",
    path : ["confirmPassword"]
});

type RegsiterformValues = z.infer<typeof registerschema>;

export function RegisterForm(){
    const router = useRouter();

    const form = useForm<RegsiterformValues>({
        resolver : zodResolver(registerschema),
        defaultValues : {
            email :"",
            password : "",
            confirmPassword : "",
        },
    });
    const onSubmit = async (values : RegsiterformValues) => {
        await authclient.signUp.email({
            name : values.email,
            email : values.email,
            password : values.password,
            callbackURL : "/"
},
{
    onSuccess : (ctx) => {
        router.push("/");
    },
    onError: (ctx) => {
        toast.error(ctx.error.message);
    }
})
    };

    const isPending = form.formState.isSubmitting;

    return (
        <div className="flex flex-col gap-6">
         <Card>
            <CardHeader className="text-center">
                <CardTitle>
                    Get started
                </CardTitle>
                <CardDescription>
                    create your account to get started
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="grid gap-6">
                    <div className="flex flex-col gap-6">
                     <Button variant="outline"
                     className="w-full "
                     type="button"
                     disabled={isPending}>
                      Continue with github
                     </Button>
                     <Button variant="outline"
                     className="w-full "
                     type="button"
                     disabled={isPending}>
                      Continue with google
                     </Button>
                    </div>
                    <div className="grid gap-6">
                    <FormField
                    control={form.control}
                    name="email"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Email
                            </FormLabel>
                            <FormControl>
                                <Input
                                type="email"
                                placeholder="ex@gmail.com"
                                {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                     <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                password
                            </FormLabel>
                            <FormControl>
                                <Input
                                type="password"
                                placeholder="*******"
                                {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                     <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>
                                Confirm password
                            </FormLabel>
                            <FormControl>
                                <Input
                                type="password"
                                placeholder="*******"
                                {...field}/>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}/>
                    <Button type="submit"
                    className="w-full"
                    disabled={isPending}>
                        Sign up
                    </Button>
                    </div>
                    <div className="text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login"
                        className="underline underline-offset-4">
                            Login
                        </Link>
                    </div>
                  </div>
                  </form>
                </Form>
            </CardContent>
         </Card>

        </div>
    )
}