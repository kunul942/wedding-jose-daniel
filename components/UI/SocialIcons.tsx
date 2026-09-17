interface IconProps {
    className?: string;
}

export const InstagramIcon = ({ className = '' }: IconProps) => (
    <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.4'
        strokeLinecap='round'
        strokeLinejoin='round'
        className={className}
        aria-hidden='true'
    >
        <rect x='3' y='3' width='18' height='18' rx='5' />
        <circle cx='12' cy='12' r='4' />
        <circle cx='17.4' cy='6.6' r='0.9' fill='currentColor' stroke='none' />
    </svg>
);

export const FacebookIcon = ({ className = '' }: IconProps) => (
    <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className={className}
        aria-hidden='true'
    >
        <path d='M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.62A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.46-4 4.14V9.9H7.6V13h2.7v8h3.2Z' />
    </svg>
);

export const WhatsappIcon = ({ className = '' }: IconProps) => (
    <svg
        viewBox='0 0 24 24'
        fill='currentColor'
        className={className}
        aria-hidden='true'
    >
        <path d='M12.04 2.5a9.42 9.42 0 0 0-8.1 14.2L2.5 21.5l4.94-1.38A9.42 9.42 0 1 0 12.04 2.5Zm0 1.7a7.72 7.72 0 1 1-3.94 14.35l-.28-.17-2.93.82.8-2.86-.18-.29A7.72 7.72 0 0 1 12.04 4.2Zm-3.3 3.6c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.68 4.19 3.66 2.07.82 2.49.66 2.94.62.45-.04 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28-.24-.12-1.45-.72-1.67-.8-.22-.08-.39-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.33-.75-1.82-.19-.46-.39-.4-.54-.41h-.45Z' />
    </svg>
);
