import { useState } from "react";
import { type Control, Controller, type RegisterOptions } from "react-hook-form";
import { Search } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { COIN_OPTIONS } from "~/constants/data";

interface CryptoInputProps {
    title: string;
    control: Control<any>;
    amountName: string;
    currencyName: string;
    error?: string;
    amountRules?: RegisterOptions;
}

export const CryptoInput = ({ title, control, amountName, currencyName, error, amountRules }: CryptoInputProps) => {
    const [search, setSearch] = useState("");

    const filteredOptions = COIN_OPTIONS.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 sm:p-6 border border-border rounded-[30px] bg-card">
            <label htmlFor={amountName} className="text-muted-foreground font-medium font-outfit text-[14px] sm:text-[16px] mb-2 block">{title}</label>
            <div className="flex items-center justify-between gap-2 sm:gap-4">
                <Controller
                    control={control}
                    name={amountName}
                    rules={amountRules}
                    render={({ field }) => (
                        <Input
                            {...field}
                            id={amountName}
                            className="border-none shadow-none focus-visible:ring-0 text-[28px] sm:text-3xl font-semibold p-0 h-auto font-outfit text-[#000E10]"
                            placeholder="0.00"
                        />
                    )}
                />

                <Controller
                    control={control}
                    name={currencyName}
                    render={({ field }) => (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger aria-label="Select coin" className="w-fit border-none shadow-none focus:ring-0 bg-foreground rounded-full px-4 py-2 gap-2 h-auto text-[#000E10]">
                                <SelectValue placeholder="Select coin" />
                            </SelectTrigger>
                            <SelectContent position="popper" align="end" className=" px-[12px] py-[16px] rounded-2xl">
                                <div className="relative mb-2">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-[#000E10]" />
                                    <Input
                                        placeholder="Search coin..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        onKeyDown={(e) => e.stopPropagation()}
                                        className="h-9 pl-8 text-[#000E10] text-[24px] font-semibold font-outfit rounded-full"
                                        aria-label="Search coin"
                                    />
                                </div>
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((option) => (
                                        <SelectItem key={option.value} value={option.value} className="p-[12px] rounded-md">
                                            <div className="flex items-center gap-2">
                                                <img src={option.icon} alt={option.label} className="size-5" />
                                                <span className="font-medium font-clash text-[16px]">{option.label}</span>
                                            </div>
                                        </SelectItem>
                                    ))
                                ) : (
                                    <div className="p-2 text-sm text-[#000E10] text-center">
                                        No coins found
                                    </div>
                                )}
                            </SelectContent>
                        </Select>
                    )}
                />
            </div>
            {error && <span className="text-red-500 text-sm mt-2 block font-outfit">{error}</span>}
        </div>
    );
};