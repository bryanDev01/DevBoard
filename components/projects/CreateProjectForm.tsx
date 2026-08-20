"use client"

import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export function CreateProjectForm() {
  const [isSent, setIsSent] = useState(false);
  const userInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    userInputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSent(true);
    try {
      const formData = new FormData(e.currentTarget);
      const userName = formData.get("username")
      console.log(userName)
    } catch (error: unknown) {
      if (error instanceof Error) console.log(error.message);
    } finally {
      setIsSent(false)
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" w-80 flex flex-col gap-2">
      <Input ref={userInputRef} name="username" label="Username" />
      <Button isLoading={isSent} disabled={isSent} variant={isSent ? "ghost" : "primary"}>
        Enviar
      </Button>
    </form>
  );
}
