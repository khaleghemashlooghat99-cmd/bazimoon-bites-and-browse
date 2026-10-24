import { useEffect } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
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
      <div className="menu-pattern-bg min-h-screen flex items-center justify-center" dir="rtl" lang="fa">
        <p className="text-foreground">دسته‌بندی پیدا نشد😢</p>
        <Button className="bg-primary hover:bg-primary-glow text-primary-foreground border-2 border-primary-foreground/20 shadow-glow" onClick={() => navigate({ to: "/" })}>
          برگرد به منو
        </Button>
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

