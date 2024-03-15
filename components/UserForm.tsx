import React, { useState } from "react";
import styles from "@/styles/UserForm.module.scss";

import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

interface FormData {
  ci: number;
  name: string;
  phone: string;
  email: string;
}

const UserForm = (): React.ReactNode => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [successMsg, setSuccessMsg] = useState<string>("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setSuccessMsg("Datos enviados");
    //reset();
  };

  const onError: SubmitErrorHandler<FormData> = (error) => {
    setSuccessMsg("");
  };
  return (
    <div className={styles["main-container"]}>
      <form
        className={styles["form-container"]}
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        {successMsg && <p className={styles["success-msg"]}>{successMsg}</p>}
        <div className={styles["form-control"]}>
          <label>{"Carnet (sin letras)"}</label>
          <input
            type="number"
            {...register("ci", {
              required: "Tu Carnet de Identidad es necesario",
              pattern: {
                value: /^[0-9]+$/,
                message: "Carnet no valido.",
              },
            })}
          />
          {errors.ci && (
            <p className={styles["errorMsg"]}>{errors.ci.message}</p>
          )}
        </div>
        <div className={styles["form-control"]}>
          <label>Nombre de la reserva</label>
          <input
            type="text"
            {...register("name", {
              required: "Tu nombre es necesario.",
            })}
          />
          {errors.name && (
            <p className={styles["errorMsg"]}>{errors.name.message}</p>
          )}
        </div>
        <div className={styles["form-control"]}>
          <label>Celular</label>
          <input
            type="number"
            {...register("phone", {
              required: "Tu celu es necesario.",
              pattern: {
                value: /^\d{8}$/,
                message: "Tu celu no es valido.",
              },
            })}
          />
          {errors.phone && (
            <p className={styles["errorMsg"]}>{errors.phone.message}</p>
          )}
        </div>
        <div className={styles["form-control"]}>
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: "Tu correo es necesario. No te enviaremos SPAM ;)",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email no valido.",
              },
            })}
          />
          {errors.email && (
            <p className={styles["errorMsg"]}>{errors.email.message}</p>
          )}
        </div>

        <div className={styles["form-control"]}>
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
