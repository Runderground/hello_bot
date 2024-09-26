"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Importações de dependencias
require("dotenv/config");
const telegraf_1 = require("telegraf");
const TOKEN = process.env.BOT_TOKEN;
// Instanciar o bot
const bot = new telegraf_1.Telegraf(TOKEN);
// Iniciar conversa com o BOT
bot.start(async (ctx) => {
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/pwafciG.jpeg"), {
        caption: `🥰 Oieee *${ctx.from.first_name}*!! Me chamo Heloísa, tenho 22 aninhos e sou bem fogosa 🔥🔥\n\n
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
    ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/qP2f9TX.jpeg"), {
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
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/pwafciG.jpeg"), {
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
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/S3jxmPs.jpeg"), {
        caption: `  😻 Muitooo obrigada ${ctx.from.first_name} por querer fazer parte desse meu mundinho. 🎉\n\n
    ⚠️ *ATENÇÃO* : *APÓS O PAGAMENTO* você deve mandar o comprovante de pagamento para o meu *CONTATO*\n\n_ou aguarde que você receberá o *link* direto no seu email_\n\n*💸 PLANO: VITALÍCIO ( R$17 ) *\n❤️ _BÔNUS: R$20 OFF_`,
        reply_markup: {
            inline_keyboard: [
                [{ text: "💎 IR PARA O PAGAMENTO", url: "https://pay.kiwify.com.br/kSqVvVv" }],
                [{ text: "✅ Enviar comprovante", url: "https://t.me/hellomoon69" }]
            ]
        }, parse_mode: "Markdown"
    });
});
// Pre-Checkout Mensal
bot.action("pagamentomensal", async (ctx) => {
    await ctx.deleteMessage();
    await ctx.replyWithPhoto(telegraf_1.Input.fromURL("https://i.imgur.com/rpHSZbt.jpeg"), {
        caption: `  😻 Muitooo obrigada ${ctx.from.first_name} por querer fazer parte desse meu mundinho. 🎉\n\n
    ⚠️ *ATENÇÃO* : *APÓS O PAGAMENTO* você deve mandar o comprovante de pagamento para o meu *CONTATO*\n\n_ou aguarde que você receberá o *link* direto no seu email_\n\n*💸 PLANO: MENSAL ( R$10 )*\n❤️ _BÔNUS: +2 MESES GRÁTIS_`,
        reply_markup: {
            inline_keyboard: [
                [{ text: "💎 IR PARA O PAGAMENTO", url: "https://https://pay.kiwify.com.br/vaDRvvN" }],
                [{ text: "✅ Enviar comprovante", url: "https://t.me/hellomoon69" }]
            ]
        }, parse_mode: "Markdown"
    });
});
// Deixar o bot online
bot.launch();
// Graceful stop ( sla que porra é essa )
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
