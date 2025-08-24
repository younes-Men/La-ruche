import React from "react"
import { Card } from "./ui/card"
import { useState } from "react"
import Logo from "../image/laruche.png"

const LaRucheMenu = () => {
  const [expandedSections, setExpandedSections] = useState({})

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }))
  }

  const menuData = {
    petitsdejeuners: {
      title: "NOS PETITS DÉJEUNERS",
      icon: "🍳",
      items: [
        {
          name: "Bonjour",
          price: "17 dhs",
          description: "3 Mini viennoiseries, jus d'orange, boisson chaude au choix, hssoua",
        },
        {
          name: "Beldi",
          price: "19 dhs",
          description: "2 harcha, 1 meloui, jus d'orange, boisson chaude au choix, amlou, fromage, miel, hssoua",
        },
        {
          name: "Continental",
          price: "23 dhs",
          description:
            "2 toasts au fromage, 2 oeufs, filet de dinde fumée, jus d'orange, boisson chaude au choix, olives noires, yaourt, hssoua",
        },
        {
          name: "Gourmand",
          price: "24 dhs",
          description:
            "Boisson chaude sandwich avec fromage carré, fromage tartine, dinde fumée, viennoiserie, hssoua, jus d'orange",
        },
        {
          name: "Fassi",
          price: "25 dhs",
          description:
            "Tajine khlii 2 oeufs, pain semoule ou complet, jus d'orange, boisson chaude au choix, huile d'olive, olives noires, yaourt, hssoua",
        },
        {
          name: "La Ruche",
          price: "26 dhs",
          description:
            "2 mini viennoiseries, omelette, harcha, toast au fromage, gâteau marocain, jus d'orange, boisson chaude au choix, miel, olives noires, amlou, yaourt, hssoua",
        },
        {
          name: "Enfants",
          price: "14 dhs",
          description: "Chocolat chaud, viennoiserie au choix, yaourt, cornflakes, sucette",
        },
      ],
    },
    viennoiseries: {
      title: "NOS VIENNOISERIES",
      icon: "🥐",
      items: [
        { name: "Pain au chocolat", price: "3 dhs" },
        { name: "Chnek au raisin sec", price: "3.5 dhs" },
        { name: "Croissant fourré", price: "3.5 dhs" },
        { name: "Croissant à la crème d'amande", price: "4 dhs" },
        { name: "Mini viennoiserie à la crème", price: "2 dhs", description: "Citron, chocolat, pistache, amande..." },
      ],
    },
    patisseries: {
      title: "NOS PÂTISSERIES",
      icon: "🍰",
      items: [
        { name: "Mille feuille variée", price: "7 dhs" },
        { name: "Cake individuel", price: "7 dhs" },
        { name: "Tarte variée", price: "7 dhs" },
        { name: "Cheesecake", price: "9 dhs" },
        { name: "Mille feuille amandes", price: "9 dhs" },
        { name: "Gâteau individuel", price: "12 dhs" },
      ],
    },
    sales: {
      title: "NOS SALÉS",
      icon: "🥪",
      items: [
        { name: "Chausson varié", price: "7 dhs" },
        { name: "Batboute Farcie", price: "9 dhs" },
        { name: "Crêpe salée", price: "9 dhs" },
        { name: "Hot dog", price: "9 dhs" },
        { name: "Hamburger", price: "9 dhs" },
        { name: "Panini varié", price: "9 dhs" },
        { name: "Briouate", price: "7 dhs" },
        { name: "Mille feuille salée", price: "9 dhs" },
        { name: "Pizza", price: "5 dhs" },
        { name: "Sandwich salé", price: "9 dhs" },
        { name: "Quiche variée", price: "7 dhs" },
      ],
    },
    boissons: {
      title: "NOS BOISSONS CHAUDES",
      icon: "☕",
      items: [
        { name: "Café espresso", price: "09 dhs" },
        { name: "Café nespresso", price: "12 dhs" },
        { name: "Café crème", price: "09 dhs" },
        { name: "Chocolat chaud", price: "09 dhs" },
        { name: "Café séparé", price: "10 dhs" },
        { name: "Café double", price: "10 dhs" },
        { name: "Cappuccino", price: "11 dhs" },
        { name: "Cappuccino chantilly", price: "12 dhs" },
        { name: "Chocolat fondu", price: "12 dhs" },
        { name: "Café royal", price: "11 dhs" },
        { name: "Lait chaud ou froid", price: "08 dhs" },
        { name: "Lait au miel", price: "08 dhs" },
      ],
    },
    thes: {
      title: "NOS THÉS & INFUSIONS",
      icon: "🍵",
      items: [
        { name: "Thé à la menthe", price: "09 dhs" },
        { name: "Thé noir ou vert", price: "08 dhs" },
        { name: "Lait à la verveine", price: "09 dhs" },
        { name: "Thé au citron", price: "08 dhs" },
        { name: "Thé à la pêche", price: "08 dhs" },
      ],
    },
    boissonsfraiches: {
      title: "NOS BOISSONS FRAÎCHES",
      icon: "🥤",
      items: [
        { name: "Coca, fanta...", price: "09 dhs" },
        { name: "Canette", price: "11 dhs" },
        { name: "Orangina", price: "12 dhs" },
        { name: "Eau minérale 1/2", price: "07 dhs" },
        { name: "Eau gazeuse", price: "09 dhs" },
        { name: "Red bull", price: "22 dhs" },
      ],
    },
     glaces: {
      title: "NOS GLACES",
      icon: "🍦",
      items: [
        { name: "Composez votre coupe sur place", price: "", description: "" },
        { name: "Coupe 2 boules", price: "14 dhs" },
        { name: "Coupe 3 boules", price: "18 dhs" },
        { name: "Coupe LA RUCHE", price: "20 dhs", description: "4 boules au choix" },
        { name: "À Emporter", price: "", description: "" },
        { name: "1 boule", price: "05 dhs" },
        { name: "2 boules", price: "10 dhs" },
        { name: "3 boules", price: "14 dhs" },
        { name: "4 boules", price: "17 dhs" },
        { name: "1 Kg de Glace", price: "80 dhs" },
      ],
    },
    milkshakes: {
      title: "MILK SHAKE",
      icon: "🥤",
      items: [{ name: "Crème glacée frappée au lait ", price: "18 dhs", description: "parfum au choix" }],
    },
    orangeshake: {
      title: "ORANGE SHAKE",
      icon: "🍊",
      items: [{ name: "Glace sorbet frappée au jus d'orange ", price: "18 dhs", description: "parfum au choix" }],
    },
    jus: {
      title: "NOS JUS DE FRUITS",
      icon: "🧃",
      items: [
        { name: "Jus d'orange", price: "12 dhs" },
        { name: "Jus de citron", price: "13 dhs" },
        { name: "Jus de carotte", price: "13 dhs" },
        { name: "Jus de banane", price: "14 dhs" },
        { name: "Jus de pomme", price: "14 dhs" },
        { name: "Jus d'avocat", price: "17 dhs" },
        { name: "Jus de pêche", price: "16 dhs" },
        { name: "Jus d'ananas", price: "16 dhs" },
        { name: "Jus de fraise", price: "16 dhs" },
        { name: "Panaché", price: "18 dhs" },
        { name: "Jus LA RUCHE (praliné)", price: "18 dhs" },
        { name: "Jus fruits de bois", price: "20 dhs" },
        { name: "Jus de dragon", price: "23 dhs" },
      ],
    },
    cocktails: {
      title: "NOS COCKTAILS",
      icon: "🍹",
      items: [
        { name: "Punch", price: "16 dhs" },
        { name: "Paradise", price: "16 dhs" },
        { name: "Havana", price: "16 dhs" },
        { name: "Mojito", price: "18 dhs" },
        { name: "LA RUCHE", price: "18 dhs" },
        { name: "Ice thé pêche", price: "14 dhs" },
        { name: "Ice thé citron", price: "14 dhs" },
      ],
    },
    supplements: {
      title: "NOS SUPPLÉMENTS",
      icon: "🍯",
      items: [
        { name: "Beurre ou fromage ou miel", price: "02 dhs" },
        { name: "Olives et huile d'olive", price: "02 dhs" },
        { name: "Amlou", price: "03 dhs" },
      ],
    },
    alacarte: {
      title: "À LA CARTE",
      icon: "🍽️",
      items: [
        { name: "2 Omelettes nature", price: "07 dhs" },
        { name: "2 Omelettes charcuterie", price: "12 dhs" },
        { name: "Tajine khlii aux oeufs", price: "16 dhs" },
        { name: "Toast fromage", price: "07 dhs" },
        { name: "Toast LA RUCHE", price: "13 dhs" , description: "Toast fromage, omelette, filet de dinde fumée" },
        
      ],
    },
  }

  const HexagonIcon = () => (
    <div className="w-8 h-8 flex items-center justify-center">
      <svg width="32" height="32" viewBox="0 0 32 32" className="fill-amber-400">
        <path d="M16 2l8 4.5v9L16 20l-8-4.5v-9L16 2z" />
      </svg>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f59e0b' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

       <header className="bg-pink-800 text-white py-6 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-8 h-8 hexagon-shape bg-white/20 flex items-center justify-center">
              <span className="text-lg">⬡</span>
            </div>
            <img
              src={Logo}
              alt="La Ruche - Café Boulangerie & Pâtisserie"
              className="h-20 md:h-20 object-contain"
            />
            <div className="w-8 h-8 hexagon-shape bg-white/20 flex items-center justify-center">
              <span className="text-lg">⬡</span>
            </div>
          </div>
          
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(menuData).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <div
                className="flex items-center gap-3 mb-4 cursor-pointer hover:bg-white/50 p-2 rounded-lg transition-colors"
                onClick={() => toggleSection(key)}
              >
                <HexagonIcon />
                <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
                <div className="ml-auto">
                  <svg
                    className={`w-5 h-5 text-gray-600 transition-transform ${expandedSections[key] ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {expandedSections[key] && (
                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <Card
                      key={index}
                      className="p-4 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 text-base mb-1">{item.name}</h3>
                          {item.description && (
                            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                          )}
                        </div>
                        {item.price && (
                          <div className="flex-shrink-0">
                            <span className="inline-block bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                              {item.price}
                            </span>
                          </div>
                        )}
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="text-center py-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-6 h-6 hexagon-shape bg-pink-100 flex items-center justify-center">
                <span className="text-pink-600">⬡</span>
              </div>
              <h3 className="text-xl font-bold text-pink-600">La Ruche</h3>
              <div className="w-6 h-6 hexagon-shape bg-pink-100 flex items-center justify-center">
                <span className="text-pink-600">⬡</span>
              </div>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-3">Dans notre boutique pâtisserie</h4>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Venez découvrir une carte riche et variée dans un cadre convivial et chaleureux.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LaRucheMenu
