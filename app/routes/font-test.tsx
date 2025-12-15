import type { Route } from "./+types/font-test";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Font Test" },
        { name: "description", content: "Testing new fonts" },
    ];
}

export default function FontTest() {
    return (
        <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Font Configuration Test</h1>

            <div className="space-y-2">
                <h2 className="text-sm text-gray-500 uppercase tracking-widest">Outfit</h2>
                <p className="font-outfit text-2xl sm:text-3xl lg:text-4xl font-bold">The quick brown fox jumps over the lazy dog.</p>
                <p className="font-outfit text-lg sm:text-xl">Whereas disregard and contempt for human rights have resulted in barbarous acts...</p>
            </div>

            <div className="space-y-2">
                <h2 className="text-sm text-gray-500 uppercase tracking-widest">Instrument Sans</h2>
                <p className="font-instrument text-2xl sm:text-3xl lg:text-4xl font-bold">The quick brown fox jumps over the lazy dog.</p>
                <p className="font-instrument text-lg sm:text-xl">Whereas disregard and contempt for human rights have resulted in barbarous acts...</p>
            </div>

            <div className="space-y-2">
                <h2 className="text-sm text-gray-500 uppercase tracking-widest">Clash Display</h2>
                <p className="font-clash text-2xl sm:text-3xl lg:text-4xl font-semibold">The quick brown fox jumps over the lazy dog.</p>
                <p className="font-clash text-lg sm:text-xl">Whereas disregard and contempt for human rights have resulted in barbarous acts...</p>
            </div>
        </div>
    );
}
