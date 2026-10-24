import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";
import { menuData } from "@/data/menuData";

export const Route = createFileRoute("/category/$categoryId")({
  head: ({ params }) => {
    const name = menuData.find((c) => c.id === params.categoryId)?.name ?? "Menu";
    return {
      meta: [
        { title: `${name} | Bazimoon Menu` },
        { name: "description", content: `${name} at Bazimoon Entertainment Cafe` },
        { property: "og:title", content: `${name} | Bazimoon Menu` },
        { property: "og:description", content: `${name} at Bazimoon Entertainment Cafe` },
      ],
    };
  },
  component: Category,
});

function Category() {
  const { categoryId } = Route.useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [categoryId]);
  
  const category = menuData.find(cat => cat.id === categoryId);

  if (!category) {
    return (
      <div className="menu-pattern-bg min-h-screen flex items-center justify-center px-4" dir="rtl" lang="fa">
        <section
          className="w-full max-w-xl rounded-xl border border-primary/25 bg-background/40 px-5 py-8 text-center shadow-card sm:px-8"
          style={{
            animation: "sectionEntrance 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
          }}
        >
          <h1 className="text-xl font-bold text-foreground sm:text-2xl">این صفحه پیدا نشد</h1>
          <span className="mx-auto mt-3 block h-[3px] w-14 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
          <p className="mx-auto mt-4 text-base leading-8 text-foreground/80 sm:text-lg sm:leading-9">
            به نظر می‌رسه مسیر اشتباهی اومدید. این دسته‌بندی توی منوی ما وجود نداره؛ از دکمه زیر به منوی اصلی برگردید.
          </p>
          <div className="mt-6 flex justify-center">
            <Button
              onClick={() => navigate({ to: "/" })}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-bold text-primary-foreground shadow-glow transition-all duration-300 hover:scale-[1.02] hover:bg-primary-glow sm:w-auto"
            >
              برگرد به منو
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="menu-red-bg flex min-h-screen w-full flex-col overflow-x-clip" dir="rtl" lang="fa">
      <h1 className="sr-only">{category.name}</h1>
      {/* Sticky category navigation */}
          <nav
            aria-label="دسته‌بندی‌های منو"
            className="category-nav sticky top-0 z-10 w-full max-w-full overflow-x-auto overscroll-x-contain bg-background/95 px-4 py-3 shadow-card backdrop-blur-md"
          >
            <div className="flex w-max min-w-full items-center justify-center gap-3">
              {menuData.map((menuCategory) => (
                <Link
                  key={menuCategory.id}
                  to="/category/$categoryId"
                  params={{ categoryId: menuCategory.id }}
                  className={`flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap rounded-full border-2 px-5 py-2 text-base font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      menuCategory.id === categoryId
                        ? "border-primary bg-primary text-primary-foreground shadow-glow"
                        : "border-border bg-card text-foreground hover:border-primary hover:bg-secondary"
                    }`}
                >
                  {menuCategory.name}
                </Link>
              ))}
            </div>
          </nav>

      <div className="menu-pattern-bg flex-1">
        <div className="container max-w-2xl mx-auto px-4 py-6 space-y-4">
          {category.items.map((item, index) => (
            <div
              key={`${category.id}-${item.id}-${index}`}
              className="bg-card border border-border rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02]"
              style={{
                animation: `slideInRight 0.4s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s both`
              }}
            >
              {["pizza", "coffee", "hot-drinks", "pasta", "sushi", "milk-shake", "ice-coffee", "tea", "smoothie", "matcha", "burger", "snack", "appetizer", "sauce", "mafia", "board-game"].includes(category.id) ? (
                <div className="flex min-h-28 items-center gap-3 p-3" dir="rtl">
                  <div className="h-24 w-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-lg border border-primary/30 object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <h3 className="mb-1 text-lg font-semibold text-foreground">
                      {item.name}
                    </h3>
                    {item.ingredients && (
                      <p className="text-sm leading-6 text-muted-foreground">
                        {item.ingredients}
                      </p>
                    )}
                  </div>
                  <p className="flex-shrink-0 border-r border-border pr-3 flex flex-col items-center text-center text-base font-bold text-primary">
                    <span>{new Intl.NumberFormat("fa-IR").format(Math.round(item.price * 1000))}</span>
                    <span>تومان</span>
                  </p>
                </div>
              ) : (
                <div className="flex gap-4 p-4">
                  <div className="flex-1">
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-2xl font-bold text-primary">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="h-24 w-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full rounded-lg border border-primary/30 object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Divider options preview — temporary: rendered only on the pizza
              page so one can be chosen; keep the chosen divider and delete
              this wrapper, its label and the unused variants. */}
          {categoryId === "pizza" && (
            <div className="divider-options">
              <div className="divider-option">
                <p className="divider-option-label">گزینه ۱ — خط و الماس</p>
                <div className="menu-divider menu-divider--tight" aria-hidden="true">
                  <span className="menu-divider-dot" />
                  <span className="menu-divider-line menu-divider-line-start" />
                  <span className="menu-divider-diamond" />
                  <span className="menu-divider-line menu-divider-line-end" />
                  <span className="menu-divider-dot" />
                </div>
              </div>

              <div className="divider-option">
                <p className="divider-option-label">گزینه ۲ — مدال پیتزا</p>
                <div className="menu-divider-badge" aria-hidden="true">
                  <span className="menu-divider-line menu-divider-line-start" />
                  <span className="menu-divider-badge-gem" />
                  <span className="menu-divider-badge-circle">
                    <Pizza className="h-5 w-5" />
                  </span>
                  <span className="menu-divider-badge-gem" />
                  <span className="menu-divider-line menu-divider-line-end" />
                </div>
              </div>

              <div className="divider-option">
                <p className="divider-option-label">گزینه ۳ — خط دوبل و سه‌الماس</p>
                <div className="menu-divider-triple" aria-hidden="true">
                  <div className="menu-divider-triple-row">
                    <span className="menu-divider-line menu-divider-line-start" />
                    <span className="menu-divider-triple-gem menu-divider-triple-gem-sm" />
                    <span className="menu-divider-triple-gem" />
                    <span className="menu-divider-triple-gem menu-divider-triple-gem-sm" />
                    <span className="menu-divider-line menu-divider-line-end" />
                  </div>
                  <span className="menu-divider-triple-shadow" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="h-24" />
      </div>

      {/* Fixed floating back button */}
      <div className="fixed inset-x-0 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-20 flex justify-center px-4 pointer-events-none">
        <Button
          onClick={() => navigate({ to: "/" })}
          className="pointer-events-auto h-14 w-[33.333vw] min-w-36 max-w-64 rounded-full bg-primary hover:bg-primary-glow text-primary-foreground border-2 border-primary-foreground/20 shadow-glow backdrop-blur-sm transition-all duration-300 hover:scale-105 text-base font-bold"
        >
          برگرد به منو
        </Button>
      </div>
    </div>
  );
}

