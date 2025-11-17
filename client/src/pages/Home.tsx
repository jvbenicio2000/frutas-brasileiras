import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Apple, Leaf, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">{APP_TITLE}</h1>
          </div>
          <nav className="flex gap-4">
            <a href="#manga" className="text-foreground hover:text-primary transition-colors">Manga</a>
            <a href="#jaca" className="text-foreground hover:text-primary transition-colors">Jaca</a>
            <a href="#goiaba" className="text-foreground hover:text-primary transition-colors">Goiaba</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-background py-20">
        <div className="container text-center">
          <div className="flex justify-center mb-6">
            <Apple className="h-16 w-16 text-primary" />
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-4">
            Descubra as Frutas Tropicais do Brasil
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore o sabor único e os benefícios das frutas mais deliciosas do nosso país
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Explorar Frutas
          </Button>
        </div>
      </section>

      {/* Manga Section */}
      <section id="manga" className="py-16 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-bold text-foreground mb-4">Manga</h3>
              <p className="text-lg text-muted-foreground mb-4">
                A manga é uma das frutas tropicais mais populares do mundo. Com sua polpa suculenta e 
                sabor doce, é rica em vitaminas A e C, além de fibras que auxiliam na digestão.
              </p>
              <div className="flex gap-4 mb-4">
                <Card className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Vitaminas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">A, C, E</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Calorias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent">60 kcal</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                <Heart className="inline h-4 w-4 text-red-500 mr-1" />
                Excelente para a saúde da pele e fortalecimento do sistema imunológico
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/manga.jpg" 
                alt="Manga brasileira madura" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Jaca Section */}
      <section id="jaca" className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/jaca.jpg" 
                alt="Jaca aberta mostrando os bagos amarelos" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-4">Jaca</h3>
              <p className="text-lg text-muted-foreground mb-4">
                A jaca é a maior fruta que cresce em árvores, podendo pesar até 40 kg! Seus bagos 
                amarelos têm sabor adocicado e textura única, sendo rica em potássio, magnésio e 
                vitaminas do complexo B.
              </p>
              <div className="flex gap-4 mb-4">
                <Card className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Minerais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">K, Mg, Ca</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Calorias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent">95 kcal</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                <Heart className="inline h-4 w-4 text-red-500 mr-1" />
                Ótima fonte de energia e ajuda na saúde cardiovascular
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goiaba Section */}
      <section id="goiaba" className="py-16 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-4xl font-bold text-foreground mb-4">Goiaba</h3>
              <p className="text-lg text-muted-foreground mb-4">
                A goiaba é uma super fruta brasileira, contendo mais vitamina C que a laranja! 
                Sua polpa rosada ou branca é rica em antioxidantes, fibras e possui baixo índice 
                glicêmico, sendo ideal para uma alimentação saudável.
              </p>
              <div className="flex gap-4 mb-4">
                <Card className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Vitamina C</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-primary">228 mg</p>
                  </CardContent>
                </Card>
                <Card className="flex-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm">Calorias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-accent">68 kcal</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                <Heart className="inline h-4 w-4 text-red-500 mr-1" />
                Poderoso antioxidante e auxilia no controle da diabetes
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="/goiaba.jpg" 
                alt="Goiabas frescas cortadas ao meio" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-auto">
        <div className="container text-center">
          <div className="flex justify-center mb-4">
            <Leaf className="h-8 w-8" />
          </div>
          <p className="text-lg font-semibold mb-2">{APP_TITLE}</p>
          <p className="text-primary-foreground/80">
            Celebrando a riqueza das frutas tropicais brasileiras
          </p>
          <p className="text-sm text-primary-foreground/60 mt-4">
            © 2025 Frutas Brasileiras. Feito com ❤️ no Brasil
          </p>
        </div>
      </footer>
    </div>
  );
}
