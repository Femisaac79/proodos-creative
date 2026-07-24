const WHATSAPP_NUMBER = "2348060575360";
const WHATSAPP_MESSAGE =
  "Hi Proodos Creative, I'd like to talk about a project.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with Proodos Creative on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M16.03 4C9.4 4 4.01 9.39 4.01 16.02c0 2.12.55 4.19 1.6 6.02L4 28l6.13-1.6a11.95 11.95 0 0 0 5.9 1.5h.01c6.63 0 12.02-5.39 12.02-12.02 0-3.21-1.25-6.23-3.52-8.5A11.94 11.94 0 0 0 16.03 4Zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.64.95.97-3.55-.24-.37a9.86 9.86 0 0 1-1.51-5.28c0-5.47 4.46-9.93 9.94-9.93 2.65 0 5.14 1.04 7.02 2.91a9.86 9.86 0 0 1 2.9 7.03c0 5.48-4.46 9.94-9.96 9.94Zm5.46-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z"
        />
      </svg>
    </a>
  );
}
