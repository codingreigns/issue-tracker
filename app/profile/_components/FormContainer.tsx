"use client";
import { actionFunction } from "@/app/utils/types";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const initialState = {
  message: "",
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useActionState(action, initialState);
  useEffect(() => {
    if (state?.message) {
      toast(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;
