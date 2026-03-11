"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans p-8">
      <main className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-zinc-800 pb-6">
          <h1 className="text-3xl font-bold tracking-tighter text-emerald-500">
            NEXUS <span className="text-zinc-500 text-xl font-light">SYSTEMS OPERATIONS</span>
          </h1>
          <p className="text-zinc-500 text-sm mt-2 font-mono">LOCATION: SYDNEY / KATHMANDU SYNC</p>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Sydney Card */}
          <div className="bg-[#141414] border border-zinc-800 p-6 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Sydney Infrastructure</h2>
              <span className="bg-emerald-500/10 text-emerald-500 text-[10px] px-2 py-1 rounded-full border border-emerald-500/20">OPERATIONAL</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm"><span className="text-zinc-500">Node Load</span><span className="font-mono">23%</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full"><div className="bg-emerald-500 h-1 rounded-full w-[23%]"></div></div>
            </div>
          </div>

          {/* Kathmandu Card */}
          <div className="bg-[#141414] border border-zinc-800 p-6 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Kathmandu Core</h2>
              <span className="bg-yellow-500/10 text-yellow-500 text-[10px] px-2 py-1 rounded-full border border-yellow-500/20">MAINTENANCE</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm"><span className="text-zinc-500">Sync Status</span><span className="font-mono text-yellow-500">RUNNING DIAGNOSTICS</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full"><div className="bg-yellow-500 h-1 rounded-full w-[45%] animate-pulse"></div></div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-zinc-600 text-xs font-mono">INTEGRATED AI CLOUD INTERFACE v1.0.0</p>
        </div>
      </main>
    </div>
  );
}