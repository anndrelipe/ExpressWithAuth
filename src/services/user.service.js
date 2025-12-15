import dotenv from "dotenv";
dotenv.config();

import { getRandomSalt } from "../utils/getRandomSalt.util.js";
import { getHashedPassword } from "../utils/getHashedPassword.util.js";
import { comparePassword } from "../utils/comparePassword.util.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { getPermissionToken } from "../utils/getPermissionToken.js";
import {sendEmail} from "../utils/mailer.js"

export class UserService {
    constructor (userRepository) {
        this.userRepository = userRepository;
    }

    register = async (data) => {
        const { email, password } = data;

        const salt = await getRandomSalt();
        const hashedPassword = await getHashedPassword(password, salt);

        const confToken = getPermissionToken()

        const user = {
            "email": email,
            "password": hashedPassword,
            "salt": salt,
            "roleId": 1
        }

        console.log('🧑 Register com email:', email);

        await sendEmail({
            to: email,
            subject: "Confirm Email",
            html: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Bem-vindo!</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">
  
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding:20px 0;">
    <tr>
      <td align="center">
        
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff; border-radius:8px; overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td align="center" style="background-color:#4f46e5; padding:24px;">
              <h1 style="color:#ffffff; margin:0; font-size:24px;">
                Bem-vindo(a)!
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:32px; color:#333333;">
              <p style="font-size:16px; margin:0 0 16px 0;">
                Olá,
              </p>

              <p style="font-size:16px; margin:0 0 16px 0;">
                É um prazer ter você com a gente! 🎉  
                Sua conta foi criada com sucesso e agora você já pode aproveitar todos os recursos da nossa plataforma.
              </p>

              <p style="font-size:16px; margin:0 0 24px 0;">
                Se precisar de ajuda, estamos sempre por aqui.
              </p>

              <!-- Button -->
              <table cellpadding="0" cellspacing="0" align="center">
                <tr>
                  <td align="center" style="background-color:#4f46e5; border-radius:6px;">
                    <a href="{{LINK_ACESSO}}"
                       style="display:inline-block; padding:12px 24px; color:#ffffff; text-decoration:none; font-size:16px; font-weight:bold;">
                      Acessar minha conta
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size:14px; color:#666666; margin:32px 0 0 0;">
                Abraços,<br>
                <strong>Equipe {{NOME_DA_EMPRESA}}</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="background-color:#f4f6f8; padding:16px; font-size:12px; color:#888888;">
              © {{ANO}} {{NOME_DA_EMPRESA}} · Todos os direitos reservados
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
        `        
        });
        return await this.userRepository.register(user);
    }

    login = async (data) => {
        const { email, password } = data;
        const user = await this.userRepository.getByEmail(email) ?? {};
        const validation = await comparePassword(user.password, user.salt, password) ?? false;

        if (!user || !validation) {
            throw new NotFoundError("Something went wrong... The credentials provided do not match any existing user.");
        }

        const token = await getPermissionToken(user.id, user.status, user.roleId);

        return {
            token: token
        }
    }

    getUser = async (id) => {
        return await this.userRepository.getUser(id);
    }

    updateUser = async (data, id) => {
        return await this.userRepository.updateUser(data, id);
    }

    deleteUser = async (id) => {
        return await this.userRepository.deleteUser(id)
    }

}