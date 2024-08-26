import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [form, setForm] = useState(false);
  return (
    <Dialog>
      <DialogTrigger>Log in</DialogTrigger>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        {form ? <LoginForm /> : <RegisterForm />}
        <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
