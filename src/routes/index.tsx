import { useLayoutEffect } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Gamepad2, Sparkles } from "lucide-react";
import { SocialLinks } from "@/components/SocialIcons";
import { menuData } from "@/data/menuData";
import cafeBanner from "@/assets/cafe-banner.jpg";
import cafelogo from "@/assets/logo.png";

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
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          منوی ما
        </h2>
        
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
        </div>
      </div>
    </div>
  );
}

