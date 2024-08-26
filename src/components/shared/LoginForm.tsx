import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "@/lib/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { loginUser } from "@/api";

const LoginForm = ({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
    try {
      setLoading(true);
      const response = await loginUser(values);
      console.log(response);

      const status = response?.status;
      const err = response?.error;
      switch (status) {
        case 500:
        case 400:
        case 404: {
          setError(err);
          setLoading(false);
          break;
        }
        case 200: {
          setError(null);
          setMessage("Successfully registered");
          setLoading(false);
          break;
        }
        default: {
          setError("An unexpected error occurred.");
          setLoading(false);
        }
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again later.");
      setLoading(false);
    }
  }
  return (
    <Form {...form}>
      <h1 className="text-orange-500 text-xl font-bold tracking-widest">
        Login
      </h1>
      <p className="-mt-4 text-gray-500">to continue to MernEats.com</p>
      {error ? (
        <div className="bg-red-600 w-full text-white text-sm text-center py-1 rounded-md tracking-widest">
          {error}
        </div>
      ) : (
        ""
      )}
      {message ? (
        <div className="bg-green-600 w-full text-white text-sm text-center py-1 rounded-md tracking-widest">
          Successfully registered
        </div>
      ) : (
        ""
      )}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="bg-orange-500 hover:bg-orange-400 w-full"
          type="submit"
          disabled={loading}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </form>
      <div className="flex items-center gap-2 text-sm">
        <p className="text-gray-500">You don't have an account?</p>
        <p
          className="text-orange-500 cursor-pointer"
          onClick={() => setForm(false)}
        >
          Register
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;
