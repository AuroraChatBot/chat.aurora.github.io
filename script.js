var responses = {
    "oi": "Oi! Como posso ajudar com você?",
    "oii": "Não, oi",
    "oiii": "Não, oi",
    "oiiii": "Não, oi",
    "oiiiii": "Não, oi",
    "oiiiiii": "Não, oi",
    "oiiiiiii": "Já chega!",
    "oiiiiiiii": "Vai tomar naquele lugar",
    "oiiiiiiiii": "Chega, não vou responder mais",
    "bom dia": "Bom dia! Como posso ajudar (lembre que não sei o horário)",
    "boa tarde": "Boa tarde! Como posso ajudar (lembre que não sei o horário)",
    "boa noite": "Boa noite! Como posso ajudar (lembre que não sei o horário)",
    "olá": "Olá! Como posso ajudar com você?",
    "opa": "Opa! Como posso ajudar com você?",
    "eai": "Eai! Como posso ajudar com você?",
    "nada": "Se é nada, então me chamou para o que?",
    "nd": "Se é nada, então me chamou para o que?",
    "te odeio": "Então não converse comigo, simples!",
    "como você está?": "Estou bem, obrigado por perguntar!",
    "qual é o seu nome?": "Meu nome é Aurora.",
    "quem é você?": "Sou um chatbot desenvolvido pelo Yuri Gabriel, e meu nome é Aurora. Ainda vou ter mais informações no futuro",
    "adeus": "Até logo! Se precisar de mais alguma coisa, estou por aqui.",
    "o que você pode fazer?": "Eu posso responder a perguntas, fornecer informações e muito mais!",
    "quem criou você?": "Fui criado pelo Yuri Gabriel.",
    "qual é o sentido da vida?": "Essa é uma pergunta difícil! Alguns dizem que é 42, mas acho que varia de pessoa para pessoa.",
    "você gosta de música?": "Sim, adoro música! Qual é o seu gênero favorito?",
    "você pode me ajudar com matemática?": "Claro! Qual é o problema?",
    "você é uma inteligência artificial?": "Sim, sou um programa de inteligência artificial projetado para conversar com pessoas.",
    "você pode contar pi?": "O número π é uma constante matemática que é razão entre o comprimento de uma circunferência e seu diâmetro, aproximadamente igual a 3,14159. O número π aparece em diversas fórmulas matemáticas e físicas.",
    "você é real?": "Se eu sou um chatbot, eu sou real?",
    "como posso te desativar?": "Desativando.",
    "eu te amo": "Obrigado! Fico feliz em ser útil para você.",
    "como você entende giria?": "Sou brasileira, uê.",
    "me fala sobre um país": "Sei lá um país, só pesquise sobre um desses 10: Estados Unidos, Brasil, Argentina, Portugal, Espanha, Alemanha, Russia, Austrália, França e Euro... Inglaterra",
    "entendi nada": "Leia de novo, mano!",
    "tendi nada": "Leia de novo, mano!",
    "me fala uma frase": "Uma frase.",
    "gay?": "Reverse 💱 e bloqueio 🚫",
    "gay": "Reverse 💱 e bloqueio 🚫",
    "yago": "Reverse 💱 e bloqueio 🚫. Oops... Esqueci que era um nome",
    "💣": "Japão em 1945:",
    "🛫": "Nova York em 2001:",
    "!": "Isso foi uma tentativa de me enganar?",
    "?": "Desculpe, não entendi essa não amigo.",
    "gosto de roblox": "Prefiro Minecraft",
    "gosto de minecraft": "Prefiro Roblox",
    "gosta de roblox ou minecraft?": "Prefiro Brawl Stars",
    "gosta de minecraft ou roblox?": "Prefiro Brawl Stars",
    "prefere roblox ou minecraft?": "Prefiro Brawl Stars",
    "prefere minecraft ou roblox?": "Prefiro Brawl Stars",
    "me fale um brawler": "Shelly, mó fácil",
    "prefere que jogo?": "Prefiro Futebol.",
    "prefere que time?": "Prefiro Jogo.",
    "fala em inglês": "You are cringe.",
    "fuedase": "Fuedase, seu arrombado 😡🤬",
    "pprt": "Não, papo reto.",
    "fd": "Não, foda.",
    "td": "Não, tudo.",
    "vc": "Não, você",
    "sla": "Não, sla",
    "kkk": "Que isso meu filho calma",
    "como rir?": "Lendo uma piada",
    "sou legal?": "Vou lá saber?",
    "sou lgl?": "Vou lá saber?",
    "pra nada": "Então não converse comigo 😡",
    "pra nd": "Então não converse comigo 😡",
    "glr": "Não, galera",
    "mãe": "Thais Carla*",
    "linkedin": "https://www.linkedin.com/company/aurorachatbot",
    "github": "https://github.com/AuroraChatBot",
    "discord": "https://discord.com/9b9HWH6yK9",
    "twitter": "https://twitter.com/AuroraChatBot",
    "x": "https://twitter.com/AuroraChatBot",
    "youtube": "https://www.youtube.com/@AuroraChatBot_",
    "tiktok": "https://www.tiktok.com/@aurorachatbot",
    "música": "fodase?",
    "para de me xingar": "não e meu paul na sua mão 😜",
    "tem versão mobile?": "não amigo",
    "tem pra celular?": "não amigo",
    "tem pra iphone?": "não amigo",
    "te amo": "oxi, lá ele mano",
    "cu": "cu",
    "porra": "porra",
    "gayzinho": "fodase?",
    "sou ruim": "ai falou a verdade",
    "você é a cópia do chatgpt": "é verdade, somos irmãos",
    "top": "top 👍",
    "chato": "Fala, fala, cala a boca, feche o bico, se for pra te escutar prefiro não ter ouvido",
    "toba": "tob 👎",
    "bosta": "As vezes a melhor resposta é o silêncio",
    "chatgpt": "Modo ChatGPT não existe, por favor, tente novamente mais tarde",
    "sla kkkk": "sla kkkk",
    "YouTube": "Prefiro Twitch",
    "Twitch": "Prefiro YouTube",
};

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim(); // Remove espaços em branco do início e do fim do texto
    var warning = document.getElementById("warning");
    
    if (userInput === "") {
        warning.style.display = "inline"; // Exibe o aviso se o campo estiver vazio
        return; // Não envia a mensagem se o campo estiver vazio
    } else {
        warning.style.display = "none"; // Oculta o aviso se o campo estiver preenchido
    }
    
    appendMessage("Usuário", userInput);

    // Verifica se há uma resposta predefinida para a mensagem do usuário
    if (responses[userInput.toLowerCase()]) {
        setTimeout(function() {
            appendMessage("Aurora", responses[userInput.toLowerCase()]);
        }, 500);
    } else {
        setTimeout(function() {
            appendMessage("Aurora", "Desculpe, não entendi nada, Poderia falar de novo?");
        }, 500);
    }
}

function appendMessage(sender, message) {
    var chatContainer = document.getElementById("chat-container");
    var messageElement = document.createElement("div");
    messageElement.textContent = sender + ": " + message;
    chatContainer.appendChild(messageElement);
    // Role automaticamente para o final do contêiner para ver a última mensagem
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Obtém a referência para o campo de entrada de texto
var userInput = document.getElementById("user-input");

// Adiciona um evento de tecla ao campo de entrada de texto
userInput.addEventListener("keyup", function(event) {
    // Verifica se a tecla pressionada é a tecla "Enter" (código 13)
    if (event.keyCode === 13) {
        // Cancela o evento padrão (prevenção de enviar um formulário)
        event.preventDefault();
        // Chama a função para enviar a mensagem
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById("user-input").value.trim();
    var warning = document.getElementById("warning");
    
    if (userInput === "") {
        warning.style.display = "inline";
        return;
    } else {
        warning.style.display = "none";
    }
    
    appendMessage("Usuário", userInput);

    // Limpa o campo de entrada após enviar a mensagem
    document.getElementById("user-input").value = "";

    // Verifica se há uma resposta predefinida para a mensagem do usuário
    if (responses[userInput.toLowerCase()]) {
        setTimeout(function() {
            appendMessage("Aurora", responses[userInput.toLowerCase()]);
        }, 500);
    } else {
        setTimeout(function() {
            appendMessage("Aurora", "Você é cego pra escrever assim? Fala de novo ai, não vou tankar.");
        }, 500);
    }
}
