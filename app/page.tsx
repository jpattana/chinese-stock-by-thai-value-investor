import type { ReactNode } from "react";

// ข้อมูลติดต่อ — แก้ LINE ID จริงตรงนี้ที่เดียว (ตัวอย่าง: "@abc1234")
const LINE_ID = "@your-line-id";
const LINE_URL = `https://line.me/R/ti/p/${LINE_ID}`;
const CONTACT_NAME = "หุ้นจีน แบบ value investor";

const lynchTypes = [
  "Slow Growers",
  "Stalwarts",
  "Fast Growers",
  "Cyclicals",
  "Turnarounds",
  "Asset Plays",
];

const features: { icon: ReactNode; title: string; body: string; extra?: ReactNode }[] = [
  {
    icon: <BookIcon />,
    title: "วิเคราะห์ตามหลัก Peter Lynch",
    body: "แยกหุ้นเป็น 6 กลุ่มตามแนวคิดของ Peter Lynch ดูการเติบโต หนี้สิน กระแสเงินสด และ PEG แบบเข้าใจง่าย ไม่ต้องเป็นนักบัญชีก็อ่านรู้เรื่อง",
    extra: (
      <ul className="mt-4 flex flex-wrap gap-2">
        {lynchTypes.map((t) => (
          <li
            key={t}
            className="rounded-full bg-primary-soft px-3 py-1 text-xs font-medium text-primary-dark"
          >
            {t}
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: <BoltIcon />,
    title: "อัปเดตทันทีที่งบออก",
    body: "สรุปผลประกอบการล่าสุดสด ๆ ร้อน ๆ จากประกาศของบริษัท และไฮไลต์ให้เห็นชัดเมื่อพื้นฐาน (Fundamental) ของหุ้นเปลี่ยนไป ไม่ว่าจะดีขึ้นหรือแย่ลง",
  },
  {
    icon: <TrophyIcon />,
    title: "จัดอันดับหุ้นที่น่าสนใจที่สุด",
    body: "รวม Ranking หุ้นจีนที่น่าสนใจที่สุดในมุมของ Value Investor ไว้ในที่เดียว ช่วยให้คุณเลือกตัวที่ควรศึกษาต่อได้เร็วขึ้น",
  },
];

const faqs = [
  {
    q: "อ่านบทวิเคราะห์ต้องเสียเงินไหม?",
    a: "อ่านฟรีครับ ถ้าชอบเนื้อหาและอยากให้เว็บอยู่ต่อไปนาน ๆ สามารถร่วมสนับสนุนได้ตามกำลัง ทักไลน์มาคุยกันได้เลย",
  },
  {
    q: "วิเคราะห์หุ้นจีนตลาดไหนบ้าง?",
    a: "เน้นหุ้นจีนที่จดทะเบียนในตลาดหลักทรัพย์ฮ่องกง (HKEX) โดยอ้างอิงงบการเงินและประกาศจากเว็บไซต์ HKEXnews ซึ่งเป็นแหล่งข้อมูลทางการของตลาด",
  },
  {
    q: "อัปเดตบ่อยแค่ไหน?",
    a: "อัปเดตตามรอบที่บริษัทประกาศงบ (รายไตรมาส รายครึ่งปี และรายปี) ช่วงฤดูประกาศงบจะมีบทวิเคราะห์ใหม่ถี่เป็นพิเศษ",
  },
  {
    q: "นี่คือคำแนะนำให้ซื้อขายหุ้นใช่ไหม?",
    a: "ไม่ใช่ครับ เนื้อหาทั้งหมดเป็นการแบ่งปันมุมมองเพื่อการศึกษา ไม่ใช่คำแนะนำการลงทุน ควรศึกษาข้อมูลเพิ่มเติมและตัดสินใจด้วยตัวเองเสมอ",
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-x-hidden">
      {/* ส่วนหัว */}
      <header className="relative bg-gradient-to-b from-primary-soft to-background">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 top-40 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
        />
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#" className="flex items-center gap-2 font-heading text-lg font-semibold text-primary-dark">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-white">
              <ChartIcon />
            </span>
            หุ้นจีน
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary/30 px-4 py-1.5 text-sm font-medium text-primary-dark transition hover:bg-primary hover:text-white"
          >
            ติดต่อเรา
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-8 md:grid-cols-2 md:pb-28 md:pt-14">
          <div>
            <p className="mb-4 inline-block rounded-full bg-surface px-4 py-1 text-sm font-medium text-primary shadow-sm">
              Chinese Stock by Thai Value Investor
            </p>
            <h1 className="text-display font-bold text-foreground">
              หุ้นจีนแบบ <span className="text-primary">Value Investor</span>{" "}
              อ่านง่าย เหมือนเพื่อนเล่าให้ฟัง
            </h1>
            <p className="mt-5 text-lead text-muted">
              เรานำผลการวิเคราะห์หุ้นจีนตามแนวคิด Peter Lynch มาแบ่งปัน
              อัปเดตทันทีที่งบออก และจัดอันดับตัวที่น่าสนใจที่สุดให้คุณ
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LineButton />
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 font-medium text-primary-dark transition hover:bg-primary-soft"
              >
                ดูว่าเราทำอะไร ↓
              </a>
            </div>
          </div>

          <HeroCard />
        </div>
      </header>

      {/* จุดเด่น */}
      <section id="features" className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          kicker="ทำไมต้องที่นี่"
          title="3 อย่างที่เราตั้งใจทำให้ดีที่สุด"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-border bg-surface p-7 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                {f.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted">{f.body}</p>
              {f.extra}
            </article>
          ))}
        </div>
      </section>

      {/* สินค้า/บริการ */}
      <section className="bg-primary-soft/60">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading kicker="สิ่งที่คุณจะได้" title="อ่านฟรี สนับสนุนได้ตามใจ" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-surface p-8">
              <p className="text-sm font-medium text-primary">สำหรับทุกคน</p>
              <h3 className="mt-1 text-2xl font-semibold">บทวิเคราะห์หุ้นจีน</h3>
              <p className="mt-2 font-heading text-4xl font-bold text-primary-dark">ฟรี</p>
              <ul className="mt-6 space-y-3">
                {[
                  "บทวิเคราะห์ตามแนวคิด Peter Lynch",
                  "สรุปงบล่าสุด พร้อมไฮไลต์เมื่อพื้นฐานเปลี่ยน",
                  "Ranking หุ้นจีนที่น่าสนใจที่สุด",
                ].map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-primary p-8 text-white">
              <div
                aria-hidden
                className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-accent/40 blur-2xl"
              />
              <p className="relative text-sm font-medium text-accent">ร่วมเป็นแรงใจ</p>
              <h3 className="relative mt-1 text-2xl font-semibold">สนับสนุนเว็บ</h3>
              <p className="relative mt-2 font-heading text-4xl font-bold">ตามกำลัง</p>
              <p className="relative mt-6 text-white/85">
                ทุกการสนับสนุนช่วยให้เรามีเวลาอ่านงบ ทำบทวิเคราะห์
                และแบ่งปันต่อได้เรื่อย ๆ ทักไลน์มาคุยรายละเอียดได้เลยครับ
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-surface px-6 py-3 font-semibold text-primary-dark transition hover:bg-accent-soft"
              >
                <HeartIcon /> อยากสนับสนุน
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* คำถามที่พบบ่อย */}
      <section className="mx-auto max-w-3xl px-5 py-20">
        <SectionHeading kicker="สงสัยไหม" title="คำถามที่พบบ่อย" />
        <div className="mt-10 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface p-5 open:shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary-soft text-primary transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ติดต่อเรา */}
      <section id="contact" className="px-5 pb-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark px-6 py-14 text-center text-white md:px-12">
          <h2 className="text-title font-bold">คุยเรื่องหุ้นจีนกันไหม?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">
            มีหุ้นตัวไหนอยากให้วิเคราะห์ หรืออยากรับข่าวอัปเดตงบ
            ทักไลน์ <strong className="text-accent">{CONTACT_NAME}</strong> ได้เลย ตอบเป็นกันเองครับ
          </p>
          <div className="mt-8 flex justify-center">
            <LineButton light />
          </div>
        </div>
      </section>

      {/* ส่วนท้าย */}
      <footer className="border-t border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-muted">
          <p className="font-heading font-semibold text-primary-dark">
            หุ้นจีน · Chinese Stock by Thai Value Investor
          </p>
          <p className="mt-2">
            เนื้อหาบนเว็บไซต์นี้จัดทำเพื่อการศึกษาเท่านั้น ไม่ใช่คำแนะนำในการซื้อขายหลักทรัพย์
            การลงทุนมีความเสี่ยง ผู้ลงทุนควรศึกษาข้อมูลก่อนตัดสินใจลงทุน
          </p>
          <p className="mt-4">© 2026 หุ้นจีน แบบ value investor</p>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="text-center">
      <p className="font-medium text-primary">{kicker}</p>
      <h2 className="mt-2 text-title font-bold">{title}</h2>
    </div>
  );
}

function LineButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-lg font-semibold shadow-lg transition hover:-translate-y-0.5 ${
        light
          ? "bg-surface text-primary-dark hover:bg-accent-soft"
          : "bg-line text-white shadow-line/30 hover:brightness-105"
      }`}
    >
      <LineIcon /> ทักไลน์เลย
    </a>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-xs text-foreground">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

/* การ์ดภาพประกอบในส่วนหัว (เป็นภาพตัวอย่าง ไม่ใช่ข้อมูลหุ้นจริง) */
function HeroCard() {
  const rows = [
    { w: "w-11/12", tag: "Fast Grower" },
    { w: "w-9/12", tag: "Stalwart" },
    { w: "w-7/12", tag: "Turnaround" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-sm" aria-hidden>
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-accent/50" />
      <div className="relative rounded-3xl border border-border bg-surface p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <p className="font-heading font-semibold">Ranking ประจำไตรมาส</p>
          <span className="rounded-full bg-accent-soft px-3 py-0.5 text-xs font-medium text-foreground">
            อัปเดตล่าสุด
          </span>
        </div>
        <ul className="mt-5 space-y-4">
          {rows.map((r, i) => (
            <li key={r.tag} className="flex items-center gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="h-2.5 rounded-full bg-primary-soft">
                  <div className={`h-2.5 rounded-full bg-primary ${r.w}`} />
                </div>
                <p className="mt-1 text-xs text-muted">{r.tag}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-3 rounded-2xl bg-accent-soft p-3 text-sm">
          <BoltIcon />
          <span>พื้นฐานเปลี่ยน! มีไฮไลต์ใหม่หลังงบออก</span>
        </div>
      </div>
    </div>
  );
}

/* ไอคอน */
function Svg({ children, size = 24 }: { children: ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function ChartIcon() {
  return (
    <Svg size={20}>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-4 3 3 5-6" />
    </Svg>
  );
}

function BookIcon() {
  return (
    <Svg>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" />
      <path d="M8 7h8M8 11h6" />
    </Svg>
  );
}

function BoltIcon() {
  return (
    <Svg>
      <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
    </Svg>
  );
}

function TrophyIcon() {
  return (
    <Svg>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </Svg>
  );
}

function HeartIcon() {
  return (
    <Svg size={20}>
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    </Svg>
  );
}

function LineIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5 1.1-.5 5.9-3.5 8-6C21.4 14.3 22 12.7 22 11c0-4.4-4.5-8-10-8Zm-3.8 10.5H6.3a.5.5 0 0 1-.5-.5V9.2a.5.5 0 0 1 1 0v3.3h1.4a.5.5 0 0 1 0 1Zm2-.5a.5.5 0 0 1-1 0V9.2a.5.5 0 0 1 1 0V13Zm4.6 0a.5.5 0 0 1-.9.3l-2-2.7V13a.5.5 0 0 1-1 0V9.2a.5.5 0 0 1 .9-.3l2 2.7V9.2a.5.5 0 0 1 1 0V13Zm3.1-2.4a.5.5 0 0 1 0 1h-1.4v.9h1.4a.5.5 0 0 1 0 1h-1.9a.5.5 0 0 1-.5-.5V9.2a.5.5 0 0 1 .5-.5h1.9a.5.5 0 0 1 0 1h-1.4v.9h1.4Z" />
    </svg>
  );
}
