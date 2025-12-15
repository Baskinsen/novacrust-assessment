import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { ArrowLeft } from "lucide-react";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./ui/button";
import { BANK_OPTIONS, COUNTRY_CODES } from "~/constants/data";
import { motion, AnimatePresence } from "framer-motion";

interface RecipientFormData {
    bank: string;
    accountNumber: string;
    accountName: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
}

export const RecipientDetailsForm = ({ onBack }: { onBack?: () => void }) => {
    const [step, setStep] = useState(1);
    const { control, handleSubmit, setValue, watch, formState: { errors, isValid } } = useForm<RecipientFormData>({
        mode: "onChange",
        defaultValues: {
            bank: "",
            accountNumber: "",
            accountName: "",
            email: "",
            countryCode: "+234",
            phoneNumber: "",
        }
    });

    const onSubmit = (data: RecipientFormData) => {
        console.log("Recipient Details Submitted:", data);
    };

    const bank = watch("bank");
    const accountNumber = watch("accountNumber");
    const accountName = watch("accountName");
    const isStep1Valid = bank && accountNumber && accountNumber.length === 10 && accountName;

    const handleNext = () => {
        setStep(2);
    };

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
        } else if (onBack) {
            onBack();
        }
    };

    return (
        <div className="w-full max-w-[500px] border border-border rounded-[30px] bg-card p-4 sm:p-6">
            <div className="flex gap-4 mb-4 sm:mb-6">
                <button onClick={handleBack} className="p-2 hover:bg-secondary/20 rounded-full transition-colors cursor-pointer">
                    <ArrowLeft className="w-6 h-6 text-primary" />
                </button>
                <h2 className="text-[18px] sm:text-[20px] font-medium font-outfit text-primary text-center m-auto">Recipient Details</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 sm:gap-6">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-4 sm:gap-6"
                        >
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] sm:text-[16px] font-medium text-primary font-outfit">Bank</label>
                                <Controller
                                    control={control}
                                    name="bank"
                                    rules={{ required: "Please select a bank" }}
                                    render={({ field }) => (
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <SelectTrigger className="w-full rounded-full bg-card border border-border px-4 sm:px-[24px] py-3 sm:py-[16px] text-primary font-outfit !h-10 sm:!h-12">
                                                <SelectValue placeholder="Select bank" />
                                            </SelectTrigger>
                                            <SelectContent position="popper" className="w-[90%] rounded-[20px] px-[12px] py-[16px]">
                                                {BANK_OPTIONS.map((option) => (
                                                    <SelectItem key={option.value} value={option.value} className="rounded-md p-[12px] font-outfit">
                                                        {option.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                                {errors.bank && <span className="text-red-500 text-sm font-outfit">{errors.bank.message}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="accountNumber" className="text-[14px] sm:text-[16px] font-medium text-primary font-outfit">Account Number</label>
                                <Controller
                                    control={control}
                                    name="accountNumber"
                                    rules={{
                                        required: "Account number is required",
                                        minLength: { value: 10, message: "Must be 10 digits" },
                                        maxLength: { value: 10, message: "Must be 10 digits" },
                                        pattern: { value: /^[0-9]+$/, message: "Numbers only" }
                                    }}
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="accountNumber"
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={10}
                                            className="h-10 sm:h-12 rounded-full border-border bg-card px-4 sm:px-[24px] py-3 sm:py-[16px] font-outfit text-primary focus-visible:ring-primary"
                                            placeholder="0123456789"
                                            onChange={(e) => {
                                                const numericValue = e.target.value.replace(/[^0-9]/g, '');
                                                e.target.value = numericValue;
                                                field.onChange(e);
                                                if (numericValue.length === 10) {
                                                    setTimeout(() => {
                                                        setValue("accountName", "John Doe Verified");
                                                    }, 500);
                                                } else {
                                                    setValue("accountName", "");
                                                }
                                            }}
                                        />
                                    )}
                                />
                                {errors.accountNumber && <span className="text-red-500 text-sm font-outfit">{errors.accountNumber.message}</span>}
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="accountName" className="text-[14px] sm:text-[16px] font-medium text-primary font-outfit">Account Name</label>
                                <Controller
                                    control={control}
                                    name="accountName"
                                    render={({ field }) => (
                                        <Input
                                            {...field}
                                            id="accountName"
                                            disabled
                                            className="h-10 sm:h-12 rounded-full border-border bg-secondary/20 px-4 sm:px-[24px] py-3 sm:py-[16px] font-outfit text-muted-foreground cursor-not-allowed"
                                            placeholder="Account Name"
                                        />
                                    )}
                                />
                            </div>

                            <Button
                                type="button"
                                onClick={handleNext}
                                disabled={!isStep1Valid}
                                className="w-full h-12 sm:h-[52px] rounded-full bg-primary text-primary-foreground font-outfit mt-4 hover:bg-primary/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </Button>
                        </motion.div >
                    )}

                    {
                        step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="flex flex-col gap-4 sm:gap-6"
                            >
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-[14px] sm:text-[16px] font-medium text-primary font-outfit">Recipient Email</label>
                                    <Controller
                                        control={control}
                                        name="email"
                                        rules={{
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                        }}
                                        render={({ field }) => (
                                            <Input
                                                {...field}
                                                id="email"
                                                type="email"
                                                className="h-10 sm:h-12 rounded-full border-border bg-card px-4 sm:px-[24px] py-3 sm:py-[16px] font-outfit text-primary focus-visible:ring-primary"
                                                placeholder="user@example.com"
                                            />
                                        )}
                                    />
                                    {errors.email && <span className="text-red-500 text-sm font-outfit">{errors.email.message}</span>}
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phoneNumber" className="text-[14px] sm:text-[16px] font-medium text-primary font-outfit">Phone Number</label>
                                    <div className="flex">
                                        <Controller
                                            control={control}
                                            name="countryCode"
                                            render={({ field }) => (
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger className="w-20 sm:w-[110px] rounded-l-full bg-foreground border border-border px-2 text-primary font-outfit">
                                                        <SelectValue />
                                                    </SelectTrigger>
                                                    <SelectContent position="popper" className="rounded-[20px] p-2">
                                                        {COUNTRY_CODES.map((code) => (
                                                            <SelectItem key={code.value} value={code.value} className="rounded-md font-outfit">
                                                                {code.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        <Controller
                                            control={control}
                                            name="phoneNumber"
                                            rules={{ required: "Phone number is required" }}
                                            render={({ field }) => (
                                                <Input
                                                    {...field}
                                                    id="phoneNumber"
                                                    className=" flex-1 rounded-r-full border-border bg-card px-4 sm:px-[24px] py-3 sm:py-[16px] font-outfit text-primary focus-visible:ring-primary"
                                                    placeholder="8123456789"
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.phoneNumber && <span className="text-red-500 text-sm font-outfit">{errors.phoneNumber.message}</span>}
                                </div>

                                <Button
                                    type="submit"
                                    disabled={!isValid}
                                    className="w-full h-12 sm:h-[52px] rounded-full bg-primary text-primary-foreground font-outfit mt-4 hover:bg-primary/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Confirm
                                </Button>
                            </motion.div>
                        )
                    }
                </AnimatePresence >
            </form >
        </div >
    );
};
