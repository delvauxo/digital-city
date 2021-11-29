function main() {

    let priceUnitVATExcl = window.prompt("Entrez le prix unitaire (hors taxe) du livre")
    console.log(priceUnitVATExcl)

    let unitQty = window.prompt("Entrez le nombre d'exemplaires souhaité")
    console.log(unitQty)

    function PriceVATIncl(price, qty) {
        const VAT = 21
        let priceExclVAT = price * qty
        let VATpart = (priceExclVAT * 21) / 100
        let res = VATpart + priceExclVAT
        return res
    }

    let price = PriceVATIncl(priceUnitVATExcl, unitQty)
    console.log(price)

}

main()