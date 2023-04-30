module.exports = class SiteController{
    static index(req,res){
        res.render('index')
    }

    static imc(req,res){
        res.render('imc')        
    }

    static qrCode(req,res){
        res.render('qrCode')
    }

    static async conversor(req,res){
        const url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";
        const response = await fetch(url);
        const json = await response.json();
        const cotacao = json.USDBRL.bid;
    
        res.render('conversor', {cotacao})
    }
}