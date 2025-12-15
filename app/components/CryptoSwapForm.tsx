import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CryptoInput } from "./CryptoInput";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { WALLET_OPTIONS } from "~/constants/data";

interface SwapFormData {
    payAmount: string;
    payCurrency: string;
    receiveAmount: string;
    receiveCurrency: string;
    payFrom: string;
    payTo: string;
}

export const CryptoSwapForm = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm<SwapFormData>({
        defaultValues: {
            payAmount: "0.00",
            payCurrency: "celo",
            receiveAmount: "0.00",
            receiveCurrency: "celo",
            payFrom: "metamask",
            payTo: "metamask",
        }
    });

    const onSubmit = (data: SwapFormData) => {
        const toBigInt = (val: string) => {
            if (!val) return 0n;
            try {
                const [whole, fraction = ""] = val.split(".");
                const paddedFraction = fraction.padEnd(18, "0").slice(0, 18);
                return BigInt(`${whole}${paddedFraction}`);
            } catch (e) {
                console.error("Error converting to BigInt:", e);
                return 0n;
            }
        };

        const submittedData = {
            ...data,
            payAmount: toBigInt(data.payAmount),
            receiveAmount: toBigInt(data.receiveAmount),
        };

        console.log("Form Submitted with BigInts:", submittedData);
        navigate("/recipient-details");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <CryptoInput
                title="You pay"
                control={control}
                amountName="payAmount"
                currencyName="payCurrency"
                amountRules={{ required: "Amount is required", pattern: { value: /^[0-9]*\.?[0-9]*$/, message: "Invalid amount" } }}
                error={errors.payAmount?.message}
            />
            <CryptoInput
                title="You receive"
                control={control}
                amountName="receiveAmount"
                currencyName="receiveCurrency"
                amountRules={{ required: "Amount is required" }}
                error={errors.receiveAmount?.message}
            />

            <div className="flex flex-col gap-4">
                <span className="text-[14px] sm:text-[16px] font-medium text-primary font-outfit">Pay from</span>
                <Controller
                    control={control}
                    name="payFrom"
                    rules={{ required: "Please select a wallet" }}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger aria-label="Pay from wallet" className="w-full rounded-full bg-card border border-border px-4 sm:px-[24px] py-3 sm:py-[16px] text-primary font-outfit !h-10 sm:!h-12">
                                <SelectValue placeholder="Select wallet" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="px-[12px] py-[16px] rounded-[20px] w-[90%] mx-auto">
                                {WALLET_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value} className="p-[12px] rounded-md">
                                        <div className="flex items-center gap-2">
                                            <img src={option.icon} alt={option.label} className="size-5" />
                                            <span className="font-normal font-outfit text-[16px]">{option.label}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.payFrom && <span className="text-red-500 text-sm font-outfit">{errors.payFrom.message}</span>}
            </div>

            <div className="flex flex-col gap-4">
                <span className="text-[14px] sm:text-[16px] font-medium text-primary font-outfit">Pay to</span>
                <Controller
                    control={control}
                    name="payTo"
                    rules={{ required: "Please select a wallet" }}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger aria-label="Pay to wallet" className="w-full rounded-full bg-card border border-border px-4 sm:px-[24px] py-3 sm:py-[16px] text-primary font-outfit !h-10 sm:!h-12">
                                <SelectValue placeholder="Select wallet" />
                            </SelectTrigger>
                            <SelectContent position="popper" className="px-[12px] py-[16px] rounded-[20px] w-[90%] mx-auto">
                                {WALLET_OPTIONS.map((option) => (
                                    <SelectItem key={option.value} value={option.value} className="p-[12px] rounded-md">
                                        <div className="flex items-center gap-2">
                                            <img src={option.icon} alt={option.label} className="size-5" />
                                            <span className="font-normal font-outfit text-[16px]">{option.label}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    )}
                />
                {errors.payTo && <span className="text-red-500 text-sm font-outfit">{errors.payTo.message}</span>}
            </div>
            <button type="submit" className="w-full h-12 sm:h-[52px] rounded-full bg-primary text-primary-foreground cursor-pointer font-outfit">Convert now</button>
        </form>
    );
};