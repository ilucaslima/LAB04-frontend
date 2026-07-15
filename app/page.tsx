
"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [tentativas, setTentativas] = useState(0);
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const validarEmail = (valor: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(valor);
  };

  const validarSenha = (valor: string) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%&*?+=]).{8,}$/;
    return regex.test(valor);
  };

  const handleLogin = () => {
    setErroEmail("");
    setErroSenha("");

    if (!validarEmail(email)) {
      setErroEmail("E-mail inválido ou não cadastrado");
      return;
    }

    if (!validarSenha(senha)) {
      setErroSenha("Senha inválida: mínimo 8 caracteres, 1 maiúscula e 1 especial");
      return;
    }

    
    const senhaCorreta = "Senha@123"; 
    if (senha !== senhaCorreta) {
      setTentativas(tentativas + 1);
      setErroSenha("Senha incorreta");
      if (tentativas + 1 >= 4) {
        alert("4 tentativas falhas, refaça sua senha!");
        
      }
      return;
    }

    alert("Login realizado com sucesso!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Bem-vindo de volta</h2>

       
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Endereço de E-mail</label>
          <div className="flex items-center border rounded px-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Insira seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 outline-none"
            />
          </div>
          {erroEmail && <p className="text-red-600 font-bold text-sm mt-1">{erroEmail}</p>}
        </div>

       
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Senha</label>
          <div className="flex items-center border rounded px-3">
            <FontAwesomeIcon icon={faLock} className="text-gray-400 mr-2" />
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Insira sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full py-2 outline-none"
            />
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="ml-2 text-gray-500"
            >
              <FontAwesomeIcon icon={mostrarSenha ? faEyeSlash : faEye} />
            </button>
          </div>
          {erroSenha && <p className="text-red-600 font-bold text-sm mt-1">{erroSenha}</p>}
        </div>

        
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded flex items-center justify-center font-semibold hover:bg-blue-700"
        >
          Entrar <span className="ml-2">→</span>
        </button>

        
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OU CONTINUE COM</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        
        <div className="flex space-x-4">
          <button className="flex-1 border rounded py-2 bg-white shadow hover:bg-gray-100">
            Google
          </button>
          <button className="flex-1 border rounded py-2 bg-white shadow hover:bg-gray-100">
            GitHub
          </button>
        </div>

      
        <p className="mt-6 text-center text-sm">
          Não tem uma conta?{" "}
          <a href="/cadastro" className="text-blue-600 font-semibold">
            Cadastre-se
          </a>
        </p>
      </div>

      
      <div className="absolute bottom-4 text-white text-sm space-x-4">
        <a href="/privacidade" className="hover:underline">Política de Privacidade</a>
        <a href="/termos" className="hover:underline">Termos de Serviço</a>
        <a href="/suporte" className="hover:underline">Suporte</a>
      </div>
    </div>
  );
}

/*123*/