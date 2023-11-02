import AppNavigation from "./AppNavigation";
import AuthScreen from "../../screen/Auth/AuthScreen";
import { useAuth } from "../../hooks/useAuth";

export default function RootNavigation() {
    const { user } = useAuth();

    // console.log("(RootNavigation) user", user)

    return user ? <AppNavigation /> : <AuthScreen />;

}