import type { Route } from "./+types/recipient-details";
import { RecipientDetailsForm } from "~/components/RecipientDetailsForm";
import { useNavigate } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Recipient Details" },
        { name: "description", content: "Enter recipient details for your transaction" },
    ];
}

export default function RecipientDetails() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <RecipientDetailsForm onBack={() => navigate("/")} />
        </div>
    );
}
