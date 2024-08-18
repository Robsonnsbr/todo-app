export const closeWindow = () => {
  try {
    const element = window.open('about:blank', '_self');
    if (element && element.close) {
      element.close();
    }
  } catch (error) {
    console.error('Erro ao tentar fechar a janela:', error);
  }
};
