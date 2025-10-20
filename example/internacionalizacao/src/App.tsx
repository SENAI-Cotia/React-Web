import { Binary, Calendar1, Coins, Ear, Languages } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import { formatDate } from "./utils/formatDate";
import { formatCurrency } from "./utils/formatCurrency";
import { formatNumber } from "./utils/formatNumber";

export function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="container mx-auto p-4 mb-10">
      <nav className="flex items-center gap-2 text-sm mb-4 p-5 justify-between border-b">
        <div className="flex items-center gap-2 font-semibold">
          <Ear />
          {t("nav.brand")}
        </div>
        <Select onValueChange={changeLanguage} defaultValue={i18n.language}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("nav.language")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt">{t("languages.pt")}</SelectItem>
            <SelectItem value="en">{t("languages.en")}</SelectItem>
            <SelectItem value="es">{t("languages.es")}</SelectItem>
          </SelectContent>
        </Select>
      </nav>
      <div className="text-center mt-20 space-y-4">
        <div className="space-y-7">
          <h1 className="font-bold text-5xl">{t("hero.title")}</h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            {t("hero.description")}
          </p>
        </div>
        <Button variant="default" className="mt-4 cursor-pointer">
          {t("hero.cta")}
        </Button>
      </div>

      <div>
        <h3 className="font-semibold text-xl mt-20">{t("features.title")}</h3>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <Card className="flex p-5">
            <div>
              <Languages />
            </div>
            <h4 className="font-semibold">
              {t("features.translations.title")}
            </h4>
            <p>{t("features.translations.description")}</p>
            <div className="bg-black/10 p-3 rounded-md">
              {t("features.translations.example")}
            </div>
          </Card>
          <Card className="flex p-5">
            <div>
              <Calendar1 />
            </div>
            <h4 className="font-semibold">{t("features.dates.title")}</h4>
            <p>{t("features.dates.description")}</p>
            <div className="bg-black/10 p-3 rounded-md mt-auto">
              {formatDate(new Date(2025, 9, 20), i18n.language)}
            </div>
          </Card>
          <Card className="flex p-5">
            <div>
              <Binary />
            </div>
            <h4 className="font-semibold">{t("features.numbers.title")}</h4>
            <p>{t("features.numbers.description")}</p>
            <div className="bg-black/10 p-3 rounded-md mt-auto">
              {formatNumber(1234567.89, i18n.language)}
            </div>
          </Card>
          <Card className="flex p-5">
            <div>
              <Coins />
            </div>
            <h4 className="font-semibold">{t("features.currency.title")}</h4>
            <p>{t("features.currency.description")}</p>
            <div className="bg-black/10 p-3 rounded-md mt-auto">
              {formatCurrency(1299.99, i18n.language)}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
