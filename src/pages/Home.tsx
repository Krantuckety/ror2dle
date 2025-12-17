import React from "react";
import Ror2Button from "../components/Ror2Button";

export default function Home()
{
    return (
        <main className="min-h-screen flex flex-col items-center text-slate-100 font-bombardier">
            <img
                src="/ror2dle_logo.png"
                alt="ror2dle logo"
                className="w-100 max-w-full mt-8 mb-6"
            />
            <p className="text-2xl text-slate-300 mb-8 text-center max-w-md">
                Guess the Risk of Rain 2 item based on its attributes.
            </p>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
                <Ror2Button size="lrg">Classic</Ror2Button>
                <Ror2Button size="lrg">Ability</Ror2Button>
                <Ror2Button size="lrg">Monster</Ror2Button>
                <Ror2Button size="lrg">Stage</Ror2Button>
            </div>

            <Ror2Button size="med" className="fixed bottom-[1.5rem] right-6">Background</Ror2Button>
            <Ror2Button size="sqr" className="fixed bottom-[5rem] right-6">🎵</Ror2Button>
            <Ror2Button size="sqr" className="fixed bottom-[8.5rem] right-6">☕</Ror2Button>
        </main>
    );
}