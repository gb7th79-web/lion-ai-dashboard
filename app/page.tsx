export default function AIFootballDashboard() {
  const matches = [
    {
      home: 'Liverpool',
      away: 'Arsenal',
      prediction: 'สูง 2.5',
      confidence: '82%',
      trend: '+12%'
    },
    {
      home: 'Madrid',
      away: 'Barcelona',
      prediction: 'Madrid Win',
      confidence: '74%',
      trend: '+8%'
    },
    {
      home: 'Bayern',
      away: 'Dortmund',
      prediction: 'BTTS',
      confidence: '79%',
      trend: '+15%'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-fuchsia-900/20" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-700/20 blur-3xl rounded-full" />

      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-purple-500/20 backdrop-blur-xl bg-white/5">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center shadow-2xl shadow-purple-500/50 border border-white/10">
            <div className="text-5xl">🦁</div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-green-400 animate-pulse" />
          </div>

          <div>
            <h1 className="text-3xl font-black tracking-wide bg-gradient-to-r from-fuchsia-300 to-purple-500 bg-clip-text text-transparent">
              LION AI FOOTBALL
            </h1>
            <p className="text-sm text-purple-200/70">
              Smart Prediction Dashboard
            </p>
          </div>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          {['Dashboard', 'Live AI', 'ราคาไหล', 'Predictions'].map((item) => (
            <button
              key={item}
              className="px-5 py-2 rounded-2xl bg-white/5 hover:bg-purple-500/20 border border-white/10 transition-all duration-300 hover:scale-105"
            >
              {item}
            </button>
          ))}

          <a
            href="https://t.me/ambvariety88"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-400 text-black font-black shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
          >
            Telegram Channel
          </a>
        </nav>
      </header>

      <main className="relative z-10 px-6 md:px-10 py-8 space-y-8">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-[30px] border border-purple-500/20 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-purple-900/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-purple-300 text-sm">AI วิเคราะห์วันนี้</p>
                  <h2 className="text-4xl font-black mt-1">
                    คู่เด่นประจำวัน
                  </h2>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-green-500/20 border border-green-400/30 text-green-300 font-bold">
                  LIVE AI
                </div>
              </div>

              <div className="rounded-[28px] bg-gradient-to-r from-fuchsia-600 to-purple-700 p-[1px]">
                <div className="rounded-[28px] bg-black/80 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="text-sm text-purple-300">พรีเมียร์ลีก อังกฤษ</p>
                    <h3 className="text-3xl font-black mt-2">
                      Liverpool VS Arsenal
                    </h3>

                    <div className="flex gap-3 mt-5 flex-wrap">
                      <span className="px-4 py-2 rounded-xl bg-purple-500/20 text-purple-200 border border-purple-500/20">
                        สูง 2.5
                      </span>

                      <span className="px-4 py-2 rounded-xl bg-pink-500/20 text-pink-200 border border-pink-500/20">
                        xG สูง
                      </span>

                      <span className="px-4 py-2 rounded-xl bg-green-500/20 text-green-200 border border-green-500/20">
                        ยิงท้ายเกมสูง
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <div className="w-36 h-36 rounded-full border-[10px] border-purple-500 flex items-center justify-center shadow-2xl shadow-purple-500/40 bg-black/60">
                      <div className="text-center">
                        <p className="text-5xl font-black text-fuchsia-300">82%</p>
                        <p className="text-sm text-purple-200">AI Confidence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-purple-500/20 bg-white/5 backdrop-blur-2xl p-6 shadow-2xl shadow-purple-900/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-purple-300 text-sm">AI STATUS</p>
                <h3 className="text-2xl font-black">ระบบวิเคราะห์</h3>
              </div>

              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-5">
                <div className="flex items-center justify-between mb-2">
                  <p>AI Accuracy</p>
                  <p className="font-black text-fuchsia-300">91%</p>
                </div>

                <div className="w-full h-3 rounded-full bg-black/50 overflow-hidden">
                  <div className="w-[91%] h-full bg-gradient-to-r from-fuchsia-500 to-purple-500 rounded-full" />
                </div>
              </div>

              <div className="rounded-2xl bg-purple-500/10 border border-purple-500/20 p-5">
                <div className="flex items-center justify-between mb-2">
                  <p>Live Matches</p>
                  <p className="font-black text-green-300">14</p>
                </div>

                <div className="w-full h-3 rounded-full bg-black/50 overflow-hidden">
                  <div className="w-[70%] h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-fuchsia-600 to-purple-700 p-6 text-center shadow-2xl shadow-purple-500/30">
                <div className="text-7xl mb-3">🦁</div>
                <h4 className="text-2xl font-black">Lion AI Active</h4>
                <p className="text-purple-100/80 mt-2 text-sm">
                  วิเคราะห์ราคาไหล + Momentum แบบ Real-time
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[30px] border border-purple-500/20 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-purple-900/30">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <p className="text-purple-300 text-sm">TODAY PREDICTIONS</p>
              <h2 className="text-3xl font-black">AI Match Predictions</h2>
            </div>

            <input
              placeholder="ค้นหาทีม..."
              className="bg-black/40 border border-purple-500/20 rounded-2xl px-5 py-3 outline-none focus:border-fuchsia-400 w-full md:w-80"
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {matches.map((match, index) => (
              <div
                key={index}
                className="group rounded-[28px] bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 p-6 hover:scale-[1.02] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="px-4 py-2 rounded-xl bg-green-500/20 text-green-300 text-sm font-bold">
                    HOT MATCH
                  </span>

                  <span className="text-purple-300 text-sm">
                    {match.trend}
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-tight">
                  {match.home}
                  <br />
                  <span className="text-fuchsia-300">VS</span>
                  <br />
                  {match.away}
                </h3>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-purple-200/70">Prediction</p>
                    <p className="font-bold text-fuchsia-300">
                      {match.prediction}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-purple-200/70">Confidence</p>
                    <p className="font-black text-green-300 text-xl">
                      {match.confidence}
                    </p>
                  </div>
                </div>

                <button className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-purple-700 font-black text-lg hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/30">
                  วิเคราะห์เพิ่มเติม
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-[30px] border border-purple-500/20 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-purple-900/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-purple-300 text-sm">ODDS MOVEMENT</p>
                <h3 className="text-2xl font-black">ราคาไหล AI</h3>
              </div>

              <div className="text-green-300 font-black">LIVE</div>
            </div>

            <div className="h-64 rounded-[24px] bg-gradient-to-br from-purple-900/50 to-black border border-purple-500/20 flex items-end gap-3 p-6 overflow-hidden">
              {[40, 65, 55, 80, 72, 90, 60, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-2xl bg-gradient-to-t from-fuchsia-600 to-purple-400 animate-pulse"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-purple-500/20 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl shadow-purple-900/30">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-purple-300 text-sm">LIVE ALERTS</p>
                <h3 className="text-2xl font-black">AI Notifications</h3>
              </div>

              <div className="w-4 h-4 rounded-full bg-red-400 animate-ping" />
            </div>

            <div className="space-y-4">
              {[
                '⚡ ราคาไหลผิดปกติ Liverpool',
                '🔥 มีโอกาสยิงใน 10 นาที',
                '📈 AI ตรวจพบ Value Bet',
                '🚨 Momentum ฝั่งเจ้าบ้านสูงมาก'
              ].map((alert, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-purple-500/20 bg-black/40 p-5 flex items-center justify-between hover:bg-purple-500/10 transition-all"
                >
                  <span>{alert}</span>
                  <button className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition-all">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
