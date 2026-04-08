function downloadVCard() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:NAMRAZ P.N
ORG:Dune Traders
TITLE:CEO
TEL:+97433221297
EMAIL:namraz.nazer@dunetraders.com
URL:https://www.dunetraders.com
ADR:;;Building No.15, Zone 14, Street 339;Doha;;Qatar
NOTE:P.O. Box: 4413
END:VCARD`;

  const blob = new Blob([vCardData], { type: "text/vcard" });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "contact.vcf";
  a.click();
}
