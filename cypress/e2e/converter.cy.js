describe(' Teste Converter Arquivo Docx para PDF ', () => {
  it('Converter arquivo', () => {
    cy.fixture('teste.docx', 'base64').then((importacao) => {
      const blob = Cypress.Blob.base64StringToBlob(importacao);
      const formData = new FormData();
      formData.append('file', blob, 'teste.docx.docx');

      cy.request({
        method: 'POST',
        url: `https://api-teste-dados.onrender.com/converter-docx-pdf`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData
       
      }).then((response) => {
        expect(response.status).to.eq(200); 
      });
    });
  });
});
