import nodemailer, { SentMessageInfo } from 'nodemailer';
import path from 'path';
import EmailTemplate from 'email-templates';
import { google } from 'googleapis';

import { config } from '../config';
import { emailInfo } from '../constants/email.Info';

class EmailService {
    templateRenderer = new EmailTemplate({
        views: {
            root: path.join(__dirname, '../', 'email-templates'),
        },
    });

    async sendMail(
        userMail:string,
        template: string,
        context: {
            userName: string;
            surname?: string;
            sumaOrder?: number,
            devicesString?: string,
            devicesJson?: string,
            typeJson?: string,
            brandJson?: string,
            imageJson?: string,
        },
        token?: string,
    ): Promise<SentMessageInfo> {
        const { OAuth2 } = google.auth;
        const myOAuth2Client = new OAuth2(
            config.CLIENT_ID_EMAIL,
            config.CLIENT_SECRET_KEY_EMAIL,
            config.REDIRECT_URL_EMAIL,
        );
        myOAuth2Client.setCredentials({
            refresh_token: config.REFRESH_TOKEN_EMAIL,
        });
        const myAccessToken = await myOAuth2Client.getAccessToken()
            .then((data) => data.res?.data.access_token);
        let subject;
        let templateName;
        if (template === 'WELCOME') {
            subject = emailInfo.WELCOME.subject;
            templateName = emailInfo.WELCOME.templateName;
        }
        if (template === 'FORGET_PASSWORD') {
            subject = emailInfo.FORGET_PASSWORD.subject;
            templateName = emailInfo.FORGET_PASSWORD.templateName;
        }
        if (template === 'ACCOUNT_BLOCKED') {
            subject = emailInfo.ACCOUNT_BLOCKED.subject;
            templateName = emailInfo.ACCOUNT_BLOCKED.templateName;
        }
        if (template === 'ACCOUNT_UNLOCKED') {
            subject = emailInfo.ACCOUNT_UNLOCKED.subject;
            templateName = emailInfo.ACCOUNT_UNLOCKED.templateName;
        }
        if (template === 'ORDER_DEVICE') {
            subject = emailInfo.ORDER_DEVICE.subject;
            templateName = emailInfo.ORDER_DEVICE.templateName;
        }
        Object.assign(context, {
            frontendUrl: config.FRONTEND_URL,
            activateUrl: `${config.FRONTEND_URL}/register/activate/${token}`,
            forgetPasswordUrl: `${config.FRONTEND_URL}/change/password/${token}`,
        });
        const html = await this.templateRenderer.render(String(templateName), context);
        const emailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.NO_REPLY_EMAIL,
                clientId: config.CLIENT_ID_EMAIL,
                clientSecret: config.CLIENT_SECRET_KEY_EMAIL,
                refreshToken: config.REFRESH_TOKEN_EMAIL,
                accessToken: myAccessToken,
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
