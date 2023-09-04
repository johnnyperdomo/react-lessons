import { UserCard } from "./UserCard";
import userJson from "./user.json";

function App() {
    console.log(userJson);

    const { name, age, phoneNumber, address } = userJson;

    return <UserCard name={name} age={age} phoneNumber={phoneNumber} address={address} />;
}

export default App;
