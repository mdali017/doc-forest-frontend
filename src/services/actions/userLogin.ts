"use server";

import { FieldValues } from "react-hook-form";

type TFormValues = {
  email: string;
  password: string;
};

export const userLogin = async (data: FieldValues) => {
  //   console.log("user info", data);
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
