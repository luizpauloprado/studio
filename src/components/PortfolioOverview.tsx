import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Investment } from "@/lib/types";
import { DollarSign, Wallet } from 'lucide-react';

interface PortfolioOverviewProps {
  data: Investment[];
}

export default function PortfolioOverview({ data }: PortfolioOverviewProps) {
  const totalInvested = data.reduce((sum, item) => sum + item.valor_investido, 0);
  const totalAssets = new Set(data.map(item => `${item.emissor}-${item.subtipo}`)).size;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <>
       <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Investido</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{formatCurrency(totalInvested)}</div>
          <p className="text-xs text-muted-foreground">Soma de todos os aportes</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total de Ativos</CardTitle>
          <Wallet className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalAssets}</div>
          <p className="text-xs text-muted-foreground">Número de ativos únicos</p>
        </CardContent>
      </Card>
    </>
  );
}
