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
  const [form, setForm] = useState(true);
  return (
    <Dialog>
      <DialogTrigger>Log in</DialogTrigger>
      <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
        {form ? <LoginForm setForm={setForm} /> : <RegisterForm setForm={setForm} />}
      </DialogContent>
    </Dialog>
  );
};

export default Login;
