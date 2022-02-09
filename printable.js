// const deviceID = document.getElementById("deviceID").textContent;
//url of registration of the product
//NEED TO REDIFINE THIS
const url = "http://localhost:3000/client/register/";

//THE TEMPALTE CAN BE DONE IN HERE WITHOUT ANY PRINTABLE.EJS
//this is a test

function createPrintable() {
  const printable = document.createElement("div");
  printable.id = "printable";
  printable.classList = "yesPrint bg-white";
  printable.innerHTML = `
    <div class="d-flex flex-row justify-content-center mx-4">
    <div class="d-flex flex-column">
        <div class="text-center align-items-center text-wrap mb-5">
             <img width=200 height=200 src="./logomobileoutfitters.svg">
        <h3>Conserva la pellicola originale e attiva il servizio di "Garanzia a Vita"</h3>
        </div>
        <h3>DETTAGLIO PRESTAZIONE</h3>
        <div class="callout callout-info">
            <p>Nome Cliente: Mario Rossi</p>
            <p>Data di Acquisto: 08/02/2022</p>
            <p>Marca Dispositivo: Apple</p>
            <p>Modello: iPhone 13 Pro Max</p>
            <p>Punto Vendita: Savignano Sul Rubicone</p>
        </div>
        <!-- HERE WE NEED TO PLACE ALL PRODUCTS-->
        <div class="callout callout-warning">
            <p>Copertura Protetta: Front</p>
            <p>Prodotto: Clear-Coat Original</p>
            <p class="fw-bolder">Codice di Attivazione: ASD3-1234 </p>
        </div>
        
        <h3>RICEZIONE</h3>
        <p>E' vietata l'installazione su dispositivi che presentino il display danneggiato. L'operatore dichiara di aver <b>ricevuto</b> dal cliente un dispositivo regolarmente funzionante e in buono stato di conservazione</p>
        <div class="d-flex flex-column">
            <b><em>Firma Operatore</em></b>
            <hr style="border: solid 1px black" class="my-5"/>
            <b><em>Firma Cliente</em></b>
            <hr style="border: solid 1px black" class="my-5"/>
        </div>
        <h3>RESTITUZIONE</h3>
        <p>Il Cliente dichiara che il prodotto è stato <b>restituito</b> dall'operatore regolarmente funzionante e in buono stato di conservazione, non rinvenendo alcun danno al dispositivo.</p>
        <div class="d-flex flex-column">
            <b ><em>Firma Cliente</em></b>
            <hr style="border: solid 1px black" class="my-5"/>
            <b><em>Firma Operatore</em></b>
            <hr style="border: solid 1px black" class="my-5"/>
        </div>
    </div>
</div>



    `;
  //this is for the portal
  //   document.body.append(printable);

  //this is for the test
  document.body.innerHTML = "";
  document.body.append(printable);
  setTimeout(() => {
    window.print();
  }, 200);

  //new QRCode(document.getElementById("qrcode"), url + deviceID);
}
