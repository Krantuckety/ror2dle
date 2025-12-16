import React from "react";

export default function Home()
{
    return (
        <main className="min-h-screen flex flex-col items-center bg-slate-900 text-slate-100 font-bombardier">
            <img
                src="/public/ror2dle_logo.png"
                alt="ror2dle logo"
                className="w-100 max-w-full mt-8 mb-6"
            />

            <p className="text-2xl text-slate-300 mb-8 text-center max-w-md">
                Guess the Risk of Rain 2 item based on its attributes.
            </p>

            <button className="px-8 py-5 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">
                Start Game
            </button>
        </main>
    );
}