import { Fragment, useState, type ReactNode } from "react"
import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
  useNavigate,
} from "react-router"

type IconName = "home" | "spark" | "price" | "calendar" | "history" | "insight" | "profile" | "chevron" | "gift" | "copy" | "arrow" | "check" | "upload" | "phone" | "mail" | "store" | "camera" | "clock" | "refresh" | "logout"

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    home: (
      <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z" />
    ),
    spark: (
      <>
        <path d="m12 3-1.35 5.65L5 10l5.65 1.35L12 17l1.35-5.65L19 10l-5.65-1.35L12 3Z" />
        <path d="m5 16-.55 2.45L2 19l2.45.55L5 22l.55-2.45L8 19l-2.45-.55L5 16Z" />
      </>
    ),
    price: (
      <>
        <path d="M3.5 6.5v-3h9l8 8-9 9-8-8v-6Z" />
        <circle cx="7.5" cy="7.5" r="1" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </>
    ),
    history: (
      <>
        <path d="M3 12a9 9 0 1 0 2.64-6.36L3 8.27" />
        <path d="M3 3v5.27h5.27M12 7v5l3 2" />
      </>
    ),
    insight: (
      <>
        <path d="M4 19V9M10 19V5M16 19v-7M22 19H2" />
        <path d="m4 7 5-3 6 4 6-6" />
      </>
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c.8-4.2 3.47-6.3 8-6.3s7.2 2.1 8 6.3" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    gift: (
      <>
        <rect x="3" y="9" width="18" height="12" rx="2" />
        <path d="M12 9v12M2 6h20v3H2zM12 6H8.5A2.5 2.5 0 1 1 11 3.5C11 5 12 6 12 6Zm0 0h3.5A2.5 2.5 0 1 0 13 3.5C13 5 12 6 12 6Z" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="11" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    upload: (
      <>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M20 16v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3" />
      </>
    ),
    phone: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    store: (
      <>
        <path d="M4 10h16l-1.4-6H5.4L4 10Z" />
        <path d="M6 10v10h12V10M9 20v-6h6v6" />
      </>
    ),
    camera: (
      <>
        <path d="M4 8h4l2-3h4l2 3h4v11H4V8Z" />
        <circle cx="12" cy="13.5" r="3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 11a8 8 0 0 0-14.9-3M4 5v4h4" />
        <path d="M4 13a8 8 0 0 0 14.9 3M20 19v-4h-4" />
      </>
    ),
    logout: (
      <>
        <path d="M10 17l5-5-5-5" />
        <path d="M15 12H3" />
        <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" />
      </>
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

const tools = [
  {
    id: "caption",
    path: "/caption",
    title: "Buat Caption\n& Hashtag",
    desc: "Upload foto, pilih gaya, langsung siap posting.",
    icon: "spark" as const,
    className: "bg-[#ff713d] text-white",
    bubble: "bg-[#ff9d76]",
  },
  {
    id: "price",
    path: "/price",
    title: "Cek Harga\nKompetitor",
    desc: "Bandingkan harga marketplace dengan margin aman.",
    icon: "price" as const,
    className: "bg-[#ffe5d7] text-[#2b3543]",
    bubble: "bg-[#ffc7ae]",
  },
  {
    id: "schedule",
    path: "/scheduler",
    title: "Jam Posting\nTerbaik",
    desc: "Lihat heatmap jam ramai dan jadwalkan konten.",
    icon: "calendar" as const,
    className: "bg-[#ddecdf] text-[#2b3543]",
    bubble: "bg-[#bfe1c3]",
  },
]

function Brand() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#ff6b35] text-white shadow-[0_5px_0_#db5427]">
        <Icon name="spark" size={22} />
      </div>
      <div>
        <p className="text-[15px] font-bold tracking-[-.04em]">
          Jualin<span className="text-[#ff6b35]">Aja</span>
        </p>
        <p className="-mt-0.5 text-[9px] font-bold uppercase tracking-[.15em] text-[#9c795f]">
          Teman Jualanmu
        </p>
      </div>
    </div>
  )
}

function BackHeader({ title }: { title: string }) {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-between">
      <button
        onClick={() => navigate(-1)}
        className="grid h-10 w-10 place-items-center rounded-full border border-[#f1dfd1] bg-white text-[#394755]"
        aria-label="Kembali"
      >
        <span className="rotate-180">
          <Icon name="arrow" size={18} />
        </span>
      </button>
      <p className="text-[13px] font-bold">{title}</p>
      <button
        className="grid h-10 w-10 place-items-center rounded-full bg-[#fff0e9] text-[#e65d2c]"
        aria-label="Bantuan"
      >
        <Icon name="spark" size={18} />
      </button>
    </div>
  )
}

function Onboarding() {
  const navigate = useNavigate()
  const [slide, setSlide] = useState(0)
  const slides = [
    {
      icon: "camera" as const,
      title: "Foto produk masuk, caption langsung siap",
      desc: "AI bantu bikin caption dan hashtag yang terasa lebih menjual.",
    },
    {
      icon: "price" as const,
      title: "Harga jual lebih yakin",
      desc: "Lihat rentang harga kompetitor sebelum menentukan harga produkmu.",
    },
    {
      icon: "clock" as const,
      title: "Posting di jam yang lebih ramai",
      desc: "Rekomendasi jadwal dibuat simpel, cocok untuk owner yang sibuk.",
    },
  ]
  const active = slides[slide]
  const next = () =>
    slide === slides.length - 1 ? navigate("/login") : setSlide(slide + 1)

  return (
    <AuthFrame>
      <div className="flex min-h-[720px] flex-col px-5 pb-6 pt-6">
        <div className="flex justify-end">
          <button
            onClick={() => navigate("/login")}
            className="rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#8d7462]"
          >
            Lewati
          </button>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="relative grid h-56 w-full place-items-center">
            <div className="absolute h-44 w-44 rounded-full bg-[#ffe6d8]" />
            <div className="absolute left-8 top-12 h-16 w-20 rotate-[-8deg] rounded-[18px] bg-[#ddecdf] shadow-[0_8px_0_#b7d9bd]" />
            <div className="absolute bottom-10 right-8 h-16 w-24 rotate-[7deg] rounded-[18px] bg-[#263240] shadow-[0_8px_0_#151e28]" />
            <div className="relative grid h-32 w-32 place-items-center rounded-[34px] bg-[#ff6b35] text-white shadow-[0_12px_0_#db5427]">
              <Icon name={active.icon} size={58} />
            </div>
          </div>
          <h1 className="mt-5 text-[28px] font-bold leading-[1.15] tracking-[-.055em]">
            {active.title}
          </h1>
          <p className="mt-3 max-w-[285px] text-[13px] leading-relaxed text-[#7c6657]">
            {active.desc}
          </p>
          <div className="mt-8 flex gap-2">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === slide ? "w-7 bg-[#ff6b35]" : "w-2 bg-[#ead8cb]"
                }`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className="flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#ff6b35] py-3.5 text-[13px] font-bold text-white shadow-[0_6px_0_#dc5429]"
        >
          {slide === slides.length - 1 ? "Mulai Sekarang" : "Lanjut"}{" "}
          <Icon name="arrow" size={17} />
        </button>
      </div>
    </AuthFrame>
  )
}

function Login() {
  const navigate = useNavigate()
  return (
    <AuthFrame>
      <div className="px-5 pb-6 pt-7">
        <Brand />
        <div className="mt-12">
          <p className="text-sm font-semibold text-[#a87856]">
            Halo, pejuang jualan.
          </p>
          <h1 className="mt-2 text-[31px] font-bold leading-[1.1] tracking-[-.06em]">
            Yuk, jualan
            <br />
            <span className="text-[#ff6b35]">makin gampang!</span>
          </h1>
          <p className="mt-3 text-[13px] leading-relaxed text-[#7c6657]">
            Masuk dulu supaya riwayat caption, harga, dan jadwal postingmu
            tersimpan rapi.
          </p>
        </div>
        <div className="mt-8 space-y-3">
          <label className="block">
            <span className="mb-2 block text-[11px] font-bold text-[#8a7162]">
              Nomor HP atau email
            </span>
            <div className="flex items-center gap-2 rounded-[18px] border border-[#f0ddd0] bg-white px-3 py-3 text-[#6b7783]">
              <Icon name="mail" size={18} />
              <input
                className="w-full bg-transparent text-[13px] font-semibold outline-none placeholder:text-[#b9a696]"
                placeholder="rani@email.com"
              />
            </div>
          </label>
          <button
            onClick={() => navigate("/")}
            className="flex w-full items-center justify-center gap-2 rounded-[18px] bg-[#ff6b35] py-3.5 text-[13px] font-bold text-white shadow-[0_6px_0_#dc5429]"
          >
            Masuk / Daftar <Icon name="arrow" size={17} />
          </button>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2.5">
          <button className="flex items-center justify-center gap-2 rounded-[15px] border border-[#f0ddd0] bg-white py-3 text-[11px] font-bold text-[#42505d]">
            <Icon name="phone" size={16} /> WhatsApp
          </button>
          <button className="flex items-center justify-center gap-2 rounded-[15px] border border-[#f0ddd0] bg-white py-3 text-[11px] font-bold text-[#42505d]">
            <Icon name="store" size={16} /> Shopee
          </button>
        </div>
        <div className="mt-8 rounded-[22px] bg-[#fff0e9] p-4">
          <p className="text-[11px] font-bold text-[#d6532b]">
            Free tier tersedia
          </p>
          <p className="mt-1 text-[12px] leading-relaxed text-[#7d6758]">
            Coba 5 generate per hari sebelum upgrade ke subscription atau
            pay-per-use.
          </p>
        </div>
      </div>
    </AuthFrame>
  )
}

function Home() {
  const navigate = useNavigate()
  return (
    <>
      <div className="mt-7 reveal">
        <p className="text-sm font-semibold text-[#a87856]">
          Selamat pagi, Rani dari Rani Dailywear!
        </p>
        <h1 className="mt-1 text-[27px] font-bold leading-[1.18] tracking-[-.06em]">
          Siap bikin jualanmu
          <br />
          <span className="text-[#ff6b35]">makin laris?</span>
        </h1>
      </div>
      <button className="reveal relative mt-5 flex w-full overflow-hidden rounded-[22px] bg-[#263240] p-4 text-left text-white shadow-[0_12px_20px_rgba(38,50,64,.16)]">
        <div className="relative z-10">
          <p className="text-[11px] font-semibold text-[#ffc9ae]">
            Kuota gratis hari ini
          </p>
          <p className="mt-1 text-xl font-bold tracking-[-.05em]">
            3{" "}
            <span className="text-sm font-medium text-slate-300">
              dari 5 generate
            </span>
          </p>
          <div className="mt-3 h-1.5 w-44 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-3/5 rounded-full bg-[#ff7d4c]" />
          </div>
        </div>
        <div className="float-card absolute right-3 top-1 grid h-20 w-20 place-items-center rounded-[27px] bg-[#ff8a62] text-white shadow-[0_8px_0_#de5a30]">
          <Icon name="spark" size={42} />
        </div>
      </button>
      <div className="mt-7 flex items-end justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[.14em] text-[#aa8267]">
            Mulai dari sini
          </p>
          <h2 className="mt-1 text-lg font-bold tracking-[-.045em]">
            Mau dibantu apa?
          </h2>
        </div>
        <button
          onClick={() => navigate("/caption")}
          className="flex items-center gap-1 text-xs font-bold text-[#e65d2c]"
        >
          Lihat semua <Icon name="arrow" size={15} />
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => navigate(tool.path)}
            className={`min-h-[170px] rounded-[22px] p-3 text-left transition hover:-translate-y-1 ${tool.className}`}
          >
            <span
              className={`grid h-9 w-9 place-items-center rounded-xl ${tool.bubble} ${
                tool.id === "caption" ? "text-white" : "text-[#e65d2c]"
              }`}
            >
              <Icon name={tool.icon} size={19} />
            </span>
            <p className="mt-4 whitespace-pre-line text-[13px] font-bold leading-[1.18] tracking-[-.04em]">
              {tool.title}
            </p>
            <p
              className={`mt-2 text-[9px] leading-[1.42] ${
                tool.id === "caption" ? "text-white/82" : "text-[#65717b]"
              }`}
            >
              {tool.desc}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-7 rounded-[22px] border border-[#f2dfd2] bg-[#fff6ef] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#aa8267]">
              Insight cepat
            </p>
            <p className="mt-1 text-[14px] font-bold">
              Thrift shop ramai malam ini
            </p>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ddecdf] text-[#27834f]">
            <Icon name="clock" size={20} />
          </span>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-[#6d7a69]">
          Kategori baju preloved biasanya lebih kuat di 19.00-21.00. Siapkan
          foto produk terbaikmu.
        </p>
        <button
          onClick={() => navigate("/scheduler")}
          className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#e65d2c]"
        >
          Cek jadwal <Icon name="arrow" size={14} />
        </button>
      </div>
    </>
  )
}

function CaptionGenerator() {
  const [tone, setTone] = useState("Persuasif")
  const [copied, setCopied] = useState(false)
  return (
    <div className="mt-4">
      <BackHeader title="Caption & Hashtag" />
      <section className="mt-5 rounded-[24px] border border-dashed border-[#f0cbb8] bg-[#fff6ef] p-4 text-center">
        <div className="mx-auto grid h-28 w-full place-items-center rounded-[20px] bg-white text-[#e65d2c]">
          <div>
            <Icon name="upload" size={32} />
            <p className="mt-2 text-[11px] font-bold text-[#8a7162]">
              Upload foto produk
            </p>
          </div>
        </div>
        <p className="mt-3 text-[10px] leading-relaxed text-[#927a69]">
          Contoh: foto kemeja linen, tote bag, atau makanan rumahan.
        </p>
      </section>
      <section className="mt-5">
        <p className="text-[11px] font-bold uppercase tracking-[.13em] text-[#aa8267]">
          Gaya bahasa
        </p>
        <div className="mt-2 flex gap-2">
          {["Persuasif", "Santai", "Formal"].map((option) => (
            <button
              key={option}
              onClick={() => setTone(option)}
              className={`rounded-full px-3 py-2 text-[11px] font-bold ${
                tone === option
                  ? "bg-[#ff6b35] text-white shadow-[0_4px_0_#dc5429]"
                  : "bg-white text-[#8a7162] border border-[#f0ddd0]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </section>
      <section className="mt-5 rounded-[24px] bg-[#263240] p-4 text-white">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold text-[#ffc9ae]">
            Hasil caption {tone}
          </p>
          <button
            onClick={() => setCopied(true)}
            className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-[#ffc9ae]"
            aria-label="Salin caption"
          >
            <Icon name="copy" size={17} />
          </button>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed">
          Kemeja linen yang adem, rapi, dan gampang dipaduin buat ngantor atau
          hangout. Stok terbatas, pilih warna favoritmu sekarang sebelum
          kehabisan.
        </p>
        {copied && (
          <p className="mt-3 text-[10px] font-bold text-[#8ee0a4]">
            Caption sudah disalin!
          </p>
        )}
      </section>
      <div className="mt-4 flex flex-wrap gap-2">
        {[
          "#ootdhijab",
          "#kemejalinen",
          "#jualanfashion",
          "#umkmbandung",
          "#dailywear",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#fff0e9] px-3 py-1.5 text-[10px] font-bold text-[#d6532b]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto] gap-3">
        <button className="flex items-center justify-center gap-2 rounded-[17px] bg-[#ff6b35] py-3 text-[12px] font-bold text-white shadow-[0_5px_0_#dc5429]">
          <Icon name="refresh" size={16} /> Generate Ulang
        </button>
        <span className="grid place-items-center rounded-[17px] bg-[#fff0e9] px-3 text-[10px] font-bold text-[#d6532b]">
          Sisa 2
        </span>
      </div>
    </div>
  )
}

function PriceAdvisor() {
  const competitors = [
    ["Shopee", "Rp88.000", "Normal", "bg-[#e2f2e4] text-[#27834f]"],
    ["TikTok Shop", "Rp93.500", "Normal", "bg-[#e2f2e4] text-[#27834f]"],
    ["Tokopedia", "Rp61.000", "Tidak wajar", "bg-[#ffe7d9] text-[#d6532b]"],
    ["Instagram", "Rp105.000", "Premium", "bg-[#fff0c7] text-[#a56c12]"],
  ]
  return (
    <div className="mt-4">
      <BackHeader title="AI Price Advisor" />
      <section className="mt-5 space-y-3">
        <label className="block">
          <span className="mb-2 block text-[11px] font-bold text-[#8a7162]">
            Kategori produk
          </span>
          <select className="w-full rounded-[17px] border border-[#f0ddd0] bg-white px-3 py-3 text-[12px] font-bold text-[#394755] outline-none">
            <option>Fashion - Kemeja Linen</option>
            <option>Kuliner Rumahan</option>
            <option>Aksesoris</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-[11px] font-bold text-[#8a7162]">
            Nama produk
          </span>
          <input
            className="w-full rounded-[17px] border border-[#f0ddd0] bg-white px-3 py-3 text-[12px] font-bold text-[#394755] outline-none"
            defaultValue="Kemeja linen oversize"
          />
        </label>
        <label className="block">
          <span className="mb-2 flex justify-between text-[11px] font-bold text-[#8a7162]">
            <span>Margin diinginkan</span>
            <span>35%</span>
          </span>
          <input
            type="range"
            min="10"
            max="60"
            defaultValue="35"
            className="w-full accent-[#ff6b35]"
          />
        </label>
      </section>
      <section className="mt-5 rounded-[24px] bg-[#263240] p-4 text-white">
        <p className="text-[11px] text-[#ffc9ae]">Rekomendasi harga</p>
        <p className="mt-1 text-2xl font-bold">Rp89.000 - Rp99.000</p>
        <div className="relative mt-5 h-3 rounded-full bg-white/15">
          <div className="absolute left-[42%] h-3 w-[28%] rounded-full bg-[#ff7948]" />
          <span className="absolute left-[40%] top-5 text-[9px] text-slate-300">
            aman
          </span>
        </div>
      </section>
      <h2 className="mt-5 text-base font-bold tracking-[-.04em]">
        Harga kompetitor
      </h2>
      <div className="mt-3 space-y-2.5">
        {competitors.map(([name, price, status, color]) => (
          <div
            key={name}
            className="flex items-center gap-3 rounded-[18px] border border-[#f1e2d8] bg-white p-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#fff0e9] text-[#e65d2c]">
              <Icon name="store" size={18} />
            </span>
            <span className="flex-1">
              <strong className="block text-[12px]">{name}</strong>
              <small className="text-[10px] text-[#927a69]">{price}</small>
            </span>
            <span
              className={`rounded-full px-2 py-1 text-[9px] font-bold ${color}`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function Scheduler() {
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]
  const slots = ["09", "12", "15", "19", "21"]
  const color = (day: number, slot: number) =>
    slot === 3 || (slot === 4 && day > 3)
      ? "bg-[#55a66a]"
      : slot === 2 || day === 5
        ? "bg-[#f3c552]"
        : "bg-[#d7d8da]"
  return (
    <div className="mt-4">
      <BackHeader title="Posting Scheduler" />
      <section className="mt-5 rounded-[24px] bg-[#fff6ef] p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold text-[#aa8267]">
              Kategori thrift shop
            </p>
            <h1 className="mt-1 text-xl font-bold tracking-[-.05em]">
              Jam terbaik minggu ini
            </h1>
          </div>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#ddecdf] text-[#27834f]">
            <Icon name="calendar" size={20} />
          </span>
        </div>
        <div className="mt-4 grid grid-cols-[34px_repeat(7,1fr)] gap-1.5 text-center">
          <span />
          <>
            {days.map((day) => (
              <span key={day} className="text-[8px] font-bold text-[#8a7162]">
                {day}
              </span>
            ))}
          </>
          {slots.map((slot, slotIndex) => (
            <Fragment key={slot}>
              <span className="grid h-8 place-items-center text-[8px] font-bold text-[#aa8267]">
                {slot}
              </span>
              {days.map((day, dayIndex) => (
                <span
                  key={`${day}-${slot}`}
                  className={`h-8 rounded-lg ${color(dayIndex, slotIndex)}`}
                />
              ))}
            </Fragment>
          ))}
        </div>
        <div className="mt-4 flex gap-3 text-[9px] font-bold text-[#7c6657]">
          <span className="flex items-center gap-1">
            <i className="h-2.5 w-2.5 rounded-full bg-[#55a66a]" />
            Optimal
          </span>
          <span className="flex items-center gap-1">
            <i className="h-2.5 w-2.5 rounded-full bg-[#f3c552]" />
            Cukup
          </span>
          <span className="flex items-center gap-1">
            <i className="h-2.5 w-2.5 rounded-full bg-[#d7d8da]" />
            Kurang
          </span>
        </div>
      </section>
      <section className="mt-5 rounded-[22px] border border-[#e3efe2] bg-[#f4fbf4] p-4">
        <p className="text-[11px] font-bold text-[#27834f]">Trend insight</p>
        <p className="mt-1 text-[13px] leading-relaxed text-[#4f6756]">
          Kategori thrift shop paling ramai jam 19:00-21:00, terutama Jumat
          sampai Minggu.
        </p>
      </section>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-[17px] bg-[#ff6b35] py-3 text-[12px] font-bold text-white shadow-[0_5px_0_#dc5429]">
        <Icon name="calendar" size={16} /> Jadwalkan Postingan
      </button>
    </div>
  )
}

function History() {
  const [filter, setFilter] = useState("Semua")
  const items = [
    {
      icon: "spark" as const,
      title: "Caption untuk Kemeja Linen",
      time: "Hari ini - 09.42",
      tag: "Caption",
      color: "bg-[#ffe3d7] text-[#e65d2c]",
    },
    {
      icon: "price" as const,
      title: "Harga Tote Bag Kanvas",
      time: "Kemarin - 16.10",
      tag: "Harga",
      color: "bg-[#fff0c7] text-[#a56c12]",
    },
    {
      icon: "calendar" as const,
      title: "Waktu posting minggu ini",
      time: "Senin - 19.24",
      tag: "Jadwal",
      color: "bg-[#ddecdf] text-[#27834f]",
    },
  ].filter((x) => filter === "Semua" || x.tag === filter)
  return (
    <div className="mt-7">
      <p className="text-sm font-semibold text-[#a87856]">
        Semua aktivitasmu, rapi di sini.
      </p>
      <h1 className="mt-1 text-[27px] font-bold tracking-[-.06em]">
        Riwayat <span className="text-[#ff6b35]">bantuan AI</span>
      </h1>
      <div className="mt-5 flex gap-2 overflow-auto pb-1">
        {["Semua", "Caption", "Harga", "Jadwal"].map((x) => (
          <button
            onClick={() => setFilter(x)}
            key={x}
            className={`shrink-0 rounded-full px-3 py-1.5 text-[11px] font-bold ${
              filter === x
                ? "bg-[#263240] text-white"
                : "border border-[#f0ddd0] bg-white text-[#8d7462]"
            }`}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <button
            key={item.title}
            className="flex w-full items-center gap-3 rounded-[20px] border border-[#f1e2d8] bg-white p-3 text-left shadow-[0_5px_15px_rgba(72,49,32,.04)]"
          >
            <span
              className={`grid h-10 w-10 place-items-center rounded-2xl ${item.color}`}
            >
              <Icon name={item.icon} size={19} />
            </span>
            <span className="flex-1">
              <strong className="block text-[12px]">{item.title}</strong>
              <small className="mt-1 block text-[10px] text-[#9b8372]">
                {item.time}
              </small>
            </span>
            <span
              className={`rounded-full px-2 py-1 text-[9px] font-bold ${item.color}`}
            >
              {item.tag}
            </span>
            <Icon name="chevron" size={15} />
          </button>
        ))}
      </div>
      <button className="mt-5 w-full rounded-xl border border-dashed border-[#e2c6b2] py-3 text-[11px] font-bold text-[#d35b31]">
        Tampilkan riwayat lainnya
      </button>
    </div>
  )
}

function Insight() {
  const navigate = useNavigate()
  return (
    <div className="mt-7">
      <p className="text-sm font-semibold text-[#a87856]">
        Ini ringkasan performa jualanmu.
      </p>
      <h1 className="mt-1 text-[27px] font-bold tracking-[-.06em]">
        Insight <span className="text-[#ff6b35]">minggu ini</span>
      </h1>
      <div className="mt-5 rounded-[24px] bg-[#263240] p-4 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[11px] text-[#ffc9ae]">Engagement konten</p>
            <p className="mt-1 text-2xl font-bold">+24,8%</p>
          </div>
          <span className="rounded-full bg-[#2f8b59] px-2 py-1 text-[10px] font-bold">
            Naik
          </span>
        </div>
        <div className="mt-5 flex h-24 items-end gap-2">
          {[34, 55, 41, 68, 57, 83, 76].map((v, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1">
              <div
                className={`w-full rounded-t-md ${
                  i === 5 ? "bg-[#ff7948]" : "bg-[#71808c]"
                }`}
                style={{ height: `${v}%` }}
              />
              <span className="text-[8px] text-slate-400">
                {["S", "S", "R", "K", "J", "S", "M"][i]}
              </span>
            </div>
          ))}
        </div>
      </div>
      <h2 className="mt-6 text-base font-bold tracking-[-.04em]">
        Yang paling berpengaruh
      </h2>
      <div className="mt-3 space-y-3">
        <Factor
          number="1"
          title="Konsistensi jam posting"
          desc="Posting di jam ramai bikin interaksi naik."
          value="82%"
          color="orange"
        />
        <Factor
          number="2"
          title="Kualitas foto produk"
          desc="Foto terang tetap jadi favorit pembeli."
          value="66%"
          color="green"
        />
      </div>
      <div className="mt-5 rounded-[23px] border border-[#f0c1ad] bg-[#fff0e9] p-4">
        <p className="text-[11px] font-bold text-[#d6532b]">Premium insight</p>
        <p className="mt-1 text-[12px] leading-relaxed text-[#7d6758]">
          Buka trend bulanan, scheduler unlimited, dan rekomendasi personal saat
          akun sosial media tersambung.
        </p>
        <button
          onClick={() => navigate("/upgrade")}
          className="mt-3 rounded-xl bg-[#ff6b35] px-3 py-2 text-[11px] font-bold text-white"
        >
          Lihat paket
        </button>
      </div>
    </div>
  )
}

function Factor({
  number,
  title,
  desc,
  value,
  color,
}: {
  number: string
  title: string
  desc: string
  value: string
  color: "orange" | "green"
}) {
  const styles =
    color === "orange"
      ? [
          "border-[#f0e0d5] bg-[#fff6ef]",
          "bg-[#ffe2d3] text-[#e35a2a]",
          "bg-[#f1dcd0]",
          "bg-[#ff6b35]",
        ]
      : [
          "border-[#e3efe2] bg-[#f4fbf4]",
          "bg-[#ddecdf] text-[#27834f]",
          "bg-[#dcecdf]",
          "bg-[#55a66a]",
        ]
  return (
    <div className={`rounded-[20px] border p-3 ${styles[0]}`}>
      <div className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 place-items-center rounded-xl ${styles[1]}`}
        >
          {number}
        </span>
        <div>
          <p className="text-[12px] font-bold">{title}</p>
          <p className="text-[10px] text-[#91796a]">{desc}</p>
        </div>
      </div>
      <div className={`mt-3 h-1.5 rounded-full ${styles[2]}`}>
        <div
          className={`h-full rounded-full ${styles[3]}`}
          style={{ width: value }}
        />
      </div>
    </div>
  )
}

function Profile() {
  const [notices, setNotices] = useState(true)
  const navigate = useNavigate()
  return (
    <div className="mt-7">
      <h1 className="text-[27px] font-bold tracking-[-.06em]">
        Profil <span className="text-[#ff6b35]">kamu</span>
      </h1>
      <div className="mt-5 flex items-center gap-3 rounded-[24px] bg-[#fff0e9] p-4">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-[#ff6b35] text-lg font-bold text-white">
          RA
        </div>
        <div className="flex-1">
          <p className="font-bold">Rani Anggraini</p>
          <p className="mt-1 text-[11px] text-[#8f7664]">
            Rani Dailywear - Bandung
          </p>
        </div>
        <button className="text-[#df5d30]">
          <Icon name="chevron" size={19} />
        </button>
      </div>
      <div className="mt-5 rounded-[23px] bg-[#263240] p-4 text-white">
        <div className="flex justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[.13em] text-[#ffc9ae]">
              Paket aktif
            </p>
            <p className="mt-1 text-lg font-bold">Free Plan</p>
          </div>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
            <Icon name="gift" size={19} />
          </span>
        </div>
        <p className="mt-3 text-[11px] text-slate-300">
          2 generate lagi tersedia hari ini. Pay-per-use bisa dipakai untuk
          fitur premium tertentu.
        </p>
        <button
          onClick={() => navigate("/upgrade")}
          className="mt-4 rounded-xl bg-[#ff7745] px-3 py-2 text-[11px] font-bold"
        >
          Lihat pilihan upgrade
        </button>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <Stat value="12" label="Caption" />
        <Stat value="4" label="Harga" />
        <Stat value="7" label="Jadwal" />
      </div>
      <div className="mt-5 overflow-hidden rounded-[22px] border border-[#f0e0d5] bg-white">
        <div className="flex items-center justify-between px-4 py-3.5">
          <span>
            <strong className="block text-[12px]">Notifikasi harian</strong>
            <small className="text-[10px] text-[#927a69]">
              Insight dan ide konten untukmu
            </small>
          </span>
          <button
            onClick={() => setNotices(!notices)}
            className={`relative h-6 w-11 rounded-full transition ${
              notices ? "bg-[#ff6b35]" : "bg-[#d7d8da]"
            }`}
          >
            <span
              className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
                notices ? "left-6" : "left-1"
              }`}
            />
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-[#f4e9e1] px-4 py-3.5">
          <span className="text-[12px] font-bold">Bantuan & pengaturan</span>
          <Icon name="chevron" size={17} />
        </div>
      </div>
      <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#f0c1ad] py-3 text-[12px] font-bold text-[#d6532b]">
        <Icon name="logout" size={16} /> Keluar dari akun
      </button>
    </div>
  )
}

function Stat({ value, label }: { value: string label: string }) {
  return (
    <div className="rounded-[18px] border border-[#f1e2d8] bg-white p-3 text-center">
      <p className="text-lg font-bold text-[#ff6b35]">{value}</p>
      <p className="text-[9px] font-bold text-[#927a69]">{label}</p>
    </div>
  )
}

function Upgrade() {
  const plans = [
    ["Free", "Rp0", "5 generate/hari", false],
    ["Subscription", "Rp49rb/bln", "Unlimited + trend insight", true],
    ["Pay-per-use", "Mulai Rp5rb", "Bayar saat butuh fitur premium", false],
  ] as const
  return (
    <div className="mt-4">
      <BackHeader title="Subscription" />
      <div className="mt-6">
        <p className="text-sm font-semibold text-[#a87856]">
          Pilih sesuai ritme jualanmu.
        </p>
        <h1 className="mt-1 text-[27px] font-bold leading-[1.18] tracking-[-.06em]">
          Upgrade saat
          <br />
          <span className="text-[#ff6b35]">jualan mulai ramai</span>
        </h1>
      </div>
      <div className="mt-5 space-y-3">
        {plans.map(([name, price, benefit, featured]) => (
          <div
            key={name}
            className={`rounded-[23px] border p-4 ${
              featured
                ? "border-[#ff6b35] bg-[#263240] text-white shadow-[0_12px_24px_rgba(38,50,64,.18)]"
                : "border-[#f1e2d8] bg-white"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <p
                  className={`text-[11px] font-bold ${
                    featured ? "text-[#ffc9ae]" : "text-[#aa8267]"
                  }`}
                >
                  {name}
                </p>
                <p className="mt-1 text-lg font-bold">{price}</p>
              </div>
              {featured && (
                <span className="rounded-full bg-[#ff7745] px-2 py-1 text-[9px] font-bold">
                  Rekomendasi
                </span>
              )}
            </div>
            <p
              className={`mt-3 text-[12px] ${
                featured ? "text-slate-300" : "text-[#7d6758]"
              }`}
            >
              {benefit}
            </p>
            <div className="mt-3 space-y-2 text-[10px] font-bold">
              <p className="flex items-center gap-2">
                <Icon name="check" size={14} /> Caption, price check, dan
                scheduler
              </p>
              <p className="flex items-center gap-2">
                <Icon name="check" size={14} /> Riwayat aktivitas tersimpan
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-5 w-full rounded-[17px] bg-[#ff6b35] py-3 text-[12px] font-bold text-white shadow-[0_5px_0_#dc5429]">
        Upgrade ke Subscription
      </button>
    </div>
  )
}

const nav = [
  { path: "/", label: "Beranda", icon: "home" as const },
  { path: "/history", label: "Riwayat", icon: "history" as const },
  { path: "/insight", label: "Insight", icon: "insight" as const },
  { path: "/profile", label: "Profil", icon: "profile" as const },
]

function Shell() {
  const location = useLocation()
  const navigate = useNavigate()
  const route = location.pathname
  const content =
    route === "/history" ? (
      <History />
    ) : route === "/insight" ? (
      <Insight />
    ) : route === "/profile" ? (
      <Profile />
    ) : route === "/caption" ? (
      <CaptionGenerator />
    ) : route === "/price" ? (
      <PriceAdvisor />
    ) : route === "/scheduler" ? (
      <Scheduler />
    ) : route === "/upgrade" ? (
      <Upgrade />
    ) : (
      <Home />
    )
  const showNav = ["/", "/history", "/insight", "/profile"].includes(route)
  return (
    <main className="min-h-screen bg-[#fff8ee] px-3 py-4 text-[#263240] sm:px-8 sm:py-8">
      <section className="relative mx-auto min-h-[780px] w-full max-w-[390px] overflow-hidden rounded-[34px] border-[7px] border-[#263240] bg-[#fffdf9] shadow-[0_22px_55px_rgba(70,43,26,.2)]">
        <div className="absolute -right-12 top-24 h-44 w-44 rounded-full bg-[#fff0c9] opacity-80" />
        <div
          className={`relative max-h-[780px] overflow-y-auto px-5 pt-6 [scrollbar-width:none] ${
            showNav ? "pb-28" : "pb-8"
          }`}
        >
          {showNav && (
            <header className="flex items-center justify-between">
              <Brand />
              <button
                onClick={() => navigate("/upgrade")}
                className="relative grid h-10 w-10 place-items-center rounded-full border border-[#f1dfd1] bg-white text-[#4b5966]"
                aria-label="Lihat paket"
              >
                <Icon name="gift" size={19} />
                <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#ff6b35]" />
              </button>
            </header>
          )}
          {content}
        </div>
        {showNav && (
          <nav className="absolute inset-x-0 bottom-0 flex h-[74px] items-center justify-around border-t border-[#eee5dc] bg-white px-2">
            {nav.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex min-w-[58px] flex-col items-center gap-1 text-[9px] font-bold ${
                  route === item.path ? "text-[#ff6b35]" : "text-[#95a0a8]"
                }`}
              >
                <span
                  className={`grid h-7 w-10 place-items-center rounded-xl ${
                    route === item.path ? "bg-[#fff0e9]" : ""
                  }`}
                >
                  <Icon name={item.icon} size={19} />
                </span>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </section>
      <p className="mx-auto mt-5 max-w-[390px] text-center text-[11px] font-medium text-[#ad9584]">
        JualinAja AI - Biar jualan terasa lebih gampang
      </p>
    </main>
  )
}

function AuthFrame({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[#fff8ee] px-3 py-4 text-[#263240] sm:px-8 sm:py-8">
      <section className="relative mx-auto min-h-[780px] w-full max-w-[390px] overflow-hidden rounded-[34px] border-[7px] border-[#263240] bg-[#fffdf9] shadow-[0_22px_55px_rgba(70,43,26,.2)]">
        <div className="absolute -left-16 top-36 h-44 w-44 rounded-full bg-[#ddecdf] opacity-70" />
        <div className="absolute -right-16 bottom-28 h-48 w-48 rounded-full bg-[#ffe6d8] opacity-80" />
        <div className="relative">{children}</div>
      </section>
    </main>
  )
}

const router = createBrowserRouter([
  { path: "/onboarding", Component: Onboarding },
  { path: "/login", Component: Login },
  { path: "*", Component: Shell },
])

export default function App() {
  return <RouterProvider router={router} />
}
