export class GlobalConstants {

  // Message
  public static genericError: string = "Algo deu errado. Por favor tente novamente mais tarde."

  public static unauthorized: string = "Você não tem autorização para acessar esta página."

  // Regex
  public static nameRegex: string = "[a-zA-Z0-9 ]*";
  public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";
  public static contactNumberRegex: string = /^(?:\+55)?(\d{2})(\d{8,9})$/gm.source;

  // Variavel
  public static error: string = "erro";
}
