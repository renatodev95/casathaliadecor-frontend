export class GlobalConstants {
  // Message
  public static genericError: string = 'Algo deu errado. Por favor tente novamente mais tarde.';

  public static unauthorized: string = 'Você não tem autorização para acessar esta página.';

  public static productExistError: string = 'Este produto já existe';

  public static productAdded: string = 'Produto adicionado com sucesso.';

  // Regex
  public static nameRegex: string = "^[A-Za-zÀ-ÖØ-öø-ÿÁ-Úá-ú0-9&'()-_,.s]+$";
  public static emailRegex: string =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
  public static contactNumberRegex: string = /^(?:\+55)?(\d{2})(\d{8,9})$/gm
    .source;

  // Variavel
  public static error: string = 'erro';
}
