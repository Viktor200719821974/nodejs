import nodemailer, { SentMessageInfo } from 'nodemailer';
import path from 'path';
import EmailTemplate from 'email-templates';
import { google } from 'googleapis';
import { emailInfo } from '../constants/email.info';
import { ITokenActivate } from '../interfaces';

class EmailService {
    templateRenderer = new EmailTemplate({
        views: {
            root: path.join(__dirname, '../', 'email-templates'),
        },
    });

    async sendMail(
        userMail: string | undefined,
        template: string,
        context: {
            surname?: string | undefined;
            userName?: string | undefined;
            firstName?: string,
        },
        token?: ITokenActivate,
    ): Promise<SentMessageInfo> {
        const { OAuth2 } = google.auth;
        const myOAuth2Client = new OAuth2(
            process.env.CLIENT_ID_EMAIL,
            process.env.CLIENT_SECRET_KEY_EMAIL,
            process.env.REDIRECT_URL_EMAIL,
        );
        myOAuth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN_EMAIL,
        });
        let subject;
        let templateName;
        if (template === 'WELCOME') {
            subject = emailInfo.WELCOME.subject;
            templateName = emailInfo.WELCOME.templateName;
        }
        if (template === 'ACCOUNT_BLOCKED') {
            subject = emailInfo.ACCOUNT_BLOCKED.subject;
            templateName = emailInfo.ACCOUNT_BLOCKED.templateName;
        }
        if (template === 'ACCOUNT_UNLOCKED') {
            subject = emailInfo.ACCOUNT_UNLOCKED.subject;
            templateName = emailInfo.ACCOUNT_UNLOCKED.templateName;
        }
        Object.assign(context, {
            frontendUrl: process.env.FRONTEND_URL,
            activateUrl: `${process.env.FRONTEND_URL}/register/activate/${token?.activateToken}`,
        });
        const html = await this.templateRenderer.render(String(templateName), context);
        const emailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.NO_REPLY_EMAIL,
                clientId: process.env.CLIENT_ID_EMAIL,
                clientSecret: process.env.CLIENT_SECRET_KEY_EMAIL,
                refreshToken: process.env.REFRESH_TOKEN_EMAIL,
                // accessToken: config.ACCESS_TOKEN_EMAIL,
            },
        });
        return emailTransporter.sendMail({
            to: userMail,
            subject,
            html,
        });
    }
}

export const emailService = new EmailService();
