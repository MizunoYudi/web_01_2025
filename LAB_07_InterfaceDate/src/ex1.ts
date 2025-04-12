class dateUtils {

    formatarData(date: Date, formato: string):string {
        if(formato === "dd/mm/yyyy")
            return date.toLocaleDateString();
        else if(formato === "yyyy-mm-dd")
            return date.toISOString().slice(0,10);
        else 
            return "invalido";
    }

    diferencaEmDias(date1: Date, date2: Date): Number{
        return date2.getDate() - date1.getDate();
    }

    adicionarDias(data: Date, dias: number): Date {
        data.setDate(data.getDate() + dias);
        return data;
    }

    ehFinalDeSemana(data: Date): string {
        if(data.getDate() === 0 || data.getDate() === 6)
            return `O dia ${dateUtil.formatarData(data, "dd/mm/yyyy")} é final de semana`;
        return `O dia ${dateUtil.formatarData(data, "dd/mm/yyyy")}`;
    }

    converterParaISO(data: Date): string{
        return data.toISOString();
    }
}


const dateUtil = new dateUtils();
const data1 = new Date("2025-04-10");
const data2 = new Date("2025-04-16");
console.log(dateUtil.formatarData(data1, "dd/mm/yyyy"));
console.log(dateUtil.diferencaEmDias(data1, data2));
dateUtil.adicionarDias(data1, 9);
console.log(dateUtil.formatarData(data1, "dd/mm/yyyy"));
console.log(dateUtil.converterParaISO(data1));