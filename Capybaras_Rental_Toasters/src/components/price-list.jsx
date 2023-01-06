import React from "react";

function PriceList() {
  return (
    <>
      <section id="pricing">
        <h2 id="sectionheader">Kosten für Azubis</h2>
        <p className="sectionText">Um die Toaster Rechte zu erwerben fallen folgende Preise an:</p>
        <table id="price_table">
          <tr>
            <th className="headprices">Dauer</th>
            <th className="headprices">Preis</th>
          </tr>
          <tr>
            <td className="sectionText">Täglich</td>
            <td className="sectionText">2€</td>
          </tr>
          <tr>
            <td className="sectionText">Wöchentlich</td>
            <td className="sectionText">5€</td>
          </tr>
          <tr>
            <td className="sectionText">Monatlich</td>
            <td className="sectionText">15€</td>
          </tr>
          <tr>
            <td className="sectionText">Jährlich</td>
            <td className="sectionText">50€</td>
          </tr>
        </table>
        <p className="sectionText">Für Ausbilder ist der Toaster freinutzbar.</p>
      </section>
    </>
  );
}

export default PriceList;