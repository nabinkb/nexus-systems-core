"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';

function randomize(value: number, delta = 4): number {
  const change = (Math.random() - 0.5) * 2 * delta;
  return Math.round(Math.min(100, Math.max(0, value + change)));
}

export default function Home() {
  const [sydney, setSydney] = useState({ cpu: 23, ram: 62, disk: 41 });
  const [kathmandu, setKathmandu] = useState({ cpu: 45, ram: 38, disk: 71 });

  const [clockSYD, setClockSYD] = useState<string>('--:--:--');
  const [clockKTM, setClockKTM] = useState<string>('--:--:--');

  const fmtSYD = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        timeZone: 'Australia/Sydney',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
    []
  );

  const fmtKTM = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        timeZone: 'Asia/Kathmandu',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),
    []
  );

  const lastHeartbeatAtRef = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClockSYD(fmtSYD.format(now));
      setClockKTM(fmtKTM.format(now));

      const nowMs = Date.now();
      if (!lastHeartbeatAtRef.current) lastHeartbeatAtRef.current = nowMs;
      if (nowMs - lastHeartbeatAtRef.current >= 3000) {
        lastHeartbeatAtRef.current = nowMs;
        setSydney((prev) => ({
          cpu: randomize(prev.cpu),
          ram: randomize(prev.ram),
          disk: randomize(prev.disk),
        }));
        setKathmandu((prev) => ({
          cpu: randomize(prev.cpu),
          ram: randomize(prev.ram),
          disk: randomize(prev.disk),
        }));
      }
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [fmtKTM, fmtSYD]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans p-8">
      <main className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-zinc-800 pb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter text-emerald-500">
                NEXUS <span className="text-zinc-500 text-xl font-light">SYSTEMS OPERATIONS</span>
              </h1>
              <p className="text-zinc-500 text-sm mt-2 font-mono">LOCATION: SYDNEY / KATHMANDU SYNC</p>
            </div>

            <div className="flex items-center justify-between gap-3 md:justify-end">
              <div className="text-xs font-medium tracking-wide text-zinc-400">TIMEZONE SYNC</div>
              <div className="flex items-center gap-2">
                <div className="px-3 py-2 rounded-lg border border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.08)]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] tracking-widest text-emerald-400/90">SYD</span>
                    <span className="font-mono text-sm text-emerald-300 tabular-nums">{clockSYD}</span>
                  </div>
                </div>
                <div className="px-3 py-2 rounded-lg border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] tracking-widest text-cyan-300/90">KTM</span>
                    <span className="font-mono text-sm text-cyan-200 tabular-nums">{clockKTM}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <div className="flex justify-between text-sm"><span className="text-zinc-500">CPU</span><span className="font-mono">{sydney.cpu}%</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-1 rounded-full transition-[width] duration-500 ease-out" style={{ width: `${sydney.cpu}%` }}></div>
              </div>
              <div className="flex justify-between text-sm"><span className="text-zinc-500">RAM</span><span className="font-mono">{sydney.ram}%</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-1 rounded-full transition-[width] duration-500 ease-out" style={{ width: `${sydney.ram}%` }}></div>
              </div>
              <div className="flex justify-between text-sm"><span className="text-zinc-500">Disk</span><span className="font-mono">{sydney.disk}%</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-1 rounded-full transition-[width] duration-500 ease-out" style={{ width: `${sydney.disk}%` }}></div>
              </div>
            </div>
          </div>

          {/* Kathmandu Card */}
          <div className="bg-[#141414] border border-zinc-800 p-6 rounded-xl shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Kathmandu Core</h2>
              <span className="bg-yellow-500/10 text-yellow-500 text-[10px] px-2 py-1 rounded-full border border-yellow-500/20">MAINTENANCE</span>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between text-sm"><span className="text-zinc-500">CPU</span><span className="font-mono text-yellow-500">{kathmandu.cpu}%</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-1 rounded-full transition-[width] duration-500 ease-out" style={{ width: `${kathmandu.cpu}%` }}></div>
              </div>
              <div className="flex justify-between text-sm"><span className="text-zinc-500">RAM</span><span className="font-mono text-yellow-500">{kathmandu.ram}%</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-1 rounded-full transition-[width] duration-500 ease-out" style={{ width: `${kathmandu.ram}%` }}></div>
              </div>
              <div className="flex justify-between text-sm"><span className="text-zinc-500">Disk</span><span className="font-mono text-yellow-500">{kathmandu.disk}%</span></div>
              <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden">
                <div className="bg-yellow-500 h-1 rounded-full transition-[width] duration-500 ease-out" style={{ width: `${kathmandu.disk}%` }}></div>
              </div>
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
