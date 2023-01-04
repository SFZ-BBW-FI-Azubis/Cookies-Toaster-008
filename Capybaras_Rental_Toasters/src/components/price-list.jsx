import React from "react";

function PriceList() {
  return (
    <>
      <section id="pricing">
        <h2>Kosten für Azubis</h2>
        <p>Um die Toaster Rechte zu erwerben fallen folgende Preise an:</p>
        <p>Angebote</p>
        <table id="price_table">
          <tr>
            <th className="headprices">Dauer</th>
            <th className="headprices">Preis</th>
          </tr>
          <tr>
            <td className="prices">Täglich</td>
            <td className="prices">2€</td>
          </tr>
          <tr>
            <td className="prices">Wöchentlich</td>
            <td className="prices">5€</td>
          </tr>
          <tr>
            <td className="prices">Monatlich</td>
            <td className="prices">15€</td>
          </tr>
          <tr>
            <td className="prices">Jährlich</td>
            <td className="prices">50€</td>
          </tr>
        </table>
        <p>Für Ausbilder ist der Toaster freinutzbar.</p>
      </section>
    </>
  );
}

export default PriceList;
