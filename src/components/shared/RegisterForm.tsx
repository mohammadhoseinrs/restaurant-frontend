import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/validation";
import { registerUser } from "@/api";
import { Dispatch, SetStateAction, useState } from "react";
const RegisterForm = ({
  setForm,
}: {
  setForm: Dispatch<SetStateAction<boolean>>;
}) => {
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setLoading(true);
    try {
      const response = await registerUser(values);

      const status = response?.status;
      const err = response?.error;
      switch (status) {
        case 500:
        case 401:
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
        Register
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          {loading ? "loading..." : "Submit"}
        </Button>
      </form>
      <div className="flex items-center gap-2 text-sm">
        <p className="text-gray-500">You have an account?</p>
        <p
          className="text-orange-500 cursor-pointer"
          onClick={() => setForm(true)}
        >
          Login
        </p>
      </div>
    </Form>
  );
};

export default RegisterForm;
