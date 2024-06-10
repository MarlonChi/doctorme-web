import { Field } from "@/components/form";

export default function SignIn() {
  return (
    <>
      <h1>Login</h1>
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
        }}
      />
    </>
  );
}
