import { Button } from "@/components/button";
import { Field } from "@/components/form";
import { Header } from "@/components/header";
import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Header href="/" title="Criar conta" iconClassName="w-4 h-4" />
      <div className="py-4">
        <h2 className="font-bold text-xl">Crie sua conta</h2>
        <p>Por favor, informe seu nome e uma senha para criar sua conta.</p>
      </div>
      <div className="flex flex-col gap-4">
        <Field
          labelProps={{
            htmlFor: "name",
            children: "Seu nome",
          }}
          inputProps={{
            type: "text",
            id: "name",
            defaultValue: "",
            placeholder: "Informe seu nome",
            autoFocus: true,
          }}
        />
        <Field
          labelProps={{
            htmlFor: "login",
            children: "Telefone",
          }}
          inputProps={{
            type: "text",
            id: "login",
            defaultValue: "",
            placeholder: "Informe seu número de telefone",
            autoFocus: true,
          }}
        />
        <Field
          labelProps={{
            htmlFor: "password",
            children: "Senha",
          }}
          inputProps={{
            type: "password",
            id: "password",
            defaultValue: "",
            placeholder: "Informe a sua senha",
            autoFocus: true,
            className: "mb-1",
          }}
        />

        <Button className="mb-8">Entrar</Button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="h-6 relative w-full items-center justify-center flex mb-4">
          <span className="absolute z-10 m-auto bg-white px-2 text-sm">ou</span>
          <div className="border-b-gray-100 w-full absolute" />
        </div>
        <p>
          Já está cadastrado?{" "}
          <Link
            href="/sign-in"
            className="text-green-600 font-semibold underline"
          >
            Acesse sua conta
          </Link>
        </p>
      </div>
    </>
  );
}
