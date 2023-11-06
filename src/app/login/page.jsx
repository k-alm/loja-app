export default function Login() {
  return (
    <div>
        <h1>Identificação do usuário</h1>
        <div>
            <form>
                <fieldset>
                    <legend>Logon de Usuários</legend>
                    <div>
                        <label htmlFor="idEmail">E-mail</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite seu email"/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">Senha</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite sua senha"/>
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}
