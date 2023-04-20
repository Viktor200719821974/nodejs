export const constants = {
    EMAIL_REGEXP: /^.+@[^@]+\.[^@]{2,}$/,
    PHONE_REGEXP: /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
    IMAGE_SIZE: 2 * 1024 * 1024,
    IMAGE_MIMETYPES: [
        'image/gif', // .gif
        'image/jpeg', // .jpg, .jpeg
        'image/pjpeg', // .jpeg
        'image/png', // .png
        'image/webp', // .webp
        'image/svg+xml',
    ],
};
