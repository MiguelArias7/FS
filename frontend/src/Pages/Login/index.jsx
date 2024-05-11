import { AiOutlineCheckCircle } from "react-icons/ai";
import { Transition } from "@headlessui/react";
import Logo from "/ariadna_logo.png";
import { useForm } from "react-hook-form";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAriadnaApi } from "../../API/useAriadnaApi";
import { TightLayout } from "../../components/TightLayout";
import { useLocalStorage } from "../../components/useLocalStorage";
/**
 * Renders a login form and handles form submission.
 *
 * @return {JSX.Element} The login form component.
 */
function Login() {
  const { saveItem: saveUserData } = useLocalStorage("USER_DATA", {});

  let { login } = useAriadnaApi();
  let navigate = useNavigate();
  const [allowRegister, setAllowRegister] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // #region Fields
  const fields = [
    {
      id: "email",
      error: errors.email,
      title: "Email",
      type: "text",
      properties: {
        required: "Required",
        maxLength: { value: 40, message: "Too many characters" },
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9ñ]+\.)+[a-zA-Z]{2,}))$/,
          message: "Invalid email",
        },
      },
    },
    {
      id: "password",
      error: errors.password,
      title: "Password",
      type: "password",
      properties: {
        required: "Required",
        minLength: { value: 5, message: "Few characters" },
        maxLength: { value: 20, message: "Too many characters" },
      },
    },
  ];
  // #endregion

  // #region Toast/Notification
  const toastId = useRef(null);
  const notificationLogin = () =>
    (toastId.current = toast.info("Loging in...", {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      bodyStyle: { maxWidth: "200px" },
      style: {
        maxWidth: "200px",
        animationDuration: "250ms",
      },
    }));

  const updateRegistrationSuccess = () =>
    toast.update(toastId.current, {
      render: "Successfully logged in",
      type: toast.TYPE.SUCCESS,
      autoClose: 2000,
    });

  const updateRegistrationFail = () =>
    toast.update(toastId.current, {
      render: "Failed to login",
      type: toast.TYPE.ERROR,
      autoClose: 2000,
    });

  const onSubmitForm = async (dataUser) => {
    notificationLogin();
    login(dataUser.email, dataUser.password)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          response.json().then((data) => {
            saveUserData(data.data);
          });

          updateRegistrationSuccess();
          setAllowRegister(false);
          navigate("/profile");
        } else {
          throw new Error("Invalid credentials.");
        }
      })
      .catch((error) => {
        updateRegistrationFail();
        setAllowRegister(true);
        console.error("Error:", error);
      });
  };
  // #endregion

  return (
    <TightLayout>
      <section className="flex-grow flex flex-col justify-center overflow-hidden mt-4">
        <div className="grid grid-cols-2 md:grid-cols-3">
          <div className="pr-10 hidden md:flex flex-col items-center justify-center col-span-2 md:col-span-1 mb-4 md:mb-0 animate-fade_left">
            <img src={Logo} className="w-full hover:animate-pulse" alt="Ariadna CG"></img>
          </div>

          <form onSubmit={handleSubmit((data) => onSubmitForm(data))} autoComplete="off" className="col-span-2 animate-fade_right">
            <div className=" grid gap-1 mb-4">
              <h3 className="font-medium text-3xl text-secundary">Log in</h3>
              {/* <h3 className="font-light text-2xl  text-secundary">Register here</h3> */}
            </div>

            <div className="w-full">
              {fields.map((field) => (
                <div className="flex" key={field.id}>
                  <div className="w-2/3 mb-6">
                    {field.title && (
                      <label className="text-text font-thin text-base" htmlFor={field.id}>
                        {field.title}
                        {`${field.properties?.required ? " *" : ""}`}
                      </label>
                    )}

                    <input
                      {...register(field.id, field.properties)}
                      type={field.type}
                      id={field.id}
                      className={`rounded-lg w-full border-[3px] px-1  ${field.error?.message ? "transition-all duration-300 delay-200 border-youtube " : "transition-all duration-300"}`}
                    ></input>
                  </div>
                  <div className="w-1/3 flex min-h-full justify-start items-center">
                    <Transition
                      show={field.error?.message ? true : false}
                      enter="transition-opacity duration-1000"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-[2000ms]"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="bg-tertiary p-1 ml-3 rounded-md">
                        <p className="text-text ">{field.error?.message ? field.error?.message : <AiOutlineCheckCircle></AiOutlineCheckCircle>}</p>
                      </div>
                    </Transition>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex flex-col items-center h-10 my-3 font-thin text-base">
              <input
                type="submit"
                disabled={!allowRegister}
                // disabled={!true}
                className={`bg-tertiary text-secundary col-span-2 w-1/2 h-full rounded-md transition-all delay-300 duration-200  ${
                  !allowRegister ? "opacity-10 border" : "hover:scale-125 hover:bg-gold hover:text-primary"
                }`}
              />
            </div>
          </form>
        </div>
      </section>
      <ToastContainer
        bodyStyle={{ maxWidth: "50px" }}
        transition={Slide}
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </TightLayout>
  );
}

export { Login };
