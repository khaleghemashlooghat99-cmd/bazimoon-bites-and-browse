import { useLayoutEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Clock, Gamepad2, MapPin, Navigation, Phone, Sparkles } from "lucide-react";
import { SocialLinks } from "@/components/SocialIcons";
import { menuData } from "@/data/menuData";
import cafeBanner from "@/assets/cafe-banner.jpg";
import cafelogo from "@/assets/logo.png";

const CAFE_MAPS_URL = "https://maps.app.goo.gl/UEVzTEA3SGY2uymy6";
const CAFE_ADDRESS = "خیابان شهید صدوقی، جنب خیابان مهدیه، کافه بازیمون";
const CAFE_PHONE_DISPLAY = "0912 999 4444";
const CAFE_PHONE_TEL = "+989129994444";
const CAFE_HOURS = "هر روز هفته از 12 تا 24 در خدمتتونیم";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bazimoon - Digital Menu" },
      { name: "description", content: "Explore Bazimoon's digital menu featuring pizzas, coffee, drinks, burgers and more" },
      { property: "og:title", content: "Bazimoon - Digital Menu" },
      { property: "og:description", content: "Explore Bazimoon's digital menu featuring pizzas, coffee, drinks, burgers and more" },
    ],
  }),
  component: Index,
});

function Index() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    // Reset before paint so returning visitors never see the previous scroll position.
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="menu-red-bg min-h-screen" dir="rtl" lang="fa">
      {/* Banner */}
      <div className="banner-fade relative h-64 overflow-hidden shadow-glow">
        <img
          src={cafeBanner}
          alt="Bazimoon Cafe"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <img className="h-30 w-60 mb-4" src={cafelogo} alt="Bazimoon Logo" />
          <p className="text-white/90 mb-6 text-lg drop-shadow">
            Entertainment Cafe
          </p>
          
          {/* Social Media Icons */}
          <SocialLinks
            className="flex gap-6"
            itemClassName="text-white hover:text-primary-glow transition-all duration-300 hover:scale-110 transform drop-shadow-lg"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="menu-pattern-bg min-h-[calc(100vh-16rem)]">
        <div className="container max-w-2xl mx-auto px-4 py-8">
        <div
          className="menu-title"
          style={{
            animation: "sectionEntrance 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          <h2 className="menu-title-text">منوی ما</h2>
          <span className="menu-title-rule" aria-hidden="true">
            <span className="menu-title-dot" />
            <span className="menu-title-line menu-title-line-start" />
            <span className="menu-title-diamond" />
            <span className="menu-title-line menu-title-line-end" />
            <span className="menu-title-dot" />
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div
            className="promo-game-tile col-span-2 flex min-h-32 items-center justify-center rounded-xl p-6 shadow-card"
            style={{
              animation: "promoEntrance 0.65s cubic-bezier(0.22, 1, 0.36, 1) both, promoFloat 3.2s ease-in-out 0.65s infinite"
            }}
          >
            <div className="relative z-10 flex items-center justify-center gap-3 text-center">
              <Sparkles className="h-7 w-7 text-white/90 promo-spark" />
              <h3 className="text-2xl font-extrabold text-white drop-shadow-lg">
                بازی کن و تخفیف بگیر!
              </h3>
              <Gamepad2 className="h-8 w-8 text-white/90 promo-gamepad" />
            </div>
          </div>

          {menuData.map((category, index) => (
            <button
              key={category.id}
              onClick={() => navigate({ to: "/category/$categoryId", params: { categoryId: category.id } })}
              className="bg-card border-2 border-border hover:border-primary rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 group"
              style={{
                animation: `slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s both`
              }}
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {/\.(png|jpe?g|svg|webp|avif|gif)(\?.*)?$/i.test(category.icon) ? (
                  <img
                    src={category.icon}
                    alt={category.name}
                    className="mx-auto h-12 w-12 object-contain"
                  />
                ) : (
                  category.icon
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.name}
              </h3>
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="menu-divider" aria-hidden="true">
          <span className="menu-divider-dot" />
          <span className="menu-divider-line menu-divider-line-start" />
          <span className="menu-divider-diamond" />
          <span className="menu-divider-line menu-divider-line-end" />
          <span className="menu-divider-dot" />
        </div>

        {/* About us */}
        <section
          className="rounded-xl border border-primary/25 bg-background/40 px-5 py-6 text-center shadow-card sm:px-8 sm:py-8"
          style={{
            animation: "sectionEntrance 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.15s both",
          }}
        >
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">درباره ما</h2>
          <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-foreground/80 sm:text-lg sm:leading-9">
            به کافه بازیمون خوش اومدین. بیش از نیم قرن تلاش و تجربه و پشتکار پشتشه. دست کممون نگیرین
          </p>
        </section>

        {/* Contact */}
        <section
          className="mt-4 rounded-xl border border-primary/25 bg-background/40 px-5 py-6 text-center shadow-card sm:px-8 sm:py-8"
          style={{
            animation: "sectionEntrance 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.28s both",
          }}
        >
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">تماس با ما</h2>
          <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="mt-5 grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-background/30 px-4 py-3 text-right">
              <MapPin className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">آدرس</p>
                <p className="text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7">
                  {CAFE_ADDRESS}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-background/30 px-4 py-3 text-right">
              <Phone className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">شماره تماس</p>
                <a
                  href={`tel:${CAFE_PHONE_TEL}`}
                  dir="ltr"
                  className="inline-block text-base font-semibold text-foreground/90 transition-colors hover:text-primary sm:text-lg"
                >
                  {CAFE_PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-background/30 px-4 py-3 text-right sm:col-span-2">
              <Clock className="h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">ساعت کاری</p>
                <p className="text-sm leading-6 text-foreground/90 sm:text-base sm:leading-7">
                  {CAFE_HOURS}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-center">
            <a
              href={CAFE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.02] hover:bg-primary-glow sm:w-auto"
            >
              <Navigation className="h-5 w-5" />
              نمایش لوکیشن کافه
            </a>
          </div>
        </section>
        </div>
      </div>
    </div>
  );
}

