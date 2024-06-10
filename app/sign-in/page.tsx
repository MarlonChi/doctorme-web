import { Button } from "@/components/button";
import { Field } from "@/components/form";
import { Header } from "@/components/header";
import Link from "next/link";

export default function SignIn() {
  return (
    <>
      <Header href="/" title="Login" iconClassName="w-4 h-4" />
      <div className="py-4">
        <h2 className="font-bold text-xl">Acesse sua conta</h2>
        <p>Olá, informe seus dados para acessar.</p>
      </div>
      <div className="flex flex-col gap-4">
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
          Não está cadastrado?{" "}
          <Link
            href="/signup"
            className="text-green-600 font-semibold underline"
          >
            Crie sua conta
          </Link>
        </p>
      </div>
    </>
  );
}
