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

export function App() {
  return (
    <div className="container mx-auto p-4 mb-10">
      <nav className="flex items-center gap-2 text-sm mb-4 p-5 justify-between border-b">
        <div className="flex items-center gap-2 font-semibold">
          <Ear />
          The Listening
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Idioma" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Português</SelectItem>
            <SelectItem value="dark">Inglês</SelectItem>
            <SelectItem value="system">Espanhol</SelectItem>
          </SelectContent>
        </Select>
      </nav>
      <div className="text-center mt-20 space-y-4">
        <div className="space-y-7">
          <h1 className="font-bold text-5xl">Aprenda Internacionalização</h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Um guia completo para implementar internacionalização em aplicações
            web modernas. Aprenda a traduzir conteúdo, formatar datas, números e
            moedas para diferentes idiomas e regiões.
          </p>
        </div>
        <Button variant="default" className="mt-4 cursor-pointer">
          Aprenda agora!
        </Button>
      </div>

      <div>
        <h3 className="font-semibold text-xl mt-20">Características</h3>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <Card className="flex p-5">
            <div>
              <Languages />
            </div>
            <h4 className="font-semibold">Traduções</h4>
            <p>Gerencie traduções de texto para multiplos idiomas</p>
            <div className="bg-black/10 p-3 rounded-md">Idioma</div>
          </Card>
          <Card className="flex p-5">
            <div>
              <Calendar1 />
            </div>
            <h4 className="font-semibold">Datas</h4>
            <p>Formate datas de acordo com a localidade</p>
            <div className="bg-black/10 p-3 rounded-md mt-auto">
              20 de Outubro de 2025
            </div>
          </Card>
          <Card className="flex p-5">
            <div>
              <Binary />
            </div>
            <h4 className="font-semibold">Número</h4>
            <p>Formate números de acordo com a localidade</p>
            <div className="bg-black/10 p-3 rounded-md mt-auto">
              1.234.567,89
            </div>
          </Card>
          <Card className="flex p-5">
            <div>
              <Coins />
            </div>
            <h4 className="font-semibold">Moeda</h4>
            <p>Formate moedas de acordo com a localidade</p>
            <div className="bg-black/10 p-3 rounded-md mt-auto">
              R$ 1.299,99
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
