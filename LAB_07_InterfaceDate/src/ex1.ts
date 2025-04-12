class DateUtils {
    formatarData(date: Date, formato: string): string{
        if(formato === "dd/mm/yyyy")
            return date.toLocaleDateString();
        else if(formato === "yyyy-mm-dd")
            return date.toString();
        else 
            return "invalido";
    }

    diferencaEmDias(date1: Date, date2: Date): Number{
        const diferenca: number = 
        const dias: number =  diferenca * 1000 * 60 * 60 * 24;
}