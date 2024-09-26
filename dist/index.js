"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importações de dependencias
require("dotenv/config");
const telegraf_1 = require("telegraf");
const http_1 = require("http");
const TOKEN = process.env.BOT_TOKEN;
const PORT = process.env.PORT;
// Instanciar o bot
const bot = new telegraf_1.Telegraf(TOKEN);
// Criando servidor
const server = (0, http_1.createServer)((req, res) => {
    res.end('✅ Bot foi inicializado com sucesso! 🔥 Versão: 1.0.4');
});
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
// Iniciar conversa com o BOT
bot.start(async (ctx) => {
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/fIFDB5k.png"), {
        caption: `🥰 Oieee *${ctx.from.first_name}*!! Me chamo Heloísa 🌠, tenho 22 aninhos e sou bem fogosa 🔥🔥\n\n
      👀 Já que você me chamou, provavelmente está interessados nos meus conteúdos né? Comigo você vai ter:\n\n
      ✅ Conteúdos exclusivos e picantes.\n
      ✅ Melhor custo beneficio.\n
      ✅ *prazer* garantido comigo!\n\n
      😽 Selecione uma das opções abaixo que você está em busca.`,
        reply_markup: {
            inline_keyboard: [
                [{ text: "👀 Grupo VIP", callback_data: "vip" }, { text: "🥰 Grupo Prévias", url: "https://t.me/helloprevias" }],
                [{ text: "📞 Suporte", url: "https://t.me/hellomoon69" }, { text: "😻 Meu Instagram", url: "https://instagram.com/_helomoon" }],
            ]
        }, parse_mode: "Markdown"
    });
});
// Callback para abrir o menu sobre VIP
bot.action("vip", async (ctx) => {
    await ctx.deleteMessage();
    ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/yJ8CO1l.png"), {
        caption: `💕 *${ctx.from.first_name}* você está a um passo de ter acesso aos meus conteúdos *VIP*, aqui você pode escolher qual é o melhor plano para você!\n\n
    ⚠️ *ALERTA* : Estou com uma *PROMOÇÃO* por pouco tempo, todos os meus planos estão com bônus exclusivos! não perca a chance.\n\n
    ❤️‍🔥 *VIP VITALÍCIO* : *R$17* _( R$20 OFF )_\n\n
    🔥 VIP MENSAL : *R$10* _( +2 MESES GRÁTIS )_`,
        reply_markup: {
            inline_keyboard: [
                [{ text: "💎 VITALÍCIO ( R$17 )", callback_data: "pagamentovip" }, { text: "❤️ MENSAL ( R$10 )", callback_data: "pagamentomensal" }],
                [{ text: "◀️", callback_data: "inicio" }]
            ]
        },
        parse_mode: "Markdown"
    });
});
//Callback para voltar ao menu inicial
bot.action("inicio", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/fIFDB5k.png"), {
        caption: `🥰 Oieee *${ctx.from.first_name}*!! Me chamo Heloísa 🌠, tenho 22 aninhos e sou bem fogosa 🔥🔥\n\n
      👀 Já que você me chamou, provavelmente está interessados nos meus conteúdos né? Comigo você vai ter:\n\n
      ✅ Conteúdos exclusivos e picantes.\n
      ✅ Melhor custo beneficio.\n
      ✅ *prazer* garantido comigo!\n\n
      😽 Selecione uma das opções abaixo que você está em busca.`,
        reply_markup: {
            inline_keyboard: [
                [{ text: "👀 Grupo VIP", callback_data: "vip" }, { text: "🥰 Grupo Prévias", url: "https://t.me/helloprevias" }],
                [{ text: "📞 Suporte", url: "https://t.me/hellomoon69" }, { text: "😻 Meu Instagram", url: "https://instagram.com/_helomoon" }],
            ]
        }, parse_mode: "Markdown"
    });
});
// Pre-Checkout Vitalício
bot.action("pagamentovip", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/ja3vCYa.png"), {
        caption: `  😻 Muitooo obrigada ${ctx.from.first_name} por querer fazer parte desse meu mundinho. 🎉\n\n
    ⚠️ *ATENÇÃO* : *APÓS O PAGAMENTO* você deve mandar o comprovante de pagamento para o meu *CONTATO*\n\n_ou aguarde que você receberá o *link* direto no seu email_\n\n*💸 PLANO: VITALÍCIO ( R$17 ) *\n❤️ _BÔNUS: R$20 OFF_`,
        reply_markup: {
            inline_keyboard: [
                [{ text: "💎 IR PARA O PAGAMENTO", url: "https://pay.kiwify.com.br/vaDRvvN" }],
                [{ text: "✅ Enviar comprovante", url: "https://t.me/hellomoon69" }],
                [{ text: "◀️", callback_data: "inicio" }]
            ]
        }, parse_mode: "Markdown"
    });
});
// Pre-Checkout Mensal
bot.action("pagamentomensal", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/ja3vCYa.png"), {
        caption: `  😻 Muitooo obrigada ${ctx.from.first_name} por querer fazer parte desse meu mundinho. 🎉\n\n
    ⚠️ *ATENÇÃO* : *APÓS O PAGAMENTO* você deve mandar o comprovante de pagamento para o meu *CONTATO*\n\n_ou aguarde que você receberá o *link* direto no seu email_\n\n*💸 PLANO: MENSAL ( R$10 )*\n❤️ _BÔNUS: +2 MESES GRÁTIS_`,
        reply_markup: {
            inline_keyboard: [
                [{ text: "💎 IR PARA O PAGAMENTO", url: "https://pay.kiwify.com.br/kSqVvVv" }],
                [{ text: "✅ Enviar comprovante", url: "https://t.me/hellomoon69" }],
                [{ text: "◀️", callback_data: "inicio" }]
            ]
        }, parse_mode: "Markdown"
    });
});
// bot.telegram.getChat("@bondedos").then((chat) => { console.log("ID:", chat.id)})
// bot.telegram.sendMessage("-1002344968859", "Teste")
// Deixar o bot online
console.log("✅ Bot foi inicializado com sucesso!");
console.log("🔥 Versão: 1.0.4");
bot.launch();
// Depuração do Bot
let keepSending = true;
async function loopMensagem() {
    while (keepSending) {
        try {
            let currentDate = new Date();
            await bot.telegram.sendMessage("-1002344968859", `Bot Online! ${currentDate.getHours()}:${currentDate.getMinutes()}`);
            console.log(`[ Depurando ] ${currentDate.getHours()}:${currentDate.getMinutes()}`);
            await delay(5000);
        }
        catch (err) {
            console.log(err);
        }
    }
}
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
// Iniciar Loop
bot.command('iniciarloop', (ctx) => {
    ctx.reply("Iniciando o loop de mensagens...");
    keepSending = true;
    loopMensagem();
});
// Parar loop
bot.command('pararloop', (ctx) => {
    ctx.reply("Parando o loop de mensagens...");
    keepSending = false;
});
// Graceful stop ( sla que porra é essa )
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
