function main() {

    let priceUnitVATExcl = window.prompt("Entrez le prix unitaire (hors taxe) du livre", 1)
    console.log(priceUnitVATExcl)

    let unitQty = window.prompt("Entrez le nombre d'exemplaires souhaité", 1)
    console.log(unitQty)

    const VAT = 21

    function PriceVATIncl(price, qty) {
        let priceExclVAT = price * qty
        let VATpart = (priceExclVAT * VAT) / 100
        let res = VATpart + priceExclVAT
        return res
    }

    let price = PriceVATIncl(priceUnitVATExcl, unitQty)
    alert("Le prix total s'élève à " + price + " TVA incluse (" + VAT + "%)")

}

main()