# Guia: configurando o Firebase para o BicoAgora

Este guia mostra como deixar o arquivo `bicoagora.html` funcionando de
verdade — com login, cadastro, pedidos e avaliações persistindo num
banco de dados real (Firestore), em vez de ficarem só no navegador.

---

## Passo 1 — Criar o projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Clique em **"Adicionar projeto"**
3. Dê um nome (ex: `bicoagora`)
4. Pode desativar o Google Analytics se não for usar (não é necessário agora)
5. Clique em **"Criar projeto"** e espere finalizar

---

## Passo 2 — Ativar o Authentication (login)

1. No menu lateral, clique em **Build → Authentication**
2. Clique em **"Get started"**
3. Na lista de provedores, clique em **"E-mail/senha"**
4. Ative a primeira opção (E-mail/senha) e clique em **Salvar**

Pronto — isso permite que pessoas criem conta e façam login de verdade.

---

## Passo 3 — Ativar o Firestore (banco de dados)

1. No menu lateral, clique em **Build → Firestore Database**
2. Clique em **"Create database"**
3. Escolha a localização do servidor — para o Brasil, `southamerica-east1` (São Paulo) é a mais rápida
4. Em modo de segurança, escolha **"Iniciar no modo de teste"** por enquanto (vamos ajustar a segurança depois, no Passo 5)
5. Clique em **Criar**

---

## Passo 4 — Pegar as credenciais do projeto (firebaseConfig)

1. No menu lateral, clique no ícone de **engrenagem ⚙️ → Configurações do projeto**
2. Role até **"Seus apps"**
3. Clique no ícone **`</>`** (Web)
4. Dê um nome ao app (ex: `bicoagora-web`) e clique em **Registrar app**
5. Vai aparecer um bloco de código parecido com isto:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "bicoagora-xxxxx.firebaseapp.com",
  projectId: "bicoagora-xxxxx",
  storageBucket: "bicoagora-xxxxx.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abc123def456"
};
```

6. **Copie esse bloco**

---

## Passo 5 — Colar as credenciais no arquivo HTML

1. Abra o arquivo `bicoagora.html` em qualquer editor de texto
2. Procure por este trecho, perto do topo do arquivo (dentro de `<head>`):

```js
// ⚠️ COLE AQUI AS CREDENCIAIS DO SEU PROJETO FIREBASE ⚠️
const firebaseConfig = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  storageBucket: "SEU-PROJETO.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:xxxxxxxxxxxxxxxxxxxx"
};
```

3. **Substitua** esse bloco inteiro pelo que você copiou no Passo 4
4. Salve o arquivo

Pronto! Agora, ao abrir o `bicoagora.html` no navegador, login, cadastro,
pedidos e avaliações vão salvar de verdade no Firestore.

---

## Passo 6 — Ajustar as regras de segurança do Firestore (importante!)

O "modo de teste" do Passo 3 deixa o banco de dados **aberto para qualquer
pessoa ler e escrever**, por 30 dias. Isso é ótimo para testar agora, mas
**precisa ser travado antes de qualquer uso real**, ou qualquer pessoa na
internet pode apagar ou forjar dados do seu app.

1. No Firestore, vá em **Regras** (aba ao lado de "Dados")
2. Substitua o conteúdo por algo como:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Usuários só podem ler/editar o próprio documento
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && request.auth.uid == userId;
    }

    // Qualquer pessoa logada pode ler profissionais (listagem pública)
    // Só o dono do perfil pode editar
    match /pros/{proId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update: if request.auth != null;
    }

    // Pedidos só podem ser lidos/criados por quem está logado
    match /orders/{orderId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update: if request.auth != null;
    }
  }
}
```

3. Clique em **Publicar**

> Essas regras são um ponto de partida razoável, não a versão definitiva
> de produção. Quando o pagamento real entrar, vale revisar de novo com
> mais cuidado (ex: impedir que um profissional edite a nota de outro).

---

## Passo 7 — Testar

1. Abra o `bicoagora.html` no navegador
2. Crie uma conta nova
3. Veja se conseguiu logar
4. Vá no Firebase Console → Authentication → deve aparecer o usuário criado
5. Vá no Firestore → coleção `users` → deve aparecer o documento da conta

Se tudo isso aparecer, está funcionando de verdade. 🎉

---

## O que ainda falta (fora do escopo deste guia)

- **Pagamento real** (Pagar.me / Stripe Connect) — precisa de uma camada de
  backend adicional (Cloud Functions), porque processar pagamento não pode
  rodar só no navegador
- **Notificação WhatsApp real** — também precisa de Cloud Functions + API
  do WhatsApp Business ou Twilio
- **Geolocalização real** — pode ser feito direto no navegador (API de
  geolocalização do próprio browser), é o item mais simples de resolver depois
