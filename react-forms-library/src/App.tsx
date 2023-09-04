import { useForm, SubmitHandler } from "react-hook-form";
import "./App.css";

type Inputs = {
    email: string;
    password: string;
};

function App() {
    // const [count, setCount] = useState(0);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("email")} type="text" placeholder="Email" />

                <input
                    {...register("password", {
                        // required: true; can be true or add a message
                        required: "Password required",
                        minLength: {
                            value: 8,
                            message: "Password needs to be a minimum of  8 characters",
                        },
                    })}
                    type="password"
                    placeholder="Password"
                />
                {errors.password && <p>{errors.password.message}</p>}
                <input type="submit" />
            </form>
        </>
    );
}

export default App;
